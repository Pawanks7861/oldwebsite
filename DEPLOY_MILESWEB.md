# Rasoyaa — MilesWeb (cPanel / CloudLinux) Deployment

This guide deploys a **pre-built Next.js standalone** artifact produced by GitHub Actions.
Do **not** run `npm run build` on MilesWeb if CloudLinux blocks thread creation (`OS error 11`).

**Verified hosting facts from this project**

- SSH user: `happyk682`
- Application directory: `/home/happyk682/rasoyaa`
- Node.js: v22.x (match the GitHub Actions build: Node 22)
- npm: 10.x

**Must verify in your cPanel** (do not assume): exact Node.js Selector UI labels, Passenger vs custom Node app runner, whether the app root may be a subdirectory, and how `PORT` is injected. Steps below use common MilesWeb / CloudLinux Node.js App patterns.

---

## 1. Download the GitHub Actions artifact

1. Open the GitHub repo → **Actions** → workflow **Build Rasoyaa Production**.
2. Open the latest successful run on `main` (or a manual `workflow_dispatch` run).
3. Download the artifact named `rasoyaa-standalone` (a `.tar.gz` archive).
4. Keep the archive on your local machine or upload it to the server with SFTP/SCP.

Retention: **7 days**. Re-run the workflow if the artifact expired.

---

## 2. Create a release directory (do not wipe production)

On the server (SSH), keep the live app directory intact and deploy into a new release folder:

```bash
# Example layout under the hosting home
mkdir -p /home/happyk682/rasoyaa-releases
RELEASE="release-$(date +%Y%m%d-%H%M%S)"
mkdir -p "/home/happyk682/rasoyaa-releases/$RELEASE"
```

Upload `rasoyaa-standalone.tar.gz` into that release directory, then:

```bash
cd "/home/happyk682/rasoyaa-releases/$RELEASE"
tar -xzf rasoyaa-standalone.tar.gz
# Archive root already contains server.js, .next/, public/, package.json, node_modules/
ls -la
test -f server.js && test -d .next/static && test -d public
```

Optional: keep a `current` symlink for clear rollbacks:

```bash
ln -sfn "/home/happyk682/rasoyaa-releases/$RELEASE" /home/happyk682/rasoyaa-current
```

**Do not** delete `/home/happyk682/rasoyaa` or any production data until the new release is confirmed healthy.

---

## 3. CloudLinux `node_modules` — critical warning

cPanel Node.js Apps often create a **managed `node_modules` symlink** into a CloudLinux virtual environment.

Next.js `output: "standalone"` also ships a **traced `node_modules` directory** inside the artifact. That directory is required for `server.js` to start.

### Safe approach

1. Point the Node.js application **Application root** at the **release directory** that already contains the standalone `node_modules` (or at a carefully prepared app root — see below).
2. **Do not** replace CloudLinux’s managed symlink with a blind recursive copy that destroys the virtualenv layout.
3. Prefer one of these verified-on-your-panel options:

| Option | When to use | Notes |
|--------|-------------|--------|
| A. App root = release dir | Panel allows starting `server.js` from a folder that already has standalone files | Simplest. Confirm in Node.js Selector that the startup file resolves. |
| B. Copy into existing app dir without clobbering symlink | You must keep `/home/happyk682/rasoyaa` as the panel app root | See sync procedure below. |

### Sync into an existing app root (Option B)

```bash
APP_ROOT="/home/happyk682/rasoyaa"
RELEASE_DIR="/home/happyk682/rasoyaa-releases/$RELEASE"

# Backup first
cp -a "$APP_ROOT" "/home/happyk682/rasoyaa-backup-$(date +%Y%m%d-%H%M%S)" || true

# Copy app files EXCEPT node_modules
rsync -a --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.env' \
  --exclude '.env.*' \
  "$RELEASE_DIR/" "$APP_ROOT/"

# Merge standalone node_modules carefully:
# If APP_ROOT/node_modules is a CloudLinux symlink, do NOT `rm -rf` it.
if [ -L "$APP_ROOT/node_modules" ]; then
  echo "Managed symlink detected at $APP_ROOT/node_modules"
  echo "VERIFY in cPanel: either (1) install nothing via panel and start server.js with standalone deps,"
  echo "or (2) copy traced packages into the virtualenv path the symlink points to."
  echo "Target of symlink:"
  readlink -f "$APP_ROOT/node_modules"
  # Example (ONLY after confirming the symlink target is safe to update):
  # rsync -a "$RELEASE_DIR/node_modules/" "$(readlink -f "$APP_ROOT/node_modules")/"
else
  # Plain directory: replace with standalone traced modules
  rm -rf "$APP_ROOT/node_modules"
  cp -a "$RELEASE_DIR/node_modules" "$APP_ROOT/node_modules"
fi
```

**Flag for verification:** exact CloudLinux virtualenv path and whether Passenger resolves modules from the symlink only. Confirm with MilesWeb support if unsure.

---

## 4. cPanel Node.js application settings

In **cPanel → Setup Node.js App** (labels may vary):

1. **Node.js version:** 22.x (same major as the CI build).
2. **Application mode:** Production.
3. **Application root:** the release directory (or `/home/happyk682/rasoyaa` if using Option B).
4. **Application URL / domain:** your Rasoyaa domain (verify in panel).
5. **Application startup file:** `server.js`  
   (standalone entrypoint at the root of the artifact — **not** `npm start` / `node_modules/next/dist/bin/next`).
6. **Passenger / app runner:** if the panel offers “Passenger log” or “restart”, use that after file sync.

### Environment variables

Set in the Node.js App UI (preferred) or a panel-supported env file — **do not commit secrets**:

| Variable | Required | Notes |
|----------|----------|-------|
| `NODE_ENV` | Yes | `production` |
| `PORT` | Usually provided | Use the value injected by cPanel/Passenger. **Do not hardcode** a port in code. Standalone `server.js` already reads `process.env.PORT`. |
| `HOSTNAME` | Optional | Some hosts expect `0.0.0.0`. **Verify** if the app binds only to localhost and the proxy cannot reach it. |

Public site URL in code currently lives in `lib/constants.ts` (`siteConfig.url`). Update that in source and rebuild if the production domain is not already correct — it is not read from a server secret env var today.

---

## 5. Static assets

Standalone deployments need both:

- `.next/static` → served under `/_next/static/...`
- `public/` → served under `/...` (e.g. `/brand/rasoyaa-logo.jpg`)

The GitHub Actions artifact already includes both next to `server.js`. After extract/sync, confirm:

```bash
test -d .next/static
test -f public/brand/rasoyaa-logo.jpg
```

If CSS/JS 404 in the browser while HTML loads, static files were not copied into the running app root.

---

## 6. Restart the application

1. In cPanel Node.js App → **Restart**.
2. Or stop/start the app from the same UI.
3. Avoid killing unrelated Passenger workers for other apps on the account.

After restart, open the site homepage and a static asset URL.

---

## 7. Diagnose HTTP status codes

### 404

- Wrong application root (panel points at source tree without standalone output).
- Startup file is not `server.js`, or an old `app.js`/`server.ts` is configured.
- Domain / subdomain not mapped to this Node app (**verify** document root vs Node app URL mapping in cPanel).
- Missing `.next` or incomplete extract (hidden files omitted when unzipping on Windows — prefer `.tar.gz` as produced by CI).

### 500

- Node version mismatch (built on 22, running on 18/20 without compatible ABI — keep major aligned).
- Missing standalone `node_modules` or broken CloudLinux symlink.
- Check application / Passenger error logs (paths below).

### 503

- App failed to start or crashed on boot.
- Wrong `PORT` / proxy cannot reach the Node process.
- Resource limits (CloudLinux LVE) killing the process — check resource usage in cPanel.

### Log locations (typical — verify on server)

```bash
# Common Passenger / Node app logs under the account
ls -la ~/logs 2>/dev/null
ls -la ~/nodevenv 2>/dev/null
# Panel may also show stderr in the Node.js App interface
```

If log paths differ on MilesWeb, use the paths shown in cPanel for that app.

Quick local-on-server smoke test (uses host-provided port if set):

```bash
cd "$APP_ROOT"   # or the release dir
export NODE_ENV=production
export PORT="${PORT:-3000}"
node server.js
# In another session:
curl -I "http://127.0.0.1:${PORT}/"
curl -I "http://127.0.0.1:${PORT}/brand/rasoyaa-logo.jpg"
```

Stop the manual process before relying on the panel-managed process again.

---

## 8. Rollback

1. Keep previous release directories under `/home/happyk682/rasoyaa-releases/`.
2. Point the Node.js application root (or `rasoyaa-current` symlink) back to the last known-good release.
3. If you used Option B into `/home/happyk682/rasoyaa`, restore from the timestamped backup created before sync.
4. Restart the Node.js app in cPanel.
5. Confirm homepage and static assets again.

Never delete the last known-good release until the new one has been live and verified.

---

## 9. Recommended release checklist

- [ ] GitHub Actions build green on `main`
- [ ] Artifact downloaded and extracted with `.next` present
- [ ] `server.js`, `.next/static`, `public` verified
- [ ] CloudLinux `node_modules` symlink handled safely
- [ ] Startup file = `server.js`, Node 22, `NODE_ENV=production`
- [ ] App restarted via cPanel
- [ ] Homepage returns HTTP 200
- [ ] `/_next/static/...` assets load
- [ ] Previous release retained for rollback

---

## Related files in this repo

- `next.config.ts` — `output: "standalone"`
- `.github/workflows/build-rasoyaa.yml` — CI build + artifact upload
- `package.json` — `build`, `start`, `typecheck` scripts

## Local Windows note

Next.js metadata route compilation can fail if the project path contains an apostrophe
(for example `Pujan's Work`). Prefer a path without `'` for local builds, or rely on
GitHub Actions (Ubuntu runner) for production artifacts.

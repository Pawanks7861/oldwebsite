export function BrowserFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-line bg-card shadow-[0_22px_50px_-28px_rgba(23,33,28,0.55)]">
      <div className="flex items-center gap-2 border-b border-line bg-[#f6f4ee] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#e4cfc3]" />
        <span className="size-2.5 rounded-full bg-[#ead9a4]" />
        <span className="size-2.5 rounded-full bg-[#b7d7c6]" />
        <p className="ml-2 truncate text-xs text-muted">{title}</p>
      </div>
      <div className="bg-card">{children}</div>
    </div>
  );
}

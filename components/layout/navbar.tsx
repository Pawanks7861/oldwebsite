"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { mainNav } from "@/content/navigation";

export function Navbar() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    return pathname === href;
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b ${scrolled ? "border-line bg-card/95 shadow-[0_8px_24px_-20px_rgba(84,36,15,0.45)]" : "border-transparent bg-paper/90"} backdrop-blur-md`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="cursor-pointer rounded-md" aria-label="Rasoyaa home">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`cursor-pointer whitespace-nowrap border-b-2 px-2.5 py-2 text-sm font-medium transition ${active ? "border-gold text-brown" : "border-transparent text-ink hover:text-brown"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/request-demo" className="px-3 text-xs sm:px-5 sm:text-sm">
            Request a Demo
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-card text-ink hover:bg-sand active:bg-sand lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      <noscript>
        <nav aria-label="Pages" className="border-t border-line px-5 py-3 lg:hidden">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="/request-demo">Request a Demo</a>
            </li>
          </ul>
        </nav>
      </noscript>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="nav-dialog"
        aria-label="Mobile"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu();
        }}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line hover:bg-sand active:bg-sand"
            onClick={closeMenu}
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile primary">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`cursor-pointer rounded-xl border-l-2 px-3 py-3 text-base font-medium hover:bg-sand active:bg-sand ${active ? "border-gold bg-gold-soft text-brown" : "border-transparent"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/request-demo" className="mt-3 w-full" onClick={closeMenu}>
            Request a Demo
          </ButtonLink>
        </nav>
      </dialog>
    </header>
  );
}

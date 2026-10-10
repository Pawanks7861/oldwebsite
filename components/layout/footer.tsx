import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brown-dark text-[#f6efe6]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-ivory p-2">
            <Logo size="footer" />
          </div>
          <p className="mt-4 max-w-xs font-serif text-lg text-gold-light">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#e7d7c6]">{siteConfig.summary}</p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <h2 className="border-b border-gold/40 pb-2 text-sm font-semibold text-ivory">{group.title}</h2>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer rounded-sm text-sm text-[#f0e2d2] hover:text-gold-light active:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-gold/30">
        <Container className="flex flex-col gap-2 py-5 text-xs text-[#e7d7c6] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Informational website. Sample screens use fictional events.</p>
        </Container>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Logo } from "@/components/layout/logo";
import { CtaSection } from "@/components/sections/cta-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { siteConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Rasoyaa",
  description:
    "Rasoyaa brings catering operations that often live in spreadsheets, chats and notebooks onto one event record.",
  path: "/about",
});

const principles = [
  { title: "Simple operations", text: "The daily jobs of a catering event stay recognisable." },
  { title: "Connected information", text: "Menu, stock, team and money stay on the same event." },
  { title: "Less duplication", text: "A dish or a quantity does not need to be typed into every sheet." },
  { title: "Clearer responsibility", text: "Tasks and assignments show who is covering the work." },
  { title: "Better cost visibility", text: "Purchases, staff and vehicles contribute to that event’s cost." },
  { title: "Better event control", text: "Status, materials and payments are visible before the event closes." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Built Around the Way Caterers Actually Work"
        description="Rasoyaa exists to hold the work of a catering event together. This page explains that purpose. It does not invent a company history."
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div className="rounded-2xl border border-line bg-card p-6">
          <div className="inline-block rounded-2xl bg-ivory p-3">
            <Logo size="footer" />
          </div>
          <p className="mt-4 font-serif text-2xl text-brown">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-5 text-base leading-7 text-muted">
          <p>
            Catering businesses often manage operations through a mix of spreadsheets, WhatsApp messages, notebooks
            and separate records.
          </p>
          <p>Rasoyaa is designed to bring those operations together.</p>
          <p>
            It is catering operations software for events, menus, inventory, purchases, staff, quotations, payments
            and profitability. It is not a restaurant till and it is not a delivery app. This website explains the
            product. It does not sign you in, and it does not run your events.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ButtonLink href="/features">Explore Features</ButtonLink>
            <ButtonLink href="/request-demo" variant="secondary">
              Request a Demo
            </ButtonLink>
          </div>
        </div>
      </Container>
      <section className="bg-card">
        <Container className="py-14 lg:py-16">
          <h2 className="font-serif text-3xl text-brown">How the product is meant to feel</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <li key={principle.title} className="rounded-2xl border border-line bg-paper p-5">
                <h3 className="font-semibold text-brown">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{principle.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}

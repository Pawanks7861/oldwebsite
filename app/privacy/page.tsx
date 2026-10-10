import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Rasoyaa informational website handles a demo request and contact details.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This policy covers the public Rasoyaa website. It is not a policy for a signed-in product, because this site does not create accounts."
      />
      <Container className="max-w-3xl space-y-5 py-14 text-base leading-7 text-muted lg:py-16">
        <p>
          The demo form checks your name, business, contact number, email, city, event volume and message in your
          browser. Those details are not transmitted and are not stored by this website.
        </p>
        <p>
          Phone, email, hours and location shown on the contact page come from the site configuration. The published
          placeholders should be replaced before you rely on them.
        </p>
        <p>
          If a demo form is later connected to an inbox, this policy should be updated before any details are
          collected, including what is stored, who can read it, and how long it is kept.
        </p>
        <p>
          Questions about this page can be sent to{" "}
          <a className="font-medium text-brown" href={siteConfig.contact.emailHref}>
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </Container>
    </>
  );
}

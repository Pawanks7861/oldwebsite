import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Rasoyaa",
  description:
    "Answers about Rasoyaa for events, menus, inventory, payments, teams, and what this website does with a demo request.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Questions caterers ask first"
        description="Straight answers about what Rasoyaa is for, and what this website does with a demo request."
      />
      <Container className="py-14 lg:py-16">
        <FaqSection />
      </Container>
      <CtaSection />
    </>
  );
}

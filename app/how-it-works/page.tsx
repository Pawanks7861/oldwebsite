import type { Metadata } from "next";
import { JourneySection } from "@/components/sections/journey-section";
import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How Rasoyaa Works | Catering Management Software",
  description: "Follow the Rasoyaa workflow from a customer enquiry through menu, materials, team, payments and a completed event.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How it works"
        title="From Enquiry to Successful Event"
        description="Ten steps, from the first customer note to a finished event you can keep in the portfolio."
      />
      <JourneySection />
      <CtaSection />
    </>
  );
}

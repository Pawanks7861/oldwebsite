import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Features | Rasoyaa Catering Management Software",
  description:
    "Explore Rasoyaa features for events, menus, inventory, purchase planning, staff, quotations, payments and profitability.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Features"
        title="Everything You Need to Run Catering Operations"
        description="Explore how Rasoyaa connects every part of your catering workflow."
      />
      <FeaturesSection />
      <CtaSection />
    </>
  );
}

import { AudiencesPreview } from "@/components/home/audiences-preview";
import { BenefitsSection } from "@/components/home/benefits-section";
import { FinancePreview } from "@/components/home/finance-preview";
import { WorkflowPreview } from "@/components/home/workflow-preview";
import { WorkspacePreview } from "@/components/home/workspace-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <WorkflowPreview />
      <WorkspacePreview />
      <FinancePreview />
      <AudiencesPreview />
      <CtaSection />
    </>
  );
}

import { ArrowRight } from "lucide-react";
import { EventWorkspaceMockup } from "@/components/mockups/event-workspace-mockup";
import { SampleFigure } from "@/components/mockups/sample-figure";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureSplit } from "@/components/ui/feature-split";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkspacePreview() {
  return (
    <FeatureSplit
      compact
      copy={
        <>
          <SectionHeading
            eyebrow="Event workspace"
            title="Your Complete Event Workspace"
            description="Keep your menu, inventory, purchase planning, quotation, payments and team connected to the same event."
          />
          <div className="mt-6">
            <ButtonLink href="/features">
              Explore All Features
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </>
      }
      media={
        <SampleFigure label="Sample event workspace for the fictional Sharma Wedding Reception.">
          <EventWorkspaceMockup />
        </SampleFigure>
      }
    />
  );
}

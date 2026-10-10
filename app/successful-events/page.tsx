import type { Metadata } from "next";
import { EventGallery } from "@/components/portfolio/event-gallery";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Successful Events | Rasoyaa",
  description:
    "A sample portfolio of fictional catering events, with venue, date, Expected Guests and a gallery preview.",
  path: "/successful-events",
});

export default function SuccessfulEventsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Celebrate Every Successful Event"
        description="Finished events can stay as a portfolio: the name, venue, date, Expected Guests and a short story. The examples below are fictional."
      />
      <Container className="py-14 lg:py-16">
        <EventGallery />
      </Container>
      <CtaSection />
    </>
  );
}

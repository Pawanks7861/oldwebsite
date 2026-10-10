import { GalleryMockup } from "@/components/mockups/gallery-mockup";
import { NotificationsMockup } from "@/components/mockups/notifications-mockup";
import { QuotationMockup } from "@/components/mockups/quotation-mockup";
import { SampleFigure } from "@/components/mockups/sample-figure";
import { StaffMockup } from "@/components/mockups/staff-mockup";
import { VehiclesMockup } from "@/components/mockups/vehicles-mockup";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { FeatureSplit } from "@/components/ui/feature-split";
import { SectionHeading } from "@/components/ui/section-heading";

export function StaffFeature() {
  return (
    <FeatureSplit
      id="staff"
      copy={
        <>
          <SectionHeading
            eyebrow="Staff"
            title="Keep Your Team Ready for Every Event"
            description="Several people can be assigned to one event. Each person is assigned once, with tasks such as market purchase, setup, delivery, service and inventory return."
          />
          <CheckList
            items={[
              "Clear responsibility for each task",
              "Fewer missed jobs on event day",
              "Checklists the assigned person can complete",
              "Expense submission without opening the full payment history",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label="Sample staff assignment for the organiser view of Sharma Wedding Reception.">
          <StaffMockup />
        </SampleFigure>
      }
    />
  );
}

export function VehiclesFeature() {
  return (
    <section id="vehicles" className="scroll-mt-28 bg-card">
      <Container className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Vehicles"
          title="Coordinate Event Transportation"
          description="Assign more than one vehicle to an event. Transport is an event resource cost. It is not buried as a charge on a dish."
        />
        <div className="mt-8">
          <VehiclesMockup />
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          Sample vehicles for Sharma Wedding Reception. Resource costs are fictional.
        </p>
      </Container>
    </section>
  );
}

export function QuotationFeature() {
  return (
    <FeatureSplit
      id="quotations"
      reverse
      copy={
        <>
          <SectionHeading
            eyebrow="Quotations"
            title="Professional Quotations. Clear Pricing."
            description="A quotation can bring together food, ingredient purchases, staff, vehicles, extra expenses and custom items. Each generated amount stays tied to the record it came from."
          />
          <CheckList
            items={[
              "Food & Meal Service from the confirmed menu",
              "Ingredients and market purchases",
              "Staff and operations",
              "Transportation and vehicles",
              "Additional expenses",
              "Custom items, clearly marked Custom",
              "A total quotation from those sources",
            ]}
          />
          <p className="mt-6 font-serif text-2xl leading-snug">Know where every amount comes from.</p>
        </>
      }
      media={
        <SampleFigure label="Sample quotation. The total is the sum of the sources shown.">
          <QuotationMockup />
        </SampleFigure>
      }
    />
  );
}

export function GalleryFeature() {
  return (
    <FeatureSplit
      id="successful-events"
      tone="white"
      copy={
        <>
          <SectionHeading
            eyebrow="Successful events"
            title="Turn Successful Events Into Your Portfolio"
            description="When an event is complete, it can remain as a record the business can show: the name, venue, date, Expected Guests, description, photos and videos."
          />
          <CheckList
            items={[
              "A home for finished events, separate from the live calendar",
              "Photos and videos kept with the event story",
              "A portfolio built from work you actually delivered",
            ]}
          />
          <div className="mt-6">
            <ButtonLink href="/successful-events" variant="secondary">
              View the sample portfolio
            </ButtonLink>
          </div>
        </>
      }
      media={
        <SampleFigure label="Sample gallery for the fictional Kapoor Engagement Lunch. These are colour placeholders, not photographs.">
          <GalleryMockup />
        </SampleFigure>
      }
    />
  );
}

export function NotificationsFeature() {
  return (
    <FeatureSplit
      id="notifications"
      reverse
      copy={
        <>
          <SectionHeading
            eyebrow="Notifications"
            title="Stay Ahead of Upcoming Events"
            description="Reminders are written in plain language: which event, what happened, and what still needs attention. An empty purchase plan close to the event date is called out early."
          />
          <CheckList
            items={[
              "Upcoming event reminders",
              "Purchase planning reminders",
              "Staff assignment reminders",
              "Operational updates, such as a purchase just recorded",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label="Sample notifications. Iyer Sangeet is a second fictional event used for the purchase-plan warning.">
          <NotificationsMockup />
        </SampleFigure>
      }
    />
  );
}

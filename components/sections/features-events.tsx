import { ArrowRight } from "lucide-react";
import { MenuCard } from "@/components/mockups/menu-card";
import { SampleFigure } from "@/components/mockups/sample-figure";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/check-list";
import { FeatureSplit } from "@/components/ui/feature-split";
import { SectionHeading } from "@/components/ui/section-heading";
import { sampleBudget, sampleEvent } from "@/content/sample";
import { formatInr } from "@/lib/format";

const flow = [
  { title: "Menu", text: "Stations, dishes, briefs and quantities are confirmed." },
  { title: "Quotation", text: "Food lines start from that confirmed menu." },
  { title: "Purchasing", text: "Anything the store cannot cover becomes a buying plan." },
  { title: "Event execution", text: "The team works from the same event, not a fresh brief." },
];

export function EventFeature() {
  return (
    <FeatureSplit
      id="events"
      tone="white"
      copy={
        <>
          <SectionHeading
            eyebrow="Event management"
            title="Keep Every Event Organised"
            description="Each catering event keeps its own record, so customer, date, venue, guests, budget and status are not spread across chats."
          />
          <p className="mt-4 text-sm leading-6 text-muted">{sampleEvent.description}</p>
          <CheckList
            items={[
              "Customer and event name",
              "Date, venue and Expected Guests",
              "Customer budget and status",
              "A short description of the event",
            ]}
          />
          <div className="mt-6">
            <ButtonLink href="/how-it-works" variant="secondary">
              See How Rasoyaa Works
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </>
      }
      media={
        <SampleFigure label="Sample event fields for Sharma Wedding Reception.">
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brown">{sampleEvent.status}</p>
            <p className="mt-3 font-serif text-3xl leading-tight">{sampleEvent.name}</p>
            <p className="mt-2 text-sm text-muted">{sampleEvent.customer}</p>
            <p className="mt-4 text-sm leading-6">
              {sampleEvent.date}
              <br />
              {sampleEvent.venue}
              <br />
              {sampleEvent.guests} Expected Guests
              <br />
              Customer Budget {formatInr(sampleBudget)}
            </p>
          </div>
        </SampleFigure>
      }
    />
  );
}

export function MenuFeature() {
  return (
    <FeatureSplit
      id="menu"
      reverse
      copy={
        <>
          <SectionHeading
            eyebrow="Menu"
            title="Create Menus Your Clients Will Remember"
            description="Build organised event menus with stations, dishes, descriptions and quantities — then present them professionally to your clients."
          />
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            A Live Punjabi Station can hold Paneer Tikka, with a brief such as “smoky paneer tikka prepared live”, and
            the quantity you plan to serve. The same dish is kept once inside that station.
          </p>
          <CheckList
            items={[
              "Create stations",
              "Add dishes under each station",
              "Write a short dish brief",
              "Set quantities",
              "Build a menu for a specific client and event",
              "Preview the menu",
              "Download a professional menu PDF",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label="Sample menu card. Station, dish, brief and quantity.">
          <MenuCard />
        </SampleFigure>
      }
    />
  );
}

export function MenuFlowFeature() {
  return (
    <section className="bg-card">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="From menu to action"
          title="Turn Your Menu Into Business Data"
          description="Once the menu is confirmed, Rasoyaa carries it into the event, the order lines, the quotation and the purchase requirements. You do not type the same dishes again."
        />
        <ol className="mt-10 grid gap-3 md:grid-cols-4">
          {flow.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-paper p-4">
              <p className="text-xs font-semibold text-brown">0{index + 1}</p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-serif text-2xl leading-snug text-ink sm:text-3xl">
          Enter information once. Use it throughout the event workflow.
        </p>
      </div>
    </section>
  );
}

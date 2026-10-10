import { ArrowRight, Building2, CalendarRange, Heart, Landmark } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const audiences = [
  { title: "Wedding Caterers", text: "Run large guest counts, menus and teams from one wedding record.", icon: Heart },
  { title: "Event Caterers", text: "Keep several events, crews and purchase plans moving together.", icon: CalendarRange },
  { title: "Corporate Caterers", text: "Give recurring clients a clear quotation and payment trail.", icon: Landmark },
  { title: "Catering Companies", text: "Replace scattered sheets with event-wise stock, cost and margin.", icon: Building2 },
];

export function AudiencesPreview() {
  return (
    <section>
      <Container className="py-14 lg:py-16">
        <SectionHeading eyebrow="Who it is for" title="Built for Growing Catering Businesses" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li key={audience.title} className="rounded-2xl border border-line bg-card p-5">
              <span className="grid size-10 place-items-center rounded-full bg-gold-soft text-brown">
                <audience.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brown">{audience.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{audience.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/solutions" variant="secondary">
            View Solutions
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

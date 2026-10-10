import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { title: "Customer", text: "Add the client" },
  { title: "Event", text: "Date, venue, guests" },
  { title: "Menu", text: "Stations and dishes" },
  { title: "Materials", text: "Own stock vs need" },
  { title: "Team", text: "Staff and vehicles" },
  { title: "Payments", text: "Quote, receive, spend" },
  { title: "Successful Event", text: "Close and keep it" },
];

export function WorkflowPreview() {
  return (
    <section className="bg-card">
      <Container className="py-14 lg:py-16">
        <SectionHeading
          eyebrow="How it works"
          title="From Client Enquiry to Successful Event"
          description="Seven stops from the first client note to a finished event."
        />
        <ol className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-stretch">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-1 flex-col items-stretch gap-2 lg:contents">
              <div className="flex-1 rounded-2xl border border-line bg-paper px-3 py-3">
                <p className="text-xs font-semibold text-brown">{index + 1}</p>
                <h3 className="mt-1 text-sm font-semibold text-brown">{step.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{step.text}</p>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight
                  className="mx-auto size-4 shrink-0 rotate-90 text-gold lg:mx-0 lg:rotate-0 lg:self-center"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ButtonLink href="/how-it-works" variant="secondary">
            See How It Works
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

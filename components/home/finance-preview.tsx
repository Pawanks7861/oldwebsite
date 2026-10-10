import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { quotedValue, sampleActualCost, sampleCashSpent, sampleEvent, sampleReceived } from "@/content/sample";
import { formatInr } from "@/lib/format";

const cards = [
  { label: "Quoted Value", value: quotedValue },
  { label: "Total Received", value: sampleReceived },
  { label: "Total Spent", value: sampleCashSpent },
  { label: "Actual Margin", value: sampleReceived - sampleActualCost },
];

export function FinancePreview() {
  return (
    <section className="bg-card">
      <Container className="py-14 lg:py-16">
        <SectionHeading
          eyebrow="Profitability"
          title="Know What Every Event Really Earned"
          description="Rasoyaa helps you understand event-level costs, payments and profitability without relying on scattered records."
        />
        <p className="mt-4 text-sm text-muted">
          Illustrative figures for {sampleEvent.name}. Not a live account.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <li key={card.label} className="rounded-2xl border border-line bg-paper px-4 py-4">
              <h3 className="text-sm text-muted">{card.label}</h3>
              <p className="mt-2 font-serif text-2xl text-brown">{formatInr(card.value)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/features#financials" variant="secondary">
            Explore Financial Features
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

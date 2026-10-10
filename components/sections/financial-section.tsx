import { FinanceBoard } from "@/components/mockups/finance-board";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { sampleEvent } from "@/content/sample";

export function FinancialSection() {
  return (
    <section id="financials" className="scroll-mt-28">
      <Container className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Payments and profitability"
          title="Know What Every Event Earned"
          description="Upcoming events keep the estimate beside the actual spend. A completed event shows the final cost and margin. The figures below are a fictional snapshot of an event that is still ahead."
        />
        <p className="mt-4 text-sm font-medium text-brown">
          Sample event · {sampleEvent.name} · {sampleEvent.status}
        </p>
        <div className="mt-8">
          <FinanceBoard />
        </div>
        <p className="mt-8 max-w-3xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
          Don’t just complete events. Know whether they were profitable.
        </p>
      </Container>
    </section>
  );
}

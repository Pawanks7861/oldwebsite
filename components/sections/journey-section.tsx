import { Container } from "@/components/ui/container";

const steps = [
  {
    title: "Add Customer",
    text: "Capture the customer name and contact details before the event is planned.",
  },
  {
    title: "Create Event",
    text: "Add the event, date, venue, Expected Guests and budget.",
  },
  {
    title: "Build Menu",
    text: "Create stations, dishes and quantities for that event.",
  },
  {
    title: "Check Materials",
    text: "See what you already own and what the event still needs.",
  },
  {
    title: "Plan Purchases",
    text: "Prepare the purchase list, dates and expected quantities.",
  },
  {
    title: "Assign Staff & Vehicles",
    text: "Give people and vehicles a clear job on the event.",
  },
  {
    title: "Prepare Quotation",
    text: "Bring food, purchases, team, vehicles and extras into one quotation.",
  },
  {
    title: "Track Payments & Costs",
    text: "Monitor what the client has paid and what the event has spent.",
  },
  {
    title: "Complete Event",
    text: "Record returns, missing materials and the final cost.",
  },
  {
    title: "Save Successful Event",
    text: "Add photos and videos, and keep the finished event in the portfolio.",
  },
];

export function JourneySection() {
  return (
    <Container className="py-14 lg:py-16">
      <ol className="relative mx-auto max-w-5xl">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gold/70 lg:left-1/2" aria-hidden="true" />
        {steps.map((step, index) => {
          const onRight = index % 2 === 1;
          return (
            <li key={step.title} className="relative pb-8 last:pb-0 lg:grid lg:grid-cols-2 lg:pb-10">
              <span className="absolute top-0 left-4 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-gold bg-ivory text-sm font-semibold text-brown lg:left-1/2">
                {index + 1}
              </span>
              <article
                className={`ml-10 rounded-2xl border border-line bg-card p-5 ${onRight ? "lg:col-start-2 lg:ml-10" : "lg:col-start-1 lg:mr-10 lg:ml-0"}`}
              >
                <h2 className="font-serif text-2xl text-brown">
                  {index + 1}. {step.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">{step.text}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}

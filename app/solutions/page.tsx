import type { Metadata } from "next";
import { Building2, CalendarRange, Heart, Landmark } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Catering Business Solutions | Rasoyaa",
  description:
    "See how Rasoyaa supports wedding caterers, event caterers, corporate caterers and growing catering companies.",
  path: "/solutions",
});

const solutions = [
  {
    title: "Wedding Caterers",
    text: "A wedding often means a large guest count, a long menu and a team that has to arrive ready. Rasoyaa keeps that function on one record.",
    icon: Heart,
    points: [
      "Large Expected Guest counts on the event",
      "Detailed station menus for the reception",
      "Inventory checked before buying more",
      "Team coordination before the wedding day",
      "Purchases linked to that function",
      "Payments visible while the event is still open",
    ],
  },
  {
    title: "Event Caterers",
    text: "When several functions overlap, each one still needs its own menu, crew and buying list.",
    icon: CalendarRange,
    points: [
      "Multiple events in progress together",
      "A workspace for each event",
      "Staff assigned without mixing the jobs",
      "Vehicles booked as event resources",
      "Purchase planning dated before each event",
    ],
  },
  {
    title: "Corporate Caterers",
    text: "Corporate work asks for a repeatable brief, a clear quotation and a payment trail the client can follow.",
    icon: Landmark,
    points: [
      "An organised path from brief to service",
      "Recurring events without rebuilding the file",
      "Quotations that show each source",
      "Payment visibility for the account",
      "A calmer record for professional clients",
    ],
  },
  {
    title: "Growing Catering Companies",
    text: "Growth gets harder when the store, the team and the margin live in different notebooks.",
    icon: Building2,
    points: [
      "A move away from spreadsheets and chat threads",
      "Inventory the business can actually check",
      "Clearer responsibility across the team",
      "Profit and cost seen event by event",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Rasoyaa for Every Type of Catering Business"
        description="The same event record, used by teams who cook for weddings, public events, corporate clients and a growing company."
      />
      {solutions.map((solution, index) => (
        <section key={solution.title} className={index % 2 === 1 ? "bg-card" : undefined}>
          <Container className="grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-16">
            <div>
              <span className="grid size-11 place-items-center rounded-full bg-gold-soft text-brown">
                <solution.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-serif text-3xl text-brown">{solution.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted">{solution.text}</p>
            </div>
            <CheckList items={solution.points} />
          </Container>
        </section>
      ))}
      <CtaSection primaryLabel="See Rasoyaa in Action" />
    </>
  );
}

import { Boxes, CalendarDays, IndianRupee, ShoppingCart, Users, Utensils } from "lucide-react";
import { FeatureCard } from "@/components/marketing/feature-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Event Management",
    description: "Keep customer, date, venue, guests, budget and status together on one event.",
    href: "/features#events",
    icon: CalendarDays,
  },
  {
    title: "Menu Planning",
    description: "Build stations, dishes, descriptions and quantities for each event menu.",
    href: "/features#menu",
    icon: Utensils,
  },
  {
    title: "Inventory",
    description: "See what you own, what an event needs, and what comes back.",
    href: "/features#inventory",
    icon: Boxes,
  },
  {
    title: "Purchase Planning",
    description: "Plan what to buy, when it should arrive, and what it actually cost.",
    href: "/features#purchase-planning",
    icon: ShoppingCart,
  },
  {
    title: "Staff & Vehicles",
    description: "Assign people and vehicles so event day has a clear responsibility.",
    href: "/features#staff",
    icon: Users,
  },
  {
    title: "Payments & Profitability",
    description: "Follow quoted value, payments, spend and margin for each event.",
    href: "/features#financials",
    icon: IndianRupee,
  },
] as const;

export function BenefitsSection() {
  return (
    <section>
      <Container className="py-14 lg:py-16">
        <SectionHeading
          eyebrow="Product"
          title="Everything Your Catering Business Needs"
          description="A short look at the work Rasoyaa brings onto one event. Open a topic for the full explanation."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <FeatureCard {...benefit} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { completedEvent, sampleEvent } from "@/content/sample";

export type PortfolioEvent = {
  slug: string;
  name: string;
  venue: string;
  date: string;
  guests: number;
  description: string;
  tone: string;
  tiles: readonly string[];
};

export const portfolioEvents: readonly PortfolioEvent[] = [
  {
    slug: "sharma-wedding-reception",
    name: sampleEvent.name,
    venue: sampleEvent.venue,
    date: sampleEvent.date,
    guests: sampleEvent.guests,
    description: sampleEvent.description,
    tone: "bg-[#f3e7d4]",
    tiles: ["Lawn entrance", "Live station", "Dessert table", "Guest seating"],
  },
  {
    slug: "patel-family-sangeet",
    name: "Patel Family Sangeet",
    venue: "Amber Courtyard",
    date: "4 September 2026",
    guests: 420,
    description: "Evening sangeet with chaat, a live grill and a late dessert service.",
    tone: "bg-[#efe2cf]",
    tiles: ["Courtyard setup", "Chaat counter", "Grill station", "Stage service"],
  },
  {
    slug: "corporate-annual-dinner",
    name: "Corporate Annual Dinner",
    venue: "Harbour View Hall",
    date: "21 January 2026",
    guests: 180,
    description: "Seated annual dinner with a short reception and plated service.",
    tone: "bg-[#e7efe4]",
    tiles: ["Reception", "Plated service", "Beverage station", "Hall layout"],
  },
  {
    slug: "royal-garden-wedding",
    name: "Royal Garden Wedding",
    venue: "Royal Garden Pavilion",
    date: "12 December 2025",
    guests: 800,
    description: "Garden wedding lunch with multiple stations and a large service team.",
    tone: "bg-[#f6efe6]",
    tiles: ["Garden pavilion", "Station row", "Service pass", "Return area"],
  },
  {
    slug: "kapoor-engagement-lunch",
    name: completedEvent.name,
    venue: completedEvent.venue,
    date: completedEvent.date,
    guests: completedEvent.guests,
    description: completedEvent.description,
    tone: "bg-[#e8efe8]",
    tiles: ["Banquet entrance", "Seated service", "Dessert station", "Family table"],
  },
];

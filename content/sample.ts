import { formatInr } from "@/lib/format";

export const sampleEvent = {
  customer: "Sharma Family",
  name: "Sharma Wedding Reception",
  venue: "Royal Celebration Lawn",
  date: "18 October 2026",
  guests: 650,
  description:
    "Evening wedding reception with live cooking stations, chaat and a dessert service.",
  status: "Upcoming",
} as const;

export const sampleBudget = 850_000;
export const sampleReceived = 400_000;
export const sampleEstimatedCost = 540_000;
export const sampleStaffCost = 55_000;
export const sampleVehicleCost = 18_000;
export const sampleCashSpent = 142_000;
export const sampleActualCost = sampleCashSpent + sampleStaffCost + sampleVehicleCost;

export const sampleRice = {
  name: "Basmati rice",
  unit: "kg",
  required: 100,
  owned: 65,
  toBuy: 35,
  unitPrice: 92,
  purchaseBy: "14 October 2026",
  arrival: "16 October 2026",
  status: "Planned",
} as const;

export const sampleVegetablePurchase = {
  item: "Fresh vegetables",
  quantity: 150,
  unit: "kg",
  unitPrice: 30,
  vendor: "City Mandi",
  date: "10 October 2026",
  status: "Received",
} as const;

export const foodLines = [
  { dish: "Paneer Tikka", station: "Punjabi Station", portions: 400, unitPrice: 600, brief: "Smoky paneer tikka prepared live" },
  { dish: "Aloo Tikki Chaat", station: "Live Chaat", portions: 400, unitPrice: 450, brief: "Crisp potato tikki with chutneys" },
  { dish: "Gulab Jamun", station: "Dessert Station", portions: 400, unitPrice: 550, brief: "Warm dumplings in saffron syrup" },
] as const;

export const foodTotal = foodLines.reduce((sum, line) => sum + line.portions * line.unitPrice, 0);

export const quotationAdjustments = [
  { source: "Ingredients / Market Purchases", amount: 45_000, note: "Purchases linked to the event", custom: false },
  { source: "Staff / Operations", amount: sampleStaffCost, note: "Team resource cost", custom: false },
  { source: "Transportation / Vehicles", amount: sampleVehicleCost, note: "Assigned vehicles", custom: false },
  { source: "Additional Expenses", amount: 12_000, note: "Other event expenses", custom: false },
  { source: "Floral service counter", amount: 20_000, note: "Custom item for this event", custom: true },
] as const;

export const quotedValue =
  foodTotal + quotationAdjustments.reduce((sum, line) => sum + line.amount, 0);

export const sampleVehicles = [
  { name: "Tempo traveller", event: sampleEvent.name, cost: 12_000, status: "Assigned" },
  { name: "Refrigerated van", event: sampleEvent.name, cost: 6_000, status: "Assigned" },
] as const;

export const sampleStaff = [
  { role: "Event Manager", task: "Setup", cost: 20_000, status: "Assigned" },
  { role: "Kitchen team", task: "Service", cost: 25_000, status: "Assigned" },
  { role: "Service team", task: "Inventory Return", cost: 10_000, status: "Assigned" },
] as const;

export const completedEvent = {
  name: "Kapoor Engagement Lunch",
  customer: "Kapoor Family",
  venue: "Palm Court Banquet",
  date: "2 March 2026",
  guests: 280,
  description: "Afternoon engagement lunch with a seated service and a small dessert station.",
} as const;

function assertEqual(actual: number, expected: number, label: string) {
  if (actual !== expected) {
    throw new Error(`${label} must equal ${expected}. Received ${actual}.`);
  }
}

assertEqual(sampleRice.owned + sampleRice.toBuy, sampleRice.required, "Rice quantities");
assertEqual(
  sampleVehicles.reduce((sum, vehicle) => sum + vehicle.cost, 0),
  sampleVehicleCost,
  "Vehicle costs",
);
assertEqual(
  sampleStaff.reduce((sum, person) => sum + person.cost, 0),
  sampleStaffCost,
  "Staff costs",
);
assertEqual(sampleVegetablePurchase.quantity * sampleVegetablePurchase.unitPrice, 4_500, "Vegetable purchase");

export function getSampleFinancials() {
  return [
    { label: "Customer Budget", value: sampleBudget, hint: "What the client can spend" },
    { label: "Quoted Value", value: quotedValue, hint: "Total of every quotation source" },
    { label: "Total Received", value: sampleReceived, hint: "Customer payments recorded" },
    { label: "Total Spent", value: sampleCashSpent, hint: "Money already paid out" },
    {
      label: "Current Balance",
      value: quotedValue - sampleReceived,
      hint: "Quoted value still to collect",
    },
    {
      label: "Remaining Customer Budget",
      value: sampleBudget - quotedValue,
      hint: "Budget left above the quotation",
    },
    {
      label: "Estimated Event Cost",
      value: sampleEstimatedCost,
      hint: "Expected cost before final bills",
    },
    {
      label: "Actual Event Cost",
      value: sampleActualCost,
      hint: "Paid costs plus staff and vehicles",
    },
    {
      label: "Expected Margin",
      value: quotedValue - sampleEstimatedCost,
      hint: "Quoted value minus estimated cost",
    },
    {
      label: "Actual Margin",
      value: sampleReceived - sampleActualCost,
      hint: "Payments received minus actual cost so far",
    },
  ] as const;
}

export const vegetablePurchaseTotal = sampleVegetablePurchase.quantity * sampleVegetablePurchase.unitPrice;

export const purchasePlanningNote = `Market purchase of ${formatInr(vegetablePurchaseTotal)} was recorded for ${sampleEvent.name}.`;

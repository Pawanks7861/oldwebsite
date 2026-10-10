import {
  getSampleFinancials,
  sampleActualCost,
  sampleCashSpent,
  sampleStaffCost,
  sampleVehicleCost,
} from "@/content/sample";
import { formatInr } from "@/lib/format";

export function FinanceBoard() {
  const cards = getSampleFinancials();

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <article key={card.label} className="rounded-2xl border border-line bg-card px-4 py-3">
            <h3 className="text-xs font-medium text-muted">{card.label}</h3>
            <p className="mt-1 font-serif text-2xl text-brown">{formatInr(card.value)}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{card.hint}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 rounded-2xl border border-gold/40 bg-gold-soft px-4 py-3 text-sm leading-6 text-brown">
        Actual event cost {formatInr(sampleActualCost)} = money paid {formatInr(sampleCashSpent)} + staff{" "}
        {formatInr(sampleStaffCost)} + vehicles {formatInr(sampleVehicleCost)}.
      </p>
    </div>
  );
}

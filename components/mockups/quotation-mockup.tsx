import { Logo } from "@/components/layout/logo";
import { BrowserFrame } from "@/components/mockups/browser-frame";
import { foodLines, foodTotal, quotationAdjustments, quotedValue } from "@/content/sample";
import { formatInr } from "@/lib/format";

export function QuotationMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Quotation">
      <div className="space-y-4 bg-ivory p-4">
        <div className="flex items-center justify-between gap-3 border-b border-gold/50 pb-3">
          <Logo size="mark" />
          <p className="text-right text-xs text-muted">
            Sharma Family
            <br />
            Sharma Wedding Reception
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Food & Meal Service</p>
          <ul className="mt-2 divide-y divide-line text-xs">
            {foodLines.map((line) => (
              <li key={line.dish} className="flex items-start justify-between gap-3 py-2">
                <span>
                  <span className="block font-medium text-ink">{line.dish}</span>
                  <span className="text-muted">
                    {line.station} · {line.portions} × {formatInr(line.unitPrice)}
                  </span>
                </span>
                <span className="font-medium">{formatInr(line.portions * line.unitPrice)}</span>
              </li>
            ))}
          </ul>
          <p className="text-right text-xs font-semibold text-ink">Food total {formatInr(foodTotal)}</p>
        </div>
        <ul className="space-y-2 text-xs">
          {quotationAdjustments.map((line) => (
            <li key={line.source} className="flex items-center justify-between gap-3 rounded-lg border-b border-gold/30 bg-white px-3 py-2">
              <span>
                <span className="font-medium text-ink">{line.source}</span>
                {line.custom ? (
                  <span className="ml-2 rounded-full bg-sand px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                    Custom
                  </span>
                ) : null}
              </span>
              <span className="font-medium">{formatInr(line.amount)}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl bg-brown px-4 py-4 text-[#f6f3ea]">
          <p className="text-xs uppercase tracking-[0.14em] text-gold-light">Total Quotation</p>
          <p className="mt-1 font-serif text-3xl text-gold-light">{formatInr(quotedValue)}</p>
          <p className="mt-1 text-xs text-[#f3e6d4]">Every amount above is tied to a source on this event.</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

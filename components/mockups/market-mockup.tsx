import { BrowserFrame } from "@/components/mockups/browser-frame";
import { sampleEvent, sampleVegetablePurchase, vegetablePurchaseTotal } from "@/content/sample";
import { formatInr } from "@/lib/format";

export function MarketMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Market purchases">
      <div className="space-y-3 p-4">
        <div className="rounded-xl border border-line p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">{sampleVegetablePurchase.item}</p>
              <p className="mt-1 text-xs text-muted">{sampleEvent.name}</p>
            </div>
            <span className="rounded-full bg-gold-soft px-2 py-0.5 text-[10px] font-semibold text-brown">
              {sampleVegetablePurchase.status}
            </span>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div>
              <dt className="text-muted">Quantity</dt>
              <dd className="font-medium">
                {sampleVegetablePurchase.quantity} {sampleVegetablePurchase.unit}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Unit price</dt>
              <dd className="font-medium">{formatInr(sampleVegetablePurchase.unitPrice)}</dd>
            </div>
            <div>
              <dt className="text-muted">Vendor</dt>
              <dd className="font-medium">{sampleVegetablePurchase.vendor}</dd>
            </div>
            <div>
              <dt className="text-muted">Total</dt>
              <dd className="font-medium">{formatInr(vegetablePurchaseTotal)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-muted">{sampleVegetablePurchase.date}</p>
        </div>
        <div className="rounded-xl border border-dashed border-line p-3 text-xs text-muted">
          A second vendor can be added for the same event. Each purchase keeps its own quantity, price and total.
        </div>
      </div>
    </BrowserFrame>
  );
}

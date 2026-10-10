import { InventoryMockup } from "@/components/mockups/inventory-mockup";
import { MarketMockup } from "@/components/mockups/market-mockup";
import { PurchaseMockup } from "@/components/mockups/purchase-mockup";
import { SampleFigure } from "@/components/mockups/sample-figure";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { FeatureSplit } from "@/components/ui/feature-split";
import { SectionHeading } from "@/components/ui/section-heading";
import { sampleRice } from "@/content/sample";
import { formatInr } from "@/lib/format";

export function InventoryFeature() {
  return (
    <FeatureSplit
      id="inventory"
      tone="white"
      copy={
        <>
          <SectionHeading
            eyebrow="Inventory"
            title="Know What You Have Before You Buy"
            description="Central inventory is the business stock. Event inventory is that same stock seen through one event: what you planned to send, what left the store, what came back and what is missing."
          />
          <CheckList
            items={[
              "Central stock for the whole business",
              "Consumable materials and returnable items",
              "Allocation to a specific event",
              "Quantities sent, returned and missing",
              "A history of stock movements, so corrections do not erase what happened",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label="Sample central inventory. Sharma Wedding Reception has not returned materials yet.">
          <InventoryMockup />
        </SampleFigure>
      }
    />
  );
}

export function MaterialFeature() {
  return (
    <section id="material-planning" className="scroll-mt-28 bg-brown text-[#f6f3ea]">
      <Container className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Event material planning"
          tone="inverse"
          title="Know Exactly What Each Event Needs"
          description="For the selected event, Rasoyaa compares the menu requirement with what you already hold. The gap is the market purchase."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { label: "Required Material", value: `${sampleRice.required} ${sampleRice.unit}`, note: sampleRice.name },
            { label: "Own Material", value: `${sampleRice.owned} ${sampleRice.unit}`, note: "Available in inventory" },
            { label: "Market Purchase", value: `${sampleRice.toBuy} ${sampleRice.unit}`, note: "Still to buy" },
          ].map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="text-sm text-[#d5e6dc]">{item.label}</h3>
              <p className="mt-3 font-serif text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-gold-light">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
          <div className="h-full rounded-full bg-gold" style={{ width: "65%" }} />
        </div>
        <p className="mt-3 text-sm text-[#f3e6d4]">
          {sampleRice.owned} {sampleRice.unit} already in the store. {sampleRice.toBuy} {sampleRice.unit} still to
          purchase for this event.
        </p>
        <p className="mt-8 font-serif text-3xl leading-snug sm:text-4xl">Buy only what the event actually needs.</p>
      </Container>
    </section>
  );
}

export function PurchaseFeature() {
  return (
    <FeatureSplit
      id="purchase-planning"
      reverse
      copy={
        <>
          <SectionHeading
            eyebrow="Purchase planning"
            title="Plan Purchases Before Event Day"
            description="Purchase planning lives inside the event, not as a separate department. The team can see required quantity, what is already available, what to buy, actual price, dates and status."
          />
          <CheckList
            items={[
              "Required quantity, available quantity and quantity to buy",
              "Purchase-by date and arrival date",
              "Actual price and actual total",
              "A status for each planned purchase",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label={`Sample purchase plan. Rice total is ${sampleRice.toBuy} × ${formatInr(sampleRice.unitPrice)}.`}>
          <PurchaseMockup />
        </SampleFigure>
      }
    />
  );
}

export function MarketFeature() {
  return (
    <FeatureSplit
      id="market-purchases"
      tone="white"
      copy={
        <>
          <SectionHeading
            eyebrow="Market purchases"
            title="Track Every Event Purchase"
            description="Record purchases against the event they belong to. The total is quantity times unit price, and that spend becomes part of the event’s actual cost."
          />
          <CheckList
            items={[
              "More than one vendor on the same event",
              "Quantity, unit price and purchase total",
              "Purchase date and status",
              "Clearer event expenses and a more reliable profit figure",
            ]}
          />
        </>
      }
      media={
        <SampleFigure label="Sample market purchase. Total is 150 kg × ₹30.">
          <MarketMockup />
        </SampleFigure>
      }
    />
  );
}

import { BrowserFrame } from "@/components/mockups/browser-frame";
import { sampleActualCost, sampleEvent, sampleReceived } from "@/content/sample";
import { formatInr } from "@/lib/format";

const cards = [
  { label: "Successful Events", value: "Gallery" },
  { label: "Menu", value: "3 stations" },
  { label: "Upcoming Events", value: "18 Oct" },
  { label: "Payments & Profit/Loss", value: formatInr(sampleReceived - sampleActualCost) },
];

export function DashboardMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Dashboard">
      <div className="grid min-h-[22rem] grid-cols-[4.75rem_1fr] sm:grid-cols-[8.5rem_1fr]">
        <aside className="bg-brown p-2.5 text-ivory sm:p-3">
          <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light">Rasoyaa</p>
          <ul className="mt-3 space-y-1 text-[10px] text-[#f3e6d4] sm:text-xs">
            {["Dashboard", "Menu", "Events", "Inventory", "Staff"].map((item, index) => (
              <li
                key={item}
                className={`rounded-md px-2 py-1.5 ${index === 0 ? "bg-gold font-semibold text-brown" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-3 sm:p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Sample workspace</p>
          <p className="mt-1 font-serif text-xl text-ink">Operations</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {cards.map((card) => (
              <div key={card.label} className="rounded-xl border border-line bg-white px-2.5 py-2">
                <p className="text-[10px] leading-4 text-muted">{card.label}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-line p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold">Upcoming events</p>
              <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-brown">
                {sampleEvent.status}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold">{sampleEvent.name}</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              {sampleEvent.customer} · {sampleEvent.venue}
            </p>
            <p className="mt-1 text-xs text-muted">
              {sampleEvent.date} · {sampleEvent.guests} Expected Guests
            </p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

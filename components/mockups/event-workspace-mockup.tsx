import { BrowserFrame } from "@/components/mockups/browser-frame";
import { foodLines, sampleEvent } from "@/content/sample";

const tabs = ["Menu", "Inventory", "Purchase Planning", "Quotation", "Payments", "Staff"];

export function EventWorkspaceMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Event workspace">
      <div className="p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs text-muted">{sampleEvent.customer}</p>
            <p className="font-serif text-xl">{sampleEvent.name}</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              {sampleEvent.date} · {sampleEvent.venue} · {sampleEvent.guests} Expected Guests
            </p>
          </div>
          <span className="rounded-full bg-gold-soft px-2 py-1 text-[11px] font-semibold text-brown">
            {sampleEvent.status}
          </span>
        </div>
        <div className="mt-4 flex max-w-full gap-1 overflow-x-auto">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-xs ${index === 0 ? "bg-ink text-white" : "bg-[#f3f1ea] text-muted"}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {foodLines.map((line) => (
            <li key={line.dish} className="rounded-xl border border-line px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brown">{line.station}</p>
              <p className="text-sm font-medium">{line.dish}</p>
              <p className="text-xs text-muted">{line.brief}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

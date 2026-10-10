import { completedEvent } from "@/content/sample";

const tiles = [
  { label: "Lawn entrance", tone: "bg-[#d7ebe1]" },
  { label: "Live station", tone: "bg-[#f3e7d4]" },
  { label: "Dessert table", tone: "bg-[#e7efe4]" },
  { label: "Sample video", tone: "bg-[#dfe7ea]", video: true },
];

export function GalleryMockup() {
  return (
    <div className="rounded-2xl border border-line bg-card p-4 shadow-[0_22px_50px_-28px_rgba(23,33,28,0.45)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brown">Completed event</p>
      <h3 className="mt-2 font-serif text-2xl">{completedEvent.name}</h3>
      <p className="mt-1 text-sm text-muted">
        {completedEvent.venue} · {completedEvent.date}
      </p>
      <p className="text-sm text-muted">{completedEvent.guests} Expected Guests</p>
      <p className="mt-3 text-sm leading-6 text-muted">{completedEvent.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {tiles.map((tile) => (
          <div key={tile.label} className={`flex aspect-[4/3] items-end rounded-xl p-3 ${tile.tone}`}>
            <span className="rounded-full bg-white/80 px-2 py-1 text-[11px] font-medium text-ink">
              {tile.video ? "Video preview" : tile.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

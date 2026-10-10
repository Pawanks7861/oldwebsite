import { foodLines, sampleEvent } from "@/content/sample";

export function MenuCard() {
  return (
    <div className="rounded-2xl border border-gold/40 bg-[#fbf6ec] p-6 shadow-[0_22px_50px_-28px_rgba(84,36,15,0.28)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brown">Rasoyaa menu</p>
      <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{sampleEvent.name}</h3>
      <p className="mt-2 text-sm text-muted">
        {sampleEvent.date} · {sampleEvent.venue}
      </p>
      <p className="mt-1 text-sm text-muted">{sampleEvent.guests} Expected Guests</p>
      <div className="mt-6 space-y-5">
        {foodLines.map((line) => (
          <div key={line.dish} className="border-t border-gold/40 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brown">{line.station}</p>
            <div className="mt-1 flex items-baseline justify-between gap-4">
              <p className="font-serif text-xl text-ink">{line.dish}</p>
              <p className="shrink-0 text-xs text-muted">{line.portions} portions</p>
            </div>
            <p className="mt-1 text-sm italic leading-6 text-muted">{line.brief}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

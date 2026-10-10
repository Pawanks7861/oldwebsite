"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioEvents, type PortfolioEvent } from "@/content/portfolio";

export function EventGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = portfolioEvents.find((event) => event.slug === activeSlug) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2">
        {portfolioEvents.map((event) => (
          <li key={event.slug}>
            <article className="brand-card overflow-hidden rounded-2xl border border-line bg-card">
              <button
                type="button"
                className="w-full cursor-pointer text-left"
                onClick={() => setActiveSlug(event.slug)}
              >
                <EventPanel event={event} />
                <div className="p-5">
                  <h2 className="font-serif text-2xl text-brown">{event.name}</h2>
                  <p className="mt-2 text-sm text-muted">
                    {event.venue}
                    <br />
                    {event.date} · {event.guests} Expected Guests
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink">{event.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-brown">View gallery</span>
                </div>
              </button>
            </article>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-labelledby="event-dialog-title"
        onClose={() => setActiveSlug(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActiveSlug(null);
        }}
      >
        {active ? (
          <div className="max-h-[min(100dvh-2rem,44rem)] overflow-y-auto p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brown">Fictional example</p>
                <h2 id="event-dialog-title" className="mt-2 font-serif text-3xl text-brown">
                  {active.name}
                </h2>
              </div>
              <button
                type="button"
                className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line hover:bg-sand"
                onClick={() => setActiveSlug(null)}
              >
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">Close gallery</span>
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              {active.venue}
              <br />
              {active.date} · {active.guests} Expected Guests
            </p>
            <p className="mt-3 text-sm leading-6 text-ink">{active.description}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {active.tiles.map((tile) => (
                <li key={tile} className={`flex aspect-[4/3] items-end rounded-xl p-3 ${active.tone}`}>
                  <span className="rounded-full bg-white/85 px-2 py-1 text-[11px] font-medium text-ink">{tile}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-muted">
              Colour panels stand in for photos and videos. These events are fictional examples, not client work.
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function EventPanel({ event }: { event: PortfolioEvent }) {
  return (
    <div className={`relative flex aspect-[16/10] items-end p-5 ${event.tone}`}>
      <span className="absolute top-4 left-4 h-px w-10 bg-gold" aria-hidden="true" />
      <p className="max-w-xs font-serif text-2xl leading-tight text-brown">{event.venue}</p>
    </div>
  );
}

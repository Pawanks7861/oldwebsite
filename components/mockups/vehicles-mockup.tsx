import { sampleVehicles } from "@/content/sample";
import { formatInr } from "@/lib/format";

export function VehiclesMockup() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {sampleVehicles.map((vehicle) => (
        <article key={vehicle.name} className="rounded-2xl border border-line bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brown">Vehicle</p>
          <h3 className="mt-2 font-serif text-2xl">{vehicle.name}</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Event</dt>
              <dd className="text-right font-medium">{vehicle.event}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Assignment</dt>
              <dd className="font-medium">{vehicle.status}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Resource cost</dt>
              <dd className="font-medium">{formatInr(vehicle.cost)}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

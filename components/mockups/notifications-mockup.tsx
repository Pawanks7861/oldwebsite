import { purchasePlanningNote, sampleEvent } from "@/content/sample";

const notes = [
  purchasePlanningNote,
  "Purchase planning for Iyer Sangeet is still pending. The event is 5 days away.",
  `Service staff were assigned to ${sampleEvent.name}.`,
];

export function NotificationsMockup() {
  return (
    <div className="rounded-2xl border border-line bg-card p-4 shadow-[0_18px_40px_-28px_rgba(23,33,28,0.5)]">
      <p className="text-sm font-semibold">Notifications</p>
      <ul className="mt-3 space-y-2">
        {notes.map((note) => (
          <li key={note} className="rounded-xl bg-[#f7f6f1] px-3 py-3 text-sm leading-6 text-ink">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

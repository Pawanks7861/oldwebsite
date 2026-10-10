import { BrowserFrame } from "@/components/mockups/browser-frame";
import { sampleEvent, sampleStaff } from "@/content/sample";
import { formatInr } from "@/lib/format";

const tasks = ["Market Purchase", "Setup", "Delivery", "Service", "Inventory Return"];

export function StaffMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Staff">
      <div className="space-y-3 p-4">
        <p className="text-sm font-semibold">{sampleEvent.name}</p>
        <ul className="space-y-2">
          {sampleStaff.map((person) => (
            <li key={person.role} className="flex items-center justify-between gap-3 rounded-xl border border-line px-3 py-2">
              <span>
                <span className="block text-sm font-medium">{person.role}</span>
                <span className="text-xs text-muted">{person.task}</span>
              </span>
              <span className="text-right">
                <span className="block text-xs font-semibold">{formatInr(person.cost)}</span>
                <span className="text-[10px] text-muted">{person.status}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {tasks.map((task) => (
            <span key={task} className="rounded-full bg-sand px-2 py-1 text-[10px] font-medium text-ink">
              {task}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

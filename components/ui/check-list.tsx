import { Check } from "lucide-react";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink sm:text-base">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold-soft text-brown">
            <Check className="size-3.5" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

import { BrowserFrame } from "@/components/mockups/browser-frame";
import { sampleRice } from "@/content/sample";

const rows = [
  { name: sampleRice.name, type: "Consumable", unit: sampleRice.unit, available: `${sampleRice.owned} ${sampleRice.unit}`, sent: "0 kg", returned: "0 kg", missing: "0 kg" },
  { name: "Paneer", type: "Consumable", unit: "kg", available: "18 kg", sent: "0 kg", returned: "0 kg", missing: "0 kg" },
  { name: "Cooking oil", type: "Consumable", unit: "L", available: "22 L", sent: "0 L", returned: "0 L", missing: "0 L" },
  { name: "Serving bowls", type: "Returnable", unit: "pcs", available: "140 pcs", sent: "80 pcs", returned: "0 pcs", missing: "0 pcs" },
  { name: "Dinner plates", type: "Returnable", unit: "pcs", available: "900 pcs", sent: "650 pcs", returned: "0 pcs", missing: "0 pcs" },
];

export function InventoryMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Central inventory">
      <div className="max-w-full overflow-x-auto p-3 sm:p-4">
        <table className="w-full min-w-[36rem] text-left text-xs">
          <caption className="mb-3 text-left text-sm font-semibold text-ink">Central stock</caption>
          <thead className="text-[11px] uppercase tracking-wide text-muted">
            <tr>
              {["Item", "Type", "Available", "Sent", "Returned", "Missing"].map((heading) => (
                <th key={heading} className="border-b border-line px-2 py-2 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-line last:border-0">
                <td className="px-2 py-2.5 font-medium text-ink">{row.name}</td>
                <td className="px-2 py-2.5 text-muted">{row.type}</td>
                <td className="px-2 py-2.5">{row.available}</td>
                <td className="px-2 py-2.5">{row.sent}</td>
                <td className="px-2 py-2.5">{row.returned}</td>
                <td className="px-2 py-2.5">{row.missing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

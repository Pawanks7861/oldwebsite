import { BrowserFrame } from "@/components/mockups/browser-frame";
import { sampleRice } from "@/content/sample";
import { formatInr } from "@/lib/format";

const rows = [
  {
    item: sampleRice.name,
    required: `${sampleRice.required} ${sampleRice.unit}`,
    owned: `${sampleRice.owned} ${sampleRice.unit}`,
    buy: `${sampleRice.toBuy} ${sampleRice.unit}`,
    price: formatInr(sampleRice.unitPrice),
    total: formatInr(sampleRice.toBuy * sampleRice.unitPrice),
    by: "14 Oct",
    arrival: "16 Oct",
    status: sampleRice.status,
  },
  {
    item: "Paneer",
    required: "40 kg",
    owned: "18 kg",
    buy: "22 kg",
    price: formatInr(320),
    total: formatInr(22 * 320),
    by: "15 Oct",
    arrival: "17 Oct",
    status: "Planned",
  },
];

export function PurchaseMockup() {
  return (
    <BrowserFrame title="Rasoyaa · Purchase planning">
      <div className="max-w-full overflow-x-auto p-3 sm:p-4">
        <p className="mb-3 text-sm font-semibold">Sharma Wedding Reception</p>
        <table className="w-full min-w-[44rem] text-left text-xs">
          <thead className="text-[11px] uppercase tracking-wide text-muted">
            <tr>
              {["Item", "Required", "Available", "To buy", "Actual price", "Actual total", "Buy by", "Arrival", "Status"].map(
                (heading) => (
                  <th key={heading} className="border-b border-line px-2 py-2 font-semibold">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item} className="border-b border-line last:border-0">
                <td className="px-2 py-2.5 font-medium">{row.item}</td>
                <td className="px-2 py-2.5">{row.required}</td>
                <td className="px-2 py-2.5">{row.owned}</td>
                <td className="px-2 py-2.5">{row.buy}</td>
                <td className="px-2 py-2.5">{row.price}</td>
                <td className="px-2 py-2.5">{row.total}</td>
                <td className="px-2 py-2.5">{row.by}</td>
                <td className="px-2 py-2.5">{row.arrival}</td>
                <td className="px-2 py-2.5">
                  <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-semibold">{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

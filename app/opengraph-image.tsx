import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf8f3",
          padding: 64,
          color: "#54240f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#54240f",
              color: "#fbf8f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              borderBottom: "6px solid #c38b13",
            }}
          >
            R
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Rasoyaa</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 920 }}>Managing Catering, Your Way</div>
          <div style={{ width: 160, height: 4, background: "#c38b13" }} />
          <div style={{ fontSize: 28, color: "#5e534c", maxWidth: 860 }}>
            Events, menus, inventory, purchases, staff, quotations and profitability.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#54240f",
          color: "#fbf8f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 8,
          borderBottom: "4px solid #c38b13",
        }}
      >
        R
      </div>
    ),
    size,
  );
}

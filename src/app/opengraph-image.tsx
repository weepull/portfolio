import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { PALETTE } from "@/lib/palette";

export const runtime = "edge";
export const alt = `${DATA.name} — ${DATA.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: PALETTE.page,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: PALETTE.textPrimary,
            letterSpacing: "-0.04em",
          }}
        >
          {DATA.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: PALETTE.textSecondary,
            lineHeight: 1.35,
            maxWidth: 900,
          }}
        >
          {DATA.description}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 26,
            color: PALETTE.textSecondary,
          }}
        >
          {DATA.github.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}

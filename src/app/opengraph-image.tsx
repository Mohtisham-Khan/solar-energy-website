import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — solar panel installation in Austin, TX`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f2a1e",
          color: "#f8f7f2",
          padding: 72,
          position: "relative",
        }}
      >
        {/* decorative sun */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            backgroundColor: "rgba(221, 255, 85, 0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -60,
            width: 360,
            height: 360,
            borderRadius: 9999,
            backgroundColor: "rgba(37, 211, 102, 0.12)",
            display: "flex",
          }}
        />

        {/* top: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              backgroundColor: "#ddff55",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0f2a1e",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, display: "flex" }}>
            Sunhaven{" "}
            <span style={{ color: "#ddff55", marginLeft: 14 }}>Solar</span>
          </div>
        </div>

        {/* middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Your roof is sitting on free energy.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "rgba(248, 247, 242, 0.75)",
              display: "flex",
            }}
          >
            Rooftop solar &amp; battery storage — Greater Austin, TX
          </div>
        </div>

        {/* bottom: url pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              backgroundColor: "#ddff55",
              color: "#0f2a1e",
              borderRadius: 9999,
              padding: "14px 36px",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
            }}
          >
            sunhavensolar.com
          </div>
          <div
            style={{
              border: "2px solid rgba(248, 247, 242, 0.3)",
              color: "#f8f7f2",
              borderRadius: 9999,
              padding: "12px 34px",
              fontSize: 30,
              fontWeight: 600,
              display: "flex",
            }}
          >
            Free consultation on WhatsApp
          </div>
        </div>
      </div>
    ),
    size,
  );
}

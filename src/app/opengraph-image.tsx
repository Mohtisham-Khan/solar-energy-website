import { ImageResponse } from "next/og";
import { SITE_URL, site } from "@/lib/site";

export const alt = `${site.name} - solar panel installation in Karachi`;
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
          backgroundColor: "#fbf7f0",
          color: "#1e2a23",
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
            backgroundColor: "rgba(228, 178, 60, 0.22)",
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
            backgroundColor: "rgba(31, 92, 70, 0.10)",
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
              backgroundColor: "#e4b23c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1e2a23",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            {site.name.replace(/[^A-Za-z0-9]/g, "").charAt(0) || "#"}
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, display: "flex" }}>
            {site.name}
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
              color: "rgba(30, 42, 35, 0.72)",
              display: "flex",
            }}
          >
            Rooftop solar &amp; battery storage - Karachi, Pakistan
          </div>
        </div>

        {/* bottom: url pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              backgroundColor: "#e4b23c",
              color: "#1e2a23",
              borderRadius: 9999,
              padding: "14px 36px",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
            }}
          >
            {new URL(SITE_URL).host}
          </div>
          <div
            style={{
              border: "2px solid rgba(30, 42, 35, 0.3)",
              color: "#1e2a23",
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

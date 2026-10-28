/* ---------------------------------- icons --------------------------------- */

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

/**
 * Double tick used by the home CTA trust row — two ticks side by side, drawn
 * wide and flat (26x12) to match the reference glyph.
 */
export function CheckDouble({ className = "h-3 w-[26px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 7 5 11 11.5 3.5 14 11 25 1.5" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c-5.4 0-9.8 4.2-9.8 9.4 0 2.5.9 4.8 2.5 6.6l-1.1 4 4.3-1.3c1.6.9 3.4 1.4 5.3 1.4 5.4 0 9.8-4.2 9.8-9.4S17.4 2.2 12 2.2zm0 17.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3 1 1-3.2-.2-.3a7.9 7.9 0 0 1-1.2-4.2c0-4.3 3.7-7.8 8.3-7.8s8.3 3.5 8.3 7.8-3.7 7.8-8.3 7.8z" />
      <path d="M8.7 7.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3s.9 2.7 1 2.9c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.6.7 3.1.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.2-.1-1.1-.4-2-1.3-.8-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5l-.8-1.8z" />
    </svg>
  );
}

export function SunIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* --------------------------- service icons --------------------------- */
/* Solid glyphs matching the reference design's service card tiles. */

export type ServiceIconName = "house" | "panel" | "pump" | "checklist";

export function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "house":
      return (
        <svg {...common}>
          {/* solid house */}
          <path
            fill="currentColor"
            d="M12 2.6c.36 0 .7.17.92.46l7.6 10.05c.24.32.33.73.24 1.13l-1.03 4.6A2.3 2.3 0 0 1 17.46 21H6.54a2.3 2.3 0 0 1-2.27-2.16l-1.03-4.6a1.27 1.27 0 0 1 .24-1.13l7.6-10.05c.22-.29.56-.46.92-.46z"
          />
          {/* transom arch */}
          <path
            d="M9.9 13.4a2.1 2.1 0 0 1 4.2 0"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* doorway */}
          <path
            fill="#fff"
            d="M9.6 19.9v-2.7a2.4 2.4 0 0 1 4.8 0v2.7z"
          />
        </svg>
      );
    case "panel":
      return (
        <svg {...common}>
          {/* sun */}
          <circle cx="12" cy="4.7" r="2.3" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 1.1v1.1M12 7.2v1.1M8.4 4.7H7.3M16.7 4.7h-1.1M9.5 2.2l.8.8M14.5 7.2l.8.8M14.5 2.2l-.8.8M9.5 7.2l-.8.8" />
          </g>
          {/* panel canopy */}
          <path
            fill="currentColor"
            d="M6.6 8.8h10.8a1 1 0 0 1 .95 1.3l-1.55 4.9a1.4 1.4 0 0 1-1.33.96H8.53a1.4 1.4 0 0 1-1.33-.96l-1.55-4.9A1 1 0 0 1 6.6 8.8z"
          />
          <g stroke="#fff" strokeWidth="1.1">
            <path d="M5.6 12.7h12.8M10.5 8.8l-.7 6.46M13.5 8.8l.7 6.46" />
          </g>
          {/* stem + ground */}
          <path fill="currentColor" d="M11.15 15.2h1.7v3.9h-1.7z" />
          <path fill="currentColor" d="M8.4 19.1h7.2v1.6H8.4z" />
        </svg>
      );
    case "pump":
      return (
        <svg {...common}>
          {/* body */}
          <rect x="3.4" y="5.4" width="12.6" height="15.6" rx="1.9" fill="currentColor" />
          {/* screen */}
          <rect x="5.9" y="7.7" width="7.6" height="3.7" rx="1" fill="#fff" />
          {/* bolt */}
          <path
            fill="#fff"
            d="M10.7 12.6 7.4 17.1h2.2l-.5 3.1 3.4-4.7h-2.2l.9-2.9z"
          />
          {/* nozzle arm */}
          <path
            fill="currentColor"
            d="M16 8.6h1.6a2.7 2.7 0 0 1 2.7 2.7v5.5a2 2 0 1 1-4 0v-3.6H16V8.6z"
          />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          {/* document */}
          <path
            fill="currentColor"
            d="M5.2 4.6C5.2 3.3 6.3 2.2 7.6 2.2h6.9c1.3 0 2.4 1.1 2.4 2.4v12.9c0 1.3-1.1 2.4-2.4 2.4H7.6a2.4 2.4 0 0 1-2.4-2.4V4.6z"
          />
          <rect x="7.7" y="5.4" width="6.6" height="1.8" rx=".9" fill="#fff" />
          <rect x="7.7" y="8.9" width="4.4" height="1.8" rx=".9" fill="#fff" />
          {/* gear */}
          <g fill="currentColor">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <rect
                key={a}
                x="16.4"
                y="11.5"
                width="2.2"
                height="2"
                rx=".7"
                transform={`rotate(${a} 17.5 16.5)`}
              />
            ))}
            <circle cx="17.5" cy="16.5" r="4.3" />
          </g>
          <circle cx="17.5" cy="16.5" r="1.7" fill="#fff" />
        </svg>
      );
  }
}

/* ------------------------------ stat outline ------------------------------ */

export function StatIcon({
  name,
  className = "h-6 w-6",
}: {
  name:
    | "bolt"
    | "calendar"
    | "users"
    | "shield"
    | "headset"
    | "percent"
    | "trending-down"
    | "pie";
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4.5 14H10l-.8 8L18.5 10H13l0-8z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8.5" r="3.2" />
          <path d="M3.5 20c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
          <path d="M15.5 5.7a3.2 3.2 0 0 1 0 5.7M17.3 15.3c1.8.7 3 2.4 3.4 4.7" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 5.8v5.4c0 4.2 2.8 7.6 7 9.3 4.2-1.7 7-5.1 7-9.3V5.8L12 3z" />
          <path d="m9 12 2.2 2.2L15.4 10" />
        </svg>
      );
    /* -- states-section glyphs (traced from the reference video) -- */
    case "headset":
      return (
        <svg {...common}>
          {/* headband */}
          <path d="M4.8 13.4v-1.7a7.2 7.2 0 0 1 14.4 0v1.7" />
          {/* ear cups */}
          <rect x="2.6" y="12.6" width="4.4" height="6.8" rx="2.2" />
          <rect x="17" y="12.6" width="4.4" height="6.8" rx="2.2" />
          {/* boom mic */}
          <path d="M21.2 18.2v1.4a2.2 2.2 0 0 1-2.2 2.2h-3.6" />
          <circle cx="13.8" cy="21.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "percent":
      return (
        <svg {...common}>
          <path d="M19 5 5 19" />
          <circle cx="6.6" cy="6.6" r="2.6" />
          <circle cx="17.4" cy="17.4" r="2.6" />
        </svg>
      );
    case "trending-down":
      return (
        <svg {...common}>
          <path d="M22 17 13.5 8.5l-5 5L2 7" />
          <path d="M16 17h6v-6" />
        </svg>
      );
    case "pie":
      return (
        <svg {...common}>
          <g transform="rotate(-90 12 12)">
            {/* lifted slice */}
            <path d="M21 12c.55 0 1-.45.95-.95a10 10 0 0 0-8.95-8.95c-.55-.05-1 .4-.95.95v8a1 1 0 0 0 1 1z" />
            {/* remainder of the pie */}
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          </g>
        </svg>
      );
  }
}

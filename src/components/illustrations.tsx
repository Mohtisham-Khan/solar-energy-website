/**
 * Hand-built SVG illustrations — fully self-contained, no external images.
 * SkyHills: hero background (sky + rolling hills).
 * RoofScene: stylized solar home for About/Contact visuals.
 */

export function SkyHills({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dce9e4" />
          <stop offset="0.6" stopColor="#f0ece1" />
          <stop offset="1" stopColor="#f7f3ea" />
        </linearGradient>
        <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2dbc7" />
          <stop offset="1" stopColor="#bfcbaf" />
        </linearGradient>
        <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a7b99b" />
          <stop offset="1" stopColor="#8da684" />
        </linearGradient>
        <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a1935f" />
          <stop offset="1" stopColor="#857748" />
        </linearGradient>
        <radialGradient id="sunGlow">
          <stop offset="0" stopColor="#f6e6b8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#f6e6b8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="620" fill="url(#skyGrad)" />

      {/* sun */}
      <circle cx="1170" cy="140" r="130" fill="url(#sunGlow)" />
      <circle cx="1170" cy="140" r="56" fill="#e4b23c" />

      {/* clouds */}
      <g fill="#ffffff" opacity="0.92">
        <ellipse cx="250" cy="132" rx="74" ry="26" />
        <ellipse cx="300" cy="112" rx="46" ry="30" />
        <ellipse cx="205" cy="118" rx="40" ry="24" />
      </g>
      <g fill="#ffffff" opacity="0.85">
        <ellipse cx="760" cy="90" rx="58" ry="20" />
        <ellipse cx="800" cy="74" rx="36" ry="23" />
        <ellipse cx="722" cy="80" rx="30" ry="18" />
      </g>
      <g fill="#ffffff" opacity="0.7">
        <ellipse cx="1340" cy="230" rx="66" ry="20" />
        <ellipse cx="1378" cy="214" rx="38" ry="22" />
      </g>

      {/* hills */}
      <path
        d="M0 380 C180 330 360 352 540 382 C760 418 940 342 1140 368 C1280 386 1360 402 1440 394 L1440 620 L0 620 Z"
        fill="url(#hillBack)"
      />
      <path
        d="M0 452 C200 402 420 432 640 462 C880 494 1080 432 1260 450 C1340 458 1400 468 1440 464 L1440 620 L0 620 Z"
        fill="url(#hillMid)"
      />
      <path
        d="M0 532 C240 488 480 522 760 542 C1040 562 1240 522 1440 536 L1440 620 L0 620 Z"
        fill="url(#hillFront)"
      />

      {/* trees on the middle hill */}
      <g fill="#3d5f4e">
        <path d="M418 460 l12 -26 12 26 z" />
        <rect x="428" y="458" width="4" height="10" fill="#5b4a33" />
        <path d="M1035 452 l11 -24 11 24 z" />
        <rect x="1044" y="450" width="4" height="10" fill="#5b4a33" />
        <path d="M1102 462 l9 -20 9 20 z" />
        <rect x="1109" y="460" width="4" height="9" fill="#5b4a33" />
      </g>

      {/* little solar house on the back hill */}
      <g>
        <rect x="120" y="336" width="58" height="36" rx="3" fill="#fbf7f0" />
        <path d="M112 338 L149 306 L186 338 Z" fill="#24352c" />
        <g transform="rotate(-18 150 326)">
          <rect x="130" y="317" width="42" height="17" rx="2" fill="#1c3f37" />
          <path
            d="M144 317v17M158 317v17M130 325.5h42"
            stroke="#7d9686"
            strokeWidth="1.2"
          />
        </g>
        <rect x="140" y="346" width="12" height="26" fill="#e6ddcd" />
      </g>

      {/* birds */}
      <g stroke="#24352c" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6">
        <path d="M600 190 q8 -8 16 0 q8 -8 16 0" />
        <path d="M660 220 q6 -6 12 0 q6 -6 12 0" />
      </g>
    </svg>
  );
}

export function RoofScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="rsSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dce9e4" />
          <stop offset="1" stopColor="#f7f3ea" />
        </linearGradient>
        <linearGradient id="rsGrass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a1935f" />
          <stop offset="1" stopColor="#857748" />
        </linearGradient>
        <linearGradient id="rsPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#225146" />
          <stop offset="1" stopColor="#16392a" />
        </linearGradient>
      </defs>

      <rect width="640" height="480" fill="url(#rsSky)" />

      {/* sun */}
      <circle cx="530" cy="92" r="44" fill="#e4b23c" />
      <g stroke="#c99a2e" strokeWidth="6" strokeLinecap="round">
        <path d="M530 24v-14M530 174v-14M462 92h-14M612 92h-14M482 44l-10-10M578 44l10-10M482 140l-10 10M578 140l10 10" />
      </g>

      {/* clouds */}
      <g fill="#ffffff" opacity="0.9">
        <ellipse cx="130" cy="96" rx="56" ry="20" />
        <ellipse cx="166" cy="82" rx="34" ry="22" />
      </g>

      {/* ground */}
      <path
        d="M0 356 C140 330 340 342 640 358 L640 480 L0 480 Z"
        fill="url(#rsGrass)"
      />

      {/* house */}
      <g>
        <rect x="236" y="248" width="196" height="128" rx="6" fill="#fbf7f0" stroke="#1e2a23" strokeWidth="3" />
        <path d="M214 252 L334 158 L454 252 Z" fill="#24352c" />
        {/* roof solar panel, aligned with the left slope */}
        <g transform="rotate(-37.5 290 216)">
          <rect x="248" y="200" width="86" height="32" rx="3" fill="url(#rsPanel)" />
          <path d="M269.5 200v32M291 200v32M312.5 200v32M248 216h86" stroke="#7d9686" strokeWidth="1.6" />
        </g>
        {/* door + windows */}
        <rect x="318" y="300" width="34" height="76" rx="4" fill="#e6ddcd" stroke="#1e2a23" strokeWidth="2.5" />
        <rect x="262" y="278" width="36" height="30" rx="4" fill="#dce9e4" stroke="#1e2a23" strokeWidth="2.5" />
        <rect x="374" y="278" width="36" height="30" rx="4" fill="#dce9e4" stroke="#1e2a23" strokeWidth="2.5" />
      </g>

      {/* ground-mount panel array in the yard */}
      <g>
        <g transform="rotate(-14 132 356)">
          <rect x="70" y="326" width="124" height="60" rx="5" fill="url(#rsPanel)" />
          <path d="M101 326v60M132 326v60M163 326v60M70 346h124M70 366h124" stroke="#7d9686" strokeWidth="1.6" />
        </g>
        <path d="M96 404v22M176 392v30" stroke="#24352c" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* tree */}
      <g>
        <rect x="546" y="330" width="12" height="44" rx="3" fill="#5b4a33" />
        <circle cx="552" cy="304" r="38" fill="#3d5f4e" />
        <circle cx="524" cy="322" r="24" fill="#4a6b55" />
        <circle cx="580" cy="322" r="24" fill="#4a6b55" />
      </g>
    </svg>
  );
}

/* ------------------------- project / service art ------------------------- */

type ArtVariant = "roof" | "building" | "ground";

/** Full-bleed scene art for project cards and service imagery. */
export function ProjectArt({
  variant,
  className = "",
}: {
  variant: ArtVariant;
  className?: string;
}) {
  if (variant === "roof") return <RoofScene className={className} />;

  const id = variant;
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={variant === "building" ? "#dce9e4" : "#e3ede8"} />
          <stop offset="1" stopColor="#f7f3ea" />
        </linearGradient>
        <linearGradient id={`${id}-panel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#225146" />
          <stop offset="1" stopColor="#16392a" />
        </linearGradient>
        <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a1935f" />
          <stop offset="1" stopColor="#857748" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#${id}-sky)`} />
      <circle cx="540" cy="80" r="40" fill="#e4b23c" />

      {variant === "building" ? (
        <g>
          {/* warehouse */}
          <rect x="90" y="170" width="460" height="160" rx="6" fill="#fbf7f0" stroke="#1e2a23" strokeWidth="3" />
          <rect x="76" y="152" width="488" height="30" rx="6" fill="#1e2a23" />
          {/* panel rows on the flat roof */}
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(${120 + row * 150} 112)`}>
              <path d="M0 40 L14 8 L112 8 L98 40 Z" fill={`url(#${id}-panel)`} />
              <path d="M28 8 L18 40 M56 8 L46 40 M84 8 L74 40 M6 26 L104 26" stroke="#7d9686" strokeWidth="1.6" />
            </g>
          ))}
          {/* loading bay */}
          <rect x="140" y="240" width="70" height="90" rx="4" fill="#e6ddcd" stroke="#1e2a23" strokeWidth="2.5" />
          <rect x="250" y="240" width="70" height="90" rx="4" fill="#e6ddcd" stroke="#1e2a23" strokeWidth="2.5" />
          <rect x="420" y="250" width="80" height="80" rx="4" fill="#dce9e4" stroke="#1e2a23" strokeWidth="2.5" />
          {/* ground */}
          <rect x="0" y="330" width="640" height="70" fill="#d9d2c4" />
          <rect x="0" y="330" width="640" height="6" fill="#c4bba9" />
        </g>
      ) : (
        <g>
          {/* rolling ground */}
          <path d="M0 250 C160 226 360 240 640 254 L640 400 L0 400 Z" fill={`url(#${id}-ground)`} />
          {/* ground-mount array rows */}
          {[0, 1].map((row) => (
            <g key={row} transform={`translate(${60 + row * 300} ${190 + row * 60})`}>
              <g transform="rotate(-14 110 55)">
                <rect x="30" y="26" width="170" height="64" rx="5" fill={`url(#${id}-panel)`} />
                <path d="M72 26v64M115 26v64M158 26v64M30 48h170" stroke="#7d9686" strokeWidth="1.8" />
              </g>
              <path d="M56 110v26M186 100v34" stroke="#24352c" strokeWidth="7" strokeLinecap="round" />
            </g>
          ))}
          {/* battery cabinet */}
          <g>
            <rect x="510" y="242" width="70" height="96" rx="8" fill="#fbf7f0" stroke="#1e2a23" strokeWidth="3" />
            <rect x="524" y="258" width="42" height="26" rx="4" fill="#1f5c46" />
            <path d="M545 262l-6 10h6l-3 9 9-12h-6l3-7z" fill="#e4b23c" />
            <rect x="524" y="296" width="42" height="6" rx="3" fill="#8a7b4f" />
            <rect x="524" y="310" width="42" height="6" rx="3" fill="#8a7b4f" />
          </g>
          {/* trees */}
          <g>
            <rect x="40" y="238" width="10" height="36" rx="3" fill="#5b4a33" />
            <circle cx="45" cy="222" r="28" fill="#3d5f4e" />
          </g>
        </g>
      )}
    </svg>
  );
}

/* ----------------------------- hero dashboard ---------------------------- */

/** Static dashboard mockup that sits under the hero. */
export function HeroDashboard({ className = "" }: { className?: string }) {
  const bars = [42, 55, 62, 74, 84, 94, 97, 92, 80, 68, 56, 48];
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-white/95 shadow-2xl shadow-forest/15 backdrop-blur ${className}`}
      aria-hidden="true"
    >
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-line bg-card px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-muted">
          solar-monitor.app
        </span>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-[1.6fr_1fr] md:p-6">
        {/* left: stats + chart */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "Produced today", v: "38.2", u: "kWh" },
              { k: "System size", v: "7.4", u: "kW" },
              { k: "Self-powered", v: "84", u: "%" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl bg-card p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  {s.k}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-forest md:text-2xl">
                  {s.v}
                  <span className="ml-1 text-xs font-semibold text-muted">{s.u}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-line p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Production this year</p>
              <span className="rounded-full bg-lime px-2.5 py-0.5 text-[11px] font-bold text-ink">
                +12%
              </span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-1.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-forest to-olive"
                />
              ))}
            </div>
          </div>
        </div>
        {/* right: battery donut + grid status */}
        <div className="space-y-4">
          <div className="rounded-xl bg-card p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Battery
            </p>
            <svg viewBox="0 0 120 70" className="mx-auto mt-1 w-36">
              <path d="M12 62a48 48 0 0 1 96 0" fill="none" stroke="#d9d2c4" strokeWidth="10" strokeLinecap="round" />
              <path d="M12 62a48 48 0 0 1 96 0" fill="none" stroke="#8a7b4f" strokeWidth="10" strokeLinecap="round" strokeDasharray="151" strokeDashoffset="24" />
              <text x="60" y="58" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1f5c46" fontFamily="inherit">84%</text>
            </svg>
            <p className="text-[11px] text-muted">Charging from solar</p>
          </div>
          <div className="space-y-2 rounded-xl border border-line p-4">
            {[
              { k: "Grid", v: "Exporting", ok: true },
              { k: "Panel temp", v: "31°C", ok: true },
              { k: "Alerts", v: "None", ok: true },
            ].map((r) => (
              <div key={r.k} className="flex items-center justify-between text-xs">
                <span className="text-muted">{r.k}</span>
                <span className="flex items-center gap-1.5 font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-wa" />
                  {r.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

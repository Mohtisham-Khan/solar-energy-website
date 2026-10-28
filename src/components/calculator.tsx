"use client";

import { useMemo, useState } from "react";
import {
  coverageOptions,
  installationLabour,
  panelOptions,
  pkCities,
  solarAssumptions as cfg,
  systemTypes,
  type SystemTypeId,
} from "@/lib/content";
import {
  clampNumber,
  labourOptionById,
  nearestPackage,
  packageEstimate,
  packageForSize,
  packageSizes,
  pkr,
  sizeSolarSystem,
  sizingExplanation,
  suitabilityLine,
  unitsFromBill,
  variantFor,
} from "@/lib/solar";
import { Check, WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/site";

const inputClass =
  "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-lg font-semibold text-ink outline-none transition-colors focus:border-forest";

const chip = (active: boolean) =>
  `rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
    active
      ? "border-forest bg-forest text-cream"
      : "border-line bg-white text-ink hover:border-ink/40"
  }`;

/**
 * Pakistan solar calculator.
 *
 * Two deliberately separate experiences:
 *   Mode A — "Which system do I need?" pure sizing, no prices at all.
 *   Mode B — "Select a package" optional, opt-in, the only place money shows.
 */
export function SolarCalculator() {
  const [mode, setMode] = useState<"size" | "package">("size");
  const [entry, setEntry] = useState<"units" | "bill">("units");
  const [units, setUnits] = useState(600);
  const [bill, setBill] = useState(40_000);
  const [cityId, setCityId] = useState("lahore");
  const [coveragePct, setCoveragePct] = useState<number>(100);
  const [systemType, setSystemType] = useState<SystemTypeId>("on-grid");
  const [panelWatts, setPanelWatts] = useState(550);

  // package mode state
  const [packageSize, setPackageSize] = useState<number | null>(null);
  const [labourEnabled, setLabourEnabled] = useState(false);
  const [labourId, setLabourId] = useState<string>(installationLabour[0].id);

  const monthlyUnits =
    entry === "units"
      ? clampNumber(units, 0, 100_000)
      : Math.round(unitsFromBill(clampNumber(bill, 0, 10_000_000)));

  const sizing = useMemo(
    () => sizeSolarSystem({ monthlyUnits, cityId, coveragePct, panelWatts }),
    [monthlyUnits, cityId, coveragePct, panelWatts],
  );

  const explanation = useMemo(
    () =>
      sizingExplanation({ monthlyUnits, cityId, coveragePct, panelWatts }, sizing),
    [monthlyUnits, cityId, coveragePct, panelWatts, sizing],
  );
  const suitability = suitabilityLine(systemType, sizing);

  const unitsInvalid = entry === "units" && (!Number.isFinite(units) || units <= 0);
  const billInvalid = entry === "bill" && (!Number.isFinite(bill) || bill <= 0);

  // ---- package mode -------------------------------------------------------
  const recommendedPkg = nearestPackage(sizing.capacityKw);
  const activeSize = packageSize ?? recommendedPkg.capacityKw;
  const pkg = packageForSize(activeSize) ?? recommendedPkg;
  const variant = variantFor(pkg, systemType);
  const labour = labourEnabled ? labourOptionById(labourId) : null;
  const estimate = packageEstimate(variant, labourEnabled ? labourId : null);

  const pricingNote =
    "Indicative estimate only — package and labour prices are configurable in the site data and are not a binding quotation. A confirmed quotation follows your roof survey.";

  const sizingWa = waLink(
    `Hi Sunhaven Solar! My calculator estimate: ${sizing.capacityKw} kW system (${sizing.panels} panels), about ${Math.round(sizing.dailyKwh)} kWh/day in ${sizing.city.name}, from ${monthlyUnits} units/month at ${coveragePct}% coverage (${systemType}). Please share a detailed quote.`,
  );
  const packageWa = waLink(
    `Hi Sunhaven Solar! I'd like a quotation for the ${pkg.capacityKw} kW ${systemType} package (${pkg.panelCount} × ${pkg.panelWatts} W panels)${
      labour ? `, including ${labour.label.toLowerCase()}` : ", without installation labour"
    }.${
      estimate.totalPkr != null
        ? ` Calculator estimate: ${pkr(estimate.totalPkr)} total.`
        : ""
    } Please confirm the final price.`,
  );

  /* --------------------------------- UI ---------------------------------- */

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {/* ------------------------- MODE / PROGRESS ------------------------- */}
      <div className="lg:col-span-2 flex flex-wrap items-center gap-3 rounded-[2rem] border border-line bg-white p-4 md:p-5">
        {(
          [
            { id: "size" as const, step: "1", label: "Find my system size" },
            { id: "package" as const, step: "2", label: "Select a package (optional)" },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setMode(t.id)}
            aria-pressed={mode === t.id}
            className={`group inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors md:text-base ${
              mode === t.id
                ? "border-forest bg-forest text-cream"
                : "border-line bg-cream text-ink hover:border-ink/40"
            }`}
          >
            <span
              className={`grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${
                mode === t.id ? "bg-lime text-ink" : "bg-ink/10 text-ink"
              }`}
            >
              {t.step}
            </span>
            {t.label}
          </button>
        ))}
        <p className="ml-auto hidden max-w-sm text-xs leading-relaxed text-muted md:block">
          Step 1 is free and never shows prices. Step 2 is only for people who
          already know the size they want.
        </p>
      </div>

      {/* ============================ MODE A: SIZING ======================= */}
      {mode === "size" && (
        <>
          {/* ------------------------------ INPUTS ------------------------- */}
          <div className="rounded-[2rem] border border-line bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-ink">Your electricity usage</h2>
            <p className="mt-1 text-sm text-muted">
              Enter what you use today — exactly as it appears on your
              electricity bill.
            </p>

            {/* units vs bill toggle */}
            <div className="mt-6 flex gap-2 rounded-full bg-cream p-1.5" role="tablist" aria-label="How to enter consumption">
              {(
                [
                  { id: "units" as const, label: "Monthly units (kWh)" },
                  { id: "bill" as const, label: "Monthly bill (Rs.)" },
                ]
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={entry === t.id}
                  onClick={() => setEntry(t.id)}
                  className={`flex-1 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${
                    entry === t.id
                      ? "bg-forest text-cream"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-5">
              {entry === "units" ? (
                <>
                  <label
                    htmlFor="units"
                    className="flex items-baseline justify-between text-sm font-semibold text-ink"
                  >
                    Monthly consumption
                    <span className="font-display text-2xl font-bold text-forest">
                      {Number.isFinite(units) ? units : 0} units
                    </span>
                  </label>
                  <input
                    id="units"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={100000}
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className={`${inputClass} mt-2 ${unitsInvalid ? "border-red-500" : ""}`}
                  />
                  <p className="mt-2 text-xs text-muted">
                    Example: a typical Lahore home uses 300–600 units/month.
                    Enter the total number of units (kWh) shown on your bill.
                  </p>
                  {unitsInvalid && (
                    <p className="mt-2 text-xs font-semibold text-red-600">
                      Please enter a positive number of units (e.g. 600).
                    </p>
                  )}
                </>
              ) : (
                <>
                  <label
                    htmlFor="bill"
                    className="flex items-baseline justify-between text-sm font-semibold text-ink"
                  >
                    Average monthly bill
                    <span className="font-display text-2xl font-bold text-forest">
                      {pkr(Number.isFinite(bill) ? bill : 0)}
                    </span>
                  </label>
                  <input
                    id="bill"
                    type="number"
                    inputMode="numeric"
                    min={1000}
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className={`${inputClass} mt-2 ${billInvalid ? "border-red-500" : ""}`}
                  />
                  <p className="mt-2 text-xs text-muted">
                    We convert it to units using a blended {cfg.avgTariffPerKwh}{" "}
                    Rs./unit — your DISCO slab rate will differ slightly.
                    Entering units directly is more accurate.
                  </p>
                  {billInvalid && (
                    <p className="mt-2 text-xs font-semibold text-red-600">
                      Please enter a bill above Rs. 0 (e.g. 40000).
                    </p>
                  )}
                </>
              )}
            </div>

            {/* city */}
            <div className="mt-6">
              <label htmlFor="city" className="text-sm font-semibold text-ink">
                Your city
              </label>
              <select
                id="city"
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
                className={`${inputClass} mt-2 appearance-none`}
              >
                {pkCities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {c.peakSunHours} peak sun hours/day
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-muted">
                Peak sun hours and local losses change with your city, so the
                same usage gives a slightly different size in Karachi vs
                Islamabad.
              </p>
            </div>

            {/* coverage */}
            <div className="mt-6">
              <span className="text-sm font-semibold text-ink">
                How much of your bill do you want solar to cover?
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {coverageOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCoveragePct(c)}
                    aria-pressed={coveragePct === c}
                    className={chip(coveragePct === c)}
                  >
                    {c}% of usage
                  </button>
                ))}
              </div>
            </div>

            {/* system type */}
            <div className="mt-6">
              <span className="text-sm font-semibold text-ink">System type</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {systemTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSystemType(t.id)}
                    aria-pressed={systemType === t.id}
                    className={chip(systemType === t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">
                {systemTypes.find((t) => t.id === systemType)?.note}
              </p>
            </div>

            {/* panel wattage */}
            <div className="mt-6">
              <label htmlFor="panel" className="text-sm font-semibold text-ink">
                Solar panel size
              </label>
              <select
                id="panel"
                value={panelWatts}
                onChange={(e) => setPanelWatts(Number(e.target.value))}
                className={`${inputClass} mt-2 appearance-none`}
              >
                {panelOptions.map((p) => (
                  <option key={p.watts} value={p.watts}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ------------------------------ RESULTS ------------------------ */}
          <div className="rounded-[2rem] bg-forest p-6 text-cream md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/60">
              Your recommended solar system
            </p>
            <p className="mt-1 font-display text-4xl font-bold text-lime md:text-5xl">
              {sizing.capacityKw} kW
            </p>
            <p className="mt-1 text-sm text-cream/70">
              ≈ {sizing.panels} panels ({sizing.kwp} kWp installed) ·{" "}
              {sizing.city.name}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Daily generation",
                  value: `${Math.round(sizing.dailyLow)}–${Math.round(sizing.dailyHigh)} kWh`,
                },
                {
                  label: "Monthly generation",
                  value: `${Math.round(sizing.monthlyLow)}–${Math.round(sizing.monthlyHigh)} units`,
                },
                { label: "Panels needed", value: `${sizing.panels} × ${panelWatts} W` },
                {
                  label: "Usage covered",
                  value: `${Math.round(sizing.coverageAchievedPct)}%`,
                },
                { label: "Peak sun hours", value: `${sizing.peakSunHours} h/day` },
                {
                  label: "Performance ratio",
                  value: `${Math.round(sizing.performanceRatio * 100)}%`,
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-forest-2 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cream/55">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-cream md:text-xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-cream/10 p-4">
              <p className="text-sm font-semibold text-lime">
                Why this size?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/85">
                {explanation}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/85">
                {suitability}
              </p>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-cream/55">
              Estimates only — actual generation depends on location, roof
              orientation and shading, seasonal weather, equipment and
              installation quality. This is not a guarantee of bill
              elimination or exact output.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setPackageSize(recommendedPkg.capacityKw);
                  setMode("package");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-4 text-sm font-bold text-ink transition-colors hover:bg-lime-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                Looking for a price? Select a {sizing.capacityKw} kW package
                <span aria-hidden="true">→</span>
              </button>
              <a
                href={sizingWa}
                className="flex items-center justify-center gap-2.5 rounded-full bg-wa px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Send my estimate to WhatsApp
              </a>
            </div>
          </div>

          {/* --------------------------- TRANSPARENCY ---------------------- */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] border border-line bg-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink">
                How this estimate is calculated
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                Required capacity (kW) ≈ target daily consumption (kWh) ÷
                (peak sun hours × performance ratio), where target daily
                consumption = monthly units × coverage % ÷ 30 days. Daily
                generation = capacity × peak sun hours × performance ratio,
                and panels = capacity in watts ÷ panel wattage (rounded up).
              </p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { k: "City sun resource", v: `${sizing.peakSunHours} h/day` },
                  { k: "Performance ratio", v: `${Math.round(sizing.performanceRatio * 100)}%` },
                  { k: "Days per month", v: `${cfg.daysPerMonth}` },
                  { k: "Seasonal variation", v: `−${Math.round((1 - cfg.seasonalLow) * 100)}% winter / +${Math.round((cfg.seasonalHigh - 1) * 100)}% summer` },
                  { k: "Panel output", v: `${panelWatts} W each` },
                  { k: "System losses", v: "heat, dust, wiring, inverter" },
                  { k: "Bill → units conversion", v: `${cfg.avgTariffPerKwh} Rs./unit (blended)` },
                  { k: "Practical size ladder", v: cfg.practicalSizes.join(", ") + " kW" },
                  { k: "Self-consumption", v: `${Math.round(cfg.selfConsumption * 100)}% used on-site` },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-forest">
                      <Check className="h-3 w-3" />
                    </span>
                    <dt className="text-muted">{item.k}</dt>
                    <dd className="ml-auto font-semibold text-ink">{item.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                All values are configurable in the site data — city sun hours,
                losses and panel sizes are estimates for planning, not
                guaranteed output. Hybrid and off-grid systems need a
                separate battery sizing step for your night-time load.
              </p>
            </div>
          </div>
        </>
      )}

      {/* =========================== MODE B: PACKAGES ===================== */}
      {mode === "package" && (
        <>
          {/* --------------------------- SIZE PICKER ----------------------- */}
          <div className="rounded-[2rem] border border-line bg-white p-6 md:p-8 lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-ink">
                  Choose your system size
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Based on your inputs we recommended{" "}
                  <strong className="text-ink">{sizing.capacityKw} kW</strong>{" "}
                  ({monthlyUnits} units/month, {sizing.city.name},{" "}
                  {coveragePct}% coverage). Pick any size below to see its
                  package.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMode("size")}
                className="text-sm font-semibold text-forest underline underline-offset-4 hover:text-ink"
              >
                ← Back to sizing calculator
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {packageSizes().map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setPackageSize(s)}
                  aria-pressed={activeSize === s}
                  className={chip(activeSize === s)}
                >
                  {s} kW
                  {s === recommendedPkg.capacityKw && (
                    <span className="ml-1.5 text-xs font-bold text-forest">
                      ★ recommended
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ------------------------- PACKAGE DETAIL ---------------------- */}
          <div className="rounded-[2rem] border border-line bg-white p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-bold text-ink">
                {pkg.capacityKw} kW {systemTypes.find((t) => t.id === systemType)?.label} package
              </h3>
              <span className="text-sm font-semibold text-forest">
                {pkg.kwp} kWp
              </span>
            </div>

            <dl className="mt-4 grid gap-2 text-sm">
              {[
                { k: "Solar panels", v: `${pkg.panelCount} × ${pkg.panelWatts} W` },
                { k: "Inverter", v: variant.inverter },
                ...(variant.battery ? [{ k: "Battery bank", v: variant.battery }] : []),
                { k: "DC capacity", v: `${pkg.kwp} kWp (${pkg.panelCount} panels)` },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-cream px-4 py-3"
                >
                  <dt className="text-muted">{row.k}</dt>
                  <dd className="font-semibold text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-sm font-semibold text-ink">What&apos;s included</p>
            <ul className="mt-2 space-y-2">
              {pkg.includes.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime text-forest">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            {/* labour toggle — default OFF */}
            <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3.5">
              <input
                type="checkbox"
                checked={labourEnabled}
                onChange={(e) => setLabourEnabled(e.target.checked)}
                className="h-5 w-5 accent-[#16422d]"
              />
              <span className="text-sm font-semibold text-ink">
                Include installation labour
              </span>
            </label>

            {labourEnabled && (
              <div className="mt-3">
                <label htmlFor="labour" className="text-sm font-semibold text-ink">
                  Installation type
                </label>
                <select
                  id="labour"
                  value={labourId}
                  onChange={(e) => setLabourId(e.target.value)}
                  className={`${inputClass} mt-2 appearance-none text-base`}
                >
                  <option value="">Select installation package</option>
                  {installationLabour.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.label} — {pkr(l.chargePkr)}
                    </option>
                  ))}
                </select>
                {!labour && (
                  <p className="mt-2 text-xs font-semibold text-amber-700">
                    Select an installation type to add labour charges.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* ------------------------ ESTIMATE / PRICE --------------------- */}
          <div className="rounded-[2rem] bg-forest p-6 text-cream md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/60">
              Package estimate
            </p>

            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-3 border-b border-cream/15 pb-3">
                <dt className="text-sm text-cream/75">Package cost (equipment)</dt>
                <dd className="font-display text-xl font-bold text-cream">
                  {estimate.equipmentPkr != null ? pkr(estimate.equipmentPkr) : "Quotation required"}
                </dd>
              </div>
              {labourEnabled && labour && (
                <div className="flex items-center justify-between gap-3 border-b border-cream/15 pb-3">
                  <dt className="text-sm text-cream/75">Installation labour</dt>
                  <dd className="font-display text-xl font-bold text-cream">
                    {pkr(estimate.labourPkr)}
                  </dd>
                </div>
              )}
              <div className="flex items-center justify-between gap-3">
                <dt className="text-sm font-semibold text-lime">
                  Total package estimate
                </dt>
                <dd className="font-display text-3xl font-bold text-lime">
                  {estimate.totalPkr != null ? pkr(estimate.totalPkr) : "—"}
                </dd>
              </div>
            </dl>

            {!estimate.isComplete && (
              <p className="mt-3 rounded-2xl bg-cream/10 p-3 text-xs leading-relaxed text-cream/80">
                This size has no configured price yet — a confirmed quotation is
                required. Message us and we&apos;ll price it for your roof.
              </p>
            )}

            <p className="mt-4 text-xs leading-relaxed text-cream/55">
              {pricingNote}
            </p>

            <a
              href={packageWa}
              className="group mt-5 flex items-center justify-center gap-2.5 rounded-full bg-wa px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Request a confirmed quotation
            </a>
            <p className="mt-3 text-center text-xs text-cream/55">
              Prices include no hidden charges — final quote follows a site
              visit.
            </p>
          </div>

          {/* ------------------------ PRICING NOTICE ---------------------- */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] border border-line bg-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink">
                About these prices
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                Package specifications and prices live in the site&apos;s data
                file, so they can be updated in one place. Equipment cost and
                installation labour are always shown separately — labour is
                optional and off by default. Prices above are indicative
                estimates in Pakistani Rupees (Rs. / PKR), not a binding
                quotation; a confirmed quotation is required after a roof
                survey. For a system size estimate with no pricing, go back to
                step 1.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

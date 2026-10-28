/**
 * Pakistan-focused solar calculation model.
 *
 * Sizing logic and package/labour pricing are deliberately kept apart:
 * the sizing calculator never touches money, and the package estimator
 * never re-implements sizing.
 *
 * Sizing model (documented in the transparency section of the UI):
 *
 *   Required Capacity (kW) ≈ Target Daily Energy (kWh)
 *                            ÷ (Peak Sun Hours × Performance Ratio)
 *
 *   Target Daily Energy (kWh) = Monthly Units × Coverage % ÷ Days/Month
 *   Daily Generation  (kWh)  = Capacity × Peak Sun Hours × Performance Ratio
 *   Panels                    = ⌈Capacity (W) ÷ Panel Wattage (W)⌉
 */

import {
  installationLabour,
  pkCities,
  solarAssumptions as cfg,
  solarPackages,
  type PkCity,
  type SolarPackage,
  type SystemTypeId,
} from "@/lib/content";

/** Format a PKR amount with Pakistani digit grouping, e.g. "Rs. 1,050,000". */
export function pkr(n: number): string {
  return `Rs. ${Math.round(n).toLocaleString("en-PK")}`;
}

/** Resolve a city id to its solar-resource entry (fallback: national average). */
export function cityById(id: string): PkCity {
  return pkCities.find((c) => c.id === id) ?? pkCities[pkCities.length - 1];
}

/** Effective performance ratio for a city: baseline × local derate. */
export function performanceRatioFor(city: PkCity): number {
  return Math.round(cfg.basePerformanceRatio * city.efficiencyFactor * 1000) / 1000;
}

/** Convert an entered monthly bill (Rs.) into approximate units, using the configured blended tariff. */
export function unitsFromBill(billPkr: number): number {
  return billPkr / cfg.avgTariffPerKwh;
}

/** Clamp helper — keeps invalid/negative input out of the model. */
export function clampNumber(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export type SizingInput = {
  /** Monthly electricity consumption in units (kWh). */
  monthlyUnits: number;
  /** City id from pkCities. */
  cityId: string;
  /** Share of consumption the user wants solar to cover (%). */
  coveragePct: number;
  /** Selected panel wattage (W). */
  panelWatts: number;
};

export type SizingResult = {
  city: PkCity;
  peakSunHours: number;
  performanceRatio: number;
  /** Raw, un-rounded capacity from the formula (kW). */
  rawCapacityKw: number;
  /** Practical installed size the recommendation rounds up to (kW). */
  capacityKw: number;
  /** Panels required for the practical size (rounded up to whole panels). */
  panels: number;
  kwp: number;
  dailyKwh: number;
  monthlyKwh: number;
  dailyLow: number;
  dailyHigh: number;
  monthlyLow: number;
  monthlyHigh: number;
  /** Share of the user's monthly consumption the system is expected to cover. */
  coverageAchievedPct: number;
};

/** Core sizing calculation — pure, deterministic, no UI concerns. */
export function sizeSolarSystem(input: SizingInput): SizingResult {
  const city = cityById(input.cityId);
  const peakSunHours = city.peakSunHours;
  const performanceRatio = performanceRatioFor(city);
  const coverage = clampNumber(input.coveragePct, 10, 100);
  const monthlyUnits = Math.max(0, input.monthlyUnits);

  const targetDailyKwh = (monthlyUnits * coverage) / 100 / cfg.daysPerMonth;

  const rawCapacityKw = targetDailyKwh / (peakSunHours * performanceRatio);

  // Round UP to the next practical system size so the target stays achievable.
  const cappedRaw = clampNumber(rawCapacityKw, cfg.minCapacityKw, cfg.maxCapacityKw);
  const capacityKw =
    cfg.practicalSizes.find((s) => s >= cappedRaw) ?? cfg.maxCapacityKw;

  const panels = Math.max(1, Math.ceil((capacityKw * 1000) / input.panelWatts));
  const kwp = Math.round(((panels * input.panelWatts) / 1000) * 100) / 100;

  const dailyKwh = capacityKw * peakSunHours * performanceRatio;
  const monthlyKwh = dailyKwh * cfg.daysPerMonth;

  return {
    city,
    peakSunHours,
    performanceRatio,
    rawCapacityKw: Math.round(rawCapacityKw * 100) / 100,
    capacityKw,
    panels,
    kwp,
    dailyKwh,
    monthlyKwh,
    dailyLow: dailyKwh * cfg.seasonalLow,
    dailyHigh: dailyKwh * cfg.seasonalHigh,
    monthlyLow: monthlyKwh * cfg.seasonalLow,
    monthlyHigh: monthlyKwh * cfg.seasonalHigh,
    coverageAchievedPct:
      monthlyUnits > 0 ? Math.min(100, (monthlyKwh / monthlyUnits) * 100) : 0,
  };
}

/** Plain-language explanation of why this size was recommended. */
export function sizingExplanation(input: SizingInput, r: SizingResult): string {
  const { capacityKw, peakSunHours, performanceRatio, kwp } = r;
  const coverageLabel =
    input.coveragePct >= 100 ? "essentially all" : `about ${input.coveragePct}%`;
  return `Your ${Math.round(input.monthlyUnits)} monthly units (${coverageLabel} of them covered) need roughly ${rawCapacityKwh(r)} kW on paper. In ${r.city.name} the usable sun is about ${peakSunHours} peak sun hours a day, and after heat, dust and wiring losses the system runs at about ${Math.round(performanceRatio * 100)}% efficiency — so we round up to a practical ${capacityKw} kW system (${r.panels} panels, ${kwp} kWp installed) to comfortably meet the target.`;
}

function rawCapacityKwh(r: SizingResult): number {
  return Math.round(r.rawCapacityKw * 10) / 10;
}

/** Short suitability line, incl. battery caveats for hybrid/off-grid. */
export function suitabilityLine(
  type: SystemTypeId,
  r: SizingResult,
): string {
  const base = `A ${r.capacityKw} kW solar system may suit your estimated electricity consumption of about ${Math.round(r.monthlyKwh)} units/month.`;
  if (type === "on-grid") return base;
  if (type === "hybrid")
    return `${base} With a hybrid system, battery capacity and backup hours need to be sized separately for your night-time load.`;
  return `${base} An off-grid system must also cover your night-time load, so battery capacity is confirmed after a load survey.`;
}

/* --------------------------------------------------------------------------
 * Package + labour estimation — only reached when the user explicitly opts
 * into package/quotation mode. Kept entirely separate from sizing above.
 * ----------------------------------------------------------------------- */

export type PackageVariantView = SolarPackage["variants"][number];

/** All capacity options available for package selection. */
export function packageSizes(): number[] {
  return solarPackages.map((p) => p.capacityKw);
}

/** Nearest package size to a recommended capacity (used to preselect). */
export function nearestPackage(recommendedKw: number): SolarPackage {
  return solarPackages.reduce((best, p) =>
    Math.abs(p.capacityKw - recommendedKw) < Math.abs(best.capacityKw - recommendedKw)
      ? p
      : best,
  );
}

export function packageForSize(sizeKw: number): SolarPackage | undefined {
  return solarPackages.find((p) => p.capacityKw === sizeKw);
}

export function variantFor(
  pkg: SolarPackage,
  type: SystemTypeId,
): PackageVariantView {
  return pkg.variants.find((v) => v.type === type) ?? pkg.variants[0];
}

export function labourOptionById(id: string) {
  return installationLabour.find((l) => l.id === id) ?? null;
}

export type PackageEstimate = {
  /** Equipment/package cost, null when not configured. */
  equipmentPkr: number | null;
  labourPkr: number;
  /** Equipment + labour, null when equipment price is unconfigured. */
  totalPkr: number | null;
  /** False when at least one component price is missing. */
  isComplete: boolean;
};

/**
 * Combine a package's equipment price with the selected labour charge.
 * `labourId` null ⇒ no labour selected (the default).
 */
export function packageEstimate(
  variant: PackageVariantView,
  labourId: string | null,
): PackageEstimate {
  const labour = labourId ? labourOptionById(labourId) : null;
  const labourPkr = labour ? labour.chargePkr : 0;
  const equipmentPkr = variant.pricePkr;
  return {
    equipmentPkr,
    labourPkr,
    totalPkr: equipmentPkr == null ? null : equipmentPkr + labourPkr,
    isComplete: equipmentPkr != null,
  };
}

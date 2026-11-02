/**
 * Site content — Karachi localization.
 * Editable copy/data only: calculator rates, services, stats, process,
 * projects, FAQs, testimonials, team and blog ideas.
 *
 * PLACEHOLDERS in square brackets ([X], [NAME], [REAL PROJECT], [BRAND NAMES])
 * must be replaced with real, verifiable business data before launch.
 */

/* ==========================================================================
 * 1. SOLAR CALCULATOR RATES & ASSUMPTIONS — every editable number lives here
 * ========================================================================== */

export const solarAssumptions = {
  // --- inputs (PKR) ---
  billMinPkr: 10_000,
  billMaxPkr: 150_000,
  billDefaultPkr: 40_000,
  unitsMin: 50,
  unitsMax: 5000,
  unitsDefault: 600,
  /**
   * Blended Rs/kWh used to convert an entered bill into units, and to value
   * units the system offsets. DISCO slab rates + taxes differ by consumption
   * band — keep this conservative.
   */
  avgTariffPerKwh: 65,
  /** Units exported to the grid, valued conservatively at the NEPRA
   *  national average energy purchase price (~Rs 11/unit, Prosumer
   *  Regulations 2026 notified 9 Feb 2026). Verify before publishing. */
  netBillingBuybackPerKwh: 11,
  // --- equipment cost band (Rs per installed kW), excluding labour ---
  // Bracketed around the configured package prices below — keep in sync.
  costPerKwLowPkr: 125_000,
  costPerKwHighPkr: 150_000,
  // --- sizing model ---
  basePerformanceRatio: 0.78,
  daysPerMonth: 30,
  seasonalLow: 0.75,
  seasonalHigh: 1.12,
  practicalSizes: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50],
  minCapacityKw: 1,
  maxCapacityKw: 50,
  /** Typical usable share of production consumed on-site (hybrid/on-grid). */
  selfConsumption: 0.7,
};

/* ==========================================================================
 * 2. PAKISTAN CITY SOLAR RESOURCE (calculator location dropdown)
 * ========================================================================== */

export type PkCity = {
  id: string;
  name: string;
  /** Average peak sun hours/day used for sizing in this city. */
  peakSunHours: number;
  /** Location derate (heat, dust/soiling, haze) multiplied into the PR. */
  efficiencyFactor: number;
};

/** Peak sun hours are annual averages for Pakistan's plains + highlands. */
export const pkCities: PkCity[] = [
  { id: "karachi", name: "Karachi", peakSunHours: 5.6, efficiencyFactor: 1.0 },
  { id: "hyderabad", name: "Hyderabad", peakSunHours: 5.6, efficiencyFactor: 1.0 },
  { id: "lahore", name: "Lahore", peakSunHours: 5.2, efficiencyFactor: 0.98 },
  { id: "faisalabad", name: "Faisalabad", peakSunHours: 5.3, efficiencyFactor: 0.98 },
  { id: "multan", name: "Multan", peakSunHours: 5.7, efficiencyFactor: 1.0 },
  { id: "bahawalpur", name: "Bahawalpur", peakSunHours: 5.8, efficiencyFactor: 1.0 },
  { id: "islamabad", name: "Islamabad", peakSunHours: 5.0, efficiencyFactor: 0.97 },
  { id: "rawalpindi", name: "Rawalpindi", peakSunHours: 5.0, efficiencyFactor: 0.97 },
  { id: "peshawar", name: "Peshawar", peakSunHours: 5.3, efficiencyFactor: 0.98 },
  { id: "quetta", name: "Quetta", peakSunHours: 5.9, efficiencyFactor: 1.0 },
  { id: "sialkot", name: "Sialkot", peakSunHours: 5.0, efficiencyFactor: 0.97 },
  { id: "gilgit", name: "Gilgit-Baltistan", peakSunHours: 5.4, efficiencyFactor: 0.99 },
  {
    id: "other",
    name: "Another city in Pakistan",
    peakSunHours: 5.3,
    efficiencyFactor: 0.98,
  },
];

export const coverageOptions = [50, 75, 100] as const;

export const systemTypes = [
  {
    id: "on-grid",
    label: "On-grid",
    note: "Tied to K-Electric. No batteries — daytime solar offsets your bill, and export units are credited under net billing.",
  },
  {
    id: "hybrid",
    label: "Hybrid",
    note: "Grid-tied with battery backup — the smart choice in Karachi, where load shedding still hits. Battery capacity is sized separately for your night load.",
  },
  {
    id: "off-grid",
    label: "Off-grid",
    note: "Runs without the grid. Needs battery storage sized for your night load — battery capacity is confirmed at quotation.",
  },
] as const;

export type SystemTypeId = (typeof systemTypes)[number]["id"];

/** Panel choices offered in the calculator (tier-1 modules common in PK). */
export const panelOptions = [
  { watts: 450, label: "450 W mono PERC" },
  { watts: 550, label: "550 W mono PERC (standard)" },
  { watts: 600, label: "600 W bifacial" },
] as const;

/* ==========================================================================
 * 3. SERVICES
 * ========================================================================== */

export type Service = {
  slug: string;
  number: string;
  title: string;
  /**
   * Card title for the grid — two explicit lines matching the reference
   * design's manual breaks (can differ from the row title).
   */
  cardTitle: [string, string];
  short: string;
  stripTitle: string;
  description: string;
  features: string[];
  location: string;
  chips: string[];
  icon: "house" | "panel" | "pump" | "checklist";
  /** Photo shown in the large card on the home + services sections. */
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "residential-solar",
    number: "01",
    title: "Residential Solar Installation",
    cardTitle: ["Residential", "Solar"],
    stripTitle: "Residential",
    short: "3kW, 5kW and 10kW rooftop systems for bungalows and flats.",
    description:
      "We size the system from your last 12 months of K-Electric bills, check the roof for shading, then quote one fixed price. Corrosion-resistant mounting for Karachi's salt air, and the K-Electric application and netting paperwork handled for you.",
    features: [
      "3 kW, 5 kW and 10 kW systems for bungalows and flats",
      "Load calculation and shading study before we quote",
      "Coastal-grade mounting for humidity and salt air",
      "K-Electric application and netting paperwork handled",
    ],
    location: "[REAL PROJECT], DHA Phase 6, Karachi",
    chips: ["Solar installation DHA Karachi", "3kW / 5kW / 10kW home systems"],
    icon: "house",
    image: {
      src: "/services/residential-solar.jpg",
      alt: "Solar panels being installed on a bungalow rooftop in Karachi",
    },
  },
  {
    slug: "commercial-solar",
    number: "02",
    title: "Commercial & Industrial Solar",
    cardTitle: ["Commercial", "& Industrial"],
    stripTitle: "Commercial",
    short: "Offices, warehouses and factories in SITE, Korangi and Port Qasim.",
    description:
      "Rooftop and ground-mount systems for offices, warehouses and factories — sized around your daytime load so most of the solar is used on site. We plan around production shifts and handle K-Electric interconnection for your premises.",
    features: [
      "Rooftop, carport and ground-mount arrays",
      "Sized to your daytime load and shift timings",
      "Load calculation and design for higher capacities",
      "K-Electric interconnection and paperwork handled",
    ],
    location: "[REAL PROJECT], SITE, Karachi",
    chips: ["Factory & warehouse solar Karachi", "Commercial rooftop systems"],
    icon: "panel",
    image: {
      src: "/services/commercial-solar.jpg",
      alt: "Solar panels on a warehouse roof at an industrial site in Karachi",
    },
  },
  {
    slug: "solar-system-engineering",
    number: "03",
    title: "Solar System Engineering",
    cardTitle: ["Solar System", "Engineering"],
    stripTitle: "Engineering",
    short: "Site survey, load calculation and shading study — before any quote.",
    description:
      "Every system starts with a survey: roof condition, shading through the day, your load chart and what you actually want to run during load shedding. On-grid, hybrid or off-grid — we design it first, then quote it once.",
    features: [
      "Free site survey anywhere in Karachi",
      "Load calculation and shading study",
      "On-grid, hybrid and off-grid system design",
      "Battery and backup planning for outages",
    ],
    location: "[REAL PROJECT], Gulshan-e-Iqbal, Karachi",
    chips: ["On-grid vs hybrid vs off-grid", "Load calculation & shading study"],
    icon: "pump",
    image: {
      src: "/services/engineering.jpg",
      alt: "Solar engineers reviewing a rooftop system design in Karachi",
    },
  },
  {
    slug: "maintenance-monitoring",
    number: "04",
    title: "Installation & Maintenance",
    cardTitle: ["Installation &", "Maintenance"],
    stripTitle: "Maintenance",
    short: "Cleaning, monitoring and AMC — built for Karachi's dust and salt air.",
    description:
      "Coastal dust, salt and humidity cut panel output quickly in Karachi. We install the system, then keep it healthy with scheduled cleaning, performance monitoring and annual maintenance contracts.",
    features: [
      "Panel cleaning for dust and salt-air build-up",
      "Performance monitoring and fault checks",
      "Inverter and electrical maintenance",
      "Annual maintenance contracts (AMC)",
    ],
    location: "[REAL PROJECT], North Nazimabad, Karachi",
    chips: ["Solar maintenance Karachi", "Cleaning & monitoring"],
    icon: "checklist",
    image: {
      src: "/services/maintenance.jpg",
      alt: "Technician cleaning dust and salt residue off solar panels in Karachi",
    },
  },
];

/* ==========================================================================
 * 4. STATS — one consistent placeholder set, replace [X] everywhere
 * ========================================================================== */

/** Count-up stats row on the homepage. */
export const stateStats = [
  {
    value: "[X]+",
    suffix: "",
    label: "Systems Installed",
    icon: "headset",
    description:
      "Rooftops across Karachi — homes, factories and offices. [X]+ and counting.",
  },
  {
    value: "[X] MW",
    suffix: "",
    label: "Capacity Installed",
    icon: "percent",
    description:
      "Rooftop solar designed, installed and commissioned in Karachi.",
  },
  {
    value: "[X]+",
    suffix: "",
    label: "Areas Served",
    icon: "trending-down",
    description:
      "DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Korangi, SITE and more.",
  },
  {
    value: "[X]+",
    suffix: "",
    label: "After-Sales Support",
    icon: "pie",
    description:
      "Cleaning, monitoring and service visits by our local Karachi team.",
  },
] as const;

/** Simple number strip (used on the About page). */
export const stats = [
  { value: "[X]+", label: "Systems installed" },
  { value: "[X] MW", label: "Capacity installed" },
  { value: "[X]+", label: "Karachi areas served" },
  { value: "[X]+", label: "Happy customers" },
];

/* ==========================================================================
 * 5. PROCESS
 * ========================================================================== */

export const processSteps = [
  {
    number: "01",
    title: "Free Site Survey",
    description:
      "We visit your home or factory in Karachi, check the roof and shading, and review your last 12 months of K-Electric bills. Free, no obligation.",
  },
  {
    number: "02",
    title: "Design & Fixed Quote",
    description:
      "Load calculation, shading study and one clear fixed quote — on-grid, hybrid or off-grid, from 3 kW upwards, with equipment and labour listed separately.",
  },
  {
    number: "03",
    title: "Installation & K-Electric Paperwork",
    description:
      "Our crew mounts, wires and commissions the system in a few days, and we handle the K-Electric application and netting paperwork for you.",
  },
  {
    number: "04",
    title: "Power On & Warranty",
    description:
      "System switched on, monitoring app set up, equipment warranty documents handed over — then cleaning and service visits from our local team.",
  },
];

/* ==========================================================================
 * 6. PROJECTS — placeholders with Karachi areas, replace with real installs
 * ========================================================================== */

export const projects = [
  {
    title: "Residential Rooftop Solar",
    description:
      "[AREA], Karachi — [X] kW rooftop system on a bungalow. Monthly bill came down from Rs [BEFORE] to Rs [AFTER] after the system started running.",
    image: {
      src: "/projects/project-1.jpg",
      alt: "Solar panels installed on the roof of a bungalow in Karachi",
    },
    background: {
      src: "/projects/project-section-bg-1.webp",
      alt: "",
    },
  },
  {
    title: "Commercial Rooftop Solar",
    description:
      "[AREA], Karachi — [X] kW system for an office and warehouse. Daytime load now covered by solar; bill before Rs [BEFORE], after Rs [AFTER].",
    image: {
      src: "/projects/project-2.jpg",
      alt: "Rows of solar panels on a commercial rooftop in Karachi",
    },
    background: {
      src: "/projects/project-section-bg-2.webp",
      alt: "",
    },
  },
  {
    title: "Industrial Solar Power",
    description:
      "[AREA], Karachi — [X] kW roof and ground-mounted system for a factory. Units before [BEFORE] per month, now [AFTER] per month.",
    image: {
      src: "/projects/project-3.jpg",
      alt: "Industrial solar array supplying a factory in Karachi",
    },
    background: {
      src: "/projects/project-section-bg-3.webp",
      alt: "",
    },
  },
];

/* ==========================================================================
 * 7. TESTIMONIALS — PLACEHOLDERS: replace with real reviews before launch
 * ========================================================================== */

export const testimonials = [
  {
    quote:
      "My bill came down from Rs 38,000 to Rs 4,500. The team also handled all the K-Electric paperwork.",
    name: "[Name 1]",
    role: "Homeowner · DHA Phase 6, Karachi",
    initials: "[N]",
  },
  {
    quote:
      "We put a 10 kW system on our warehouse in SITE. Clear quote, done in three days, and our daytime load is covered.",
    name: "[Name 2]",
    role: "Business owner · SITE, Karachi",
    initials: "[N]",
  },
  {
    quote:
      "During load shedding the inverter took over — fridge and fans kept running. Our bill is now Rs [AFTER] a month.",
    name: "[Name 3]",
    role: "Homeowner · North Nazimabad, Karachi",
    initials: "[N]",
  },
  {
    quote:
      "The survey was completely free and there were no pushy sales calls. The final quote matched what was shown upfront.",
    name: "[Name 4]",
    role: "Homeowner · Gulshan-e-Iqbal, Karachi",
    initials: "[N]",
  },
];

/* ==========================================================================
 * 8. FAQ — answers shown on the homepage and emitted as FAQPage schema
 * ========================================================================== */

export const faqs = [
  {
    question: "Rs 40,000 ke bill par kitna kam hoga?",
    answer:
      "Yeh aapke units par depend karta hai ke aapke kitne units istemal hotay hain aur unka kitna load din mein chalta hai. 600 units/month wale ghar ke liye 5–6 kW system aam tor par din ke zyada-tar istemal cover kar leta hai — baaki sab cheezein roof, shading aur load pattern par depend karti hain. Hamara calculator aapke apne numbers par estimate deta hai — ise sirf estimate samjhein, bill ka guaranteed amount nahi. Hum bill khatam hone ka wada nahi karte.",
  },
  {
    question: "Kitne din mein system install ho jata hai?",
    answer:
      "Survey ke baad design aur quote typically 2–3 working days mein tayyar hota hai, aur installation aam bungalow rooftops par ek se teen din leti hai. K-Electric ka application aur netting approval ka waqt alag hota hai aur DISCO ki process par depend karta hai — hum paperwork file karke status track karte hain.",
  },
  {
    question: "Raat ko ya cloudy din mein solar kaise chalta hai?",
    answer:
      "Panels sirf din mein power banate hain. Raat ko aap grid se lete hain; hybrid ya off-grid system ho to battery se chalte hain. Baalish din mein output kam hota hai — is liye hum estimates mein seasonal variation dikhate hain, aur aapka system grid ya battery se cover hota rahta hai.",
  },
  {
    question: "Load shedding mein backup milega?",
    answer:
      "Simple on-grid system load shedding mein automatically band ho jata hai (aapke equipment ki safety ke liye). Backup chahiye to hybrid system lein: battery aapke essential load — fridge, fans, lights, pumps — ko outage ke dauran chalati hai. Battery capacity aapke night load ke hisaab se alag se calculate hoti hai aur quotation mein confirm hoti hai.",
  },
  {
    question: "Net Billing kya hai? (Updated October 2026)",
    answer:
      "NEPRA ke Prosumer Regulations 2026 (9 February 2026 ko notified) ne purani net metering scheme ko net billing se replace kar diya hai. Naye applicants ko unke grid ko beche hue units ka takreeban Rs 11 per unit (national average energy purchase price) milta hai, ek 5-year contract ke sath; purane agreements jo us se pehle sign hue thay unko protect kiya gaya hai. Is liye ab logic yeh hai: apni bijli khud banayein, apna zyada-tar khud istemal karein (self-consumption), aur hybrid battery ko smart backup rakhein. Rates aur rules waqt ke sath badalte hain — publish karne se pehle NEPRA notification zaroor verify karein.",
  },
  {
    question: "On-grid, hybrid aur off-grid mein kya farq hai?",
    answer:
      "On-grid: K-Electric se juda hua, koi battery nahi, bill kam hota hai net billing ke sath. Hybrid: grid ke sath battery bhi — load shedding mein backup milta hai, is liye Karachi ke liye yehi commonly recommended hota hai. Off-grid: pura system battery par chalta hai, grid nahi chahiye, lekin battery cost aur capacity zyada hoti hai. Hum survey ke baad aapke load aur budget ke hisaab se recommend karte hain.",
  },
  {
    question: "Installments ya bank financing mil sakti hai?",
    answer:
      "Kayi banks aur solar financiers Pakistan mein installment plans offer karte hain. Terms, markup aur approval bank ki taraf se hoti hai — hum aapko current options bata sakte hain, lekin final installment plan financier ka hota hai. [CONFIRM current installment partners before publishing]",
  },
  {
    question: "Flat ya apartment mein lagwa sakte hain?",
    answer:
      "Haan, agar shared rooftop par permission ho. Society ya building management ki written permission, roof ka structural check aur wiring route zaroori hota hai. Hum survey mein yeh sab verify karke batate hain ke flat ke liye kaunsa size realistic hai.",
  },
  {
    question: "Karachi ki dust aur salt air se output to nahi girta?",
    answer:
      "Girta hai — coastal dust aur salt film panels ki output kam kar deti hai, aur humidity mounting parts ko nuksan pahuncha sakti hai. Is liye hum corrosion-resistant mounting, sahi cable routing aur quality inverter use karte hain, aur cleaning schedule recommend karte hain (aam tor par har 4–8 hafte, aapki location ke hisaab se). Regular cleaning hi output wapas lati hai.",
  },
  {
    question: "Warranty milti hai?",
    answer:
      "Panels aur inverter par manufacturer ki apni performance warranty hoti hai, jo brand ke sath aati hai — aur installation par humari apni workmanship warranty [X] years hai. Brand-wise warranty documents quotation aur handover ke waqt paper par milte hain. [CONFIRM real warranty terms before publishing]",
  },
  {
    question: "Aap kaunse brands lagate hain?",
    answer:
      "Hum wohi brands supply karte hain jo humare paas actually stock mein hain — panels, inverter aur battery ke options quotation ke sath confirm hote hain. [LIST ONLY BRANDS ACTUALLY SOLD — replace this answer before publishing]",
  },
];

/* ==========================================================================
 * 9. BLOG IDEAS (content only — publish as /blog later)
 * ========================================================================== */

export const insights = [
  {
    category: "Solar Basics",
    title: "Solar System Price in Karachi: What Decides the Cost",
    excerpt:
      "System size, roof condition and equipment choice set the price — how the numbers add up in rupees.",
    date: "[DATE]",
  },
  {
    category: "Hybrid Solar",
    title: "Hybrid Solar System in Karachi: Backup During Load Shedding",
    excerpt:
      "How much battery you actually need for fans, fridge and lights when the grid goes down.",
    date: "[DATE]",
  },
  {
    category: "Net Billing",
    title: "Net Billing in Pakistan: What Changed for Solar Owners in 2026",
    excerpt:
      "NEPRA replaced net metering — what the new export rate and 5-year contract mean for your bill.",
    date: "[DATE]",
  },
];

/* ==========================================================================
 * 10. VALUES & TEAM
 * ========================================================================== */

export const values = [
  {
    title: "Free survey, honest advice",
    description:
      "The site survey and load calculation are free. If solar doesn't fit your case, we say so directly.",
  },
  {
    title: "One clear quote",
    description:
      "One fixed quote that lists equipment and labour separately. No surprise charges.",
  },
  {
    title: "Built for Karachi's climate",
    description:
      "Corrosion-resistant mounting, clean cable routing, and panels kept free of coastal dust and salt.",
  },
  {
    title: "We answer on WhatsApp",
    description:
      "Karachi-based team answering directly on WhatsApp — no call center, no bot.",
  },
];

/** PLACEHOLDERS — replace with real team members before launch. */
export const team = [
  {
    name: "[NAME 1]",
    role: "[ROLE]",
    initials: "[N]",
    bio: "[One line about the real person and their work.]",
  },
  {
    name: "[NAME 2]",
    role: "[ROLE]",
    initials: "[N]",
    bio: "[One line about the real person and their work.]",
  },
  {
    name: "[NAME 3]",
    role: "[ROLE]",
    initials: "[N]",
    bio: "[One line about the real person and their work.]",
  },
];

/* ==========================================================================
 * 11. SOLAR PACKAGES (quotation mode) — indicative placeholders only
 * ========================================================================== */

export type PackageVariant = {
  type: SystemTypeId;
  inverter: string;
  battery: string | null;
  /** Configured PKR equipment price. null ⇒ price only on confirmed quotation. */
  pricePkr: number | null;
};

export type SolarPackage = {
  id: string;
  capacityKw: number;
  panelWatts: number;
  panelCount: number;
  /** Actual installed DC capacity after rounding panels up. */
  kwp: number;
  includes: string[];
  variants: PackageVariant[];
};

/**
 * CONFIGURE ME — indicative package data.
 * Prices are placeholder estimates until the real price list is pasted in.
 * Every price renders with an explicit "estimate, not a quotation" notice,
 * and any null price simply shows "confirmed quotation required".
 */
export const solarPackages: SolarPackage[] = (
  [
    { capacityKw: 3, price: 435_000, hybrid: 585_000, offgrid: 890_000 },
    { capacityKw: 5, price: 690_000, hybrid: 915_000, offgrid: 1_390_000 },
    { capacityKw: 6, price: 810_000, hybrid: 1_075_000, offgrid: 1_640_000 },
    { capacityKw: 8, price: 1_060_000, hybrid: 1_405_000, offgrid: 2_140_000 },
    { capacityKw: 10, price: 1_310_000, hybrid: 1_735_000, offgrid: 2_640_000 },
    { capacityKw: 15, price: 1_940_000, hybrid: 2_560_000, offgrid: null },
  ] as const
).map(({ capacityKw, price, hybrid, offgrid }) => {
  const panelCount = Math.ceil((capacityKw * 1000) / 550);
  return {
    id: `${capacityKw}kw`,
    capacityKw,
    panelWatts: 550,
    panelCount,
    kwp: Math.round((panelCount * 550) / 100) / 10,
    includes: [
      `${panelCount} × 550 W tier-1 solar panels`,
      "Mounting structure, DC/AC cabling & breakers",
      "Net-billing-ready installation & commissioning",
      "Monitoring app setup + installation warranty",
    ],
    variants: [
      {
        type: "on-grid" as const,
        inverter: `${capacityKw} kW on-grid inverter`,
        battery: null,
        pricePkr: price as number | null,
      },
      {
        type: "hybrid" as const,
        inverter: `${capacityKw} kW hybrid inverter`,
        battery: `${Math.max(5, Math.round(capacityKw))} kWh battery bank`,
        pricePkr: hybrid as number | null,
      },
      {
        type: "off-grid" as const,
        inverter: `${capacityKw} kW off-grid inverter`,
        battery: `${Math.max(10, Math.round(capacityKw * 2))} kWh battery bank`,
        pricePkr: offgrid as number | null,
      },
    ],
  };
});

/** Installation labour options — separate from equipment, off by default. */
export const installationLabour = [
  {
    id: "standard",
    label: "Standard rooftop installation — single storey, easy roof access",
    chargePkr: 85_000,
  },
  {
    id: "elevated",
    label: "Elevated roof — steel structure / extra mounting required",
    chargePkr: 130_000,
  },
  {
    id: "complex",
    label: "Multi-storey or complex roof — scaffolding & safety rigging",
    chargePkr: 175_000,
  },
  {
    id: "ground",
    label: "Ground-mount or carport installation",
    chargePkr: 150_000,
  },
] as const;

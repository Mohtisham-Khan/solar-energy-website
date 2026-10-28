/**
 * Placeholder content for the marketing site.
 * Everything here is invented demo copy — replace with real business content.
 */

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
    cardTitle: ["Residential", "Solar Installation"],
    stripTitle: "Residential",
    short: "Power your home with clean, reliable solar energy.",
    description:
      "We design a rooftop system around your actual usage, roof shape and budget — then handle permits, install and the utility interconnection. One fixed quote, no surprises.",
    features: [
      "Custom rooftop design using your 12 months of bills",
      "Tier-1 panels, inverters and monitoring included",
      "Permits, inspections and utility paperwork handled",
      "25-year panel performance warranty",
    ],
    location: "PureSun Residency, NewYork",
    chips: ["Custom rooftop solar design", "High-efficiency solar panels"],
    icon: "house",
    image: {
      src: "/services/sidential-solar.jpg",
      alt: "Rooftop solar array being installed on a home",
    },
  },
  {
    slug: "commercial-solar",
    number: "02",
    title: "Commercial Industrial Solar",
    cardTitle: ["Commercial", "& Industrial Solar"],
    stripTitle: "Commercial",
    short: "Smart solar solutions designed for modern homes.",
    description:
      "Scalable solar solutions that help businesses reduce operational costs while achieving sustainability goals through efficient, reliable energy systems.",
    features: [
      "Rooftop, carport and ground-mount arrays",
      "Demand-charge and time-of-use optimization",
      "Turnkey EPC: engineering, procurement, construction",
      "PPA, lease and cash-fit financing guidance",
    ],
    location: "Suncrest Residence, CA",
    chips: ["Large-scale system planning", "Energy usage optimization"],
    icon: "panel",
    image: {
      src: "/services/commercial-solar.jpg",
      alt: "Industrial buildings with rooftop solar arrays",
    },
  },
  {
    slug: "battery-storage",
    number: "03",
    title: "Solar System Engineering",
    cardTitle: ["Solar Battery", "Storage"],
    stripTitle: "Solar Battery",
    short: "Upgrade your home with sustainable solar power.",
    description:
      "Expertly engineered solar layouts designed to maximize energy output, efficiency, and dependable long-term system performance.",
    features: [
      "Works with new installs or existing systems",
      "Automatic switchover during outages",
      "Charge from solar by day, run your home at night",
      "Scalable capacity as your needs grow",
    ],
    location: "Helio Garden Homes, NA",
    chips: ["Site analysis & shading study", "Load calculation & optimization"],
    icon: "pump",
    image: {
      src: "/services/engineering.jpg",
      alt: "Solar engineers reviewing an installation on site",
    },
  },
  {
    slug: "maintenance-monitoring",
    number: "04",
    title: "Installation & Maintenance",
    cardTitle: ["Maintenance &", "System Monitoring"],
    stripTitle: "Maintenance",
    short: "Reliable solar systems built for residential needs.",
    description:
      "Expert installation paired with continuous monitoring and maintenance to maintain optimal performance and efficiency of your solar system.",
    features: [
      "24/7 remote performance monitoring",
      "Panel cleaning, inspections and servicing",
      "Inverter and optimizer repair",
      "Priority response for warranty work",
    ],
    location: "Los Angeles, CA",
    chips: ["Certified installation team", "Safety-first procedures"],
    icon: "checklist",
    image: {
      src: "/services/maintenance.jpg",
      alt: "Solar panels installed on a tiled roof against a blue sky",
    },
  },
];

/** Count-up stats row (Sollas states-section). */
export const stateStats = [
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: "headset",
    description:
      "Reliable, high-performance solar solutions for residential and commercial projects.",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Installations",
    icon: "percent",
    description:
      "Successfully designed and installed solar systems for homes and businesses.",
  },
  {
    value: 12,
    suffix: " MW+",
    label: "Energy Generated",
    icon: "trending-down",
    description:
      "Generated sustainable power while reducing carbon emissions at scale.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Happy Clients",
    icon: "pie",
    description:
      "Trusted by clients for quality work, clear communication, and ongoing support.",
  },
] as const;

/** Simple number strip (used on the About page). */
export const stats = [
  { value: "500+", label: "Systems installed" },
  { value: "12", label: "Years in business" },
  { value: "98%", label: "Would recommend us" },
  { value: "25 yr", label: "Panel warranty" },
];

export const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Our solar experts evaluate your property, review energy usage, and recommend the best solar solution—completely free and no obligation.",
  },
  {
    number: "02",
    title: "Custom System Design",
    description:
      "We design high-efficiency solar systems that fit your roof or site, ensuring maximum energy production and long-term reliability.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our certified team installs your solar system with precision, following all safety standards and minimizing disruption to your home or business.",
  },
  {
    number: "04",
    title: "Power On & Start Saving",
    description:
      "Once installed, your system starts generating electricity immediately, reducing costs and providing energy independence.",
  },
];

export const projects = [
  {
    title: "Residential Rooftop Solar",
    description:
      "A customized rooftop solar system designed to maximize energy efficiency for a residential property. The system helps reduce electricity bills.",
    image: {
      src: "/projects/project-1.jpg",
      alt: "Solar panels installed on the shingled roof of a two-storey home",
    },
    background: {
      src: "/projects/project-section-bg-1.webp",
      alt: "",
    },
  },
  {
    title: "Commercial Solar Power",
    description:
      "A large-scale commercial solar installation designed to support modern business operations with reliable, cost-effective renewable energy.",
    image: {
      src: "/projects/project-2.jpg",
      alt: "Rows of solar panels on a ground-mount array with green hills behind",
    },
    background: {
      src: "/projects/project-section-bg-2.webp",
      alt: "",
    },
  },
  {
    title: "Industrial Wind Solar",
    description:
      "Reduce operational costs and boost sustainability for your business. Professional setup and ongoing support to ensure maximum efficiency.",
    image: {
      src: "/projects/project-3.jpg",
      alt: "Ground-mount solar panels under a clear blue sky with a wind turbine",
    },
    background: {
      src: "/projects/project-section-bg-3.webp",
      alt: "",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Our July bill went from $243 to about $16. The crew was on time, cleaned up everything, and the WhatsApp support line actually replies in minutes.",
    name: "Maria G.",
    role: "Homeowner · Austin, TX",
    initials: "MG",
  },
  {
    quote:
      "We installed 46 kW across our two restaurant roofs. Fixed price, done in nine days, and our demand charges dropped by a third.",
    name: "David R.",
    role: "Business owner · Round Rock, TX",
    initials: "DR",
  },
  {
    quote:
      "The battery kicked in during the ice storm and we never lost power. Best money we've spent on the house.",
    name: "Priya S.",
    role: "Homeowner · Cedar Park, TX",
    initials: "PS",
  },
  {
    quote:
      "From consultation to installation, everything was seamless. We noticed a significant drop in our energy bills, and the system runs flawlessly.",
    name: "Tom H.",
    role: "Homeowner · Georgetown, TX",
    initials: "TH",
  },
];

export const faqs = [
  {
    question: "How much can I actually save with solar?",
    answer:
      "Most Central Texas homes save $1,200–$2,400 in the first year, depending on your bill, roof orientation, and electricity rate. Try our free savings calculator for a personalized estimate in under a minute.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Design and permitting usually take 2–4 weeks; installation is typically one day for a home. Commercial projects run 4–8 weeks depending on utility approval.",
  },
  {
    question: "What happens at night or on cloudy days?",
    answer:
      "Your panels only make power in daylight, so you draw from the grid at night — with net metering, your daytime surplus credits offset that. Add a battery and you keep running through outages too.",
  },
  {
    question: "Do you handle permits, incentives, and paperwork?",
    answer:
      "Yes — permits, inspections, utility interconnection, and the 30% federal clean energy credit paperwork are all included. You sign, we handle the rest.",
  },
  {
    question: "Can I add battery storage later?",
    answer:
      "Absolutely. Every system we design is storage-ready, and batteries can be retrofitted to existing installations — we'll size the right capacity when you're ready.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "25-year manufacturer performance warranty on panels, 10–12 years on inverters, and a 10-year workmanship warranty on our installation — including roof penetrations.",
  },
];

export const insights = [
  {
    category: "Solar Basics",
    title: "What Determines How Much You'll Save with Solar",
    excerpt:
      "Bill size, roof direction, and your utility's rate shape every solar payback — here's how they add up.",
    date: "Oct 2, 2026",
  },
  {
    category: "Residential Solar",
    title: "Battery Backup: Worth It in Central Texas?",
    excerpt:
      "Outages, time-of-use rates, and backup power — a practical guide to deciding on storage.",
    date: "Sep 18, 2026",
  },
  {
    category: "Commercial Solar",
    title: "How Local Businesses Cut Demand Charges",
    excerpt:
      "Where commercial energy costs really come from, and how solar plus storage shrinks them.",
    date: "Aug 27, 2026",
  },
];

export const values = [
  {
    title: "Safety first",
    description:
      "Certified installers, fall protection on every roof, and no shortcuts on electrical work.",
  },
  {
    title: "Transparent pricing",
    description:
      "One fixed quote that spells out equipment, labor, and savings. No bait-and-switch financing.",
  },
  {
    title: "Craftsmanship",
    description:
      "Clean conduit runs, sealed penetrations, and a photo documented handover of your system.",
  },
  {
    title: "Local & responsive",
    description:
      "A Central Texas crew that answers on WhatsApp — not a call center three states away.",
  },
];

export const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    initials: "AR",
    bio: "Started Sunhaven in 2014 after installing his own rooftop system.",
  },
  {
    name: "Jordan Lee",
    role: "Head of Installations",
    initials: "JL",
    bio: "NABCEP-certified with 400+ residential installs under his belt.",
  },
  {
    name: "Samira Khan",
    role: "Customer Success Lead",
    initials: "SK",
    bio: "Keeps every customer updated from first message to final inspection.",
  },
];

/* ==========================================================================
 * PAKISTAN SOLAR CALCULATOR DATA
 * Everything the calculator uses lives here so it can be re-tuned without
 * touching the UI: city solar resource, sizing assumptions, packages,
 * equipment prices and installation labour charges.
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
    note: "Tied to WAPDA / your DISCO. No batteries — day-time solar offsets your bill through net metering where available.",
  },
  {
    id: "hybrid",
    label: "Hybrid",
    note: "Grid-tied with battery backup. Battery capacity is sized separately from your consumption and is confirmed at quotation.",
  },
  {
    id: "off-grid",
    label: "Off-grid",
    note: "Runs without the grid. Needs battery storage sized for your night-time load — battery capacity is confirmed at quotation.",
  },
] as const;

export type SystemTypeId = (typeof systemTypes)[number]["id"];

/** Panel choices offered in the calculator (tier-1 modules common in PK). */
export const panelOptions = [
  { watts: 450, label: "450 W mono PERC" },
  { watts: 550, label: "550 W mono PERC (standard)" },
  { watts: 600, label: "600 W bifacial" },
] as const;

/** Sizing model constants — surfaced in the transparency section. */
export const solarAssumptions = {
  /** Baseline system performance ratio before the city derate. */
  basePerformanceRatio: 0.78,
  /** Days per month used to convert monthly targets to daily. */
  daysPerMonth: 30,
  /** Seasonal band shown with generation estimates (winter vs summer). */
  seasonalLow: 0.75,
  seasonalHigh: 1.12,
  /** Practical installed sizes the recommendation rounds up to (kW). */
  practicalSizes: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50],
  minCapacityKw: 1,
  maxCapacityKw: 50,
  /**
   * Blended Rs/kWh used only to convert an entered monthly bill into units.
   * DISCO slab rates + taxes differ by region and consumption band.
   */
  avgTariffPerKwh: 65,
  /** Typical usable share of production consumed on-site (hybrid/on-grid). */
  selfConsumption: 0.7,
};

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
 * Prices are placeholder estimates until the real Sunhaven price list is
 * pasted in. Every price renders with an explicit "estimate, not a quotation"
 * notice, and any null price simply shows "confirmed quotation required".
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
      "Net-metering-ready installation & commissioning",
      "Monitoring app setup + 10-year installation warranty",
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

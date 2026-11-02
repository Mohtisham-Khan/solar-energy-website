import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutStatCard } from "@/components/about-stat-card";
import { ArrowUpRight, ServiceIcon, StatIcon } from "@/components/icons";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { CountUp, Reveal, SplitHeading } from "@/components/motion/effects";
import { HorizontalSteps } from "@/components/motion/horizontal-steps";
import { StackedProjects } from "@/components/motion/stacked-projects";
import { TestimonialSlider } from "@/components/motion/testimonial-slider";
import type { Service } from "@/lib/content";
import { faqJsonLd } from "@/lib/seo";
import { SITE_URL, site, waLink, WA_GREETING } from "@/lib/site";

export type ServiceHome = Service;

export const metadata: Metadata = {
  title: {
    absolute: `Solar Panel Installation in Karachi | ${site.name} - Free Quote`,
  },
  description:
    "Karachi-based solar company for homes, factories and offices: free site survey, fixed quote, K-Electric paperwork handled, installments available. DHA, Clifton, Gulshan-e-Iqbal & more.",
  alternates: { canonical: "/" },
  openGraph: {
    locale: site.locale,
    url: "/",
    title: `Solar Panel Installation in Karachi | ${site.name} - Free Quote`,
    description:
      "Solar panel installation in Karachi - free site survey, fixed quote, K-Electric paperwork handled and WhatsApp support. Residential, commercial and industrial systems.",
  },
};

const homeWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: `Solar Panel Installation in Karachi | ${site.name}`,
  description: site.description,
  inLanguage: "en-PK",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

// Staircase heights for the states columns (bottom-aligned), matched to the reference.
const COL_HEIGHT_CLASS = [
  "lg:h-[220px]",
  "lg:h-[262px]",
  "lg:h-[318px]",
  "lg:h-[430px]",
] as const;

const ctaChecks = ["No obligation", "Free site survey", "Installments available"];

const homeSteps = [
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

const homeProjects = [
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

const aboutWidgets = [
  {
    value: "[X] MW",
    suffix: "",
    label: "Clean Energy Generated",
    description: "Rooftop solar designed and installed across Karachi.",
    href: "/about",
  },
  {
    value: "[X]+",
    suffix: "",
    label: "Systems Installed",
    description: "Bungalows, flats, offices and factories - [X]+ and counting.",
    href: "/about",
  },
];

const homeServices: ServiceHome[] = [
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

const homeStats = [
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

const homeFaqs = [
  {
    question: "Rs 40,000 ke bill par kitna kam hoga?",
    answer:
      "Yeh aapke units par depend karta hai ke aapke kitne units istemal hotay hain aur unka kitna load din mein chalta hai. 600 units/month wale ghar ke liye 5–6 kW system aam tor par din ke zyada-tar istemal cover kar leta hai — baaki sab cheezein roof, shading aur load pattern par depend karti hain. Hamara calculator aapke apne numbers par estimate deta hai — ise sirf estimate samjhein, bill ka guaranteed amount nahi. Hum bill khatam hone ka wada nahi karte.",
  },
  {
    question: "Kitne din mein system install ho jata hai?",
    answer:
      "Survey ke baad design aur quote typically 2–3 working days mein tayyar hota hai, aur installation aam bungalow rooftops par aek se teen din leti hai. K-Electric ka application aur netting approval ka waqt alag hota hai aur DISCO ki process par depend karta hai — hum paperwork file karke status track karte hain.",
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

const homeTestimonials = [
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

export default function Home() {
  return (
    <>
      <JsonLd data={homeWebPageJsonLd} />
      <JsonLd data={faqJsonLd()} />

      {/* ================================ HERO ================================ */}
      <main>
        <section
          className="relative min-h-[120vh] overflow-hidden bg-cover bg-center bg-no-repeat pt-24 pb-48 md:pt-[100px] md:pb-[100px]"
          style={{ backgroundImage: "url('/hero/hero-sky.png')" }}
        >
          {/* hills + houses, behind the content block (inset auto 0 10%) */}
          <Image
            src="/hero/hero-hills.webp"
            alt=""
            aria-hidden="true"
            width={1440}
            height={394}
            priority
            className="pointer-events-none absolute bottom-[10%] left-0 w-full select-none"
          />
          <Image
            src="/hero/hero-particles.svg"
            alt=""
            aria-hidden="true"
            width={1440}
            height={252}
            unoptimized
            className="pointer-events-none absolute bottom-[-10%] left-0 w-full select-none"
          />
          <div className="wrap relative z-10 flex flex-col items-center text-center">
            <div className="mx-auto mb-[38px] flex w-full max-w-[962px] flex-col items-center">
              <SplitHeading
                as="h1"
                mode="word"
                gradient
                onLoad
                delay={0.15}
                text="Solar Panels for Karachi Homes: Lower Bills, No Load Shedding"
                className="text-gradient mb-8 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.06]"
              />
              <Reveal delay={0.55} y={28}>
                <p className="mx-auto mb-10 max-w-[658px] text-base leading-relaxed text-muted md:text-lg">
                  Free site survey, one fixed quote, K-Electric paperwork
                  handled, installment options and WhatsApp support - all from
                  one local team in Karachi.
                </p>
              </Reveal>
              <Reveal delay={0.7} y={24}>
                <ButtonLink
                  href={waLink(WA_GREETING)}
                  variant="lime"
                >
                  Get a Free Solar Quote on WhatsApp
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={0.85} y={70} className="mx-auto w-full max-w-[1036px]">
              <Image
                src="/hero/hero-dashboard.webp"
                alt={`${site.name} solar monitoring dashboard showing production, battery status and energy consumption`}
                width={1600}
                height={841}
                className="mx-auto h-auto w-full object-cover object-top md:h-[544px]"
              />
            </Reveal>
          </div>
        </section>

        {/* =============================== ABOUT ================================ */}
        <section className="wrap py-20 md:py-32 lg:py-[140px]">
          {/* title block slides up as one unit */}
          <Reveal y={60} duration={1} className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
            <Eyebrow>Know about us</Eyebrow>
            <div className="mt-6 flex w-full flex-col items-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <h2 className="text-gradient text-[34px] font-medium leading-[1.16] md:text-[56px]">
                  Powering Karachi with
                </h2>
                <span className="inline-flex">
                  <Image
                    src="/about/title-avatar-1.png"
                    alt={`${site.name} team`}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <Image
                    src="/about/title-avatar-2.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                </span>
                <h2 className="text-gradient text-[34px] font-medium leading-[1.16] md:text-[56px]">
                  Clean
                </h2>
              </div>
              <h2 className="text-gradient mx-auto max-w-4xl text-[34px] font-medium leading-[1.16] md:text-[56px]">
                Solar Energy for a Brighter, Cheaper Tomorrow
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-24">
            {/* widgets scale up on scroll */}
            <Reveal scale={0.9} y={0} duration={0.7} delay={0.05}>
              <AboutStatCard widget={aboutWidgets[0]} />
            </Reveal>
            <Reveal scale={0.9} y={0} duration={0.7} delay={0.15}>
              <article className="group relative h-[360px] overflow-hidden rounded-lg bg-sky">
                <Image
                  src="/about/about-worker.webp"
                  alt={`${site.name} solar technician working on a Karachi rooftop`}
                  width={360}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* hover: dark linear rises from the bottom */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[157px] translate-y-full bg-gradient-to-b from-transparent to-black transition-transform duration-500 ease-out group-hover:translate-y-0"
                />
                {/* hover: lime arrow pops in, top-right */}
                <Link
                  href="/about"
                  aria-label="About us"
                  className="absolute right-5 top-5 z-10 grid h-[60px] w-[60px] scale-0 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 ease-out group-hover:scale-100 focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-1.5 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-2xl font-semibold uppercase leading-[1.24] tracking-[-0.02em] text-white md:text-[30px]">
                    [X]+ Clean Energy Systems
                  </p>
                  <p className="text-sm font-medium text-white">
                    Designed, installed and monitored by one local Karachi crew.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal scale={0.9} y={0} duration={0.7} delay={0.25}>
              <AboutStatCard widget={aboutWidgets[1]} />
            </Reveal>
          </div>
        </section>

        {/* ============================== SERVICES ============================== */}
        <section className="border-y border-line bg-white py-20 md:py-32 lg:py-[140px]">
          <div className="wrap">
            <div className="text-center">
              <Reveal>
                <Eyebrow>Services</Eyebrow>
              </Reveal>
              <SplitHeading
                gradient
                text="Complete Solar Services in Karachi"
                className="text-gradient mx-auto mt-6 max-w-3xl text-4xl font-semibold md:text-[55px]"
              />
            </div>

            {/* service cards */}
            <div className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {homeServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl bg-card p-5 pb-6 md:min-h-[314px]">
                    <span className="grid h-[54px] w-[54px] place-items-center rounded-2xl bg-lime text-ink">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </span>
                    <div className="mt-auto pt-8">
                      <h3 className="text-2xl font-medium leading-8 text-ink">
                        {s.cardTitle[0]}
                        <br />
                        {s.cardTitle[1]}
                      </h3>
                      <p className="mt-3.5 text-[15px] leading-[22px] text-muted">
                        {s.short}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* numbered service rows */}
            <div className="mt-16 space-y-14">
              {homeServices.map((s) => (
                <Reveal key={s.slug}>
                  <div className="flex items-center justify-between gap-4 pb-10">
                    <div className="flex items-baseline gap-7">
                      <span className="font-display text-3xl font-semibold leading-[1.1] md:text-[46px]">
                        {s.number}/
                      </span>
                      <h3
                        id={s.slug}
                        className="scroll-mt-28 text-3xl font-semibold leading-[1.1] md:text-[46px]"
                      >
                        {s.title}
                      </h3>
                    </div>
                    <span className="hidden shrink-0 text-2xl text-ink md:block">
                      {s.location}
                    </span>
                  </div>
                  <article className="group overflow-hidden rounded-2xl bg-sky">
                    <div className="relative overflow-hidden">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        width={1440}
                        height={372}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-[320px] md:h-[392px]"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sky to-transparent"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-5 pb-8 pt-10 sm:gap-8 sm:px-10 sm:pb-9 sm:pt-16">
                      <div className="min-w-0">
                        <ul className="flex flex-wrap gap-3.5">
                          {s.chips.map((chip) => (
                            <li
                              key={chip}
                              className="rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:bg-lime"
                            >
                              {chip}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 max-w-[700px] text-base leading-7 text-ink">
                          {s.description}
                        </p>
                      </div>
                      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:rotate-45 sm:h-24 sm:w-24 md:h-28 md:w-28">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <ButtonLink href="/services" variant="lime">
                Explore All Services
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* =============================== STATES =============================== */}

        <section className="bg-sky py-20 md:py-32 lg:py-[140px]">
          <div className="wrap">
            <div className="text-center">
              <Reveal>
                <Eyebrow>Our impact</Eyebrow>
              </Reveal>
              <SplitHeading
                gradient
                text="Powering Karachi with Clean Energy"
                className="text-gradient mx-auto mt-6 max-w-[620px] text-[34px] font-semibold leading-[1.08] md:text-[56px]"
              />
            </div>

            <div className="mt-16 grid gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:items-end lg:gap-y-0">
              {homeStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1}>
                  <div
                    className={`group/stat relative flex h-full md:py-4 flex-col pl-6 transition-all duration-200 ease-in group-hover/stat:ease-out group-hover/stat:pb-6 group-hover/stat:pt-6 lg:pr-6 ${i > 0 ? "lg:border-l lg:border-ink/15" : ""
                      } ${COL_HEIGHT_CLASS[i]}`}
                  >
                    {/* hover card: fills the column, reveals upward from the bottom */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 rounded-[10px] bg-white opacity-0 transition-all duration-200 ease-in group-hover/stat:ease-out group-hover/stat:scale-y-100 group-hover/stat:opacity-100"
                    />

                    {/* number + label: sit on the sky, tint navy on hover */}
                    <div className="relative text-ink transition-colors duration-200 ease-in group-hover/stat:ease-out group-hover/stat:text-[#1f5c46]">
                      <p className="font-display text-[36px] font-semibold leading-none">
                        <CountUp value={stat.value} suffix={stat.suffix} delay={i * 0.3} />
                      </p>
                      <div className="mt-3.5 flex items-center gap-2.5 text-[20px] font-medium">
                        <StatIcon name={stat.icon} className="h-[22px] w-[22px]" />
                        {stat.label}
                      </div>
                    </div>

                    {/* description: bottom-pinned, lifts with the card padding on hover */}
                    <p className="relative mt-auto text-[15px] leading-6 text-ink/75">
                      {stat.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================ STEPS =============================== */}
        <section className="border-y border-line bg-white py-20 md:py-32 lg:py-[140px]">
          <div className="wrap">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal>
                  <Eyebrow>How we work</Eyebrow>
                </Reveal>
                <SplitHeading
                  gradient
                  text="A Guided Process for a Stress-Free Switch"
                  className="text-gradient mt-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl"
                />
              </div>
              <Reveal delay={0.15}>
                <TextLink href={waLink(WA_GREETING)}>
                  Ask us anything
                </TextLink>
              </Reveal>
            </div>
          </div>
          <div className="">
            <HorizontalSteps steps={homeSteps} />
          </div>
        </section>

        {/* ============================== PROJECTS ============================== */}
        <StackedProjects projects={homeProjects} />

        {/* ================================= FAQ ================================ */}
        <section className="border-y border-line bg-white py-20 md:py-32 lg:py-[140px]">
          <div className="wrap">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-0">
              <div>
                <Reveal>
                  <Eyebrow>FAQ</Eyebrow>
                </Reveal>
                <div className="md:sticky md:top-20">
                  <SplitHeading
                    gradient
                    text="Powering a Cleaner Future with Solar Energy"
                    className="text-gradient mt-6 max-w-[560px] text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[56px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {homeFaqs.map((faq, i) => (
                  <Reveal key={faq.question} delay={i * 0.05}>
                    <details
                      name="faq"
                      open={i === 0}
                      className="group rounded-lg border border-line bg-white"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-[34px] text-lg font-normal text-ink [&::-webkit-details-marker]:hidden md:text-xl">
                        {faq.question}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6 shrink-0 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <p className="max-w-[520px] px-6 pb-8 text-[15px] leading-[26px] text-ink/80">
                        {faq.answer}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ TESTIMONIALS ============================ */}
        <section className="relative overflow-hidden">
          {/* full-bleed painterly landscape backdrop */}
          <Image
            src="/testimonials/testimonials-bg.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="wrap relative py-20 md:py-[114px]">
            <div className="text-center">
              <Reveal>
                <Eyebrow className="bg-white px-2.5 py-[5px] text-xs">
                  Testimonial
                </Eyebrow>
              </Reveal>
              <SplitHeading
                gradient
                text="Trusted by Our Clients"
                className="text-gradient mx-auto mt-6 text-[30px] font-semibold leading-[1.15] md:text-[46px]"
              />
            </div>
            <Reveal className="mt-14">
              <TestimonialSlider testimonials={homeTestimonials} />
            </Reveal>
          </div>
        </section>

        {/* ================================= CTA ================================ */}
        <CtaSection
          eyebrow="Get In Touch"
          heading="Book Your Free Site Survey Today"
          paragraph="Free survey, no obligation, and installment options are available. Show us your bill and your rooftop - we'll tell you the size and the cost."
          buttonText="Get a Free Solar Quote on WhatsApp"
          href={waLink(WA_GREETING)}
          checks={ctaChecks}
        />
      </main>
    </>
  );
}


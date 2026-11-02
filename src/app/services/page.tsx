import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { ServiceIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/seo";
import { site, waLink, WA_GREETING } from "@/lib/site";

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

export const metadata: Metadata = {
  title: "Solar Services in Karachi - Design, Install & AMC",
  description:
    "Residential, commercial and industrial solar in Karachi: system design, installation, K-Electric paperwork and AMC maintenance - one local team.",
  alternates: { canonical: "/services" },
  openGraph: {
    locale: site.locale,
    url: "/services",
    title: `Solar Services in Karachi | ${site.name}`,
    description:
      "Residential and commercial solar, engineering and maintenance in Karachi - everything your roof needs, handled by one local team.",
  },
};

const ctaChecks = ["No obligation", "Free site survey", "Installments available"];

const servicesPageData: Service[] = [
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


export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      {/*  HERO  */}
      <section>
        {/* gradient: white -> sky blue */}
        <div className="bg-[linear-gradient(to_bottom,#fff_0%,#dce9e4_55%)] px-5 pb-[200px] pt-14 text-center md:pb-[360px] md:pt-20">
          <SplitHeading
            as="h1"
            mode="word"
            gradient
            onLoad
            text="Complete Solar Solutions for Karachi Homes & Businesses"
            className="text-gradient mx-auto max-w-[860px] text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
          />
          <Reveal delay={0.35} y={28}>
            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-ink md:text-base">
              From bungalows to factories - from survey to installation and
              K-Electric paperwork, all with one local team in Karachi. End-to-end
              solar services: system design, installation and AMC maintenance.
            </p>
            <a
              href={waLink(WA_GREETING)}
              className="group/btn mt-8 inline-flex items-center gap-5 rounded-full bg-lime py-1.5 pl-9 pr-1.5 text-base font-medium text-ink"
            >
              Get a Free Solar Quote on WhatsApp
              <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover/btn:rotate-45">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>

        {/* image: overlaps the blue block, continues onto white */}
        <div className="relative z-10 -mt-[120px] px-5 pb-16 md:-mt-[280px] md:pb-24">
          <div className="relative mx-auto h-[260px] max-w-[1200px] overflow-hidden rounded-md md:h-[620px]">
            <Image
              src="/hero/service-page-hero-image.png"
              alt="Wind turbines and solar panels on green hills"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/*  SERVICE DETAIL  */}
      <section className="wrap pb-16 md:pb-28 pt-4 md:pt-8">
        <div>
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
          </Reveal>
          <SplitHeading
            gradient
            text="Our Services and What We Offer"
            className="text-gradient mt-6 mb-8 md:mt-4 md:mb-6 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl"
          />
        </div>
        <div className="flex flex-col gap-8">
          {servicesPageData.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              style={{ top: `${96 + i * 16}px` }}
              className="scroll-mt-28 grid gap-6 rounded-[28px] bg-sky p-3 md:sticky md:grid-cols-2 md:gap-10 md:p-5"
            >
              {/* left: content */}
              <div className="flex flex-col justify-center p-5 md:p-10">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-ink">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>

                <h3 className="mt-12 text-3xl font-medium tracking-[-0.02em] text-ink md:text-[40px] md:leading-[1.1]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[460px] text-base leading-7 text-ink/75 md:text-lg">
                  {service.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {service.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-ink/60 px-4 py-1.5 text-sm text-ink before:mr-1.5 before:content-['•']"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hello! I'd like a free quote for ${service.title}.`)}
                  className="group/btn mt-10 inline-flex w-fit items-center gap-5 rounded-full bg-lime py-2 pl-12 pr-2 text-xl font-medium text-ink"
                >
                  Read more
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover/btn:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* right: image with bottom gradient */}
              <div className="relative h-[280px] overflow-hidden rounded-2xl md:h-[520px]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1f5c46]/90 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*  CTA BAND  */}
      <CtaSection
        eyebrow="Get In Touch"
        heading="Book Your Free Site Survey Today"
        paragraph="Free survey, no obligation, and installment options are available. Show us your bill and your rooftop - we'll tell you the size and the cost."
        buttonText="Get a Free Solar Quote on WhatsApp"
        href={waLink(WA_GREETING)}
        checks={ctaChecks}
      />
    </>
  );
}

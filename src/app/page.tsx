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
import { faqs, services, stateStats } from "@/lib/content";
import { faqJsonLd } from "@/lib/seo";
import { SITE_URL, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Sunhaven Solar installs rooftop solar panels and battery storage for homes and businesses across Greater Austin, Texas. Fixed quotes, 25-year warranty, chat on WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${site.name} — Solar panel installation in Austin, TX`,
    description:
      "Rooftop solar and battery storage for Central Texas homes and businesses. Fixed quotes, 25-year warranty, and support that answers on WhatsApp.",
  },
};

const homeWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: `${site.name} — Solar panel installation in Austin, TX`,
  description: site.description,
  inLanguage: "en-US",
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

const ctaChecks = ["No obligation", "Free site assessment", "Expert advice"];

const aboutWidgets = [
  {
    value: 12,
    suffix: " MW+",
    label: "Clean Energy Generated",
    description: "Certified engineers and experienced installers you can trust.",
    href: "/about",
  },
  {
    value: 500000,
    suffix: "+",
    label: "Tons CO₂ Reduced",
    description: "High-efficiency panels and reliable system components.",
    href: "/about",
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
          {/* 3D hills + houses, behind the content block (Sollas: inset auto 0 10%) */}
          <Image
            src="/hero/hero-hills.webp"
            alt=""
            aria-hidden="true"
            width={1440}
            height={394}
            loading="eager"
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
                text="Your roof is sitting on free energy."
                className="text-gradient mb-8 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.06]"
              />
              <Reveal delay={0.55} y={28}>
                <p className="mx-auto mb-10 max-w-[658px] text-base leading-relaxed text-muted md:text-lg">
                  We design and install high-efficiency solar systems that reduce
                  energy costs and power homes and businesses with clean energy —
                  fixed quotes, permits handled, and support that answers on
                  WhatsApp.
                </p>
              </Reveal>
              <Reveal delay={0.7} y={24}>
                <ButtonLink
                  href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
                  variant="lime"
                >
                  Get a Free Solar Quote
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={0.85} y={70} className="mx-auto w-full max-w-[1036px]">
              <Image
                src="/hero/hero-dashboard.webp"
                alt="Sunhaven monitoring dashboard showing production, battery status and energy consumption"
                width={1600}
                height={841}
                className="mx-auto h-auto w-full object-cover object-top md:h-[544px]"
              />
            </Reveal>
          </div>
        </section>

        {/* =============================== ABOUT ================================ */}
        <section className="wrap py-20 md:py-32 lg:py-[140px]">
          {/* title block slides up as one unit (Sollas slide-up) */}
          <Reveal y={60} duration={1} className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
            <Eyebrow>Know about us</Eyebrow>
            <div className="mt-6 flex w-full flex-col items-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <h2 className="text-gradient text-[34px] font-medium leading-[1.16] md:text-[56px]">
                  Powering Central Texas with
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
            {/* widgets scale up on scroll (Sollas scale-up) */}
            <Reveal scale={0.9} y={0} duration={0.7} delay={0.05}>
              <AboutStatCard widget={aboutWidgets[0]} />
            </Reveal>
            <Reveal scale={0.9} y={0} duration={0.7} delay={0.15}>
              <article className="group relative h-[360px] overflow-hidden rounded-lg bg-sky">
                <Image
                  src="/about/about-worker.webp"
                  alt="Sunhaven technician installing solar panels on a rooftop"
                  width={360}
                  height={360}
                  className="h-full w-full object-cover"
                />
                {/* hover: black linear rises from the bottom (Sollas about-widget-linear) */}
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
                    500+ Clean Energy Systems
                  </p>
                  <p className="text-sm font-medium text-white">
                    Designed, installed and monitored by one local crew.
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
                text="Complete Solar Services"
                className="text-gradient mx-auto mt-6 max-w-3xl text-4xl font-semibold md:text-[55px]"
              />
            </div>

            {/* service cards */}
            <div className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
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
              {services.map((s) => (
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
                text="Powering Communities with Clean Energy"
                className="text-gradient mx-auto mt-6 max-w-[620px] text-[34px] font-semibold leading-[1.08] md:text-[56px]"
              />
            </div>

            <div className="mt-16 grid gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:items-end lg:gap-y-0">
              {stateStats.map((stat, i) => (
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
                    <div className="relative text-ink transition-colors duration-200 ease-in group-hover/stat:ease-out group-hover/stat:text-[#0d375c]">
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
                <TextLink href={waLink("Hi! I'd like to understand your process.")}>
                  Ask us anything
                </TextLink>
              </Reveal>
            </div>
          </div>
          <div className="">
            <HorizontalSteps />
          </div>
        </section>

        {/* ============================== PROJECTS ============================== */}
        <StackedProjects />

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
                {faqs.map((faq, i) => (
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
              <TestimonialSlider />
            </Reveal>
          </div>
        </section>

        {/* ================================= CTA ================================ */}
        <CtaSection
          eyebrow="Get In Touch"
          heading="Ready to Switch to Solar and Save for Years?"
          paragraph="Join thousands of happy customers who are already enjoying clean energy and significant savings. Get your free consultation today."
          buttonText="Get A Free Solar Quote"
          href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
          checks={ctaChecks}
        />
      </main>
    </>
  );
}


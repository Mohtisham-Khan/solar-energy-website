import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Check, ServiceIcon, CheckDouble } from "@/components/icons";
import { ProjectArt } from "@/components/illustrations";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { services } from "@/lib/content";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/seo";
import { site, waLink } from "@/lib/site";
import { SkyHills } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Solar services",
  description:
    "Residential and commercial solar installation, battery storage, and system maintenance across Greater Austin, TX — permits, financing and 25-year warranties included.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: `Solar services | ${site.name}`,
    description:
      "Residential solar, commercial solar, battery storage, and maintenance — everything your roof needs, handled by one local crew.",
  },
};

const artBySlug: Record<string, "roof" | "building" | "ground"> = {
  "residential-solar": "roof",
  "commercial-solar": "building",
  "battery-storage": "ground",
  "maintenance-monitoring": "roof",
};

const ctaChecks = ["No obligation", "Free site assessment", "Expert advice"];


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
        <div className="bg-[linear-gradient(to_bottom,#fff_0%,#8fe0ff_55%)] px-5 pb-[200px] pt-14 text-center md:pb-[360px] md:pt-20">
          <SplitHeading
            as="h1"
            mode="word"
            gradient
            onLoad
            text="Complete Solar Solutions for Homes & Businesses"
            className="text-gradient mx-auto max-w-[860px] text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
          />
          <Reveal delay={0.35} y={28}>
            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-ink md:text-base">
              We provide end-to-end solar energy services designed to reduce costs,
              increase energy independence, and deliver long-term sustainability.
            </p>
            <a
              href={waLink("Hi Sunhaven Solar! I'd like a free consultation.")}
              className="group/btn mt-8 inline-flex items-center gap-5 rounded-full bg-lime py-1.5 pl-9 pr-1.5 text-base font-medium text-ink"
            >
              Get a Free Consultation
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
          {services.map((service, i) => (
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
                  href={waLink(`Hi Sunhaven Solar! I'm interested in ${service.title}.`)}
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
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d375c]/90 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*  CTA BAND  */}
      <CtaSection
        eyebrow="Get In Touch"
        heading="Ready to Switch to Solar and Save for Years?"
        paragraph="Join thousands of happy customers who are already enjoying clean energy and significant savings. Get your free consultation today."
        buttonText="Get A Free Solar Quote"
        href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
        checks={ctaChecks}
      />
    </>
  );
}

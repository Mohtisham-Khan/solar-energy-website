import type { Metadata } from "next";
import { SolarCalculator } from "@/components/calculator";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd, calculatorJsonLd } from "@/lib/seo";
import { site, waLink, WA_GREETING } from "@/lib/site";


export const metadata: Metadata = {
  title: "Solar Calculator for Karachi - Size & Cost",
  description:
    "Free solar calculator for Karachi: enter your monthly bill or units and see the recommended system size in kW, panel count, cost range and monthly saving in PKR.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    locale: site.locale,
    url: "/calculator",
    title: `Solar Calculator for Karachi - Size & Cost | ${site.name}`,
    description:
      "Free solar calculator for Karachi - enter your monthly bill or units and see system size, panels and cost range in PKR.",
  },
};

const ctaChecks = ["No obligation", "Free site survey", "Installments available"];


export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solar calculator", path: "/calculator" },
        ])}
      />

      <section className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal>
          <Eyebrow>Free tool · Pakistan</Eyebrow>
        </Reveal>
        <SplitHeading
          as="h1"
          mode="word"
          gradient
          onLoad
          text="What Size Solar System Does Your Karachi Home Need?"
          className="text-gradient mt-6 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.35} y={28}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Enter your monthly units (or bill in Rs.), pick your city, and get a
            recommended system size, panel count and generation estimate -
            tuned for Pakistani cities. No email, no sales call.
          </p>
        </Reveal>
      </section>

      <section className="wrap pb-16 md:pb-24">
        <SolarCalculator />
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

      <section className="wrap pb-20 md:pb-28">
        <div className="rounded-xl border border-line bg-white px-8 py-12 text-center md:px-14">
          <SplitHeading
            text="Want the Real Number?"
            gradient
            className="text-gradient mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-5xl"
          />
          <Reveal delay={0.15} className="mt-4 flex flex-col items-center">
            <p className="max-w-lg leading-relaxed text-muted">
              Send us your latest bill on WhatsApp and we&apos;ll come back with a
              roof-specific system design and a confirmed quotation.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink
                href={waLink(
                  "Hello! I tried your calculator - please send me a real quote for my rooftop.",
                )}
                variant="wa"
              >
                Exact Quote on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

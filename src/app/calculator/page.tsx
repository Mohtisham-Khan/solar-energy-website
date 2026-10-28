import type { Metadata } from "next";
import { SolarCalculator } from "@/components/calculator";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd, calculatorJsonLd } from "@/lib/seo";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar calculator for Pakistan",
  description:
    "Free solar calculator for Pakistan: enter your monthly units (kWh) or bill in Rs. and get a recommended system size in kW, panel count and daily/monthly generation for your city.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    url: "/calculator",
    title: `Solar calculator for Pakistan | ${site.name}`,
    description:
      "Find out what size solar system your home or business needs in Pakistan — from your monthly electricity units, your city and how much of the bill you want covered.",
  },
};

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
          text="What Size Solar System Do You Actually Need?"
          className="text-gradient mt-6 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.35} y={28}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Enter your monthly units (or bill in Rs.), pick your city, and get a
            recommended system size, panel count and generation estimate —
            tuned for Pakistani cities. No email, no sales call.
          </p>
        </Reveal>
      </section>

      <section className="wrap pb-16 md:pb-24">
        <SolarCalculator />
      </section>

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
                "Hi Sunhaven Solar! I tried your calculator and would like a real quote.",
              )}
              variant="wa"
            >
              Get my real quote
            </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

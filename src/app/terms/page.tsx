import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using ${site.name}'s website, solar calculator estimates and quotation process in Karachi, Pakistan.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    locale: site.locale,
    url: "/terms",
    title: `Terms & Conditions | ${site.name}`,
    description: `How website estimates, quotations and installations work when you deal with ${site.name}.`,
  },
};

const sections = [
  {
    heading: "Website content",
    body: `The information on this website is provided in good faith to help you understand solar options in Karachi. It is general guidance, not professional engineering or financial advice for your specific property.`,
  },
  {
    heading: "Calculator estimates",
    body: `The solar calculator and any package prices shown are indicative estimates only, based on the configured rates in the site data. Actual generation, cost and savings depend on your roof, shading, load pattern, equipment choice and tariff at the time of installation. Nothing on this site is a binding quotation.`,
  },
  {
    heading: "Quotations",
    body: `A confirmed quotation is issued only after a free site survey and load assessment, and it is valid for the period stated on the quotation document. Prices are in Pakistani Rupees (PKR).`,
  },
  {
    heading: "Installations & paperwork",
    body: `Installation timelines and K-Electric application, netting or interconnection approvals depend on third-party processes and cannot be guaranteed. We will file the paperwork and track it on your behalf where you have engaged us.`,
  },
  {
    heading: "Contact us",
    body: `Questions about these terms? Message us on WhatsApp at ${site.phoneDisplay}, email ${site.email}, or write to ${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion}, Pakistan.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${SITE_URL}/terms`,
          name: `Terms & Conditions | ${site.name}`,
          inLanguage: "en-PK",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ])}
      />

      <section className="wrap pb-14 pt-14 md:pb-20 md:pt-20">
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
        </Reveal>
        <SplitHeading
          as="h1"
          mode="word"
          gradient
          onLoad
          text="Terms & Conditions"
          className="text-gradient mt-6 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.3} y={24}>
          <div className="mt-8 max-w-3xl space-y-6 leading-relaxed text-muted">
            <p>
              By using this website you agree to the terms below. They cover how
              estimates, quotations and installations with {site.name} work.
            </p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
                <p className="mt-2">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

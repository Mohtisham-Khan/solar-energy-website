import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and protects the information you share when you contact us for a solar quote in Karachi.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    locale: site.locale,
    url: "/privacy",
    title: `Privacy Policy | ${site.name}`,
    description: `What ${site.name} does with the details you send us through WhatsApp, phone or the contact form.`,
  },
};

const sections = [
  {
    heading: "What we collect",
    body: `When you contact us through WhatsApp, phone, email or the contact form, we receive whatever you choose to share - typically your name, phone number or email, your area in Karachi, and details about your roof or electricity bill. This site does not store payment information and does not run accounts or logins.`,
  },
  {
    heading: "How we use it",
    body: `Only to answer your enquiry, prepare your free site survey and quotation, and follow up on the service you asked about. We do not sell your information to anyone.`,
  },
  {
    heading: "Third-party services",
    body: `WhatsApp handles the messages you send us under its own privacy policy. Email and phone calls are handled by their respective providers. This website itself stores no personal data in cookies or local storage beyond what is needed to render the page.`,
  },
  {
    heading: "Data retention",
    body: `Enquiry details are kept only as long as needed to serve you and meet record-keeping obligations, then deleted on request. You can ask us to remove your details at any time.`,
  },
  {
    heading: "Contact us",
    body: `Questions about this policy? Message us on WhatsApp at ${site.phoneDisplay}, email ${site.email}, or write to ${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion}, Pakistan.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${SITE_URL}/privacy`,
          name: `Privacy Policy | ${site.name}`,
          inLanguage: "en-PK",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
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
          text="Privacy Policy"
          className="text-gradient mt-6 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.3} y={24}>
          <div className="mt-8 max-w-3xl space-y-6 leading-relaxed text-muted">
            <p>
              {site.name} respects your privacy. This page explains what happens
              to the information you share with us through this website,
              WhatsApp, phone or email.
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

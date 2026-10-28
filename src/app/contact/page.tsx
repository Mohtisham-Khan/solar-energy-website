import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { RoofScene, SkyHills } from "@/components/illustrations";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, mailLink, site, telLink, waLink } from "@/lib/site";
import { CtaSection } from "@/components/cta-section";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Chat with Sunhaven Solar on WhatsApp, call +1 (555) 010-0142, or send a message — serving Austin, Round Rock, Cedar Park, Georgetown and Central Texas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: `Contact | ${site.name}`,
    description:
      "Fastest reply is WhatsApp — we answer in minutes during business hours. Or call, email, or send the form.",
  },
};

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const ctaChecks = ["No obligation", "Free site assessment", "Expert advice"];


export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          name: `Contact ${site.name}`,
          inLanguage: "en-US",
          mainEntity: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      {/* ================================ HERO ================================ */}
      <section className="wrap pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
        </Reveal>
        <SplitHeading
          as="h1"
          mode="word"
          gradient
          onLoad
          text="Let's Talk Solar"
          className="text-gradient mt-6 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.35} y={28}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            WhatsApp is fastest — we usually reply within minutes during business
            hours. No call center, no pushy follow-ups.
          </p>
        </Reveal>
      </section>

      {/* ============================= CONTACT GRID =========================== */}
      <section className="wrap pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {/* WhatsApp primary card */}
            <Reveal>
              <a
                href={waLink(
                  "Hi Sunhaven Solar! I'd like to talk about going solar.",
                )}
                className="group flex items-start gap-4 rounded-xl bg-wa p-6 text-white transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/20">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-white/80">
                    Fastest reply
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-white/85">
                    Answers in minutes, Mon–Sat
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={telLink}
                className="flex items-start gap-4 rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-lime text-ink">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                    Call us
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold text-ink">
                    {site.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {site.hoursHuman}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={mailLink}
                className="flex items-start gap-4 rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-card text-ink">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                    Email
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold text-ink">
                    {site.email}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    Replies within one business day
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="rounded-xl border border-line bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-card text-ink">
                  <PinIcon />
                </span>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-muted">
                  Office
                </span>
                <address className="mt-1 not-italic font-display text-lg font-bold text-ink">
                  {site.address.streetAddress}
                  <br />
                  {site.address.addressLocality}, {site.address.addressRegion}{" "}
                  {site.address.postalCode}
                </address>
                <p className="mt-2 text-sm text-muted">{site.hoursHuman}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ SERVICE AREAS =========================== */}
      <section className="border-t border-line bg-white py-16 md:py-24">
        <div className="wrap">
          <div className="grid items-center gap-8 rounded-xl border border-line bg-cream p-6 md:p-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <Eyebrow>Service areas</Eyebrow>
              </Reveal>
              <SplitHeading
                gradient
                text="Proudly Serving Central Texas"
                className="text-gradient mt-5 text-3xl font-semibold leading-tight md:text-4xl"
              />
              <Reveal delay={0.15}>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {site.serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Just outside these? Message us anyway — we regularly travel for
                  bigger projects.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={waLink(
                      "Hi! I'm just outside your listed service areas — do you travel?",
                    )}
                    variant="ink"
                  >
                    Ask about your area
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-xl">
                <RoofScene className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* closing band */}
      <CtaSection
        eyebrow="Get In Touch"
        heading="Ready to Switch to Solar?"
        paragraph=""
        buttonText="Get A Free Solar Quote"
        href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
        checks={ctaChecks}
      />



      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 md:h-72">
          <SkyHills className="h-full w-full" />
        </div>
        <div className="wrap relative flex flex-col items-center py-24 text-center">
          <SplitHeading
            gradient
            text="Ready to Switch to Solar?"
            className="text-gradient mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-5xl"
          />
          <Reveal delay={0.15} className="mt-6 flex flex-col items-center">
            <div>
              <ButtonLink
                href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
                variant="lime"
              >
                Get A Free Solar Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

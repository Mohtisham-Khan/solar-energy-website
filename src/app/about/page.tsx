import type { Metadata } from "next";
import { StatIcon } from "@/components/icons";
import { CtaSection } from "@/components/cta-section";
import { RoofScene, } from "@/components/illustrations";
import { JsonLd } from "@/components/json-ld";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { stats, team, values } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Sunhaven Solar is a local Central Texas solar installer founded in 2014 — 500+ systems installed, licensed and insured, with a 25-year workmanship-backed promise.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: `About us | ${site.name}`,
    description:
      "Meet the local crew behind 500+ solar installations across Greater Austin since 2014.",
  },
};

const statIcons = ["bolt", "calendar", "users", "shield"] as const;

const ctaChecks = ["No obligation", "Free site assessment", "Expert advice"];


export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          name: `About ${site.name}`,
          description: site.description,
          mainEntity: { "@id": `${SITE_URL}/#business` },
          inLanguage: "en-US",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About us", path: "/about" },
        ])}
      />

      {/* ================================ HERO ================================ */}
      <section className="wrap pb-12 pt-14 md:pb-16 md:pt-20">
        <Reveal>
          <Eyebrow>Know about us</Eyebrow>
        </Reveal>
        <SplitHeading
          as="h1"
          mode="word"
          gradient
          onLoad
          text="A Local Crew Obsessed with Clean Energy"
          className="text-gradient mt-6 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.06]"
        />
        <Reveal delay={0.35} y={28}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            We&apos;ve spent twelve years on rooftops across Central Texas —
            designing systems that produce what we promise, at a price we quote
            once and honor.
          </p>
        </Reveal>
      </section>

      {/* =============================== STORY ================================ */}
      <section className="wrap pb-14 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-line">
              <RoofScene className="h-full w-full" />
            </div>
          </Reveal>
          <div>
            <SplitHeading
              gradient
              text="Started on One Roof in 2014"
              className="text-gradient text-3xl font-semibold leading-tight md:text-5xl"
            />
            <Reveal delay={0.15}>
              <div className="mt-5 space-y-4 leading-relaxed text-muted">
                <p>
                  {site.name} began when our founder put panels on his own house
                  and discovered how much of the solar sales process was theatre —
                  vague savings claims, surprise fees, subcontractors nobody
                  introduced you to.
                </p>
                <p>
                  So we built the opposite: engineering-led designs, one fixed
                  price, in-house installers who treat your roof like their own,
                  and a WhatsApp line that a human actually answers. Twelve years
                  and 500+ systems later, that&apos;s still the whole playbook.
                </p>
                <p>
                  We&apos;re licensed, insured, and NABCEP-certified — and we
                  still live in the neighborhoods we work in.
                </p>
              </div>
              <div className="mt-8">
                <ButtonLink
                  href={waLink(
                    "Hi Sunhaven Solar! I'd love to hear more about your work.",
                  )}
                  variant="ink"
                >
                  Talk to the team
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =============================== STATS ================================ */}
      <section className="wrap pb-14 md:pb-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-3 bg-cream p-6 transition-colors duration-500 hover:bg-white md:p-8">
                <StatIcon name={statIcons[i]} className="h-6 w-6 text-olive" />
                <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =============================== VALUES =============================== */}
      <section className="border-y border-line bg-white py-16 md:py-28 lg:py-[120px]">
        <div className="wrap">
          <div className="text-center">
            <Reveal>
              <Eyebrow>What we believe</Eyebrow>
            </Reveal>
            <SplitHeading
              gradient
              text="Four Rules We Never Break"
              className="text-gradient mx-auto mt-6 max-w-2xl text-4xl font-semibold md:text-5xl"
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-xl bg-card p-6">
                  <span className="font-display text-sm font-medium tracking-widest text-olive">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ TEAM ================================ */}
      <section className="wrap py-16 md:py-28 lg:py-[120px]">
        <div className="text-center">
          <Reveal>
            <Eyebrow>The people</Eyebrow>
          </Reveal>
          <SplitHeading
            gradient
            text="You'll Know Exactly Who's on Your Roof"
            className="text-gradient mx-auto mt-6 max-w-3xl text-4xl font-semibold md:text-5xl"
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <figure className="h-full rounded-xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime font-display text-xl font-bold text-ink">
                  {member.initials}
                </span>
                <figcaption className="mt-4">
                  <span className="block font-semibold text-ink">
                    {member.name}
                  </span>
                  <span className="block text-sm text-olive">{member.role}</span>
                </figcaption>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND  */}
      <CtaSection
        eyebrow="Get In Touch"
        heading="Come Say Hi to the Team"
        paragraph="Questions about your roof, your bill, or whether solar still makes sense? We answer honestly."
        buttonText="Get A Free Solar Quote"
        href={waLink("Hi Sunhaven Solar! I'd like a free solar quote.")}
        checks={ctaChecks}
      />
    </>
  );
}

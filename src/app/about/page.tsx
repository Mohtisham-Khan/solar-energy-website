import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { AboutHero } from "@/components/about/about-hero";
import { ValuesSticky } from "@/components/about/values-sticky";
import { ProcessTimeline } from "@/components/about/process-timeline";
import { CommitmentCards } from "@/components/about/commitment-cards";
import { ProjectsHz } from "@/components/about/projects-hz";
import { TeamMarquee } from "@/components/about/team-marquee";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, site, waLink, WA_GREETING } from "@/lib/site";

// About page specific data - sabkuch inline
const aboutStats = [
  { value: "[X]+", label: "Systems installed" },
  { value: "[X] MW", label: "Capacity installed" },
  { value: "[X]+", label: "Karachi areas served" },
  { value: "[X]+", label: "Happy customers" },
];

const aboutValues = [
  {
    title: "Safety first",
    icon: "shield" as const,
    description:
      "Harnesses, edge protection and a safety brief before anyone steps on your roof — on every job, no exceptions.",
  },
  {
    title: "Transparent pricing",
    icon: "percent" as const,
    description:
      "One fixed quote that lists equipment and labour separately. No surprise charges on the final bill.",
  },
  {
    title: "Craftsmanship",
    icon: "checklist" as const,
    description:
      "Corrosion-resistant mounting, clean cable routing, and panels kept free of Karachi's coastal dust and salt.",
  },
  {
    title: "Local & responsive",
    icon: "headset" as const,
    description:
      "Karachi-based team answering directly on WhatsApp — no call centre, no bot, same crew from survey to service.",
  },
];

const processSteps = [
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

const stepImages = [
  {
    src: "/services/residential-solar.jpg",
    alt: "Technician mounting solar panels on a residential roof in Karachi",
  },
  {
    src: "/services/engineering.jpg",
    alt: "Engineers designing a solar system during a site assessment",
  },
  {
    src: "/services/maintenance.jpg",
    alt: "Completed rooftop solar array ready for commissioning",
  },
  {
    src: "/services/commercial-solar.jpg",
    alt: "Commissioned solar system producing power for a business",
  },
];

const commitment = [
  {
    title: "Our Story",
    tone: "lime" as const,
    text: "It began when our founder put panels on his own house and saw how much of the solar sales process was theatre — vague savings claims, surprise fees, subcontractors nobody introduced you to. So we built the opposite: engineering-led designs, one fixed price, in-house installers, and a WhatsApp line a human actually answers.",
    image: {
      src: "/about/about-worker.webp",
      alt: "Installer fitting solar panels on a rooftop in Karachi",
    },
  },
  {
    title: "Our Mission",
    tone: "sky" as const,
    text: "Make honest, engineering-led solar simple for Karachi — a free site survey, one fixed quote with equipment and labour listed separately, and K-Electric paperwork handled end to end for homes, offices and factories.",
    image: {
      src: "/projects/project-1.jpg",
      alt: "Rooftop solar panels on a bungalow surrounded by trees",
    },
  },
];

const aboutProjects = [
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

const projectBlurb =
  "Explore our real solar installations across Karachi — carefully designed, professionally installed and expertly maintained to provide clean, reliable energy while delivering long-term savings.";

const aboutTeam = [
  {
    name: "Alex Rivera",
    role: "Founder & Lead Engineer",
    image: {
      src: "/testimonials/client.jpg",
      alt: "Alex Rivera, founder and lead engineer",
    },
  },
  {
    name: "Jordan Lee",
    role: "Installation Supervisor",
    image: {
      src: "/services/residential-solar.jpg",
      alt: "Jordan Lee installing a rooftop solar panel",
    },
  },
  {
    name: "Samira Khan",
    role: "Design & Customer Lead",
    image: {
      src: "/about/about-worker.webp",
      alt: "Samira Khan inspecting panels during a rooftop installation",
    },
  },
];

const teamIntro =
  "The same crew from survey to service — in-house installers who treat your roof like their own, answering on WhatsApp from right here in Karachi.";

const ctaChecks = ["No obligation", "Free site survey", "Installments available"];

export const metadata: Metadata = {
  title: "About Us - Karachi Solar Installers",
  description:
    "Karachi-based solar team for bungalows, flats, offices and factories: free site survey, engineering-led design, fixed quotes and local after-sales support.",
  alternates: { canonical: "/about" },
  openGraph: {
    locale: site.locale,
    url: "/about",
    title: `About Us - Karachi Solar Installers | ${site.name}`,
    description:
      "Meet the local Karachi crew behind [X]+ solar installations - survey, design, installation and after-sales by one team.",
  },
};


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
          inLanguage: "en-PK",
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About us", path: "/about" },
        ])}
      />

      {/*  HERO  */}
      <AboutHero
       stats={aboutStats}
      />

      {/*  VALUES  */}
      <ValuesSticky
       values={aboutValues}
      />

      {/*  PROCESS  */}
      <ProcessTimeline
       steps={processSteps}
       stepImages={stepImages}
      />

      {/*  COMMITMENT  */}
      <CommitmentCards
       commitment={commitment} 
      />

      {/*  PROJECTS  */}
      <ProjectsHz
       projects={aboutProjects} 
       projectBlurb={projectBlurb} 
      />

      {/* TEAM  */}
      <TeamMarquee
       team={aboutTeam} 
       teamIntro={teamIntro}
      />

      {/* CTA BAND  */}
      <CtaSection
        eyebrow="Get In Touch"
        heading="Book Your Free Site Survey Today"
        paragraph="Questions about your roof, your bill, or whether solar still makes sense? We answer honestly. Free survey, no obligation, installments available."
        buttonText="Get a Free Solar Quote on WhatsApp"
        href={waLink(WA_GREETING)}
        checks={ctaChecks}
      />
    </>
  );
}

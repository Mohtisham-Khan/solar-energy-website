import { SITE_URL, site } from "@/lib/site";
import { faqs, services } from "@/lib/content";

/** Organization + WebSite — rendered once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        url: SITE_URL,
        telephone: `+${site.phone}`,
        email: site.email,
        foundingDate: site.founded,
        priceRange: "$$",
        image: `${SITE_URL}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          ...site.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: site.serviceArea,
        },
        sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-US",
      },
    ],
  };
}

/** Home page: FAQPage for the FAQ section. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Services page: ItemList of Service offers. */
export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} services`,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: site.serviceArea,
        serviceType: s.title,
      },
    })),
  };
}

/** Calculator page: WebApplication. */
export function calculatorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Sunhaven Solar Calculator for Pakistan",
    url: `${SITE_URL}/calculator`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    description:
      "Free solar calculator for Pakistan: recommends a solar system size in kW, panel count and daily/monthly generation from your monthly electricity units (kWh), city and coverage target. Package pricing with installation labour is optional.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

/**
 * Central site configuration — placeholder brand content.
 * Swap these values for the real business details before launch.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunhavensolar.com"
).replace(/\/$/, "");

export const site = {
  name: "Sunhaven Solar",
  legalName: "Sunhaven Solar LLC",
  tagline: "Solar done right for Central Texas homes and businesses",
  description:
    "Sunhaven Solar designs, installs, and maintains rooftop solar panels and battery storage for homes and businesses across Greater Austin, Texas. Fixed quotes, licensed installers, 25-year warranty.",
  url: SITE_URL,
  locale: "en_US",
  founded: "2014",
  copyrightYear: 2026,

  phoneDisplay: "+1 (555) 010-0142",
  /** International format, digits only — used by tel: links */
  phone: "15550100142",
  /** International format, digits only — used by wa.me links */
  whatsapp: "15550100142",
  email: "hello@sunhavensolar.com",

  address: {
    streetAddress: "123 Sunshine Ave",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  geo: { latitude: 30.2672, longitude: -97.7431 },
  hours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  hoursHuman: "Mon–Fri 8am–6pm · Sat 9am–2pm · Sun closed",
  serviceArea: "Greater Austin and Central Texas",
  serviceAreas: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Pflugerville",
    "San Marcos",
  ],

  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

/** Build a click-to-chat WhatsApp link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:+${site.phone}`;
export const mailLink = `mailto:${site.email}`;

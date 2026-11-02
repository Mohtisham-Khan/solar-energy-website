/**
 * Central site configuration — placeholder brand content.
 * Replace the [BRAND NAME] / [domain] / [Area] placeholders with the real
 * business details before launch (see the placeholder table in the handoff).
 *
 * Canonical domain: set NEXT_PUBLIC_SITE_URL to the live domain, e.g.
 * https://www.yourdomain.com — until then the placeholder below is used.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://karachi-solar.example.com"
).replace(/\/$/, "");

/** Default prefilled WhatsApp text used by every CTA on the site. */
export const WA_GREETING =
  "Hello! I'd like a free quote for a solar system in Karachi.";

export const site = {
  name: "[BRAND NAME]",
  legalName: "[BRAND NAME] (Pvt) Ltd",
  tagline: "Solar panel installation for Karachi homes, factories and offices",
  description:
    "[BRAND NAME] is a Karachi-based solar company: rooftop solar panel installation for homes and businesses across DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad and the rest of Karachi. Free site survey, fixed quote, K-Electric paperwork handled, installments available.",
  url: SITE_URL,
  locale: "en_PK",
  founded: "[YEAR]",
  copyrightYear: 2026,

  phoneDisplay: "[PHONE]",
  /** International format, digits only (+923XXXXXXXXX) — used by tel: links */
  phone: "[PHONE]",
  /** International format, digits only (+923XXXXXXXXX) — used by wa.me links */
  whatsapp: "[PHONE]",
  email: "info@[domain]",

  address: {
    streetAddress: "[Area]",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "[POSTAL CODE]",
    addressCountry: "PK",
  },
  /** Google Maps business listing (placeholder — replace with the real link). */
  mapsUrl: "https://maps.google.com/?q=[BRAND+NAME]+Karachi",
  /** Karachi city coordinates — used by LocalBusiness geo schema. */
  geo: { latitude: 24.8607, longitude: 67.0011 },
  hours: "Mo-Sa 10:00-20:00",
  hoursHuman: "Mon–Sat 10am–8pm · Sunday closed",
  serviceArea: "Karachi, Sindh",
  serviceAreas: [
    "DHA",
    "Clifton",
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "North Nazimabad",
    "PECHS",
    "Bahria Town Karachi",
    "Scheme 33",
    "Malir",
    "Korangi",
    "SITE",
    "Port Qasim",
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/[BRAND]",
    instagram: "https://www.instagram.com/[BRAND]",
    facebook: "https://www.facebook.com/[BRAND]",
  },
} as const;

/** Build a click-to-chat WhatsApp link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:+${site.phone}`;
export const mailLink = `mailto:${site.email}`;

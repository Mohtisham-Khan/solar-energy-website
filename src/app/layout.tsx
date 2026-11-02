import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp";
import { JsonLd } from "@/components/json-ld";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { organizationJsonLd } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

// Layout-level services data for Footer
const layoutServices = [
  {
    slug: "residential-solar",
    title: "Residential Solar Installation",
  },
  {
    slug: "commercial-solar",
    title: "Commercial & Industrial Solar",
  },
  {
    slug: "solar-system-engineering",
    title: "Solar System Engineering",
  },
  {
    slug: "maintenance-monitoring",
    title: "Installation & Maintenance",
  },
];

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Solar Company in Karachi | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "solar panel installation Karachi",
    "solar system price in Karachi",
    "5kW solar system price Pakistan",
    "10kW solar system price",
    "hybrid solar system Karachi",
    "solar company in Karachi",
    "solar installation DHA Karachi",
    "solar panels installment Pakistan",
    "net billing Pakistan",
    "solar maintenance Karachi",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    locale: site.locale,
    title: `Solar Company in Karachi | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Solar Company in Karachi | ${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
  <html
    lang="en-PK"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer services={layoutServices} />
        <WhatsAppFloat />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}

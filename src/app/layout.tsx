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
    default: `${site.name} — Solar panel installation in Austin, TX`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "solar panels Austin",
    "solar installation Central Texas",
    "solar company near me",
    "residential solar",
    "commercial solar",
    "solar battery storage",
    "solar panel maintenance",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} — Solar panel installation in Austin, TX`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Solar panel installation in Austin, TX`,
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
      lang="en"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}

import Link from "next/link";
import {  Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { SunIcon } from "@/components/icons";
import { FooterSubscribe } from "@/components/footer-subscribe";

const columns = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/calculator", label: "Solar Calculator" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ href: `/services#${s.slug}`, label: s.title })),
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policies" },
      { href: "/terms", label: "Term & Conditions" },
    ],
  },
];

const contacts = [
  { icon: Mail, text: site.email, href: `mailto:${site.email}` },
  { icon: Phone, text: site.phoneDisplay, href: `tel:${site.phoneDisplay}` },
  {
    icon: MapPin,
    text: `${site.address.streetAddress}, ${site.address.addressLocality}`,
    href: null,
  },
];

const socials = [
  { icon: Phone, href: site.social.instagram, label: "Instagram" },
  { icon: Mail, href: site.social.facebook, label: "Facebook" },
  { icon: MapPin, href: site.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center pb-14 pt-24 text-ink md:pt-32"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%), url('/footer-bg.jpg')",
      }}
    >
      <div className="wrap grid gap-5 lg:grid-cols-2">
        {/* LEFT CARD */}
        <div className="flex flex-col justify-between rounded-2xl bg-white p-8 md:p-11">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-[60px] w-[60px] place-items-center rounded-xl bg-lime text-ink">
                <SunIcon className="h-8 w-8" />
              </span>
              <span className="font-display text-4xl font-semibold tracking-tight">
                Sunhaven
              </span>
            </Link>
            <p className="mt-8 max-w-[500px] text-[17px] leading-relaxed text-ink/80">
              We believe clean energy isn&apos;t the future it&apos;s the present.
              Every installation brings us closer to a greener planet.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="max-w-[360px] text-3xl font-medium leading-snug tracking-tight">
              Ready to Switch to Solar and Save for Years.
            </h2>
            <div className="mt-6">
              <FooterSubscribe />
            </div>
            <p className="mt-6 text-sm text-ink/70">
              ©All rights reserved {site.copyrightYear}.{" "}
              <span className="font-medium text-ink">{site.legalName}</span>
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex flex-col justify-between rounded-2xl bg-white p-8 md:p-11">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-lg font-semibold">{col.title}</h3>
                <ul className="mt-6 space-y-3.5 text-[15px] text-ink/80">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-16 border-t border-ink/15 pt-8">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-4 flex items-end justify-between gap-6">
              <ul className="space-y-3 text-[15px] text-ink/80">
                {contacts.map(({ icon: Icon, text, href }) => (
                  <li key={text} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-ink" />
                    {href ? (
                      <a href={href} className="transition-colors hover:text-ink">
                        {text}
                      </a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-ink/40 transition-colors hover:text-ink"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
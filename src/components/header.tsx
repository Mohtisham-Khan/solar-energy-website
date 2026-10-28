"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon, SunIcon, WhatsAppIcon } from "@/components/icons";
import { waLink, site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/calculator", label: "Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Nav link with a rolling text hover (two stacked labels). */
function RollLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`group/nav relative block overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-card text-ink" : "text-muted hover:bg-card hover:text-ink"
      }`}
    >
      <span className="block transition-transform duration-300 ease-out group-hover/nav:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-x-4 top-full block translate-y-full transition-transform duration-300 ease-out group-hover/nav:-translate-y-full"
      >
        {label}
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const waHref = waLink(
    "Hi Sunhaven Solar! I'd like to learn more about going solar.",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between md:h-[76px]">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          aria-label={`${site.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-ink">
            <SunIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Sunhaven <span className="text-olive">Solar</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <RollLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={active}
              />
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waHref}
            className="hidden items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-cream text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white px-5 pb-6 pt-3 shadow-lg shadow-ink/5 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-card text-ink" : "text-muted hover:bg-card"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={waHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3.5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";

/** Pill badge eyebrow (reference: .badge — thin ink outline, pill). */
export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`badge ${light ? "badge-light" : ""} ${className}`}>
      {children}
    </span>
  );
}

/** Circular arrow badge where the arrow flies up and its twin follows. */
function ArrowBadge({ circle, arrow }: { circle: string; arrow: string }) {
  return (
    <span
      className={`relative ml-3 grid h-11 w-11 shrink-0 overflow-hidden rounded-full ${circle}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 grid place-items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <span className="absolute inset-0 grid translate-y-full place-items-center transition-transform duration-300 ease-out group-hover:translate-y-0">
        <ArrowUpRight className={`h-4 w-4 ${arrow}`} />
      </span>
    </span>
  );
}

type ButtonVariant = "lime" | "ink" | "outline" | "wa" | "white";

const variants: Record<
  ButtonVariant,
  { shell: string; circle: string; arrow: string }
> = {
  lime: {
    shell: "bg-lime text-ink hover:bg-lime-2",
    circle: "bg-ink text-lime",
    arrow: "",
  },
  ink: {
    shell: "bg-ink text-cream hover:bg-[#1d1d1d]",
    circle: "bg-lime text-ink",
    arrow: "",
  },
  outline: {
    shell: "border border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-white",
    circle: "bg-ink text-lime",
    arrow: "",
  },
  wa: {
    shell: "bg-wa text-white hover:bg-wa-2",
    circle: "bg-white text-forest",
    arrow: "",
  },
  white: {
    shell: "bg-white text-ink hover:bg-cream",
    circle: "bg-ink text-lime",
    arrow: "",
  },
};

/**
 * Sollas-style pill CTA: label left, round arrow badge right that swaps
 * arrows on hover. Internal paths render a Next <Link>, external a plain <a>.
 */
export function ButtonLink({
  href,
  children,
  variant = "lime",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const v = variants[variant];
  const classes = `group inline-flex items-center rounded-full py-1.5 pl-9 pr-1.5 text-base font-semibold transition-colors md:text-lg ${v.shell} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowBadge circle={v.circle} arrow={v.arrow} />
    </>
  );

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  );
}

/** Text link with the same arrow-swap motion. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-olive ${className}`;
  const inner = (
    <>
      {children}
      <span className="relative grid h-5 w-5 place-items-center overflow-hidden" aria-hidden="true">
        <ArrowUpRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:-translate-y-full" />
        <ArrowUpRight className="absolute h-4 w-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
      </span>
    </>
  );
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}

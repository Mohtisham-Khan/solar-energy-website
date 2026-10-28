import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { CountUp } from "@/components/motion/effects";

export type AboutStatWidget = {
  value: number;
  suffix: string;
  label: string;
  description: string;
  href: string;
};

export function AboutStatCard({ widget }: { widget: AboutStatWidget }) {
  const { value, suffix, label, description, href } = widget;

  return (
    <article className="group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-lg bg-sky p-6 md:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-forest opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
      />
      <Link
        href={href}
        aria-label="About us"
        className="absolute right-5 top-5 z-10 grid h-[60px] w-[60px] scale-0 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 ease-out group-hover:scale-100 focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <ArrowUpRight className="h-5 w-5" />
      </Link>
      <div className="relative max-w-[80%]">
        <p className="font-display text-4xl font-semibold leading-[1.24] tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-white md:text-[40px]">
          <CountUp value={value} suffix={suffix} />
        </p>
        <p className="mt-2 text-[15px] capitalize text-ink transition-colors duration-300 group-hover:text-white">
          {label}
        </p>
      </div>
      <p className="relative max-w-[85%] text-sm font-medium leading-relaxed text-ink/75 transition-colors duration-300 group-hover:text-white">
        {description}
      </p>
    </article>
  );
}

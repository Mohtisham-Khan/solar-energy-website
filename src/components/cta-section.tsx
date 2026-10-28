import Image from "next/image";
import { CheckDouble } from "@/components/icons";
import { Reveal, SplitHeading } from "@/components/motion/effects";
import { ButtonLink, Eyebrow } from "@/components/ui";

export type CtaSectionProps = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  href: string;
  checks: readonly string[];
};

export function CtaSection({
  eyebrow,
  heading,
  paragraph,
  buttonText,
  href,
  checks,
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Image
        src="/cta/cta-sky.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="wrap relative flex flex-col items-center py-24 text-center md:py-22">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <SplitHeading
          as="h2"
          gradient
          text={heading}
          className="text-gradient mx-auto mt-6 max-w-[640px] text-4xl font-semibold leading-tight md:text-[50px] md:leading-[61px]"
        />
        <Reveal delay={0.2} className="mt-6 flex flex-col items-center">
          <p className="max-w-xl text-[15px] leading-[22px] text-muted">
            {paragraph}
          </p>
          <div className="mt-8">
            <ButtonLink href={href} variant="lime">
              {buttonText}
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-ink">
                  <CheckDouble className="h-3 w-[26px]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

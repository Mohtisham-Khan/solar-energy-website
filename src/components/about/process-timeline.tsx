"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type StepImage = {
  src: string;
  alt: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  stepImages: StepImage[];
};

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** SSR-safe: set initial hidden states before paint, no server warning. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Reference "process" section: alternating rows around a growing centre line. */
export function ProcessTimeline({ steps, stepImages }: ProcessTimelineProps) {
  const scope = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (reducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const root = scope.current;
      if (!root) return;

      const fill = root.querySelector("[data-fill]");
      const widgets = root.querySelector("[data-widgets]");
      if (!fill || !widgets) return;

      // fromTo: the explicit "from" survives invalidateOnRefresh, so the line
      // always measures from 0 regardless of where a refresh lands.
      gsap.fromTo(
        fill,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: widgets,
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="bg-line py-20 md:py-[80px]">
      <div className="wrap">
        <div className="mx-auto flex max-w-[882px] flex-col items-center gap-6 text-center">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
          </Reveal>
          <SplitHeading
            gradient
            text="Unlock Solar Energy & Start Saving Today"
            className="text-gradient text-[clamp(32px,4vw,56px)] font-semibold leading-[1.1]"
          />
        </div>

        <div
          data-widgets
          className="relative mt-15 flex flex-col gap-10 md:mt-[60px] md:gap-[60px]"
        >
          {/* centre line: grey track + green fill that grows on scroll */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden justify-center md:flex"
          >
            <div className="relative h-full w-[4px] overflow-hidden rounded-full bg-[#d9d2c4]">
              <div
                data-fill
                className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-[#1f5c46]"
              />
            </div>
          </div>

          {steps.map((step, i) => {
            const image = stepImages[i % stepImages.length];
            return (
              <div
                key={step.number}
                className={`relative z-[1] flex flex-col items-center gap-8 md:justify-between md:gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <Reveal
                  scale={1.06}
                  className="w-full max-w-[569px] shrink-0 overflow-hidden rounded-xl"
                >
                  <div className="relative h-[280px] w-full md:h-[400px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 569px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} y={32} className="w-full max-w-[431px]">
                  <div className="mb-[29px] font-medium text-ink">
                    STEP ({step.number})
                  </div>
                  <h3 className="mb-3 text-[clamp(22px,2vw,28px)] font-semibold leading-snug tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </Reveal>

                {/* node on the centre line */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-[#1f5c46] bg-white md:block"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

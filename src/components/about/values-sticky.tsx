"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceIcon, StatIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { SplitHeading } from "@/components/motion/effects";

type Value = {
  title: string;
  description: string;
  icon: "shield" | "percent" | "checklist" | "headset";
};

type ValuesStickyProps = {
  values: Value[];
};

function renderIcon(name: Value["icon"]) {
  if (name === "checklist") {
    return <ServiceIcon name="checklist" className="h-8 w-8" />;
  }
  return <StatIcon name={name} className="h-8 w-8" />;
}

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** SSR-safe: set initial hidden states before paint, no server warning. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Reference "benefit" section: pinned viewport, cards arrive staggered on scroll. */
export function ValuesSticky({ values }: ValuesStickyProps) {
  const scope = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (reducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    let mm: ReturnType<typeof gsap.matchMedia> | undefined;

    const ctx = gsap.context(() => {
      const root = scope.current;
      if (!root) return;

      const zone = root.querySelector("[data-zone]");
      const grid = root.querySelector("[data-grid]");
      const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
      if (!zone || !grid || cards.length === 0) return;

      mm = gsap.matchMedia();

      /* ---- desktop: 200vh pin, cards climb into a staggered diagonal ---- */
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: zone,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          cards,
          { y: (i) => i * 80 + 150, autoAlpha: 0 },
          { y: (i) => i * 80, autoAlpha: 1, stagger: 0.55 },
          0,
        );
      });

      /* ---- mobile: simple stagger reveal, no pin ---- */
      mm.add("(max-width: 1023px)", () => {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: grid, start: "top 85%", once: true },
        });
      });
    }, scope);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-white md:py-22">
      <div>
        <div className="lg:sticky lg:top-0">
          <div className="wrap flex flex-col gap-10 md:gap-[60px] ">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <SplitHeading
                gradient
                text="Four Rules We Never Break"
                className="text-gradient max-w-[600px] text-[clamp(32px,4vw,56px)] font-semibold leading-[1.1]"
              />
              <ButtonLink href="/services" variant="lime">
                Explore All Services
              </ButtonLink>
            </div>

            <div
              data-grid
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start"
            >
              {values.map((value ) => (
                <article
                  key={value.title}
                  data-card
                  className="flex h-full flex-col justify-between gap-0 rounded-lg bg-card p-6 lg:min-h-[300px]"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-[60px] w-[60px] place-items-center rounded-xl bg-lime text-ink"
                  >
                    {renderIcon(value.icon)}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[24px] font-semibold leading-tight tracking-tight text-ink">
                      {value.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

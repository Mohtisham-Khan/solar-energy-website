"use client";

import { Fragment, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { WA_GREETING, waLink } from "@/lib/site";

type Stat = {
  value: string;
  label: string;
};

type AboutHeroProps = {
  stats: Stat[];
};

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const statIcons = ["bolt", "calendar", "users", "shield"] as const;

const headline = ["A Local Crew Obsessed", "with Clean Energy"];

export function AboutHero({ stats }: AboutHeroProps) {
  const scope = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (reducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    let mm: ReturnType<typeof gsap.matchMedia> | undefined;

    const ctx = gsap.context(() => {
      const root = scope.current;
      if (!root) return;

      const eyebrow = root.querySelector("[data-hero-block]");
      const lines = Array.from(root.querySelectorAll("[data-hero-line]"));
      const para = root.querySelector("[data-hero-para]");
      const cta = root.querySelector("[data-hero-cta]");
      const counter = root.querySelector("[data-hero-counter]");
      const dividers = Array.from(root.querySelectorAll("[data-divider]"));
      if (!eyebrow || !para || !cta || !counter || lines.length === 0) return;

      /* load choreography: block rises, lines unmask, copy, counter bar */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(eyebrow, { autoAlpha: 0, y: 28, duration: 1 })
        .from(lines, { yPercent: 110, duration: 1.1, stagger: 0.08 }, "-=0.7")
        .from(
          [para, cta],
          {
            autoAlpha: 0,
            y: 22,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          counter,
          { autoAlpha: 0, y: 40, duration: 1, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          dividers,
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.7",
        );

      /* subtle hills parallax on desktop only */
      mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const hills = root.querySelector("[data-hero-hills]");
        if (hills) {
          gsap.fromTo(
            hills,
            { yPercent: 0 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        }
      });
    }, scope);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={scope}
      className="relative z-[1] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero/hero-sky.png')" }}
    >
      {/* 3D hills at the bottom of the frame */}
      <Image
        data-hero-hills
        src="/hero/hero-hills.webp"
        alt=""
        aria-hidden="true"
        width={1440}
        height={394}
        priority
        className="pointer-events-none absolute bottom-0 left-0 w-full select-none"
      />

      {/* white haze so the dark headline stays readable over the sky */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(#fff,#fff0_52%,#fff0)]"
      />

      <div className="wrap relative z-10 flex flex-col gap-14 pb-24 pt-20 md:gap-[100px] md:pb-[94px] md:pt-[88px]">
        {/* ---------- title block ---------- */}
        <div data-hero-block className="max-w-[790px]">
          <h1 className="text-[clamp(34px,5vw,72px)] font-semibold leading-[1.06] tracking-tight">
            {headline.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span
                  data-hero-line
                  className="text-gradient block pb-[0.06em] will-change-transform"
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            data-hero-para
            className="mt-5 max-w-[643px] text-[16px] leading-relaxed text-ink md:text-[18px]"
          >
            We work on rooftops across Karachi — from DHA to Korangi —
            designing systems that produce what we promise, at a price we quote
            once and honor.
          </p>
          <div data-hero-cta className="mt-10">
            <ButtonLink href={waLink(WA_GREETING)} variant="lime">
              Get a Free Solar Quote
            </ButtonLink>
          </div>
        </div>

        {/* ---------- stats counter bar ---------- */}
        <div data-hero-counter className="flex justify-center">
          <div className="grid w-full max-w-[969px] grid-cols-2 gap-4 md:flex md:gap-0 md:overflow-hidden md:rounded-xl">
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && (
                  <div
                    data-divider
                    aria-hidden="true"
                    className="hidden w-px self-stretch bg-[#d9d2c4] md:block"
                  />
                )}
                <div className="flex flex-col gap-5 rounded-xl bg-white px-4 py-5 md:flex-1 md:rounded-none md:px-6 md:py-10">
                  <span className="font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none tracking-tight text-ink">
                    {stat.value}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <StatIcon name={statIcons[i]} className="h-6 w-6 shrink-0" />
                    <span className="text-[15px] font-medium leading-tight text-ink md:text-[18px]">
                      {stat.label}
                    </span>
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

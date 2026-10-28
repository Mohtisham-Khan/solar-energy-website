"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/content";

export function HorizontalSteps() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    // heading ke left edge se gutter (cards + progress bar dono isi se start honge)
    const setGutter = () => {
      const el =
        document.getElementById("process-heading") ??
        (document.querySelector(".wrap") as HTMLElement | null);
      let left = 0;
      if (el) {
        left = el.getBoundingClientRect().left;
        if (!el.id) left += parseFloat(getComputedStyle(el).paddingLeft) || 0;
      }
      root.style.setProperty("--gutter", `${left}px`);
    };
    setGutter();
    window.addEventListener("resize", setGutter);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", setGutter);
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refreshInit", setGutter);

    const ctx = gsap.context(() => {
      // last card ke baad extra jagah ke liye 80 badlo
      const getDistance = () =>
        Math.max(0, track.scrollWidth - root.clientWidth + 80);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 96px",
          end: () => `+=${getDistance() + window.innerHeight}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (barRef.current) {
              const p = Math.min(1, self.progress / 0.8);
              barRef.current.style.transform = `scaleX(${p})`;
            }
          },
        },
      });

      tl.to(track, { x: () => -getDistance(), ease: "none", duration: 1 }).to(
        {},
        { duration: 0.25 } // end par hold
      );

      return () => tl.scrollTrigger?.kill();
    }, root);

    return () => {
      window.removeEventListener("resize", setGutter);
      ScrollTrigger.removeEventListener("refreshInit", setGutter);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-5 will-change-transform md:gap-6"
        style={{ paddingInline: "var(--gutter, 0px)" }}
      >
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="flex w-[85vw] max-w-[590px] shrink-0 flex-col justify-between rounded-2xl bg-[#f3f4f3] p-7 transition-colors duration-500 hover:bg-sky/50 md:w-[max(590px,calc((50vw+640px)/2.3))] md:max-w-none md:p-9"
            style={{ minHeight: "clamp(356px, 26vw, 560px)" }}
          >
            <div>
              <p className="font-display text-lg text-ink">
                STEP {Number(step.number)}
              </p>
              <span
                aria-hidden="true"
                className="ml-[28px] mt-3 block w-px bg-[#7fc46f]"
                style={{ height: 36 }}
              />
              <span
                aria-hidden="true"
                className="ml-[17px] block h-6 w-6 rounded-full border-[7px] border-ink bg-white"
              />
            </div>
            <div className="mt-10">
              <h3 className="text-3xl font-medium tracking-tight 2xl:text-4xl">
                {step.title}
              </h3>
              <p className="mt-3 min-h-[3lh] max-w-[480px] text-[15px] leading-[22px] text-[#333] 2xl:max-w-[560px] 2xl:text-base">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* progress bar: heading ke left se start, scroll pe fill */}
      <div
        className="relative mt-8 h-1 overflow-hidden rounded-full bg-line"
        style={{ marginInline: "var(--gutter, 0px)" }}
      >
        <div
          ref={barRef}
          className="absolute inset-0 origin-left rounded-full bg-[#7fc46f] will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
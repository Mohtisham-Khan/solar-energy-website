"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

const motionQuery = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)");

/** SSR-safe reduced-motion flag (server render assumes motion is allowed). */
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = motionQuery();
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => motionQuery().matches,
    () => false,
  );
}


/**
 * Featured projects: a tall scroll zone pins a full-screen stage. Each project
 * has its own backdrop; the cards sit stacked in the middle of the viewport
 * and the incoming card scales up + fades in over the previous one while its
 * backdrop slides up over the previous backdrop.
 */
export function StackedProjects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const bgs = bgRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length < 2) return;

      // first card is the resting state, the rest wait below it
      gsap.set(cards.slice(1), {
        scale: 0.86,
        autoAlpha: 0,
        transformOrigin: "50% 100%",
      });
      // incoming backdrops wait below the stage
      gsap.set(bgs.slice(1), { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, i) => {
        tl.to(
          card,
          { scale: 1, autoAlpha: 1, ease: "power2.inOut", duration: 1 },
          i * 1.2,
        );
        tl.to(
          bgs[i + 1],
          { yPercent: 0, ease: "power1.inOut", duration: 1 },
          i * 1.2,
        );
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduced]);

  if (reduced) return <StaticProjects />;

  return (
    <div ref={wrapRef} className="relative bg-forest" style={{ height: "380vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* per-project backdrops: dedicated landscape photos, scrimmed */}
        <div className="absolute inset-0" aria-hidden="true">
          {projects.map((project, i) => (
            <div
              key={project.background.src}
              ref={(el) => {
                bgRefs.current[i] = el;
              }}
              className="absolute inset-0 overflow-hidden will-change-transform"
            >
              <Image
                src={project.background.src}
                alt=""
                fill
                sizes="100vw"
                preload={i === 0}
                className="origin-top scale-110 object-cover blur-[8px]"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col items-center pt-[14.5vh] text-center">
          <span className="rounded-full border border-white/70 px-4 py-1.5 text-sm font-medium text-white">
            Projects
          </span>
          <h2 className="mt-7 text-[clamp(32px,4vw,56px)] font-medium leading-[1.15] tracking-[-0.02em] text-white">
            Our Solar Projects
          </h2>

          <div className="relative mt-[68px] w-full flex-1">
            {projects.map((project, i) => (
              <article
                key={project.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="@container absolute inset-x-0 bottom-[10vh] mx-auto aspect-[502/561] h-[min(57vh,561px,98vw)] overflow-hidden rounded-[16px]"
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 88vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-x-[8.4%] bottom-[7.5%] flex min-h-[32.1%] flex-col justify-between gap-[2cqw] rounded-[12px] bg-white p-[4.8cqw] text-left">
                  <div className="flex items-start justify-between gap-[3cqw]">
                    <h3 className="text-[max(16px,4.38cqw)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <span className="grid h-[max(32px,7.97cqw)] w-[max(32px,7.97cqw)] shrink-0 place-items-center rounded-full bg-ink text-white">
                      <ArrowUpRight className="h-[max(15px,3.59cqw)] w-[max(15px,3.59cqw)]" />
                    </span>
                  </div>
                  <p className="text-[max(12px,2.99cqw)] leading-[1.6] text-ink/70">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Reduced-motion fallback: the same cards laid out in a plain grid. */
function StaticProjects() {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-20 md:py-32">
      <Image
        src={projects[0].background.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 scale-110 object-cover opacity-30 blur-[12px]"
      />
      <div className="wrap relative z-10 text-center">
        <span className="rounded-full border border-white/70 px-4 py-1.5 text-sm font-medium text-white">
          Projects
        </span>
        <h2 className="mt-7 text-[clamp(32px,4vw,56px)] font-medium leading-[1.15] tracking-[-0.02em] text-white">
          Our Solar Projects
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="@container relative mx-auto aspect-[502/561] w-full max-w-[420px] overflow-hidden rounded-[16px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 640px) 88vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-x-[8.4%] bottom-[7.5%] flex min-h-[32.1%] flex-col justify-between gap-[2cqw] rounded-[12px] bg-white p-[4.8cqw] text-left">
                <div className="flex items-start justify-between gap-[3cqw]">
                  <h3 className="text-[max(16px,4.38cqw)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                    {project.title}
                  </h3>
                  <span className="grid w-[max(32px,7.97cqw)] shrink-0 place-items-center rounded-full bg-ink text-white [aspect-ratio:1]">
                    <ArrowUpRight className="h-[45%] w-[45%]" />
                  </span>
                </div>
                <p className="text-[max(12px,2.99cqw)] leading-[1.6] text-ink/70">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
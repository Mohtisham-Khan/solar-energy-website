"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";

type Project = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  background: { src: string; alt: string };
};

type ProjectsHzProps = {
  projects: Project[];
  projectBlurb: string;
};

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** SSR-safe: set initial hidden states before paint, no server warning. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Reference "project-section-v2": pastel sky background, a tall scroll zone
 * pins the stage while the card row slides horizontally with scroll.
 * Below lg the track is a plain swipeable row.
 */
export function ProjectsHz({ projects, projectBlurb }: ProjectsHzProps) {
  const scope = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (reducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    let mm: ReturnType<typeof gsap.matchMedia> | undefined;

    const ctx = gsap.context(() => {
      const root = scope.current;
      if (!root) return;
      const track = root.querySelector<HTMLElement>("[data-track]");
      if (!track) return;

      mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // fromTo pins the start at 0 so invalidateOnRefresh can never capture a
        // mid-scroll position as the origin of the horizontal travel.
        gsap.fromTo(
          track,
          { x: 0 },
          {
          x: () => -(track.scrollWidth - root.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
          },
        );
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
      className="relative overflow-clip bg-sky py-20 md:py-[80px] lg:h-[320vh] lg:py-0"
    >
      <div className="lg:sticky lg:top-10 lg:mx-auto lg:max-w-[1312px] lg:px-4">
        <div className="pt-20 md:pt-[80px] lg:pt-0">
          {/* header: badge + heading left, blurb right */}
          <div className="mb-10 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[613px]">
              <Reveal>
                <Eyebrow>Our Projects</Eyebrow>
              </Reveal>
              <SplitHeading
                gradient
                text="Our Solar Projects Powering Real Results"
                className="text-gradient mt-6 text-[clamp(32px,4vw,56px)] font-semibold leading-[1.1]"
              />
            </div>
            <Reveal delay={0.1} y={24}>
              <p className="max-w-[378px] text-[16px] leading-relaxed text-muted">
                {projectBlurb}
              </p>
            </Reveal>
          </div>

          {/* horizontal track: pinned + scrubbed on lg, swipeable below */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
            <div
              data-track
              className="flex w-max gap-6 will-change-transform"
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="relative aspect-[3/2] w-[85vw] shrink-0 overflow-hidden rounded-xl shadow-[0_20px_45px_-25px_rgba(12,12,12,0.4)] sm:w-[560px] lg:h-[34.81rem] lg:w-[71.56rem] lg:aspect-auto"
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 1024px) 85vw, 1145px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                    <div className="flex max-w-[750px] items-start justify-between gap-6 rounded-xl bg-black/30 p-5 backdrop-blur-md">
                      <p className="text-[15px] leading-relaxed text-white md:text-[16px]">
                        {project.description}
                      </p>
                      <span
                        aria-hidden="true"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
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

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";

type Member = {
  name: string;
  role: string;
  image: { src: string; alt: string };
};

type TeamMarqueeProps = {
  team: Member[];
  teamIntro: string;
};

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** SSR-safe: set initial hidden states before paint, no server warning. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Reference "team" section: centred header + full-bleed card marquee. */
export function TeamMarquee({ team, teamIntro }: TeamMarqueeProps) {
  const scope = useRef<HTMLElement>(null);
  
  /** Two identical halves so the -50% loop lands seamlessly. */
  const marquee = [...team, ...team, ...team, ...team];

  useIsoLayoutEffect(() => {
    if (reducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const root = scope.current;
      if (!root) return;
      const track = root.querySelector<HTMLElement>("[data-track]");
      if (!track) return;

      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 70,
        repeat: -1,
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="overflow-hidden py-20 md:py-[80px]">
      <div className="wrap">
        <div className="mx-auto flex max-w-[775px] flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Our Team</Eyebrow>
          </Reveal>
          <SplitHeading
            gradient
            text="You'll Know Exactly Who's on Your Roof"
            className="text-gradient mt-6 max-w-[684px] text-[clamp(32px,4vw,56px)] font-semibold leading-[1.1]"
          />
          <Reveal delay={0.15} y={24}>
            <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-muted">
              {teamIntro}
            </p>
          </Reveal>
        </div>
      </div>

      {/* full-bleed marquee: every card carries its own right margin so the
          -50% loop is gap-uniform */}
      <div data-track className="mt-10 flex w-max will-change-transform md:mt-16">
        {marquee.map((member, i) => (
          <figure
            key={`${member.name}-${i}`}
            aria-hidden={i >= team.length * 2 || undefined}
            className="relative mr-5 h-[350px] w-[300px] shrink-0 overflow-hidden rounded-xl bg-[linear-gradient(#ffffff8c,#dce9e4cc)] md:mr-6 md:h-[513px] md:w-[411px]"
          >
            <Image
              src={member.image.src}
              alt={i < team.length ? member.image.alt : ""}
              fill
              sizes="(max-width: 768px) 300px, 411px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-0 h-[200px] bg-[linear-gradient(#dce9e400,#dce9e4e6_60%,#dce9e4)]"
            />
            <figcaption className="absolute inset-0 z-10 flex flex-col justify-end gap-1.5 p-5 md:p-8">
              <span className="text-[clamp(20px,2vw,24px)] font-semibold capitalize leading-tight tracking-tight text-ink">
                {member.name}
              </span>
              <span className="text-[16px] leading-snug text-ink">
                {member.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

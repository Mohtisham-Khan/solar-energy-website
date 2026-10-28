"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useGsapScope<T extends HTMLElement>(
  fn: (ctx: { el: T; gsap: typeof gsap }) => void,
  deps: unknown[],
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current || reduced()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (ref.current) fn({ el: ref.current, gsap });
    }, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

/**
 * Scroll-reveal wrapper: content fades up once when it enters the viewport.
 * Content stays fully visible without JS — initial states are set by GSAP only.
 */
export function Reveal({
  children,
  className = "",
  y = 44,
  scale = 1,
  delay = 0,
  duration = 0.9,
  start = "top 88%",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  start?: string;
  as?: ElementType;
}) {
  const ref = useGsapScope<HTMLDivElement>(
    ({ el, gsap }) => {
      gsap.from(el, {
        opacity: 0,
        y,
        scale,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    [y, scale, delay, duration, start],
  );
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Heading reveal. Pass plain text only.
 *
 * - Plain (default): splits into words/letters that rise from a 24px offset
 *   with a stagger, on scroll (or on load for the hero).
 * - Gradient (`gradient`): a `background-clip: text` heading can't have its
 *   text split into transformed spans — a transformed descendant drops out of
 *   the ancestor's text mask and the glyphs vanish. So gradient headings stay
 *   as one un-split text node and the transform is applied to the element
 *   itself, which paints the clip correctly.
 */
export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  mode = "word",
  gradient = false,
  onLoad = false,
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  mode?: "word" | "letter";
  gradient?: boolean;
  onLoad?: boolean;
  delay?: number;
  stagger?: number;
}) {
  const units =
    mode === "word"
      ? text.split(" ")
      : text.split("").map((c) => (c === " " ? "\u00A0" : c));

  const ref = useGsapScope<HTMLHeadingElement>(
    ({ el, gsap }) => {
      const target = gradient
        ? el
        : el.querySelectorAll("[data-split-unit]");
      const tw = gsap.from(target, {
        y: gradient ? 40 : 24,
        opacity: 0,
        duration: gradient ? 0.8 : 0.7,
        ease: "power3.out",
        stagger: gradient ? 0 : stagger,
        delay,
        ...(onLoad
          ? {}
          : {
              scrollTrigger: { trigger: el, start: "top 86%", once: true },
            }),
      });
      if (onLoad) void tw;
    }, [text, mode, gradient, onLoad, delay, stagger],
  );

  return (
    <Tag ref={ref} className={className}>
      {gradient
        ? text
        : units.map((unit, i) => (
            <span
              key={i}
              data-split-unit=""
              className="inline-block will-change-transform"
            >
              {unit}
              {mode === "word" && i < units.length - 1 ? "\u00A0" : null}
            </span>
          ))}
    </Tag>
  );
}

/**
 * Count-up number, same motion as the reference:
 * fades in, then counts 0 → target over clamp(target/40, 0.8, 3)s, power2.out.
 * Renders the final value in the HTML so it works without JS.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  delay = 0,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  className?: string;
}) {
  const format = (n: number) =>
    `${prefix}${decimals ? n.toFixed(decimals) : Math.floor(n)}${suffix}`;

  const ref = useGsapScope<HTMLSpanElement>(
    ({ el, gsap }) => {
      const duration = Math.min(3, Math.max(0.8, value / 40));
      gsap.set(el, { opacity: 0 });
      const obj = { val: 0 };
      gsap
        .timeline({
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
        .to(el, { opacity: 1, duration: 0.3, delay })
        .to(
          obj,
          {
            val: value,
            duration,
            delay,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = format(obj.val);
            },
          },
          0,
        );
    },
    [value, decimals, prefix, suffix, delay],
  );

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}

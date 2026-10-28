"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/content";

/** Blocky double-quote mark traced from the reference design. */
function QuoteGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 73 53" className={className} aria-hidden="true">
      {[0, 41].map((x) => (
        <g key={x} transform={`translate(${x} 0)`} fill="#c8e622">
          <path d="M0 7a7 7 0 0 1 7-7h18a7 7 0 0 1 7 7v20a7 7 0 0 1-7 7H0Z" />
          <path
            d="M3 26v12c0 8 4 13 11 12.5"
            fill="none"
            stroke="#c8e622"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}

/** Testimonial carousel: sliding card + overlay chevrons/dots — pauses on hover. */
export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative mx-auto w-full max-w-[1066px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-32px_rgba(12,12,12,0.35)]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="grid w-full shrink-0 md:grid-cols-[1.098fr_1fr]"
              aria-hidden={testimonials[index].name !== t.name}
            >
              {/* text panel */}
              <div className="flex flex-col px-6 pb-[38px] pt-[52px] md:px-8">
                <QuoteGlyph className="ml-2 h-[53px] w-[73px]" />
                <blockquote className="mt-[43px] text-[21px] leading-[30px] text-ink md:text-[26px] md:leading-[34px]">
                  &quot;{t.quote}&quot;
                </blockquote>
                <span
                  aria-hidden="true"
                  className="mt-[70px] block h-px bg-[#ededed]"
                />
                <figcaption className="mt-[19px]">
                  <span className="block text-[22px] font-semibold leading-[1.2] text-ink md:text-[26px]">
                    {t.name}
                  </span>
                  <span className="mt-[12px] block max-w-[calc(100%-130px)] text-[15px] leading-[1.4] text-[#333] md:max-w-none md:text-[16px]">
                    {t.role}
                  </span>
                </figcaption>
              </div>

              {/* portrait */}
              <div className="relative hidden md:block" aria-hidden="true">
                <Image
                  src="/testimonials/client.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 510px"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* overlay controls: chevrons + dots, bottom-right of the text panel */}
      <div className="absolute bottom-[38px] right-6 flex items-center gap-6 md:right-[calc(47.65%_+_32px)]">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-[17px] items-center px-2 text-ink transition-opacity hover:opacity-60"
        >
          <svg
            viewBox="0 0 10 17"
            className="h-[17px] w-[10px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8.5 1.5 1.5 8.5l7 7" />
          </svg>
        </button>
        <div className="flex items-center gap-[5px]">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === index ? "bg-[#222222]" : "bg-[#a7a7a7] hover:bg-[#8a8a8a]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="flex h-[17px] items-center px-2 text-ink transition-opacity hover:opacity-60"
        >
          <svg
            viewBox="0 0 10 17"
            className="h-[17px] w-[10px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M1.5 1.5 8.5 8.5l-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

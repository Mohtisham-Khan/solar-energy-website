"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import { Reveal, SplitHeading } from "@/components/motion/effects";

type CommitmentCard = {
  title: string;
  text: string;
  tone: "lime" | "sky";
  image: { src: string; alt: string };
};

type CommitmentCardsProps = {
  commitment: CommitmentCard[];
};

const overlayTone = {
  lime: "bg-[linear-gradient(#e4b23c00,#e4b23c_70%,#e4b23c)]",
  sky: "bg-[linear-gradient(#dce9e400,#dce9e4_70%,#dce9e4)]",
} as const;

const cardTone = {
  lime: "bg-lime",
  sky: "bg-sky",
} as const;

/** Reference "commitment" section: two 400px image cards with colour fades. */
export function CommitmentCards({ commitment }: CommitmentCardsProps) {
  return (
    <section className="bg-card py-20 md:py-[80px]">
      <div className="wrap flex flex-col gap-10">
        <div className="max-w-[684px]">
          <Reveal>
            <Eyebrow>Commitment</Eyebrow>
          </Reveal>
          <SplitHeading
            gradient
            text="Committed to a Cleaner, Solar-Powered Future"
            className="text-gradient mt-6 text-[clamp(30px,3.5vw,48px)] font-semibold leading-[1.12]"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {commitment.map((card) => (
            <Reveal key={card.title} scale={1.04}>
              <article
                className={`group relative h-[400px] cursor-pointer overflow-hidden rounded-xl ${cardTone[card.tone]}`}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${overlayTone[card.tone]}`}
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <h3 className="text-[clamp(22px,2vw,28px)] font-semibold capitalize tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-relaxed text-muted">
                    {card.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

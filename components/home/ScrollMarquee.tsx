'use client';

import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '@/components/motion/useGsap';

const ROW_A = ['SEO', 'Paid media', 'AI automation', 'CRO', 'Content', 'Analytics'];
const ROW_B = ['Lead generation', 'Chatbots', 'Funnels', 'Email', 'Social', 'Branding'];

function Slash() {
  return (
    <svg viewBox="0 0 84 48" className="h-[0.62em] w-auto shrink-0" aria-hidden>
      <path d="M44 0H84L40 48H0Z" fill="#d8f938" />
    </svg>
  );
}

function Row({ words, outline }: { words: string[]; outline?: boolean }) {
  const items = [...words, ...words, ...words];
  return (
    <div
      data-row
      className={`flex w-max items-center gap-[0.45em] whitespace-nowrap font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold uppercase leading-none tracking-[-0.03em] ${
        outline ? 'text-transparent [-webkit-text-stroke:1.5px_hsl(var(--gnk-fg)/0.35)]' : 'text-gnk-fg'
      }`}
    >
      {items.map((w, i) => (
        <span key={i} className="flex items-center gap-[0.45em]">
          {w}
          <Slash />
        </span>
      ))}
    </div>
  );
}

/** Oversized capability band — rows travel in opposite directions, driven by scroll. */
export function ScrollMarquee() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const rows = gsap.utils.toArray<HTMLElement>('[data-row]', root.current);
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { xPercent: i % 2 ? -33 : 0 },
            {
              xPercent: i % 2 ? 0 : -33,
              ease: 'none',
              scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative overflow-hidden border-y border-gnk-border py-10 dark:border-white/[0.06] sm:py-14" aria-hidden>
      <div className="space-y-4">
        <Row words={ROW_A} />
        <Row words={ROW_B} outline />
      </div>
    </div>
  );
}

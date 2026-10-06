'use client';

import { useRef } from 'react';
import { DESKTOP_MOTION, gsap, useGSAP } from '@/components/motion/useGsap';
import { SerumBottle } from './Products';

const formats = [
  { ratio: '9:16', w: 9, h: 16, where: 'Reels · TikTok · Stories · Shorts' },
  { ratio: '4:5', w: 4, h: 5, where: 'Instagram & Facebook feed' },
  { ratio: '1:1', w: 1, h: 1, where: 'Carousels · marketplaces' },
  { ratio: '16:9', w: 16, h: 9, where: 'YouTube · web · display' },
];

/** Frame size (px) for a ratio, fitted inside a max box. */
const fit = (w: number, h: number, maxW = 560, maxH = 520) => {
  const s = Math.min(maxW / w, maxH / h);
  return { width: Math.round(w * s), height: Math.round(h * s) };
};

function AdFrame({ ratio, live = false }: { ratio: string; live?: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.6rem] bg-[radial-gradient(90%_90%_at_70%_20%,#20240a,#070707_70%)]">
      <div className="absolute inset-y-0 right-[8%] w-[22%] -skew-x-[24deg] bg-[#d8f938]" />
      <div className="relative flex h-full w-full items-center justify-center p-[7%]">
        <SerumBottle className="h-[62%] w-auto shrink-0 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]" />
      </div>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] flex items-end justify-between gap-3">
        <p className="font-display text-[clamp(0.9rem,2.2vw,1.6rem)] font-semibold leading-[1.05] text-white">
          Glow in <span className="text-[#d8f938]">7 days.</span>
        </p>
        <span className="shrink-0 rounded-full bg-[#d8f938] px-3 py-1.5 text-[11px] font-semibold text-[#040404]">Shop now</span>
      </div>
      <span className="absolute left-[7%] top-[6%] rounded-full bg-black/50 px-2 py-0.5 font-mono text-[10px] text-white/80" {...(live ? { 'data-ratio-tag': '' } : {})}>
        {ratio}
      </span>
    </div>
  );
}

export function FormatMorph() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        const q = gsap.utils.selector(root);
        const frame = q('[data-frame]')[0];
        const tag = q('[data-ratio-tag]')[0];
        const items = q('[data-format]');
        gsap.set(frame, fit(9, 16));
        gsap.set(items, { opacity: 0.35 });
        gsap.set(items[0], { opacity: 1 });

        const tl = gsap.timeline({
          defaults: { ease: 'power3.inOut', duration: 1 },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=240%',
            scrub: 0.7,
            pin: q('[data-pin]')[0],
            snap: { snapTo: 'labels', duration: { min: 0.2, max: 0.5 } },
            onUpdate: (self) => {
              if (tag) tag.textContent = formats[Math.round(self.progress * (formats.length - 1))].ratio;
            },
          },
        });
        tl.addLabel('f0');
        formats.slice(1).forEach((f, i) => {
          const idx = i + 1;
          tl.to(frame, { ...fit(f.w, f.h) })
            .to(items[idx - 1], { opacity: 0.35, duration: 0.3 }, '<')
            .to(items[idx], { opacity: 1, duration: 0.3 }, '<0.2')
            .addLabel(`f${idx}`);
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} aria-labelledby="formats-title" className="relative">
      <div data-pin className="flex min-h-screen items-center py-20 lg:py-0">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Built for every placement</p>
            <h2 id="formats-title" className="mt-5 font-display text-display-md font-semibold text-gnk-fg">
              One idea. <span className="text-slash">Every format.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-gnk-muted">
              We design each concept to travel—safe zones, hooks, and CTAs adapted per placement, so one shoot feeds every
              channel you buy media on.
            </p>
            <ul className="mt-10 space-y-1">
              {formats.map((f) => (
                <li key={f.ratio} data-format className="flex items-baseline gap-5 border-b border-gnk-border py-4 dark:border-white/[0.07]">
                  <span className="w-14 font-display text-2xl font-semibold tracking-tight text-gnk-fg">{f.ratio}</span>
                  <span className="text-sm text-gnk-muted">{f.where}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: single morphing frame */}
          <div className="hidden h-[540px] items-center justify-center lg:flex">
            <div data-frame className="relative" style={fit(9, 16)}>
              <AdFrame ratio="9:16" live />
            </div>
          </div>

          {/* Mobile / reduced motion: all four formats */}
          <div className="grid grid-cols-2 items-end gap-3 lg:hidden">
            {formats.map((f) => (
              <div key={f.ratio}>
                <div style={{ aspectRatio: `${f.w} / ${f.h}` }} className="w-full">
                  <AdFrame ratio={f.ratio} />
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gnk-muted">{f.ratio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

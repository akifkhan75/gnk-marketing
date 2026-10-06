'use client';

import { useRef } from 'react';
import { DESKTOP_MOTION, gsap, useGSAP } from '@/components/motion/useGsap';

export type TimelineStep = { step: string; title: string; desc: string };

const defaultSteps: TimelineStep[] = [
  { step: '01', title: 'Diagnose', desc: 'Economics, funnel leaks, and technical constraints—before we spend a dollar on tactics.' },
  { step: '02', title: 'Design', desc: 'A prioritized roadmap: quick wins, structural bets, and clear success metrics.' },
  { step: '03', title: 'Ship', desc: 'Execution with QA discipline: launches, tests, and documentation your team can run.' },
  { step: '04', title: 'Compound', desc: 'Weekly learning loops. Scale what wins; cut what fails—without ego.' },
];

/** Process steps — a lime line is scrubbed across with scroll and each node ignites as it's reached. */
export function ProcessTimeline({ steps = defaultSteps }: { steps?: TimelineStep[] }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        const q = gsap.utils.selector(root);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top 75%', end: 'bottom 45%', scrub: 0.6 },
        });
        tl.fromTo(q('[data-line]'), { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 4 }, 0);
        q('[data-node]').forEach((node, i) => {
          // start values are read from computed styles (GSAP can't tween CSS var() strings)
          tl.to(node, { backgroundColor: '#d8f938', color: '#040404', borderColor: '#d8f938', duration: 0.3 }, i * 1.1);
        });
        tl.fromTo(q('[data-card]'), { y: 30, autoAlpha: 0.2 }, { y: 0, autoAlpha: 1, stagger: 1.1, duration: 0.6 }, 0);
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      <div className="absolute left-6 right-6 top-6 hidden h-px bg-gnk-border lg:block" aria-hidden>
        <div data-line className="h-full origin-left bg-[#d8f938]" />
      </div>
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((p) => (
          <li key={p.step} data-card className="relative">
            <span
              data-node
              className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full border border-gnk-border bg-gnk-bg font-mono text-xs font-medium text-gnk-fg dark:border-white/10"
            >
              {p.step}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-gnk-fg">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gnk-muted">{p.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, MOTION_OK, useGSAP } from '@/components/motion/useGsap';

/**
 * Hero depth: the giant lime slash drifts and rotates, the engine scales back
 * and the copy lifts away as you scroll out of the hero (scrubbed).
 */
export function HeroParallax({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
        gsap.to(q('[data-hero-slash]'), { yPercent: 35, xPercent: 18, rotate: 6, ease: 'none', scrollTrigger: st });
        gsap.to(q('[data-hero-copy]'), { yPercent: -18, autoAlpha: 0.15, ease: 'none', scrollTrigger: { ...st, end: '60% top' } });
        gsap.fromTo(
          q('[data-hero-engine]'),
          { scale: 1, y: 0 },
          { scale: 0.92, y: -60, ease: 'none', scrollTrigger: { ...st, start: '30% top' } }
        );
        // Subtle pointer tilt on the slash
        const slash = q('[data-hero-slash-inner]')[0];
        if (!slash) return;
        const xTo = gsap.quickTo(slash, 'x', { duration: 1.2, ease: 'power3.out' });
        const yTo = gsap.quickTo(slash, 'y', { duration: 1.2, ease: 'power3.out' });
        const onMove = (e: PointerEvent) => {
          xTo((e.clientX / window.innerWidth - 0.5) * 40);
          yTo((e.clientY / window.innerHeight - 0.5) * 30);
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      {children}
    </div>
  );
}

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { MARK_PATHS } from '@/components/brand/BrandMark';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LIME = '#d8f938';
const FG = 'hsl(var(--gnk-fg))';
const MUTED = 'hsl(var(--gnk-muted))';
const BORDER = 'hsl(var(--gnk-border))';
const CARD = 'hsl(var(--gnk-card))';

const chapters = [
  {
    n: '01',
    k: 'Traffic',
    title: 'Attract demand that matches intent.',
    body: 'SEO, paid media, social, and content bring the right buyers in—targeted by intent and measured on pipeline, not vanity reach.',
  },
  {
    n: '02',
    k: 'AI qualification',
    title: 'Every lead answered and scored in seconds.',
    body: 'AI assistants on your site and WhatsApp respond instantly, qualify against your criteria, and score intent—24/7, grounded in your real offers and policies.',
  },
  {
    n: '03',
    k: 'Automation',
    title: 'Follow-up that runs itself.',
    body: 'Qualified leads route to your CRM, trigger email and WhatsApp sequences, and alert sales—no manual triage, no lead left waiting.',
  },
  {
    n: '04',
    k: 'Conversion',
    title: 'Pipeline you can measure—and compound.',
    body: 'Sales talks only to ready buyers. Every touchpoint is tracked from first click to closed revenue, so we scale what wins and cut what doesn’t.',
  },
];

/* ── Scene geometry (viewBox 0 0 640 520) ───────────────────────── */
const CORE = { x: 300, y: 250 };
const sources = [
  { y: 92, label: 'Search' },
  { y: 196, label: 'Social' },
  { y: 300, label: 'Paid ads' },
  { y: 404, label: 'Content' },
];
const srcPath = (y: number) => `M128 ${y} C 210 ${y}, 220 ${CORE.y}, ${CORE.x - 58} ${CORE.y}`;
const outputs = [
  { y: 92, label: 'CRM updated' },
  { y: 172, label: 'Email sequence' },
  { y: 252, label: 'WhatsApp reply' },
];
const outPath = (y: number) => `M${CORE.x + 58} ${CORE.y} C 400 ${CORE.y}, 400 ${y}, 452 ${y}`;
const nurturePath = `M${CORE.x} ${CORE.y + 58} L ${CORE.x} 440`;
const bars = [34, 52, 46, 70, 88, 112];
const revLine = 'M440 470 L470 452 L500 458 L530 430 L560 408 L590 380';

function Scene({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 640 520" className="h-auto w-full overflow-visible" role="img" aria-label="How GNK Marketing turns traffic into revenue">
      <defs>
        <filter id={`${id}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={`${id}-halo`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={LIME} stopOpacity="0.28" />
          <stop offset="1" stopColor={LIME} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke={BORDER} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="520" fill={`url(#${id}-grid)`} opacity="0.5" />

      {/* L1 · Traffic */}
      <g data-layer="1">
        {sources.map((s) => (
          <path key={s.y} d={srcPath(s.y)} fill="none" stroke={BORDER} strokeWidth="1.5" />
        ))}
        {sources.map((s) => (
          <path key={`d${s.y}`} d={srcPath(s.y)} fill="none" stroke={FG} strokeOpacity="0.35" strokeWidth="1.5" className="ill-dash" />
        ))}
        <g className="motion-only">
          {sources.map((s, i) =>
            [0, 1].map((k) => (
              <circle key={`${s.y}-${k}`} r="3.2" fill={FG}>
                <animateMotion dur={`${2.6 + i * 0.3}s`} begin={`${k * 1.3 + i * 0.2}s`} repeatCount="indefinite" path={srcPath(s.y)} />
              </circle>
            ))
          )}
        </g>
        {sources.map((s) => (
          <g key={`c${s.y}`} transform={`translate(16 ${s.y - 18})`}>
            <rect width="112" height="36" rx="18" fill={CARD} stroke={BORDER} />
            <circle cx="18" cy="18" r="4" fill={FG} />
            <text x="32" y="22.5" fontSize="12" fontWeight="600" fill={FG} fontFamily="var(--font-sora)">
              {s.label}
            </text>
          </g>
        ))}
      </g>

      {/* L2 · AI qualification */}
      <g data-layer="2">
        <circle cx={CORE.x} cy={CORE.y} r="120" fill={`url(#${id}-halo)`} />
        <path d={nurturePath} stroke={BORDER} strokeWidth="1.5" strokeDasharray="3 6" fill="none" />
        <g className="motion-only">
          <circle r="3" fill={MUTED}>
            <animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite" path={nurturePath} />
          </circle>
        </g>
        <g transform={`translate(${CORE.x - 52} 430)`}>
          <rect width="104" height="30" rx="15" fill={CARD} stroke={BORDER} />
          <text x="52" y="19.5" textAnchor="middle" fontSize="10.5" fill={MUTED} fontFamily="var(--font-inter)">
            Nurture later
          </text>
        </g>
        {[
          { x: CORE.x - 150, y: 150, t: 'Fit score · 92' },
          { x: CORE.x + 38, y: 150, t: 'Intent · high' },
          { x: CORE.x + 50, y: 330, t: 'Budget ✓' },
        ].map((c) => (
          <g key={c.t} transform={`translate(${c.x} ${c.y})`}>
           <g data-chip>
            <rect width="112" height="28" rx="14" fill="#0b0b0a" stroke={LIME} strokeOpacity="0.55" />
            <circle cx="15" cy="14" r="3.5" fill={LIME} />
            <text x="26" y="18.5" fontSize="10.5" fontWeight="600" fill="#f5f5f2" fontFamily="var(--font-inter)">
              {c.t}
            </text>
           </g>
          </g>
        ))}
      </g>

      {/* Core (always present; brightens in L2) */}
      <g data-core>
        <circle cx={CORE.x} cy={CORE.y} r="58" fill="#070707" stroke={FG} strokeOpacity="0.18" strokeWidth="1.5" />
        <circle
          cx={CORE.x}
          cy={CORE.y}
          r="70"
          fill="none"
          stroke={LIME}
          strokeOpacity="0.6"
          strokeWidth="1.2"
          strokeDasharray="2 9"
          className="origin-center animate-spin-slow [transform-box:fill-box]"
        />
        {/* the logo slash as the AI core */}
        <path
          d={MARK_PATHS.slash}
          fill={LIME}
          transform={`translate(${CORE.x - 34} ${CORE.y - 18}) scale(0.33) translate(-965 -342)`}
          filter={`url(#${id}-glow)`}
        />
        <text x={CORE.x} y={CORE.y + 32} textAnchor="middle" fontSize="8.5" letterSpacing="2" fill="#9a9b94" fontFamily="var(--font-mono)">
          GNK · AI CORE
        </text>
      </g>

      {/* L3 · Automation */}
      <g data-layer="3">
        {outputs.map((o) => (
          <path key={o.y} d={outPath(o.y)} pathLength={1} data-route fill="none" stroke={LIME} strokeWidth="2" />
        ))}
        <g className="motion-only">
          {outputs.map((o, i) => (
            <circle key={o.y} r="3.6" fill={LIME} filter={`url(#${id}-glow)`}>
              <animateMotion dur="2.2s" begin={`${i * 0.35}s`} repeatCount="indefinite" path={outPath(o.y)} />
            </circle>
          ))}
        </g>
        {outputs.map((o) => (
          <g key={`o${o.y}`} transform={`translate(452 ${o.y - 18})`}>
           <g data-out>
            <rect width="150" height="36" rx="12" fill={CARD} stroke={BORDER} />
            <text x="14" y="22.5" fontSize="11.5" fontWeight="600" fill={FG} fontFamily="var(--font-inter)">
              {o.label}
            </text>
            <g transform="translate(150 0)">
              <circle r="9" fill={LIME} />
              <path d="M-4 0 l3 3 l5 -6" stroke="#040404" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
           </g>
          </g>
        ))}
      </g>

      {/* L4 · Conversion */}
      <g data-layer="4">
        <rect x="420" y="320" width="200" height="176" rx="16" fill={CARD} stroke={BORDER} />
        <text x="438" y="346" fontSize="8.5" letterSpacing="1.6" fill={MUTED} fontFamily="var(--font-mono)">
          PIPELINE → REVENUE
        </text>
        {bars.map((h, i) => (
          <rect key={i} data-bar x={440 + i * 28} y={482 - h} width="16" height={h} rx="4" fill={i === bars.length - 1 ? LIME : FG} fillOpacity={i === bars.length - 1 ? 1 : 0.16} />
        ))}
        <path d={revLine} data-rev pathLength={1} fill="none" stroke={LIME} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="590" cy="380" r="5" fill={LIME} filter={`url(#${id}-glow)`} />
      </g>
    </svg>
  );
}

export function StoryScroll() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(root);
        const texts = q('[data-chapter]');
        const steps = q('[data-step]');

        gsap.set(texts, { autoAlpha: 0, yPercent: 12 });
        gsap.set(texts[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(q('[data-layer="2"], [data-layer="3"], [data-layer="4"]'), { autoAlpha: 0 });
        gsap.set(q('[data-core]'), { autoAlpha: 0.35, scale: 0.7, transformOrigin: '300px 250px' });
        gsap.set(q('[data-chip], [data-out]'), { autoAlpha: 0, x: 24 });
        gsap.set(q('[data-route], [data-rev]'), { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set(q('[data-bar]'), { scaleY: 0, transformOrigin: 'bottom', transformBox: 'fill-box' });
        gsap.set(q('[data-layer="4"]'), { y: 40 });

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=320%',
            scrub: 0.8,
            pin: q('[data-pin]')[0],
            snap: { snapTo: 'labels', duration: { min: 0.2, max: 0.6 }, ease: 'power1.inOut' },
          },
        });

        const swap = (from: number, to: number, at: string) => {
          tl.to(texts[from], { autoAlpha: 0, yPercent: -12, duration: 0.4 }, at)
            .fromTo(texts[to], { autoAlpha: 0, yPercent: 12 }, { autoAlpha: 1, yPercent: 0, duration: 0.4 }, '<0.15')
            .to(steps[to], { opacity: 1, duration: 0.2 }, '<')
            .to(steps[from], { opacity: 0.45, duration: 0.2 }, '<');
        };

        tl.addLabel('c1')
          .to(q('[data-progress]'), { scaleY: 0.25, duration: 0.01 }, 0)
          // → 02 qualification
          .to({}, { duration: 0.6 })
          .addLabel('to2');
        swap(0, 1, 'to2');
        tl.to(q('[data-core]'), { autoAlpha: 1, scale: 1, duration: 0.6 }, 'to2')
          .to(q('[data-layer="2"]'), { autoAlpha: 1, duration: 0.5 }, 'to2')
          .to(q('[data-chip]'), { autoAlpha: 1, x: 0, stagger: 0.12, duration: 0.4 }, 'to2+=0.2')
          .to(q('[data-layer="1"]'), { autoAlpha: 0.45, duration: 0.5 }, 'to2')
          .to(q('[data-progress]'), { scaleY: 0.5, duration: 0.6 }, 'to2')
          .addLabel('c2')
          // → 03 automation
          .to({}, { duration: 0.6 })
          .addLabel('to3');
        swap(1, 2, 'to3');
        tl.to(q('[data-layer="3"]'), { autoAlpha: 1, duration: 0.2 }, 'to3')
          .to(q('[data-route]'), { strokeDashoffset: 0, stagger: 0.12, duration: 0.6 }, 'to3')
          .to(q('[data-out]'), { autoAlpha: 1, x: 0, stagger: 0.12, duration: 0.4 }, 'to3+=0.3')
          .to(q('[data-chip]'), { autoAlpha: 0.35, duration: 0.4 }, 'to3')
          .to(q('[data-progress]'), { scaleY: 0.75, duration: 0.6 }, 'to3')
          .addLabel('c3')
          // → 04 conversion
          .to({}, { duration: 0.6 })
          .addLabel('to4');
        swap(2, 3, 'to4');
        tl.to(q('[data-layer="4"]'), { autoAlpha: 1, y: 0, duration: 0.5 }, 'to4')
          .to(q('[data-bar]'), { scaleY: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out' }, 'to4+=0.15')
          .to(q('[data-rev]'), { strokeDashoffset: 0, duration: 0.7 }, 'to4+=0.3')
          .to(q('[data-layer="1"], [data-layer="2"]'), { autoAlpha: 0.25, duration: 0.5 }, 'to4')
          .to(q('[data-progress]'), { scaleY: 1, duration: 0.6 }, 'to4')
          .addLabel('c4')
          .to({}, { duration: 0.4 });

        return () => tl.scrollTrigger?.kill();
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="how-it-works" aria-labelledby="how-title" className="relative">
      <div data-pin className="relative flex min-h-screen items-center overflow-hidden py-20 lg:py-0">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="how-title" className="mt-5 font-display text-display-md font-semibold text-gnk-fg">
              One system, from first click <span className="text-slash">to closed revenue.</span>
            </h2>

            <div className="mt-10 flex gap-6">
              {/* progress rail */}
              <div className="relative hidden w-px shrink-0 bg-gnk-border lg:block" aria-hidden>
                <div data-progress className="absolute inset-0 origin-top scale-y-[0.25] bg-[#d8f938]" />
              </div>
              <div className="flex-1">
                <ol className="hidden gap-5 lg:flex" aria-hidden>
                  {chapters.map((c, i) => (
                    <li
                      key={c.n}
                      data-step
                      className={`font-mono text-[11px] uppercase tracking-[0.16em] text-gnk-fg ${i === 0 ? '' : 'opacity-45'}`}
                    >
                      {c.n} {c.k}
                    </li>
                  ))}
                </ol>
                <div className="story-stack mt-8 lg:relative lg:min-h-[13rem]">
                  {chapters.map((c) => (
                    <div key={c.n} data-chapter className="story-chapter mb-10 lg:mb-0">
                      <p className="font-mono text-xs text-gnk-accent">
                        {c.n} — {c.k}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gnk-fg sm:text-3xl">{c.title}</h3>
                      <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-gnk-muted">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border order-first rounded-[2rem] bg-gnk-card/60 p-4 backdrop-blur-xl sm:p-6 lg:order-none">
            <Scene id="story" />
          </div>
        </div>
      </div>
    </section>
  );
}

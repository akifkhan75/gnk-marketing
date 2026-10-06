'use client';

import { useRef } from 'react';
import { MARK_PATHS } from '@/components/brand/BrandMark';
import { gsap, MOTION_OK, useGSAP } from '@/components/motion/useGsap';

type Lane = 'buyer' | 'investor';
type Stage = { key: string; label: string; sub: string; lane: Lane; icon: keyof typeof ICONS };

const stages: Stage[] = [
  { key: 'pre', label: 'Pre-launch', sub: 'Waitlist + intent capture', lane: 'buyer', icon: 'bell' },
  { key: 'fun', label: 'Funnels', sub: 'Interactive property paths', lane: 'buyer', icon: 'funnel' },
  { key: 'ai', label: 'AI assist', sub: 'Instant Q&A + qualification', lane: 'buyer', icon: 'slash' },
  { key: 'wa', label: 'WhatsApp', sub: 'Follow-up automation', lane: 'buyer', icon: 'chat' },
  { key: 'vid', label: 'Video', sub: 'Reels/Shorts creative engine', lane: 'buyer', icon: 'play' },
  { key: 'ret', label: 'Retarget', sub: 'Signal-based audiences', lane: 'buyer', icon: 'target' },
  { key: 'tour', label: '360 tours', sub: 'Immersive viewing layer', lane: 'buyer', icon: 'orbit' },
  { key: 'inv', label: 'Investor', sub: 'Deal & yield campaigns', lane: 'investor', icon: 'bars' },
];

const LIME = '#d8f938';
const FG = 'hsl(var(--gnk-fg))';
const MUTED = 'hsl(var(--gnk-muted))';
const BORDER = 'hsl(var(--gnk-border))';
const CARD = 'hsl(var(--gnk-card))';

/* 24×24 line icons, centred on 0,0 */
const ICONS = {
  bell: 'M-6 4h12M-5 4V0a5 5 0 0 1 10 0v4M-1.6 7.2h3.2',
  funnel: 'M-7-6H7L2 1v6l-4-2V1Z',
  slash: '',
  chat: 'M-7-5.5h14v9.5h-7.5L-4 7.5V4h-3Z',
  play: 'M-7-5.5h14v11h-14ZM-2-2.5 3 0l-5 2.5Z',
  target: 'M0-7a7 7 0 1 0 .01 0M0-3.5a3.5 3.5 0 1 0 .01 0M0 0h.01',
  orbit: 'M-7.5 0a7.5 3 0 1 0 15 0a7.5 3 0 1 0-15 0M0-6.5a6.5 6.5 0 1 0 .01 0',
  bars: 'M-6 6.5V2M-2 6.5V-2M2 6.5V0M6 6.5V-6',
} as const;

/* ── Geometry (viewBox 0 0 1000 440) ───────────────────────────── */
const BUYER_Y = 150;
const INV_Y = 300;
const RAIL_Y = 400;
const buyerStages = stages.filter((s) => s.lane === 'buyer');
const bx = (i: number) => 190 + i * 100; // 190 … 790
const AI_X = bx(2);
const INV_X = 640;
const pos = (s: Stage) =>
  s.lane === 'buyer' ? { x: bx(buyerStages.indexOf(s)), y: BUYER_Y } : { x: INV_X, y: INV_Y };

const buyerLane = `M128 ${BUYER_Y} H 852`;
const investorLane = `M${AI_X} ${BUYER_Y + 26} C ${AI_X} ${INV_Y - 30}, ${AI_X + 40} ${INV_Y}, ${AI_X + 90} ${INV_Y} H 852`;

function Station({ s }: { s: Stage }) {
  const { x, y } = pos(s);
  const d = ICONS[s.icon];
  const icon = (stroke: string) =>
    s.icon === 'slash' ? (
      <path d={MARK_PATHS.slash} fill={stroke} transform="translate(-9 -5) scale(0.085) translate(-965 -342)" />
    ) : (
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    );
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* drop line to the measurement rail */}
      <line y1="26" y2={RAIL_Y - y} stroke={BORDER} strokeDasharray="2 5" />
      <circle cy={RAIL_Y - y} r="3.5" fill={BORDER} />
      <circle data-tick cy={RAIL_Y - y} r="4.5" fill={LIME} opacity="0" />
      <g data-station>
        <circle data-halo r="24" fill={LIME} opacity="0" />
        {/* idle */}
        <rect x="-24" y="-24" width="48" height="48" rx="14" fill={CARD} stroke={BORDER} />
        <g opacity="0.75">{icon(FG)}</g>
        {/* lit (cross-faded in by GSAP) */}
        <g data-lit opacity="0">
          <rect x="-24" y="-24" width="48" height="48" rx="14" fill={LIME} />
          {icon('#040404')}
        </g>
      </g>
      <text y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill={FG} fontFamily="var(--font-sora)">
        {s.label}
      </text>
      <text y="58" textAnchor="middle" fontSize="8" letterSpacing="1.2" fill={MUTED} fontFamily="var(--font-mono)">
        {s.lane === 'investor' ? 'INVESTOR LANE' : `STEP ${String(buyerStages.indexOf(s) + 1).padStart(2, '0')}`}
      </text>
    </g>
  );
}

function Outcome({ y, title, sub, dark }: { y: number; title: string; sub: string; dark?: boolean }) {
  return (
    <g transform={`translate(860 ${y - 30})`}>
      <g data-outcome>
        <rect width="130" height="60" rx="16" fill={dark ? '#0b0b0a' : LIME} stroke={dark ? LIME : 'none'} strokeOpacity="0.6" />
        <text x="16" y="26" fontSize="12.5" fontWeight="700" fill={dark ? '#f5f5f2' : '#040404'} fontFamily="var(--font-sora)">
          {title}
        </text>
        <text x="16" y="44" fontSize="8.5" letterSpacing="1" fill={dark ? '#9a9b94' : '#2a3300'} fontFamily="var(--font-mono)">
          {sub}
        </text>
      </g>
    </g>
  );
}

function SystemMap() {
  return (
    <svg viewBox="0 0 1000 440" className="h-auto w-full overflow-visible" aria-hidden>
      <defs>
        <pattern id="re-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke={BORDER} strokeWidth="1" />
        </pattern>
        <filter id="re-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="1000" height="440" fill="url(#re-grid)" opacity="0.45" />

      {/* Lane labels */}
      <text x="190" y={BUYER_Y - 52} fontSize="9" letterSpacing="2" fill={MUTED} fontFamily="var(--font-mono)">
        BUYER LANE → TOURS + OFFERS
      </text>
      <text x={AI_X + 96} y={INV_Y - 44} fontSize="9" letterSpacing="2" fill={MUTED} fontFamily="var(--font-mono)">
        INVESTOR LANE → YIELD + CAPITAL
      </text>

      {/* Source: listings / launches */}
      <g transform={`translate(30 ${BUYER_Y - 62})`}>
        <rect width="98" height="124" rx="14" fill={CARD} stroke={BORDER} />
        <path d="M22 108V44l27-16 27 16v64" fill="none" stroke={FG} strokeOpacity="0.55" strokeWidth="1.6" strokeLinejoin="round" />
        {[0, 1, 2].map((r) =>
          [0, 1].map((c) => (
            <rect key={`${r}${c}`} data-window x={36 + c * 16} y={52 + r * 16} width="9" height="9" rx="2" fill={LIME} opacity="0.15" />
          ))
        )}
        <text x="49" y="20" textAnchor="middle" fontSize="8" letterSpacing="1.4" fill={MUTED} fontFamily="var(--font-mono)">
          LISTINGS
        </text>
      </g>

      {/* Tracks (base) */}
      <path d={buyerLane} stroke={BORDER} strokeWidth="2" fill="none" />
      <path d={investorLane} stroke={BORDER} strokeWidth="2" fill="none" strokeDasharray="4 6" />
      {/* Tracks (drawn in by scroll) */}
      <path data-lane="buyer" d={buyerLane} pathLength={1} stroke={LIME} strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#re-glow)" />
      <path data-lane="investor" d={investorLane} pathLength={1} stroke={FG} strokeOpacity="0.85" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Packets */}
      <g className="motion-only" data-packets>
        {[0, 1, 2, 3].map((k) => (
          <circle key={`b${k}`} r="4" fill={LIME} filter="url(#re-glow)">
            <animateMotion dur="5.5s" begin={`${k * 1.375}s`} repeatCount="indefinite" path={buyerLane} />
          </circle>
        ))}
        {[0, 1].map((k) => (
          <circle key={`i${k}`} r="3.4" fill={FG}>
            <animateMotion dur="5s" begin={`${0.8 + k * 2.5}s`} repeatCount="indefinite" path={investorLane} />
          </circle>
        ))}
      </g>

      {/* Measurement rail */}
      <line x1="150" x2="852" y1={RAIL_Y} y2={RAIL_Y} stroke={BORDER} strokeWidth="1.5" />
      <line data-rail x1="150" x2="852" y1={RAIL_Y} y2={RAIL_Y} stroke={LIME} strokeWidth="1.5" pathLength={1} />
      <text x="150" y={RAIL_Y + 24} fontSize="8.5" letterSpacing="2" fill={MUTED} fontFamily="var(--font-mono)">
        MEASURED AT EVERY STEP · GA4 · CRM · ATTRIBUTION
      </text>

      {stages.map((s) => (
        <Station key={s.key} s={s} />
      ))}

      <Outcome y={BUYER_Y} title="Tours & offers" sub="BUYER OUTCOME" />
      <Outcome y={INV_Y} title="Capital talks" sub="INVESTOR OUTCOME" dark />
    </svg>
  );
}

/** Real-estate dual-lane growth system — scroll-scrubbed with GSAP, static & complete without motion. */
export function RealEstateGrowthSystemVisual({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const map = q('[data-map]')[0];
        if (!map || getComputedStyle(map).display === 'none') return;

        gsap.set(q('[data-lane], [data-rail]'), { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set(q('[data-outcome]'), { autoAlpha: 0, x: -16 });
        gsap.set(q('[data-packets]'), { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: map, start: 'top 78%', end: 'bottom 50%', scrub: 0.7 },
        });

        tl.to(q('[data-window]'), { opacity: 1, stagger: { each: 0.08, from: 'random' }, duration: 0.3 }, 0)
          .to(q('[data-lane="buyer"]'), { strokeDashoffset: 0, duration: 4 }, 0.2)
          .to(q('[data-rail]'), { strokeDashoffset: 0, duration: 4.4 }, 0.2)
          .to(q('[data-lane="investor"]'), { strokeDashoffset: 0, duration: 2.6 }, 1.4);

        // Stations ignite as the buyer line reaches them; the investor station follows its own lane
        const stationEls = q('[data-station]');
        const ticks = q('[data-tick]');
        stages.forEach((s, i) => {
          const at = s.lane === 'buyer' ? 0.2 + (buyerStages.indexOf(s) / (buyerStages.length - 1)) * 3.6 : 3.4;
          const st = stationEls[i];
          tl.to(st.querySelector('[data-lit]'), { opacity: 1, duration: 0.25 }, at)
            .fromTo(st, { scale: 0.85, svgOrigin: '0 0' }, { scale: 1, duration: 0.35, ease: 'back.out(3)' }, at)
            .fromTo(st.querySelector('[data-halo]'), { opacity: 0.5, attr: { r: 24 } }, { opacity: 0, attr: { r: 48 }, duration: 0.6 }, at)
            .to(ticks[i], { opacity: 1, duration: 0.2 }, at);
        });

        tl.to(q('[data-outcome]'), { autoAlpha: 1, x: 0, stagger: 0.3, duration: 0.5, ease: 'power3.out' }, 4.1)
          .to(q('[data-packets]'), { autoAlpha: 1, duration: 0.4 }, 4.2);
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={`relative w-full ${className}`} role="img" aria-label="Real estate growth system: a buyer lane from pre-launch to tours and offers, and an investor lane from AI qualification to capital conversations, measured at every step">
      {/* Desktop / tablet: system map */}
      <div data-map className="hidden md:block">
        <SystemMap />
      </div>

      {/* Mobile: two-lane vertical timeline */}
      <ol className="relative space-y-3 md:hidden" aria-hidden>
        <span className="absolute bottom-4 left-[1.45rem] top-4 w-px bg-gradient-to-b from-[#d8f938] via-[#d8f938]/60 to-gnk-border" />
        {stages.map((s, i) => (
          <li key={s.key} className="relative flex items-start gap-4">
            <span
              className={`relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                s.lane === 'investor' ? 'border-[#d8f938]/60 bg-gnk-bg text-gnk-fg' : 'border-transparent bg-[#d8f938] text-[#040404]'
              }`}
            >
              <svg viewBox="-12 -12 24 24" className="h-5 w-5">
                {s.icon === 'slash' ? (
                  <path d={MARK_PATHS.slash} fill="currentColor" transform="translate(-9 -5) scale(0.085) translate(-965 -342)" />
                ) : (
                  <path d={ICONS[s.icon]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </span>
            <span className="pt-1">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gnk-muted">
                {s.lane === 'investor' ? 'Investor lane' : `Buyer lane · ${String(i + 1).padStart(2, '0')}`}
              </span>
              <span className="mt-0.5 block font-display text-base font-semibold text-gnk-fg">{s.label}</span>
              <span className="block text-sm text-gnk-muted">{s.sub}</span>
            </span>
          </li>
        ))}
      </ol>

      {/* Stage legend (desktop) */}
      <div className="mt-8 hidden gap-2 md:grid md:grid-cols-4">
        {stages.map((s) => (
          <div key={s.key} className="rounded-2xl border border-gnk-border/70 px-4 py-3 text-left dark:border-white/[0.07]">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gnk-muted">
              <span className={`h-1.5 w-3 ${s.lane === 'investor' ? 'bg-gnk-fg' : 'bg-[#d8f938]'} [clip-path:polygon(40%_0,100%_0,60%_100%,0_100%)]`} />
              {s.label}
            </div>
            <div className="mt-1 text-sm text-gnk-fg/90">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

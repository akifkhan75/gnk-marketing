'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

type RealEstateGrowthSystemVisualProps = {
  className?: string;
};

const ease = [0.25, 0.4, 0.25, 1] as const;

const stages = [
  { label: 'PRE-LAUNCH', sub: 'Waitlist + intent capture' },
  { label: 'FUNNELS', sub: 'Interactive property paths' },
  { label: 'AI ASSIST', sub: 'Instant Q&A + qualification' },
  { label: 'WHATSAPP', sub: 'Follow-up automation' },
  { label: 'VIDEO', sub: 'Reels/Shorts creative engine' },
  { label: 'RETARGET', sub: 'Signal-based audiences' },
  { label: '360 TOURS', sub: 'Immersive viewing layer' },
  { label: 'INVESTOR', sub: 'Deal & yield campaigns' },
] as const;

const stageColors = [
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent))',
];

/** Real-estate specific 8-stage growth system map (dual-lane pipeline). */
export function RealEstateGrowthSystemVisual({ className = '' }: RealEstateGrowthSystemVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('re-system');

  const n = stages.length;
  const startX = 52;
  const endX = 748;
  const gap = (endX - startX) / (n - 1);
  const topY = 46;
  const bottomY = 88;

  const xs = Array.from({ length: n }, (_, i) => startX + i * gap);
  const mainPath = `M ${startX} ${topY} L ${endX} ${topY}`;
  const secondPath = `M ${startX} ${bottomY} L ${endX} ${bottomY}`;

  const splitX = xs[5] ?? startX;
  const investorX = xs[7] ?? endX;
  const branchPath = `M ${splitX} ${topY} C ${splitX + 26} ${topY + 10}, ${investorX - 26} ${
    bottomY - 10
  }, ${investorX} ${bottomY}`;

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="AI-Powered Real Estate Growth System map">
      <svg
        viewBox="0 0 800 170"
        className="h-auto w-full"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />

        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.32" />

        {/* Lane glow */}
        <line
          x1={startX}
          y1={topY}
          x2={endX}
          y2={topY}
          stroke={`url(#${id.flow2})`}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1={startX}
          y1={bottomY}
          x2={endX}
          y2={bottomY}
          stroke={`url(#${id.flow2})`}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Primary lane */}
        <motion.line
          x1={startX}
          y1={topY}
          x2={endX}
          y2={topY}
          stroke={`url(#${id.flow})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          filter={`url(#${id.filterSoft})`}
          vectorEffect="non-scaling-stroke"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.25, ease }}
        />

        {/* Secondary lane (investor lane) */}
        <motion.line
          x1={startX}
          y1={bottomY}
          x2={endX}
          y2={bottomY}
          stroke="hsl(var(--gnk-muted))"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="3 10"
          opacity="0.28"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.35, ease, delay: 0.12 }}
        />

        {/* Branch / switch */}
        <path
          d={branchPath}
          stroke="hsl(var(--gnk-border))"
          strokeWidth="0.9"
          strokeOpacity="0.55"
          fill="none"
        />
        {!reduce ? (
          <motion.path
            d={branchPath}
            stroke={`url(#${id.flow2})`}
            strokeWidth="1.2"
            strokeOpacity="0.6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.25 }}
          />
        ) : null}

        {/* Lane labels */}
        <text
          x={startX}
          y={topY - 18}
          fill="hsl(var(--gnk-muted))"
          className="font-mono"
          style={{ fontSize: 7.5, fontWeight: 700 }}
          letterSpacing="0.18em"
          opacity="0.65"
        >
          BUYER PIPELINE
        </text>
        <text
          x={startX}
          y={bottomY + 26}
          fill="hsl(var(--gnk-muted))"
          className="font-mono"
          style={{ fontSize: 7.5, fontWeight: 700 }}
          letterSpacing="0.18em"
          opacity="0.5"
        >
          INVESTOR PIPELINE
        </text>

        {/* Stage nodes */}
        {xs.map((x, i) => {
          const isInvestor = i === 7;
          const y = isInvestor ? bottomY : topY;
          const accent = stageColors[i] ?? 'hsl(var(--gnk-accent))';

          return (
            <g key={stages[i]?.label ?? i} transform={`translate(${x} ${y})`}>
              <circle r="22" fill="hsl(var(--gnk-accent)/0.04)" stroke="hsl(var(--gnk-border))" strokeWidth="0.6" opacity="0.55" />
              <circle r="16" fill="none" stroke={accent} strokeWidth="0.55" strokeDasharray="2 7" strokeOpacity="0.32" />
              <rect
                x="-15"
                y="-19"
                width="30"
                height="38"
                rx="8"
                fill="hsl(var(--gnk-bg-elevated)/0.92)"
                stroke={`${accent.replace(')', '/0.46)')}`}
                strokeWidth="1.1"
              />

              {!reduce ? (
                <motion.circle
                  r="5"
                  fill={accent}
                  opacity="0.88"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.1 + i * 0.14, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : (
                <circle r="5" fill={accent} opacity="0.65" />
              )}

              <text
                y="39"
                textAnchor="middle"
                fill="hsl(var(--gnk-muted))"
                className="font-mono"
                style={{ fontSize: 7, fontWeight: 750 }}
                letterSpacing="0.06em"
                opacity="0.9"
              >
                {stages[i]?.label ?? `S${i + 1}`}
              </text>
            </g>
          );
        })}

        {/* Data packets */}
        {!reduce && (
          <>
            <circle r="4" fill="hsl(var(--gnk-accent-2))" opacity="0.92" filter={`url(#${id.bloom})`}>
              <animateMotion dur="6.1s" repeatCount="indefinite" path={mainPath} />
            </circle>
            <circle r="3" fill="hsl(var(--gnk-accent))" opacity="0.78">
              <animateMotion dur="6.1s" repeatCount="indefinite" path={mainPath} begin="1.4s" />
            </circle>
            <circle r="2.2" fill="hsl(var(--gnk-fg))" opacity="0.28">
              <animateMotion dur="6.1s" repeatCount="indefinite" path={mainPath} begin="3s" />
            </circle>
            <circle r="2.4" fill="hsl(var(--gnk-accent-2))" opacity="0.5">
              <animateMotion dur="7.2s" repeatCount="indefinite" path={secondPath} begin="0.4s" />
            </circle>
            <circle r="2.8" fill="hsl(var(--gnk-accent))" opacity="0.56">
              <animateMotion dur="7.8s" repeatCount="indefinite" path={branchPath} begin="0.9s" />
            </circle>
          </>
        )}
      </svg>

      <div className="mt-4 grid gap-2 text-center sm:grid-cols-4">
        {stages.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gnk-border/70 bg-gnk-card/25 px-3 py-2 dark:border-white/[0.08] dark:bg-gnk-card/10">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gnk-muted">
              {s.label}
            </div>
            <div className="mt-1 text-xs text-gnk-fg/90">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


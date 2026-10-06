'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';

type AnalyticsStreamVisualProps = { className?: string };

const ease = [0.25, 0.4, 0.25, 1] as const;

/* KPI metric bars (normalized heights 0–48) */
const kpiCols = [
  { label: 'SQL', val: 44, color: 'hsl(var(--gnk-accent))' },
  { label: 'CAC', val: 26, color: 'hsl(var(--gnk-accent-2))' },
  { label: 'ROAS', val: 38, color: 'hsl(var(--gnk-accent))' },
  { label: 'CVR', val: 32, color: 'hsl(var(--gnk-accent-2))' },
];

/* Trend series paths */
const series = [
  'M 14 66 C 30 58 52 48 76 38 C 98 28 116 22 140 16 C 158 12 172 10 190 8',
  'M 14 74 C 32 68 58 60 84 50 C 106 42 124 38 148 32 C 166 28 178 26 194 24',
  'M 14 82 C 34 78 62 72 90 64 C 114 56 132 52 156 46 C 174 42 188 40 198 38',
];

/* Mini sparkline points for KPI detail panel */
const sparkLines: Record<string, string> = {
  SQL: 'M 0 18 L 8 14 L 16 16 L 24 10 L 32 6 L 40 4',
  CAC: 'M 0 14 L 8 16 L 16 12 L 24 14 L 32 10 L 40 8',
  ROAS: 'M 0 16 L 8 12 L 16 10 L 24 8 L 32 6 L 40 2',
  CVR: 'M 0 14 L 8 13 L 16 10 L 24 8 L 32 6 L 40 4',
};

/** Analytics dashboard: trend series, KPI column bars, and live metric sparklines */
export function AnalyticsStreamVisual({ className = '' }: AnalyticsStreamVisualProps) {
  const reduce = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = !reduce && !isSmall && inView;
  const id = useVisualIds('analytics');

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Analytics dashboard: pipeline metrics and growth trends">
      <svg
        ref={containerRef}
        viewBox="0 0 480 124"
        className="mx-auto h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-kpifill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.65" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id={`${id.flow}-kpifill2`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.65" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Panel background */}
        <rect x="2" y="2" width="476" height="120" rx="10" fill="hsl(var(--gnk-bg-elevated)/0.55)" stroke="hsl(var(--gnk-border))" strokeWidth="0.7" />

        {/* Header bar */}
        <rect x="2" y="2" width="476" height="20" rx="10" fill="hsl(var(--gnk-accent)/0.06)" />
        <rect x="2" y="12" width="476" height="10" fill="hsl(var(--gnk-accent)/0.06)" />

        {/* Header dots */}
        {[14, 24, 34].map((x, i) => (
          <circle key={x} cx={x} cy="12" r="3" fill={['hsl(var(--gnk-accent-2))', 'hsl(var(--gnk-accent))', 'hsl(var(--gnk-border))'][i]} opacity="0.6" />
        ))}
        <text x="200" y="16" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7, fontWeight: 600 }} className="font-mono" letterSpacing="0.1em" opacity="0.7">
          PERFORMANCE METRICS · LIVE
        </text>
        {/* Status dot */}
        {active ? (
          <motion.circle
            cx="386" cy="12" r="3"
            fill="hsl(var(--gnk-accent-2))"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        ) : (
          <circle cx="386" cy="12" r="3" fill="hsl(var(--gnk-accent-2))" opacity="0.7" />
        )}
        <text x="395" y="16" fill="hsl(var(--gnk-accent-2))" style={{ fontSize: 6.5, fontWeight: 600 }} className="font-mono" opacity="0.8">LIVE</text>

        {/* ── Left panel: trend chart ── */}
        {/* Horizontal grid lines */}
        {[28, 48, 68, 88].map((y) => (
          <line key={y} x1="14" y1={y} x2="210" y2={y} stroke="hsl(var(--gnk-border))" strokeWidth="0.35" strokeOpacity="0.3" />
        ))}
        <line x1="14" y1="90" x2="210" y2="90" stroke="hsl(var(--gnk-border))" strokeWidth="0.75" strokeOpacity="0.5" />

        {/* Trend series */}
        {series.map((d, i) => (
          <motion.path
            key={`s-${i}`}
            d={d}
            stroke={i === 0 ? `url(#${id.flow})` : 'hsl(var(--gnk-muted))'}
            strokeWidth={i === 0 ? 2 : 1.1}
            fill="none"
            strokeLinecap="round"
            opacity={i === 0 ? 0.95 : 0.28}
            filter={i === 0 ? `url(#${id.filterSoft})` : undefined}
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={active ? { duration: 1.05 + i * 0.1, delay: i * 0.06, ease } : undefined}
          />
        ))}

        {/* Glow under main trend */}
        <path d={series[0]} stroke={`url(#${id.flow2})`} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.55" />

        {/* Milestone nodes on main trend */}
        {[
          [76, 38], [140, 16], [190, 8],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2))" strokeWidth="1.1" />
            {active && (
              <motion.circle
                cx={x} cy={y} r="9"
                fill="none"
                stroke="hsl(var(--gnk-accent))"
                strokeWidth="0.6"
                strokeOpacity="0.25"
                animate={{ opacity: [0.1, 0.35, 0.1] }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </g>
        ))}

        {/* Divider */}
        <line x1="220" y1="26" x2="220" y2="110" stroke="hsl(var(--gnk-border))" strokeWidth="0.5" strokeOpacity="0.4" />

        {/* ── Right panel: KPI columns ── */}
        {kpiCols.map((k, i) => {
          const bx = 238 + i * 52;
          const bh = k.val;
          const by = 90 - bh;
          const fill = i % 2 === 0
            ? `url(#${id.flow}-kpifill)`
            : `url(#${id.flow}-kpifill2)`;
          return (
            <g key={k.label}>
              {/* Bar — animate height from baseline upward */}
              <motion.rect
                x={bx - 10}
                width="20"
                rx="3"
                fill={fill}
                initial={active ? { height: 0, y: 90 } : undefined}
                animate={active ? { height: bh, y: by } : undefined}
                transition={active ? { duration: 0.8, delay: 0.08 * i, ease } : undefined}
              />
              {/* Bar border (static — positioned at full height) */}
              <rect x={bx - 10} y={by} width="20" height={bh} rx="3"
                fill="none" stroke={k.color} strokeWidth="0.75" strokeOpacity="0.38" />
              {/* Sparkline */}
              <g transform={`translate(${bx - 20} 26)`}>
                <rect width="40" height="24" rx="3" fill="hsl(var(--gnk-accent)/0.06)" />
                <motion.path
                  d={sparkLines[k.label]}
                  stroke={k.color}
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  transform="translate(0 2)"
                  initial={active ? { pathLength: 0 } : undefined}
                  animate={active ? { pathLength: 1 } : undefined}
                  transition={active ? { duration: 0.8, delay: 0.16 + i * 0.08, ease } : undefined}
                />
              </g>
              {/* KPI label */}
              <text x={bx} y={100} textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7, fontWeight: 700 }} className="font-mono" letterSpacing="0.07em">{k.label}</text>
            </g>
          );
        })}

        {/* Baseline */}
        <line x1="224" y1="90" x2="462" y2="90" stroke="hsl(var(--gnk-border))" strokeWidth="0.6" strokeOpacity="0.5" />
      </svg>
    </div>
  );
}

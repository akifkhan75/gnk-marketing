'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type GrowthGraphVisualProps = {
  className?: string;
};

const ring = {
  cx: 168,
  cy: 78,
  r: 44,
};

const sweep = 'M 252 112 C 296 92 318 70 346 46 C 366 28 398 24 424 30';
const traceA = 'M 252 112 C 288 96 316 84 346 68 C 370 56 398 54 428 60';
const traceB = 'M 252 112 C 286 104 318 98 350 90 C 376 84 402 84 432 88';

/** Trust / outcomes visual: stable ring + aligned traces (no badges). */
export function GrowthGraphVisual({ className = '' }: GrowthGraphVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('growth');

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Growth trend and expanding reach">
      <svg
        viewBox="0 0 520 156"
        className="mx-auto h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={id.chartFill} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.42" />
            <stop offset="55%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${id.flow}-ring`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.32" />
            <stop offset="55%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.35" />

        {/* Left: stable trust ring */}
        <g transform={`translate(${ring.cx} ${ring.cy})`}>
          <circle r={ring.r + 20} fill={`url(#${id.flow}-ring)`} opacity="0.9" filter={`url(#${id.bloom})`} />
          <circle r={ring.r + 10} fill="none" stroke="hsl(var(--gnk-border))" strokeWidth="1" opacity="0.6" />
          <circle r={ring.r} fill="hsl(var(--gnk-bg-elevated) / 0.35)" stroke="hsl(var(--gnk-accent) / 0.35)" strokeWidth="1.25" />
          <path d="M -18 2 L -6 14 L 18 -10" stroke="hsl(var(--gnk-accent-2))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id.filterSoft})`} />
          {!reduce ? (
            <motion.circle
              r={ring.r + 14}
              fill="none"
              stroke="hsl(var(--gnk-accent-2))"
              strokeWidth="0.8"
              strokeDasharray="3 10"
              strokeOpacity="0.35"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <circle r={ring.r + 14} fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.8" strokeDasharray="3 10" strokeOpacity="0.22" />
          )}
        </g>

        {/* Right: aligned outcome traces */}
        <g>
          <path d="M 236 126 H 492" stroke="hsl(var(--gnk-border))" strokeWidth="1" opacity="0.55" />
          <path d={sweep} stroke={`url(#${id.flow2})`} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.75" />
          <motion.path
            d={sweep}
            stroke={`url(#${id.flow})`}
            strokeWidth="2.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.35, ease: [0.25, 0.4, 0.25, 1] }}
          />
          <motion.path
            d={traceA}
            stroke="hsl(var(--gnk-accent-2))"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.06, ease: [0.25, 0.4, 0.25, 1] }}
          />
          <motion.path
            d={traceB}
            stroke="hsl(var(--gnk-muted))"
            strokeWidth="1.05"
            fill="none"
            strokeLinecap="round"
            opacity="0.28"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.05, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          />

          {[
            [346, 46],
            [398, 30],
            [452, 36],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="5.5" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2))" strokeWidth="1.2" opacity="0.95" />
              {!reduce ? (
                <motion.circle
                  cx={x}
                  cy={y}
                  r="10.5"
                  fill="none"
                  stroke="hsl(var(--gnk-accent))"
                  strokeWidth="0.75"
                  strokeOpacity="0.25"
                  animate={{ opacity: [0.1, 0.35, 0.1] }}
                  transition={{ duration: 2.8 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : null}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

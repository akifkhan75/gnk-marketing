'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type AnalyticsStreamVisualProps = { className?: string };

const series = [
  'M 24 44 Q 52 38, 88 30 T 152 22 T 216 14 T 280 10',
  'M 24 56 Q 56 50, 96 46 T 168 38 T 240 32 T 312 26',
  'M 24 68 Q 60 62, 108 56 T 192 50 T 276 44',
];

const bars = [28, 44, 36, 52, 40, 48, 34, 58, 46, 42, 50, 38];

/** Dashboard-style panel: streams, baseline, and micro histogram. */
export function AnalyticsStreamVisual({ className = '' }: AnalyticsStreamVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('analytics');

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Analytics data streams">
      <svg viewBox="0 0 336 112" className="mx-auto h-auto w-full max-w-lg" fill="none" aria-hidden>
        <RichSvgDefs id={id} />

        <rect x="4" y="6" width="328" height="100" rx="8" fill="hsl(var(--gnk-bg-elevated) / 0.5)" stroke="hsl(var(--gnk-border))" strokeWidth="0.75" />
        <rect x="4" y="6" width="328" height="22" rx="8" fill="hsl(var(--gnk-accent) / 0.06)" />
        <path d="M 20 17 H 52 M 60 17 H 120" stroke="hsl(var(--gnk-muted))" strokeWidth="2" strokeLinecap="round" opacity="0.25" />

        <line x1="20" y1="86" x2="316" y2="86" stroke="hsl(var(--gnk-border))" strokeWidth="0.75" opacity="0.55" />
        {[32, 56, 80].map((y) => (
          <line key={y} x1="20" y1={y} x2="316" y2={y} stroke="hsl(var(--gnk-border))" strokeWidth="0.35" strokeOpacity="0.2" />
        ))}

        {series.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={i === 0 ? `url(#${id.flow})` : 'hsl(var(--gnk-muted))'}
            strokeWidth={i === 0 ? 2.1 : 1.15}
            fill="none"
            strokeLinecap="round"
            opacity={i === 0 ? 0.95 : 0.32}
            filter={i === 0 ? `url(#${id.filterSoft})` : undefined}
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.35 + i * 0.08, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.07 }}
          />
        ))}

        <g transform="translate(232 58)">
          {bars.map((h, i) => (
            <rect
              key={i}
              x={i * 7}
              y={34 - h * 0.35}
              width="5"
              height={h * 0.35}
              rx="1"
              fill={i % 4 === 0 ? 'hsl(var(--gnk-accent-2))' : 'hsl(var(--gnk-accent))'}
              opacity={0.2 + (i % 5) * 0.08}
            />
          ))}
        </g>

        <rect x="226" y="52" width="96" height="44" rx="4" fill="none" stroke="hsl(var(--gnk-border))" strokeWidth="0.5" strokeOpacity="0.45" />
      </svg>
    </div>
  );
}

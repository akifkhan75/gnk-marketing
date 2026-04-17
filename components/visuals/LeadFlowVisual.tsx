'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type LeadFlowVisualProps = { className?: string };

/** Entry constellation → policy gates → qualified vault with scan beams. */
export function LeadFlowVisual({ className = '' }: LeadFlowVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('lead');

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Lead capture and qualification flow">
      <svg viewBox="0 0 440 160" className="mx-auto h-auto w-full max-w-xl" fill="none" aria-hidden>
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-scan`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
            <stop offset="45%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.55" />

        <g opacity="0.9">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx={28 + i * 11} cy="36" r={3.2 + (i % 3) * 0.4} fill="hsl(var(--gnk-muted))" opacity={0.18 + i * 0.06} />
          ))}
          <path
            d="M 28 36 Q 52 24 76 36"
            stroke="hsl(var(--gnk-border))"
            strokeWidth="0.5"
            fill="none"
            strokeOpacity="0.45"
          />
        </g>

        <motion.path
          d="M 96 48 L 158 48 L 158 78 L 224 78 L 224 48 L 292 48"
          stroke={`url(#${id.flow})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 12"
          className={reduce ? '' : 'animate-ai-flow-dash'}
          filter={`url(#${id.filterSoft})`}
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.35, ease: [0.25, 0.4, 0.25, 1] }}
        />
        <path
          d="M 96 48 L 158 48 L 158 78 L 224 78 L 224 48 L 292 48"
          stroke={`url(#${id.flow2})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />

        {[
          [158, 64, 10, 32],
          [224, 64, 10, 32],
        ].map(([cx, cy, w, h], i) => (
          <g key={i}>
            <rect
              x={(cx as number) - (w as number) / 2}
              y={(cy as number) - (h as number) / 2}
              width={w as number}
              height={h as number}
              rx="3"
              fill="hsl(var(--gnk-accent) / 0.12)"
              stroke="hsl(var(--gnk-accent) / 0.45)"
              strokeWidth="1"
            />
            {!reduce ? (
              <motion.rect
                x={(cx as number) - 5}
                y={(cy as number) - (h as number) / 2}
                width="10"
                height={h as number}
                fill={`url(#${id.flow}-scan)`}
                animate={{ opacity: [0.2, 0.85, 0.2] }}
                transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : null}
          </g>
        ))}

        <g transform="translate(352 78)">
          <rect x="-44" y="-30" width="88" height="60" rx="10" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2) / 0.5)" strokeWidth="1.1" />
          <rect x="-36" y="-22" width="72" height="20" rx="4" fill="hsl(var(--gnk-accent-2) / 0.08)" />
          <path d="M-14 0 L-4 10 L18 -12" stroke="hsl(var(--gnk-accent-2))" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id.filterSoft})`} />
          <circle cx="22" cy="-12" r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.75" />
        </g>

        <text
          x="220"
          y="138"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 9, fontWeight: 600 }}
          className="font-mono uppercase tracking-wider"
        >
          Raw → policy → SQL-ready
        </text>
      </svg>
    </div>
  );
}

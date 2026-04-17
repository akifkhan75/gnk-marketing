'use client';

import { useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type FunnelDiagramProps = {
  className?: string;
  steps?: string[];
};

/** Isometric-style funnel tiers + central velocity spine. */
export function FunnelDiagram({
  className = '',
  steps = ['Awareness', 'Intent', 'Qualified', 'Won'],
}: FunnelDiagramProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('funnel');
  const w = [216, 172, 128, 86];
  const y = [36, 96, 156, 216];
  const depth = 14;

  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`} role="img" aria-label="Sales funnel stages">
      <svg viewBox="0 0 280 280" className="h-auto w-full" fill="none" aria-hidden>
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-top`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.38" />
          </linearGradient>
          <linearGradient id={`${id.flow}-side`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.55" />

        {w.map((width, i) => {
          const x = 140 - width / 2;
          const top = y[i];
          const h = 48;
          const skew = 10;
          return (
            <g key={i} transform={`translate(0 ${i * 1.2})`}>
              <path
                d={`M ${x + skew} ${top} L ${x + width + skew} ${top} L ${x + width} ${top + h} L ${x} ${top + h} Z`}
                fill={`url(#${id.flow}-side)`}
                stroke="hsl(var(--gnk-accent) / 0.22)"
                strokeWidth="0.8"
              />
              <path
                d={`M ${x} ${top} L ${x + width} ${top} L ${x + width + skew} ${top - depth} L ${x + skew} ${top - depth} Z`}
                fill={i === steps.length - 1 ? 'hsl(var(--gnk-accent-2) / 0.28)' : `url(#${id.flow}-top)`}
                stroke="hsl(var(--gnk-accent) / 0.4)"
                strokeWidth="0.9"
              />
              <path
                d={`M ${x + width} ${top} L ${x + width + skew} ${top - depth} L ${x + width + skew} ${top + h - depth} L ${x + width} ${top + h} Z`}
                fill="hsl(var(--gnk-accent) / 0.06)"
                stroke="hsl(var(--gnk-border))"
                strokeWidth="0.45"
                strokeOpacity="0.5"
              />
              <text
                x="140"
                y={top + h / 2 + 4}
                textAnchor="middle"
                fill="hsl(var(--gnk-muted))"
                style={{ fontSize: 9, fontWeight: 600 }}
                className="font-mono uppercase tracking-wide"
              >
                {steps[i] ?? `S${i + 1}`}
              </text>
            </g>
          );
        })}

        <path
          d="M 140 88 L 140 232"
          stroke={`url(#${id.flow})`}
          strokeWidth="2.25"
          strokeDasharray="5 10"
          strokeLinecap="round"
          className={reduce ? '' : 'animate-ai-flow-dash'}
          opacity="0.65"
          filter={`url(#${id.filterSoft})`}
        />
        <circle cx="140" cy="108" r="3" fill="hsl(var(--gnk-accent-2))" opacity="0.7" />
        <circle cx="140" cy="168" r="3" fill="hsl(var(--gnk-accent))" opacity="0.75" />
        <circle cx="140" cy="218" r="3.5" fill="hsl(var(--gnk-accent-2))" opacity="0.85" />
      </svg>
    </div>
  );
}

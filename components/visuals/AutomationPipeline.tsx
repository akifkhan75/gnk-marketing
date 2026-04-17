'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type AutomationPipelineProps = {
  className?: string;
  labels?: string[];
};

/** Dual-rail pipeline with depth, packet train, and stage halos. */
export function AutomationPipeline({
  className = '',
  labels = ['Capture', 'Enrich', 'Score', 'Route'],
}: AutomationPipelineProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('pipe');
  const n = labels.length;
  const gap = 480 / (n - 1);

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Automation pipeline stages">
      <svg viewBox="0 0 600 120" className="h-auto w-full max-w-2xl" fill="none" aria-hidden>
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.4" />

        <line x1="48" y1="42" x2="552" y2="42" stroke={`url(#${id.flow2})`} strokeWidth="5" strokeLinecap="round" opacity="0.85" />
        <line x1="48" y1="42" x2="552" y2="42" stroke={`url(#${id.flow})`} strokeWidth="1.75" strokeLinecap="round" opacity="0.75" filter={`url(#${id.filterSoft})`} />

        <line x1="48" y1="72" x2="552" y2="72" stroke="hsl(var(--gnk-muted))" strokeWidth="1.1" strokeLinecap="round" opacity="0.2" strokeDasharray="4 12" />

        {labels.map((label, i) => {
          const x = 48 + i * gap;
          return (
            <g key={label}>
              <ellipse cx={x} cy="78" rx="16" ry="5" fill="hsl(var(--gnk-accent))" opacity="0.06" />
              <g transform={`translate(${x} 56)`}>
                <rect x="-18" y="-22" width="36" height="44" rx="8" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent) / 0.45)" strokeWidth="1.2" />
                <motion.circle
                  r="6"
                  fill="hsl(var(--gnk-accent-2))"
                  opacity="0.85"
                  animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.2 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                />
                <circle r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.9" />
              </g>
              <text
                x={x}
                y="104"
                textAnchor="middle"
                fill="hsl(var(--gnk-muted))"
                style={{ fontSize: 9, fontWeight: 600 }}
                className="font-mono uppercase tracking-wide"
              >
                {label}
              </text>
            </g>
          );
        })}

        {!reduce ? (
          <>
            <circle r="3.5" fill="hsl(var(--gnk-accent-2))" filter={`url(#${id.bloom})`}>
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M 48 42 L 552 42" />
            </circle>
            <circle r="2.6" fill="hsl(var(--gnk-accent))" opacity="0.8">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M 48 42 L 552 42" begin="0.7s" />
            </circle>
            <circle r="2" fill="hsl(var(--gnk-fg))" opacity="0.35">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M 48 72 L 552 72" begin="0.35s" />
            </circle>
          </>
        ) : null}
      </svg>
    </div>
  );
}

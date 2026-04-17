'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type ConversationGraphVisualProps = { className?: string };

const nodes: { x: number; y: number; r: number; hub?: boolean }[] = [
  { x: 180, y: 28, r: 11, hub: true },
  { x: 72, y: 96, r: 8 },
  { x: 180, y: 108, r: 9 },
  { x: 288, y: 96, r: 8 },
  { x: 48, y: 158, r: 7 },
  { x: 120, y: 172, r: 7 },
  { x: 240, y: 172, r: 7 },
  { x: 312, y: 158, r: 7 },
];

const edges: [number, number, string][] = [
  [0, 1, 'M 180 38 Q 120 56 72 88'],
  [0, 2, 'M 180 39 L 180 99'],
  [0, 3, 'M 180 38 Q 240 56 288 88'],
  [1, 4, 'M 68 104 Q 56 128 52 151'],
  [1, 5, 'M 78 104 Q 96 138 114 165'],
  [2, 5, 'M 172 115 Q 150 142 127 165'],
  [2, 6, 'M 188 115 Q 210 142 233 165'],
  [3, 6, 'M 282 104 Q 264 138 246 165'],
  [3, 7, 'M 292 104 Q 304 128 308 151'],
];

/** Routed decision graph: curved edges, weighted nodes, ingress hub. */
export function ConversationGraphVisual({ className = '' }: ConversationGraphVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('conv');

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="AI conversation routing graph">
      <svg
        viewBox="0 0 360 200"
        className="mx-auto h-auto w-full max-w-lg"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.35" />

        {edges.map(([from, to, d]) => (
          <path
            key={`g-${from}-${to}`}
            d={d}
            stroke={`url(#${id.flow2})`}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.2"
          />
        ))}

        {edges.map(([from, to, d], i) => (
          <motion.path
            key={`${from}-${to}-${i}`}
            d={d}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.42"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.05, delay: 0.06 + i * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={i} transform={`translate(${n.x} ${n.y})`}>
            {n.hub ? <circle r={n.r + 14} fill={`url(#${id.core})`} opacity="0.35" /> : null}
            <circle
              r={n.r}
              fill={n.hub ? 'hsl(var(--gnk-bg-elevated))' : 'hsl(var(--gnk-accent) / 0.08)'}
              stroke={n.hub ? 'hsl(var(--gnk-accent))' : 'hsl(var(--gnk-border))'}
              strokeWidth={n.hub ? 1.35 : 0.9}
              filter={n.hub ? `url(#${id.filterSoft})` : undefined}
            />
            <circle r={n.hub ? 4 : 3} fill="hsl(var(--gnk-accent-2))" opacity={n.hub ? 0.9 : 0.5} />
          </g>
        ))}

        <text x="180" y="32" textAnchor="middle" fill="hsl(var(--gnk-fg))" style={{ fontSize: 7, fontWeight: 800 }} className="font-mono">
          IN
        </text>

        {[
          [72, 96, 'Policy'],
          [180, 108, 'Router'],
          [288, 96, 'Book'],
        ].map(([x, y, label]) => (
          <g key={label as string}>
            <rect
              x={(x as number) - 34}
              y={(y as number) + 18}
              width="68"
              height="24"
              rx="6"
              fill="hsl(var(--gnk-bg-elevated) / 0.85)"
              stroke="hsl(var(--gnk-accent) / 0.2)"
              strokeWidth="0.75"
            />
            <text
              x={x as number}
              y={(y as number) + 34}
              textAnchor="middle"
              fill="hsl(var(--gnk-muted))"
              style={{ fontSize: 8, fontWeight: 600 }}
              className="font-mono uppercase"
            >
              {label as string}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

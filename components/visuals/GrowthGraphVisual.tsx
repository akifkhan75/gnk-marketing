'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';

type GrowthGraphVisualProps = { className?: string };

const ease = [0.25, 0.4, 0.25, 1] as const;

/* Growth trajectory path (compound curve) */
const sweepMain = 'M 52 126 C 100 112 140 100 182 84 C 220 70 252 54 292 40 C 328 28 360 20 400 14 C 430 10 458 12 488 10';
const sweepB = 'M 52 136 C 104 124 148 114 192 98 C 232 84 264 72 302 58 C 338 46 368 40 408 36';
const sweepC = 'M 52 148 C 108 140 156 130 202 116 C 244 104 278 94 320 82 C 356 72 388 66 424 64';

/* Expanding network nodes */
const networkNodes: { x: number; y: number; r: number; hub?: boolean }[] = [
  { x: 52, y: 130, r: 9, hub: true },
  { x: 130, y: 100, r: 7 },
  { x: 220, y: 68, r: 7 },
  { x: 310, y: 42, r: 8 },
  { x: 400, y: 18, r: 10, hub: true },
  { x: 488, y: 14, r: 7 },
  { x: 170, y: 118, r: 5 },
  { x: 270, y: 80, r: 5 },
  { x: 360, y: 54, r: 5 },
  { x: 450, y: 26, r: 6 },
];

/* Network connections between nodes */
const netEdges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8], [4, 9], [5, 9],
];

export function GrowthGraphVisual({ className = '' }: GrowthGraphVisualProps) {
  const reduce = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = !reduce && !isSmall && inView;
  const id = useVisualIds('growth');

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      role="img"
      aria-label="Compound growth engine: expanding node network with upward trajectory"
    >
      <svg
        viewBox="0 0 540 168"
        className="mx-auto h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.28" />
            <stop offset="60%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.35" />

        {/* Baseline grid */}
        <line x1="40" y1="148" x2="510" y2="148" stroke="hsl(var(--gnk-border))" strokeWidth="0.75" opacity="0.5" />
        {[40, 80, 110].map((y) => (
          <line key={y} x1="40" y1={y} x2="510" y2={y} stroke="hsl(var(--gnk-border))" strokeWidth="0.3" strokeOpacity="0.2" />
        ))}

        {/* Area fill under main sweep */}
        <path
          d={`${sweepMain} L 488 148 L 52 148 Z`}
          fill={`url(#${id.flow}-fill)`}
          opacity="0.9"
        />

        {/* Network edges */}
        {netEdges.map(([a, b], i) => {
          const na = networkNodes[a];
          const nb = networkNodes[b];
          return (
            <motion.line
              key={`ne-${i}`}
              x1={na.x} y1={na.y}
              x2={nb.x} y2={nb.y}
              stroke="hsl(var(--gnk-accent-2))"
              strokeWidth="0.6"
              strokeOpacity="0.28"
              initial={active ? { pathLength: 0 } : undefined}
              animate={active ? { pathLength: 1 } : undefined}
              transition={active ? { duration: 0.8, delay: 0.03 * i, ease } : undefined}
            />
          );
        })}

        {/* Secondary traces */}
        {[sweepB, sweepC].map((d, i) => (
          <motion.path
            key={`sw-${i}`}
            d={d}
            stroke="hsl(var(--gnk-muted))"
            strokeWidth={i === 0 ? 1.1 : 0.85}
            fill="none"
            strokeLinecap="round"
            opacity={i === 0 ? 0.32 : 0.18}
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={active ? { duration: 1.05 + i * 0.1, delay: 0.06 + i * 0.06, ease } : undefined}
          />
        ))}

        {/* Glow underglow on main sweep */}
        <path d={sweepMain} stroke={`url(#${id.flow2})`} strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.65" />

        {/* Main sweep path */}
        <motion.path
          d={sweepMain}
          stroke={`url(#${id.flow})`}
          strokeWidth="2.25"
          fill="none"
          strokeLinecap="round"
          filter={`url(#${id.filterSoft})`}
          initial={active ? { pathLength: 0 } : undefined}
          animate={active ? { pathLength: 1 } : undefined}
          transition={active ? { duration: 1.1, ease } : undefined}
        />

        {/* Network nodes */}
        {networkNodes.map((n, i) => (
          <g key={i} transform={`translate(${n.x} ${n.y})`}>
            {n.hub && (
              <circle r={n.r + 14} fill={`url(#${id.core})`} opacity="0.3" filter={`url(#${id.bloom})`} />
            )}
            <circle
              r={n.r + 5}
              fill="hsl(var(--gnk-bg-elevated)/0.6)"
              stroke="hsl(var(--gnk-border))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <circle
              r={n.r}
              fill={n.hub ? 'hsl(var(--gnk-bg-elevated)/0.9)' : 'hsl(var(--gnk-accent)/0.1)'}
              stroke={n.hub ? 'hsl(var(--gnk-accent-2)/0.55)' : 'hsl(var(--gnk-accent-2)/0.3)'}
              strokeWidth={n.hub ? 1.2 : 0.7}
            />
            <circle r={n.hub ? 3.5 : 2.5} fill="hsl(var(--gnk-accent-2))" opacity={n.hub ? 0.9 : 0.55} />
            {/* Pulse on hub nodes */}
            {n.hub && active && (
              <motion.circle
                r={n.r + 9}
                fill="none"
                stroke="hsl(var(--gnk-accent))"
                strokeWidth="0.65"
                strokeOpacity="0.3"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 2.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </g>
        ))}

        {/* Particle along main sweep */}
        {active && (
          <>
            <circle r="3.5" fill="hsl(var(--gnk-accent-2))" opacity="0.9" filter={`url(#${id.bloom})`}>
              <animateMotion dur="7s" repeatCount="indefinite" path={sweepMain} />
            </circle>
            <circle r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.72">
              <animateMotion dur="7s" repeatCount="indefinite" path={sweepMain} begin="2.2s" />
            </circle>
          </>
        )}

        {/* Y-axis tick labels */}
        {[
          { y: 148, label: 'BASE' },
          { y: 80, label: '2×' },
          { y: 30, label: '5×' },
        ].map(({ y, label }) => (
          <text
            key={label}
            x="32"
            y={y + 4}
            textAnchor="end"
            fill="hsl(var(--gnk-muted))"
            style={{ fontSize: 6.5, fontWeight: 600 }}
            className="font-mono"
            opacity="0.5"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

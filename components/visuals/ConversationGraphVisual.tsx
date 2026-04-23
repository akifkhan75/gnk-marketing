'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';

type ConversationGraphVisualProps = { className?: string };

const ease = [0.25, 0.4, 0.25, 1] as const;

/* Node definitions */
const nodes: { id: string; x: number; y: number; r: number; label: string; hub?: boolean }[] = [
  { id: 'in', x: 200, y: 22, r: 13, label: 'INTAKE', hub: true },
  { id: 'p1', x: 80, y: 88, r: 9, label: 'POLICY' },
  { id: 'r1', x: 200, y: 100, r: 10, label: 'ROUTER' },
  { id: 'b1', x: 320, y: 88, r: 9, label: 'BOOK' },
  { id: 'n1', x: 36, y: 156, r: 7, label: 'NURTURE' },
  { id: 'n2', x: 112, y: 168, r: 7, label: 'QUALIFY' },
  { id: 'n3', x: 188, y: 172, r: 8, label: 'CRM' },
  { id: 'n4', x: 264, y: 168, r: 7, label: 'SCHEDULE' },
  { id: 'n5', x: 340, y: 156, r: 7, label: 'CLOSE' },
  { id: 'n6', x: 160, y: 62, r: 5, label: '' },
  { id: 'n7', x: 240, y: 62, r: 5, label: '' },
];

/* Edge definitions: [from.id, to.id, path] */
const edges: { from: string; to: string; d: string; primary?: boolean }[] = [
  { from: 'in', to: 'p1', d: 'M 192 32 Q 132 54 88 80', primary: true },
  { from: 'in', to: 'r1', d: 'M 200 35 L 200 90', primary: true },
  { from: 'in', to: 'b1', d: 'M 208 32 Q 268 54 312 80', primary: true },
  { from: 'p1', to: 'n1', d: 'M 74 97 Q 52 124 42 148' },
  { from: 'p1', to: 'n2', d: 'M 84 97 Q 100 132 108 162' },
  { from: 'r1', to: 'n2', d: 'M 190 108 Q 154 138 118 162' },
  { from: 'r1', to: 'n3', d: 'M 196 110 Q 194 140 190 164' },
  { from: 'r1', to: 'n4', d: 'M 210 108 Q 234 140 260 162' },
  { from: 'b1', to: 'n4', d: 'M 314 97 Q 292 132 270 162' },
  { from: 'b1', to: 'n5', d: 'M 328 97 Q 336 124 338 150' },
  { from: 'in', to: 'n6', d: 'M 186 30 Q 170 46 164 58', primary: false },
  { from: 'in', to: 'n7', d: 'M 214 30 Q 228 46 236 58', primary: false },
];

export function ConversationGraphVisual({ className = '' }: ConversationGraphVisualProps) {
  const reduce = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = !reduce && !isSmall && inView;
  const id = useVisualIds('conv');

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      role="img"
      aria-label="AI conversation routing graph: intake to policy, router, and booking paths"
    >
      <svg
        viewBox="0 -10 380 222"
        className="mx-auto h-auto w-full max-w-lg"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.28" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.45" />

        {/* Edge glows */}
        {edges.map((e, i) => (
          <path
            key={`eg-${i}`}
            d={e.d}
            stroke={`url(#${id.flow2})`}
            strokeWidth={e.primary ? 4 : 2.5}
            fill="none"
            strokeLinecap="round"
            opacity="0.22"
          />
        ))}

        {/* Edges (draw animation) */}
        {edges.map((e, i) => (
          <motion.path
            key={`ep-${i}`}
            d={e.d}
            stroke={`url(#${id.flow})`}
            strokeWidth={e.primary ? 1.4 : 0.85}
            fill="none"
            strokeLinecap="round"
            opacity={e.primary ? 0.65 : 0.32}
            vectorEffect="non-scaling-stroke"
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={active ? { duration: 0.78, delay: 0.03 * i, ease } : undefined}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
            {n.hub && (
              <circle r={n.r + 18} fill={`url(#${id.core})`} opacity="0.3" filter={`url(#${id.bloom})`} />
            )}
            {/* Halo */}
            <circle
              r={n.r + 7}
              fill="hsl(var(--gnk-bg-elevated)/0.4)"
              stroke="hsl(var(--gnk-border))"
              strokeWidth="0.5"
              strokeOpacity="0.35"
            />
            {/* Main body */}
            <circle
              r={n.r}
              fill={n.hub ? 'hsl(var(--gnk-bg-elevated)/0.95)' : 'hsl(var(--gnk-accent)/0.08)'}
              stroke={n.hub ? 'hsl(var(--gnk-accent)/0.55)' : 'hsl(var(--gnk-border))'}
              strokeWidth={n.hub ? 1.35 : 0.75}
              filter={n.hub ? `url(#${id.filterSoft})` : undefined}
            />
            {/* Center dot */}
            <circle r={n.hub ? 4 : 2.8} fill="hsl(var(--gnk-accent-2))" opacity={n.hub ? 0.9 : 0.55} />
            {/* Pulse on hub */}
            {n.hub && active && (
              <motion.circle
                r={n.r + 12}
                fill="none"
                stroke="hsl(var(--gnk-accent))"
                strokeWidth="0.65"
                strokeOpacity="0.25"
                animate={{ opacity: [0.1, 0.38, 0.1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            {/* Label */}
            {n.label && (
              <g>
                <rect
                  x={-n.label.length * 2.6 - 4}
                  y={n.r + 8}
                  width={n.label.length * 5.2 + 8}
                  height="12"
                  rx="3"
                  fill="hsl(var(--gnk-bg-elevated)/0.75)"
                  stroke="hsl(var(--gnk-accent)/0.18)"
                  strokeWidth="0.5"
                />
                <text
                  y={n.r + 18}
                  textAnchor="middle"
                  fill="hsl(var(--gnk-muted))"
                  style={{ fontSize: 6.5, fontWeight: 700 }}
                  className="font-mono"
                  letterSpacing="0.07em"
                >
                  {n.label}
                </text>
              </g>
            )}
          </g>
        ))}

        {/* Traveling particles on primary edges */}
        {active && (
          <>
            <circle r="3" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`}>
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 200 22 L 200 100" />
            </circle>
            <circle r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.72">
              <animateMotion dur="3.8s" repeatCount="indefinite" path="M 192 32 Q 132 54 88 80" begin="0.5s" />
            </circle>
            <circle r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.72">
              <animateMotion dur="3.6s" repeatCount="indefinite" path="M 208 32 Q 268 54 312 80" begin="1s" />
            </circle>
            <circle r="2" fill="hsl(var(--gnk-accent-2))" opacity="0.6">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 196 110 Q 194 140 190 164" begin="0.3s" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}

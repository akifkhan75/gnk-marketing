'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';
import { RichSvgDefs } from './rich-svg-defs';

type AIMarketingSystemFlowProps = {
  className?: string;
};

const ease = [0.25, 0.4, 0.25, 1] as const;

export function AIMarketingSystemFlow({ className = '' }: AIMarketingSystemFlowProps) {
  const reduceMotion = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const shouldAnimate = !reduceMotion && !isSmall;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = shouldAnimate && inView;

  const id = useVisualIds('ai-mkt-flow');

  const labels = ['Traffic', 'AI Qualification', 'Automation', 'Conversion'] as const;
  const vbW = 860;
  const vbH = 210;
  const midY = 92;
  const xs = [92, 310, 532, 754];

  function conn(x1: number, x2: number) {
    const xm = (x1 + x2) / 2;
    return `M ${x1 + 34} ${midY} C ${xm} ${midY - 18}, ${xm} ${midY + 18}, ${x2 - 34} ${midY}`;
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      role="img"
      aria-label="System flow: Traffic to AI qualification, then automation, then conversion."
    >
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="h-auto w-full"
        style={{ maxHeight: 220 }}
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />

        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.32" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.42" />

        {/* Connector glow (static) */}
        {xs.slice(0, -1).map((x, i) => (
          <path
            key={`g-${i}`}
            d={conn(x, xs[i + 1])}
            stroke={`url(#${id.flow2})`}
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.72"
          />
        ))}

        {/* Connector draw (in-view only) */}
        {xs.slice(0, -1).map((x, i) => (
          <motion.path
            key={`p-${i}`}
            d={conn(x, xs[i + 1])}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.85"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={{ duration: 0.9, delay: i * 0.12, ease }}
          />
        ))}

        {/* Nodes */}
        {xs.map((x, i) => (
          <g key={labels[i]} transform={`translate(${x} ${midY})`}>
            <ellipse cx="0" cy="48" rx="26" ry="5" fill="hsl(var(--gnk-accent))" opacity="0.05" />
            <circle
              r="28"
              fill="hsl(var(--gnk-bg-elevated)/0.9)"
              stroke={i === 1 ? 'hsl(var(--gnk-accent)/0.6)' : 'hsl(var(--gnk-accent)/0.28)'}
              strokeWidth={i === 1 ? 1.45 : 0.95}
              filter={i === 1 ? `url(#${id.filterSoft})` : undefined}
            />
            <circle r="7" fill="hsl(var(--gnk-accent-2))" opacity={i === 1 ? 0.92 : 0.72} />
            {active && i === 1 ? (
              <motion.circle
                r="18"
                fill="none"
                stroke="hsl(var(--gnk-accent))"
                strokeWidth="0.8"
                strokeOpacity="0.35"
                animate={{ opacity: [0.1, 0.45, 0.1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : null}

            <text
              y="44"
              textAnchor="middle"
              fill="hsl(var(--gnk-fg))"
              style={{ fontSize: 11, fontWeight: 750 }}
              className="font-display"
            >
              {labels[i]}
            </text>
          </g>
        ))}

        {/* Single lightweight packet (only while active) */}
        {active ? (
          <circle r="3.6" fill="hsl(var(--gnk-accent-2))" opacity="0.92" filter={`url(#${id.bloom})`}>
            <animateMotion dur="4.8s" repeatCount="indefinite" path={`M ${xs[0]} ${midY} L ${xs[xs.length - 1]} ${midY}`} />
          </circle>
        ) : null}
      </svg>
    </div>
  );
}


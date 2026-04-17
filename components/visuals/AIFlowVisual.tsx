'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

type AIFlowVisualProps = {
  className?: string;
  compact?: boolean;
};

const ease = [0.25, 0.4, 0.25, 1] as const;

const stages = [
  { label: 'INPUT', sublabel: 'Signal', icon: 'in' },
  { label: 'QUALIFY', sublabel: 'AI Filter', icon: 'ai' },
  { label: 'PROCESS', sublabel: 'Analyze', icon: 'proc' },
  { label: 'ROUTE', sublabel: 'Dispatch', icon: 'route' },
  { label: 'OUTPUT', sublabel: 'Deliver', icon: 'out' },
];

function StageNode({
  x, y, label, sublabel, isHub, reduce, bloomId, softId,
}: {
  x: number; y: number; label: string; sublabel: string;
  isHub?: boolean; reduce: boolean; bloomId: string; softId: string;
}) {
  const r = isHub ? 28 : 22;
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* Floor shadow */}
      <ellipse cx="0" cy={r + 12} rx={r + 8} ry="5" fill="hsl(var(--gnk-accent))" opacity="0.05" />
      {/* Outer glow ring */}
      <circle
        r={r + 12}
        fill="hsl(var(--gnk-accent)/0.04)"
        stroke="hsl(var(--gnk-border))"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* Dashed orbit */}
      <circle
        r={r + 6}
        fill="none"
        stroke="hsl(var(--gnk-accent-2))"
        strokeWidth="0.55"
        strokeDasharray="2 7"
        strokeOpacity={isHub ? 0.35 : 0.2}
      />
      {/* Main body */}
      <circle
        r={r}
        fill="hsl(var(--gnk-bg-elevated)/0.9)"
        stroke={isHub ? 'hsl(var(--gnk-accent)/0.55)' : 'hsl(var(--gnk-accent)/0.28)'}
        strokeWidth={isHub ? 1.35 : 0.9}
        filter={isHub ? `url(#${softId})` : undefined}
      />
      {/* Center indicator */}
      <circle
        r={isHub ? 7 : 5}
        fill="hsl(var(--gnk-accent-2))"
        opacity={isHub ? 0.9 : 0.65}
        filter={isHub ? `url(#${bloomId})` : undefined}
      />
      <circle r={isHub ? 3 : 2} fill="hsl(var(--gnk-accent))" opacity="0.9" />
      {/* Pulse ring on hub */}
      {isHub && !reduce && (
        <motion.circle
          r={r + 9}
          fill="none"
          stroke="hsl(var(--gnk-accent))"
          strokeWidth="0.75"
          strokeOpacity="0.35"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {/* Label */}
      <text
        y={r + 24}
        textAnchor="middle"
        fill="hsl(var(--gnk-fg))"
        style={{ fontSize: isHub ? 8.5 : 7.5, fontWeight: 700 }}
        className="font-mono"
        letterSpacing="0.08em"
      >
        {label}
      </text>
      <text
        y={r + 34}
        textAnchor="middle"
        fill="hsl(var(--gnk-muted))"
        style={{ fontSize: 6.5, fontWeight: 500 }}
        className="font-mono"
        letterSpacing="0.06em"
      >
        {sublabel}
      </text>
    </g>
  );
}

export function AIFlowVisual({ className = '', compact = false }: AIFlowVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('aiflow');

  const vbW = compact ? 620 : 800;
  const vbH = compact ? 180 : 220;
  const midY = compact ? 80 : 100;
  const gap = compact ? 124 : 168;
  const startX = compact ? 64 : 68;
  const xs = stages.map((_, i) => startX + i * gap);

  /* Connector path between adjacent stage nodes */
  function connPath(x1: number, x2: number): string {
    const xm = (x1 + x2) / 2;
    const pad = compact ? 34 : 38;
    return `M ${x1 + pad} ${midY} C ${xm} ${midY - 16}, ${xm} ${midY + 16}, ${x2 - pad} ${midY}`;
  }

  return (
    <div
      className={`relative w-full ${className}`}
      role="img"
      aria-label="AI workflow pipeline: input signal through qualification, processing, routing, and output delivery"
    >
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="h-auto w-full"
        style={{ maxHeight: compact ? 160 : 200 }}
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.55" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.3" />

        {/* Connector glows */}
        {xs.slice(0, -1).map((x, i) => (
          <path
            key={`cg-${i}`}
            d={connPath(x, xs[i + 1])}
            stroke={`url(#${id.flow2})`}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            opacity="0.75"
          />
        ))}

        {/* Connectors draw animation */}
        {xs.slice(0, -1).map((x, i) => (
          <motion.path
            key={`cp-${i}`}
            d={connPath(x, xs[i + 1])}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.65"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.2, delay: i * 0.15, ease }}
          />
        ))}

        {/* Ghost trail (dash) */}
        {xs.slice(0, -1).map((x, i) => (
          <path
            key={`cd-${i}`}
            d={connPath(x, xs[i + 1])}
            stroke="hsl(var(--gnk-muted))"
            strokeWidth="0.85"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="2 14"
            opacity="0.15"
          />
        ))}

        {/* Stage nodes */}
        {stages.map((s, i) => (
          <StageNode
            key={s.label}
            x={xs[i]}
            y={midY}
            label={s.label}
            sublabel={s.sublabel}
            isHub={i === 2}
            reduce={reduce}
            bloomId={id.bloom}
            softId={id.filterSoft}
          />
        ))}

        {/* Particles along full pipeline */}
        {!reduce && (() => {
          const fullPath = xs.slice(0, -1).map((x, i) => connPath(x, xs[i + 1])).join(' ');
          const fullLine = `M ${xs[0]} ${midY} L ${xs[xs.length - 1]} ${midY}`;
          return (
            <>
              <circle r="3.5" fill="hsl(var(--gnk-accent-2))" opacity="0.9" filter={`url(#${id.bloom})`}>
                <animateMotion dur="5.5s" repeatCount="indefinite" path={fullLine} />
              </circle>
              <circle r="2.5" fill="hsl(var(--gnk-accent))" opacity="0.75">
                <animateMotion dur="5.5s" repeatCount="indefinite" path={fullLine} begin="1.4s" />
              </circle>
              <circle r="1.8" fill="hsl(var(--gnk-fg))" opacity="0.3">
                <animateMotion dur="5.5s" repeatCount="indefinite" path={fullLine} begin="2.8s" />
              </circle>
            </>
          );
        })()}
      </svg>
    </div>
  );
}

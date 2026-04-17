'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

type AutomationPipelineProps = {
  className?: string;
  labels?: string[];
};

const ease = [0.25, 0.4, 0.25, 1] as const;

const defaultLabels = ['CAPTURE', 'ENRICH', 'SCORE', 'QUALIFY', 'ROUTE', 'DELIVER'];

const stageColors = [
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent-2))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent))',
  'hsl(var(--gnk-accent-2))',
];

/** 6-stage automation pipeline with dual rails, status indicators, and data packet train */
export function AutomationPipeline({
  className = '',
  labels = defaultLabels,
}: AutomationPipelineProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('pipe');
  const n = Math.min(labels.length, 6);
  const totalW = 560;
  const startX = 44;
  const endX = 556;
  const gap = (endX - startX) / (n - 1);
  const railY = 44;
  const secondY = 72;

  const xs = Array.from({ length: n }, (_, i) => startX + i * gap);
  const mainPath = `M ${startX} ${railY} L ${endX} ${railY}`;
  const ghostPath = `M ${startX} ${secondY} L ${endX} ${secondY}`;

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="Automation pipeline stages">
      <svg
        viewBox="0 0 600 128"
        className="h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.35" />

        {/* Rail glow */}
        <line x1={startX} y1={railY} x2={endX} y2={railY} stroke={`url(#${id.flow2})`} strokeWidth="7" strokeLinecap="round" opacity="0.7" />

        {/* Main rail */}
        <motion.line
          x1={startX} y1={railY} x2={endX} y2={railY}
          stroke={`url(#${id.flow})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          filter={`url(#${id.filterSoft})`}
          vectorEffect="non-scaling-stroke"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.4, ease }}
        />

        {/* Secondary ghost rail */}
        <line
          x1={startX} y1={secondY} x2={endX} y2={secondY}
          stroke="hsl(var(--gnk-muted))"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="3 12"
          opacity="0.18"
        />

        {/* Stage connectors (vertical drop lines) */}
        {xs.map((x, i) => (
          <line
            key={`drop-${i}`}
            x1={x} y1={railY}
            x2={x} y2={secondY}
            stroke="hsl(var(--gnk-border))"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
        ))}

        {/* Stage nodes */}
        {xs.map((x, i) => (
          <g key={labels[i] ?? i} transform={`translate(${x} ${railY})`}>
            {/* Ground shadow */}
            <ellipse cx="0" cy="44" rx="18" ry="4" fill="hsl(var(--gnk-accent))" opacity="0.05" />

            {/* Outer halo */}
            <circle
              r="22"
              fill="hsl(var(--gnk-accent)/0.04)"
              stroke="hsl(var(--gnk-border))"
              strokeWidth="0.6"
              strokeOpacity="0.4"
            />
            {/* Dashed ring */}
            <circle
              r="16"
              fill="none"
              stroke={stageColors[i]}
              strokeWidth="0.55"
              strokeDasharray="2 6"
              strokeOpacity="0.3"
            />
            {/* Main body */}
            <rect
              x="-14" y="-18"
              width="28" height="36"
              rx="7"
              fill="hsl(var(--gnk-bg-elevated)/0.92)"
              stroke={`${stageColors[i].replace(')', '/0.45)')}`}
              strokeWidth="1.1"
            />
            {/* Status indicator */}
            {!reduce ? (
              <motion.circle
                r="5"
                fill={stageColors[i]}
                opacity="0.88"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2 + i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <circle r="5" fill={stageColors[i]} opacity="0.65" />
            )}
            <circle r="2" fill="hsl(var(--gnk-accent))" opacity="0.9" />

            {/* Label */}
            <text
              y="36"
              textAnchor="middle"
              fill="hsl(var(--gnk-muted))"
              style={{ fontSize: 7, fontWeight: 700 }}
              className="font-mono"
              letterSpacing="0.06em"
            >
              {labels[i] ?? `S${i + 1}`}
            </text>
          </g>
        ))}

        {/* Stage number ticks on ghost rail */}
        {xs.map((x, i) => (
          <text
            key={`badge-${i}`}
            x={x}
            y={secondY + 18}
            textAnchor="middle"
            fill="hsl(var(--gnk-muted))"
            style={{ fontSize: 6.5, fontWeight: 600 }}
            className="font-mono"
            opacity="0.45"
          >
            {i + 1}
          </text>
        ))}

        {/* ── Particles ── */}
        {!reduce && (
          <>
            <circle r="4" fill="hsl(var(--gnk-accent-2))" opacity="0.92" filter={`url(#${id.bloom})`}>
              <animateMotion dur="5.2s" repeatCount="indefinite" path={mainPath} />
            </circle>
            <circle r="3" fill="hsl(var(--gnk-accent))" opacity="0.8">
              <animateMotion dur="5.2s" repeatCount="indefinite" path={mainPath} begin="1.2s" />
            </circle>
            <circle r="2.2" fill="hsl(var(--gnk-fg))" opacity="0.32">
              <animateMotion dur="5.2s" repeatCount="indefinite" path={mainPath} begin="2.6s" />
            </circle>
            <circle r="2" fill="hsl(var(--gnk-accent-2))" opacity="0.5">
              <animateMotion dur="5.8s" repeatCount="indefinite" path={ghostPath} begin="0.4s" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}

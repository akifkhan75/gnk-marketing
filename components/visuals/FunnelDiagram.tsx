'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

type FunnelDiagramProps = {
  className?: string;
  steps?: string[];
};

const ease = [0.25, 0.4, 0.25, 1] as const;

const defaultSteps = ['AWARENESS', 'INTENT', 'QUALIFIED', 'WON'];

/* Isometric funnel tier geometry */
const tiers = [
  { width: 210, topWidth: 250, y: 28, h: 52, color: 0 },
  { width: 166, topWidth: 210, y: 82, h: 52, color: 1 },
  { width: 122, topWidth: 166, y: 136, h: 52, color: 2 },
  { width: 80,  topWidth: 122, y: 190, h: 52, color: 3 },
];

const tierColors = [
  { face: 'hsl(var(--gnk-accent)/0.18)', top: 'hsl(var(--gnk-accent-2)/0.32)', side: 'hsl(var(--gnk-accent)/0.08)' },
  { face: 'hsl(var(--gnk-accent)/0.22)', top: 'hsl(var(--gnk-accent)/0.35)', side: 'hsl(var(--gnk-accent)/0.1)' },
  { face: 'hsl(var(--gnk-accent)/0.28)', top: 'hsl(var(--gnk-accent-2)/0.42)', side: 'hsl(var(--gnk-accent)/0.12)' },
  { face: 'hsl(var(--gnk-accent-2)/0.36)', top: 'hsl(var(--gnk-accent-2)/0.55)', side: 'hsl(var(--gnk-accent-2)/0.18)' },
];

const CX = 150;
const SKEW = 10;
const DEPTH = 12;

/** Isometric funnel with animated velocity spine and particle drain */
export function FunnelDiagram({
  className = '',
  steps = defaultSteps,
}: FunnelDiagramProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('funnel');

  /* Drain path from top tier to bottom */
  const spinePath = `M ${CX} ${tiers[0].y + 20} L ${CX} ${tiers[3].y + tiers[3].h - 8}`;

  /* Particle drain paths (staggered) */
  const drainPaths = [
    `M ${CX - 8} ${tiers[0].y + 16} L ${CX - 4} ${tiers[3].y + tiers[3].h - 6}`,
    `M ${CX}     ${tiers[0].y + 14} L ${CX}     ${tiers[3].y + tiers[3].h - 4}`,
    `M ${CX + 8} ${tiers[0].y + 16} L ${CX + 4} ${tiers[3].y + tiers[3].h - 6}`,
  ];

  return (
    <div className={`relative mx-auto w-full max-w-[260px] ${className}`} role="img" aria-label="Sales funnel stages">
      <svg
        viewBox="0 0 300 292"
        className="h-auto w-full"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-topface`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.28" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.42" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.5" />

        {tiers.map((t, i) => {
          const x = CX - t.width / 2;
          const tx = CX - t.topWidth / 2;
          const col = tierColors[i];
          return (
            <motion.g
              key={i}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease }}
            >
              {/* Front face */}
              <path
                d={`M ${x} ${t.y} L ${x + t.width} ${t.y} L ${x + t.width} ${t.y + t.h} L ${x} ${t.y + t.h} Z`}
                fill={col.face}
                stroke="hsl(var(--gnk-accent)/0.3)"
                strokeWidth="0.7"
              />
              {/* Top face (isometric) */}
              <path
                d={`M ${tx} ${t.y} L ${tx + t.topWidth} ${t.y} L ${tx + t.topWidth + SKEW} ${t.y - DEPTH} L ${tx + SKEW} ${t.y - DEPTH} Z`}
                fill={i === tiers.length - 1 ? `url(#${id.flow}-topface)` : col.top}
                stroke="hsl(var(--gnk-accent)/0.45)"
                strokeWidth="0.8"
              />
              {/* Right face (isometric depth) */}
              <path
                d={`M ${x + t.width} ${t.y} L ${x + t.width + SKEW} ${t.y - DEPTH} L ${x + t.width + SKEW} ${t.y + t.h - DEPTH} L ${x + t.width} ${t.y + t.h} Z`}
                fill={col.side}
                stroke="hsl(var(--gnk-border))"
                strokeWidth="0.45"
                strokeOpacity="0.5"
              />
              {/* Stage label */}
              <text
                x={CX}
                y={t.y + t.h / 2 + 4}
                textAnchor="middle"
                fill="hsl(var(--gnk-muted))"
                style={{ fontSize: 8, fontWeight: 700 }}
                className="font-mono"
                letterSpacing="0.08em"
              >
                {steps[i] ?? `S${i + 1}`}
              </text>
              {/* Percentage indicator */}
              <text
                x={CX - t.width / 2 + 8}
                y={t.y + t.h / 2 + 4}
                fill="hsl(var(--gnk-accent-2))"
                style={{ fontSize: 7, fontWeight: 700 }}
                className="font-mono"
                opacity="0.7"
              >
                {['100%', '64%', '28%', '12%'][i]}
              </text>
            </motion.g>
          );
        })}

        {/* Velocity spine */}
        <path
          d={spinePath}
          stroke={`url(#${id.flow})`}
          strokeWidth="2"
          strokeDasharray="5 9"
          strokeLinecap="round"
          className={reduce ? '' : 'animate-ai-flow-dash'}
          opacity="0.55"
          filter={`url(#${id.filterSoft})`}
        />

        {/* Drain particles */}
        {!reduce &&
          drainPaths.map((dp, i) => (
            <circle key={i} r="2.5" fill="hsl(var(--gnk-accent-2))" opacity="0.75" filter={i === 1 ? `url(#${id.bloom})` : undefined}>
              <animateMotion dur={`${3.2 + i * 0.4}s`} repeatCount="indefinite" path={dp} begin={`${i * 0.7}s`} />
            </circle>
          ))}

        {/* Output dot at bottom */}
        <g transform={`translate(${CX} ${tiers[3].y + tiers[3].h + 6})`}>
          <circle r="10" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2)/0.5)" strokeWidth="1.1" />
          {!reduce ? (
            <motion.circle r="14" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.65" strokeOpacity="0.28"
              animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 2.2, repeat: Infinity }} />
          ) : null}
          <circle r="4" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`} />
          <text y="26" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7, fontWeight: 700 }} className="font-mono" letterSpacing="0.07em">CLOSED</text>
        </g>
      </svg>
    </div>
  );
}

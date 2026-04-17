'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

type ProcessFlowProps = { className?: string };

const ease = [0.25, 0.4, 0.25, 1] as const;

const stages = [
  {
    label: 'DIAGNOSE',
    sublabel: 'Audit & gaps',
    color: 'hsl(var(--gnk-accent-2))',
    x: 68,
  },
  {
    label: 'DESIGN',
    sublabel: 'Strategy & plan',
    color: 'hsl(var(--gnk-accent))',
    x: 216,
  },
  {
    label: 'SHIP',
    sublabel: 'Execute & test',
    color: 'hsl(var(--gnk-accent-2))',
    x: 364,
  },
  {
    label: 'COMPOUND',
    sublabel: 'Scale & reinvest',
    color: 'hsl(var(--gnk-accent))',
    x: 512,
  },
];

const Y = 72;
const R = 28;

/* Arrow paths between stages */
const arrows = [
  { path: `M ${68 + R + 6} ${Y} C ${142} ${Y - 18}, ${142} ${Y - 18}, ${216 - R - 6} ${Y}`, idx: 0 },
  { path: `M ${216 + R + 6} ${Y} C ${290} ${Y - 18}, ${290} ${Y - 18}, ${364 - R - 6} ${Y}`, idx: 1 },
  { path: `M ${364 + R + 6} ${Y} C ${438} ${Y - 18}, ${438} ${Y - 18}, ${512 - R - 6} ${Y}`, idx: 2 },
];

/** 4-stage process flow: Diagnose → Design → Ship → Compound */
export function ProcessFlow({ className = '' }: ProcessFlowProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('proc');

  return (
    <div
      className={`relative w-full ${className}`}
      role="img"
      aria-label="Operating process: Diagnose, Design, Ship, and Compound"
    >
      <svg
        viewBox="0 0 580 148"
        className="mx-auto h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.45" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.25" />

        {/* Arrow glows */}
        {arrows.map((a) => (
          <path key={`ag-${a.idx}`} d={a.path} stroke={`url(#${id.flow2})`} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
        ))}

        {/* Arrows (draw animation) */}
        {arrows.map((a) => (
          <motion.path
            key={`ap-${a.idx}`}
            d={a.path}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 * a.idx, ease }}
          />
        ))}

        {/* Arrow heads */}
        {arrows.map((a) => {
          const endXs = [216 - R - 8, 364 - R - 8, 512 - R - 8];
          const ex = endXs[a.idx];
          return (
            <path key={`ah-${a.idx}`} d={`M ${ex} ${Y - 5} L ${ex + 7} ${Y} L ${ex} ${Y + 5}`}
              stroke={`url(#${id.flow})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
          );
        })}

        {/* Stage nodes */}
        {stages.map((s, i) => (
          <motion.g
            key={s.label}
            transform={`translate(${s.x} ${Y})`}
            initial={reduce ? undefined : { opacity: 0, scale: 0.8 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08 * i, ease }}
          >
            {/* Outer glow */}
            <circle r={R + 16} fill="hsl(var(--gnk-accent)/0.04)" />
            {/* Orbit ring */}
            <circle r={R + 8} fill="none" stroke={s.color} strokeWidth="0.6" strokeDasharray="2.5 7" strokeOpacity="0.3" />
            {/* Main body */}
            <circle r={R} fill="hsl(var(--gnk-bg-elevated)/0.92)" stroke={`${s.color.replace(')', '/0.45)')}`} strokeWidth="1.2" filter={`url(#${id.filterSoft})`} />
            {/* Step number */}
            <text
              textAnchor="middle"
              fill={s.color}
              dy={-6}
              style={{ fontSize: 11, fontWeight: 800 }}
              className="font-mono"
              opacity="0.7"
            >
              {i + 1}
            </text>
            {/* Center dot */}
            <circle r="4" fill={s.color} opacity="0.85" cy={6} />
            {/* Pulse ring */}
            {!reduce && (
              <motion.circle
                r={R + 12}
                fill="none"
                stroke={s.color}
                strokeWidth="0.65"
                strokeOpacity="0.25"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 2.6 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            {/* Label below */}
            <text
              y={R + 18}
              textAnchor="middle"
              fill="hsl(var(--gnk-fg))"
              style={{ fontSize: 7.5, fontWeight: 800 }}
              className="font-mono"
              letterSpacing="0.09em"
            >
              {s.label}
            </text>
            <text
              y={R + 29}
              textAnchor="middle"
              fill="hsl(var(--gnk-muted))"
              style={{ fontSize: 6.5, fontWeight: 500 }}
              className="font-mono"
              letterSpacing="0.06em"
            >
              {s.sublabel}
            </text>
          </motion.g>
        ))}

        {/* Traveling particle across all stages */}
        {!reduce && (
          <>
            <circle r="3.5" fill="hsl(var(--gnk-accent-2))" opacity="0.9" filter={`url(#${id.bloom})`}>
              <animateMotion dur="8s" repeatCount="indefinite" path={`M ${68} ${Y} L ${512} ${Y}`} />
            </circle>
            <circle r="2.2" fill="hsl(var(--gnk-accent))" opacity="0.65">
              <animateMotion dur="8s" repeatCount="indefinite" path={`M ${68} ${Y} L ${512} ${Y}`} begin="3s" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}

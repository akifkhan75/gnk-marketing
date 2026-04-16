'use client';

import { motion, useReducedMotion } from 'framer-motion';

/** User → AI core → conversion — animated connectors, minimal SVG. */
export function AIFlowDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gnk-card/30 p-6 shadow-inner-glow backdrop-blur-md sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] to-transparent" />
      <svg viewBox="0 0 920 220" className="relative z-[1] h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id="gnk-flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="rgb(34 211 238)" stopOpacity="0.95" />
          </linearGradient>
          <filter id="gnk-glow-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M 140 110 L 360 110"
          stroke="url(#gnk-flow-line)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#gnk-glow-soft)"
          initial={reduce ? undefined : { pathLength: 0, opacity: 0.35 }}
          whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, ease: [0.25, 0.4, 0.25, 1] }}
        />
        <motion.path
          d="M 560 110 L 780 110"
          stroke="url(#gnk-flow-line)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#gnk-glow-soft)"
          initial={reduce ? undefined : { pathLength: 0, opacity: 0.35 }}
          whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
        />

        <FlowNode cx={80} cy={110} label="Visitor" sub="Intent & channel" delay={0} />
        <FlowNode cx={460} cy={110} label="AI layer" sub="Qualify · personalize · route" delay={0.12} highlight />
        <FlowNode cx={840} cy={110} label="Revenue" sub="Pipeline & LTV" delay={0.24} />
      </svg>
    </div>
  );
}

function FlowNode({
  cx,
  cy,
  label,
  sub,
  delay,
  highlight,
}: {
  cx: number;
  cy: number;
  label: string;
  sub: string;
  delay: number;
  highlight?: boolean;
}) {
  const reduce = useReducedMotion();
  const w = highlight ? 168 : 132;
  const h = 76;
  const x = cx - w / 2;
  const y = cy - h / 2;

  return (
    <motion.g
      initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={16}
        fill={highlight ? 'rgb(139 92 246 / 0.14)' : 'rgb(255 255 255 / 0.04)'}
        stroke={highlight ? 'rgb(139 92 246 / 0.45)' : 'rgb(255 255 255 / 0.12)'}
        strokeWidth="1"
      />
      <text x={cx} y={y + 32} textAnchor="middle" fill="hsl(210 40% 98%)" style={{ fontSize: 15, fontWeight: 700 }}>
        {label}
      </text>
      <text x={cx} y={y + 54} textAnchor="middle" fill="hsl(215 16% 58%)" style={{ fontSize: 11 }}>
        {sub}
      </text>
    </motion.g>
  );
}

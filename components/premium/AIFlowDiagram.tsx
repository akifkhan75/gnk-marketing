'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * AI growth systems visual: neural-style frame, themed nodes, animated signal flow.
 * Colors use CSS variables so light/dark both read clearly.
 */
export function AIFlowDiagram() {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gnk-border/90 bg-gradient-to-b from-gnk-accent/[0.04] via-gnk-card/80 to-gnk-card/90 shadow-inner-glow backdrop-blur-md dark:border-white/[0.08] dark:from-violet-500/[0.07] dark:via-gnk-card/30 dark:to-gnk-card/20 sm:rounded-[1.75rem]">
      {/* Corner brackets — HUD */}
      <div className="pointer-events-none absolute inset-4 rounded-2xl sm:inset-5">
        <div className="absolute left-0 top-0 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-gnk-accent/35 dark:border-violet-400/40" />
        <div className="absolute right-0 top-0 h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-gnk-accent/35 dark:border-violet-400/40" />
        <div className="absolute bottom-0 left-0 h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-gnk-accent-2/30 dark:border-cyan-400/35" />
        <div className="absolute bottom-0 right-0 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-gnk-accent-2/30 dark:border-cyan-400/35" />
      </div>

      {/* Ambient mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--gnk-border) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--gnk-border) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gnk-accent/[0.07] via-transparent to-gnk-accent-2/[0.06] dark:from-violet-500/12 dark:to-cyan-500/8" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gnk-accent/55 to-transparent dark:via-violet-400/45"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1] px-4 py-8 sm:px-8 sm:py-10">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center font-display text-[10px] font-bold uppercase tracking-[0.22em] text-gnk-muted sm:text-left">
            Live system map
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {['Signal ingest', 'Model routing', 'Policy & brand QA', 'Attribution'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-gnk-border/90 bg-gnk-bg-elevated/90 px-2.5 py-1 text-[10px] font-medium text-gnk-muted shadow-sm backdrop-blur-sm dark:border-white/[0.1] dark:bg-white/[0.05]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 960 268" className="mx-auto h-auto w-full max-w-5xl" role="img" aria-labelledby="ai-flow-title">
          <title id="ai-flow-title">Visitor intent flows through an AI layer to revenue</title>
          <defs>
            <linearGradient id="gnk-flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.95" />
              <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="gnk-ai-core" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.22" />
            </linearGradient>
            <filter id="gnk-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="gnk-hex" width="28" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M14 0 L26 8 L26 24 L14 32 L2 24 L2 8 Z"
                fill="none"
                stroke="hsl(var(--gnk-accent))"
                strokeOpacity="0.09"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect x="0" y="0" width="960" height="268" fill="url(#gnk-hex)" opacity="0.85" />

          {/* Connectors: visitor right (216,134) → AI left (352,134); AI right (608,134) → revenue left (744,134) */}
          <path
            d="M 216 134 L 352 134"
            fill="none"
            stroke="url(#gnk-flow-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#gnk-glow-soft)"
            strokeDasharray="7 11"
            className={reduce ? '' : 'animate-ai-flow-dash'}
          />
          <path
            d="M 608 134 L 744 134"
            fill="none"
            stroke="url(#gnk-flow-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#gnk-glow-soft)"
            strokeDasharray="7 11"
            className={reduce ? '' : 'animate-ai-flow-dash'}
            style={{ animationDelay: '0.4s' }}
          />

          {!reduce ? (
            <>
              <circle r="4.5" fill="hsl(var(--gnk-accent-2))">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 216 134 L 352 134" />
              </circle>
              <circle r="3.5" fill="hsl(var(--gnk-accent))" opacity="0.9">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 216 134 L 352 134" begin="0.55s" />
              </circle>
              <circle r="4.5" fill="hsl(var(--gnk-accent-2))">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 608 134 L 744 134" />
              </circle>
            </>
          ) : null}

          <FlowStage
            x={56}
            y={54}
            w={160}
            h={160}
            delay={0}
            title="Visitor"
            subtitle="Intent & channel"
            reduce={reduce}
          >
            <VisitorGlyph />
          </FlowStage>

          <FlowStage
            x={352}
            y={38}
            w={256}
            h={192}
            delay={0.08}
            title="AI layer"
            subtitle="Qualify · personalize · route"
            highlight
            reduce={reduce}
          >
            <AILayerGlyph reduce={reduce} />
          </FlowStage>

          <FlowStage
            x={744}
            y={54}
            w={160}
            h={160}
            delay={0.16}
            title="Revenue"
            subtitle="Pipeline & LTV"
            reduce={reduce}
          >
            <RevenueGlyph />
          </FlowStage>
        </svg>
      </div>
    </div>
  );
}

function FlowStage({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  delay,
  highlight,
  reduce,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle: string;
  delay: number;
  highlight?: boolean;
  reduce: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      initial={reduce ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={20}
        fill={highlight ? 'hsl(var(--gnk-accent) / 0.11)' : 'hsl(var(--gnk-bg-elevated) / 0.72)'}
        stroke={highlight ? 'hsl(var(--gnk-accent) / 0.5)' : 'hsl(var(--gnk-border))'}
        strokeWidth="1.25"
      />
      {highlight ? (
        <rect
          x={x + 1}
          y={y + 1}
          width={w - 2}
          height={h - 2}
          rx={19}
          fill="url(#gnk-ai-core)"
          opacity="0.4"
        />
      ) : null}
      <foreignObject x={x + 12} y={y + 14} width={w - 24} height={highlight ? 100 : 88}>
        <div className="flex h-full items-center justify-center [&_svg]:h-[50px] [&_svg]:w-auto sm:[&_svg]:h-[56px]">
          {children}
        </div>
      </foreignObject>
      <text
        x={x + w / 2}
        y={y + (highlight ? 128 : 118)}
        textAnchor="middle"
        fill="hsl(var(--gnk-fg))"
        style={{ fontSize: 15, fontWeight: 700 }}
        className="font-display"
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + (highlight ? 150 : 140)}
        textAnchor="middle"
        fill="hsl(var(--gnk-muted))"
        style={{ fontSize: 11, fontWeight: 500 }}
      >
        {subtitle}
      </text>
    </motion.g>
  );
}

function VisitorGlyph() {
  return (
    <svg viewBox="0 0 120 72" fill="none" className="mx-auto text-gnk-accent dark:text-violet-300">
      <circle cx="40" cy="28" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.95" />
      <path d="M22 58c0-12 10-20 22-20s22 8 22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M72 36h20M82 28v16"
        stroke="hsl(var(--gnk-accent-2))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="98" cy="22" r="4" fill="hsl(var(--gnk-accent-2))" opacity="0.45" />
      <path
        d="M94 46l8-8 8 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}

function AILayerGlyph({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="mx-auto text-gnk-accent">
      <circle cx="100" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {!reduce ? (
        <motion.circle
          cx="100"
          cy="50"
          r="31"
          stroke="currentColor"
          strokeWidth="0.75"
          initial={{ opacity: 0.18 }}
          animate={{ opacity: [0.18, 0.5, 0.18] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : (
        <circle cx="100" cy="50" r="31" stroke="currentColor" strokeWidth="0.75" opacity="0.22" />
      )}
      <circle cx="100" cy="50" r="10" fill="hsl(var(--gnk-accent) / 0.38)" stroke="currentColor" strokeWidth="1.5" />
      {[
        [46, 28],
        [154, 28],
        [34, 68],
        [166, 68],
      ].map(([nx, ny], i) => (
        <g key={i}>
          <line x1="100" y1="50" x2={nx} y2={ny} stroke="currentColor" strokeWidth="1" opacity="0.38" />
          <circle cx={nx} cy={ny} r="5" fill="hsl(var(--gnk-bg-elevated))" stroke="currentColor" strokeWidth="1.2" />
        </g>
      ))}
      <path
        d="M92 50h16M100 42v16"
        stroke="hsl(var(--gnk-accent-2))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

function RevenueGlyph() {
  return (
    <svg viewBox="0 0 120 72" fill="none" className="mx-auto text-gnk-accent-2 dark:text-cyan-300">
      <path d="M16 52h88" stroke="hsl(var(--gnk-border))" strokeWidth="1" opacity="0.65" />
      <path
        d="M24 44l16-12 14 10 20-22 18 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="44" r="3" fill="currentColor" />
      <circle cx="40" cy="32" r="3" fill="currentColor" />
      <circle cx="54" cy="42" r="3" fill="currentColor" />
      <circle cx="74" cy="20" r="3" fill="currentColor" />
      <circle cx="92" cy="34" r="3" fill="currentColor" />
      <path
        d="M88 20l12-4v12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

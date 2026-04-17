'use client';

import { motion, useReducedMotion } from 'framer-motion';

const chartPath =
  'M 0 42 C 18 38, 28 28, 44 32 C 58 35, 68 18, 82 22 C 94 25, 104 12, 120 8';

/**
 * Hero product surface: dense, legible, no decorative noise — reads as real software.
 */
export function HeroCommandModule() {
  const reduce = useReducedMotion() === true;

  return (
    <div className="relative w-full max-w-[min(100%,520px)] justify-self-center lg:max-w-none lg:justify-self-end">
      {/* Depth: single soft lift, no competing glows */}
      <div className="pointer-events-none absolute -inset-px rounded-[14px] bg-gradient-to-b from-gnk-accent/[0.07] via-transparent to-gnk-accent-2/[0.05] opacity-80 dark:from-violet-500/10 dark:to-cyan-500/5" />
      <div className="relative overflow-hidden rounded-[13px] bg-gnk-bg-elevated/65 shadow-[0_1px_0_0_hsl(var(--gnk-border)/0.65),0_24px_48px_-32px_rgb(0_0_0/0.18)] ring-1 ring-gnk-border/70 backdrop-blur-[20px] dark:bg-gnk-card/45 dark:shadow-[0_1px_0_0_rgb(255_255_255/0.06),0_32px_64px_-36px_rgb(0_0_0/0.55)] dark:ring-white/[0.07]">
        {/* Instrument header */}
        <header className="flex h-11 items-center gap-3 border-b border-gnk-border/70 px-4 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 opacity-75 dark:bg-emerald-400/30" />
              ) : null}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gnk-fg">
              Growth console
            </span>
          </div>
          <span className="hidden h-3 w-px bg-gnk-border sm:block dark:bg-white/10" aria-hidden />
          <span className="hidden font-mono text-[10px] tabular-nums text-gnk-muted sm:inline">v3.2 · edge</span>
          <span className="ml-auto rounded-md border border-gnk-border/80 bg-gnk-bg/50 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-gnk-muted dark:border-white/[0.08] dark:bg-black/25">
            Live
          </span>
        </header>

        <div className="grid grid-cols-2 gap-px bg-gnk-border/45 dark:bg-white/[0.06]">
          {/* KPI */}
          <motion.div
            className="bg-gnk-bg-elevated/90 p-4 dark:bg-gnk-bg/80"
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-gnk-muted">Intent match</p>
            <p className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-gnk-fg tabular-nums sm:text-[2rem]">
              94.2<span className="text-lg font-semibold text-gnk-muted">%</span>
            </p>
            <p className="mt-1 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400/90">+2.1 vs 7d</p>
          </motion.div>

          {/* Chart */}
          <motion.div
            className="relative bg-gnk-bg-elevated/90 p-4 dark:bg-gnk-bg/80"
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-gnk-muted">Pipeline lift</p>
            <div className="mt-3 h-[4.5rem] w-full">
              <svg viewBox="0 0 120 48" className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`${chartPath} L 120 48 L 0 48 Z`} fill="url(#hero-chart-fill)" />
                <path
                  d={chartPath}
                  fill="none"
                  stroke="hsl(var(--gnk-accent))"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </motion.div>

          {/* Queue */}
          <motion.div
            className="col-span-2 bg-gnk-bg-elevated/95 p-4 dark:bg-gnk-bg/85"
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-gnk-muted">Active routes</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Paid social → AI qualify', tone: 'violet' as const },
                { label: 'Organic → nurture graph', tone: 'cyan' as const },
                { label: 'Outbound → SDR handoff', tone: 'slate' as const },
              ].map((row) => (
                <li key={row.label} className="flex items-center gap-3">
                  <span
                    className={
                      row.tone === 'violet'
                        ? 'bg-gnk-accent/80'
                        : row.tone === 'cyan'
                          ? 'bg-gnk-accent-2/80'
                          : 'bg-gnk-muted/50'
                    }
                    style={{ width: 6, height: 6, borderRadius: 2 }}
                  />
                  <span className="min-w-0 flex-1 truncate font-mono text-[11px] font-medium text-gnk-fg">{row.label}</span>
                  <span className="shrink-0 font-mono text-[10px] tabular-nums text-gnk-muted">OK</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Capability chips */}
          <motion.div
            className="col-span-2 flex flex-wrap gap-2 border-t border-gnk-border/50 bg-gnk-bg/40 px-4 py-3 dark:border-white/[0.05] dark:bg-black/20"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            {['Marketing', 'AI systems', 'Attribution'].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-gnk-border/70 bg-gnk-bg-elevated/60 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-gnk-muted dark:border-white/[0.08] dark:bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

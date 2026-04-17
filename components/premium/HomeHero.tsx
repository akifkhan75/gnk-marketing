'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedButtonLink } from '@/components/premium/AnimatedButton';
import { Container } from '@/components/marketing/Container';
import { HeroAnimation } from '@/components/visuals/HeroAnimation';

const ease = [0.25, 0.4, 0.25, 1] as const;

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
};

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-gnk-border/70 antialiased selection:bg-gnk-accent/15 dark:border-white/[0.06]">
      {/* Calibrated atmosphere — one gradient, no competing layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_-20%,hsl(var(--gnk-accent)/0.11),transparent_52%),radial-gradient(ellipse_80%_50%_at_-10%_100%,hsl(var(--gnk-accent-2)/0.08),transparent_48%)] dark:bg-[radial-gradient(ellipse_100%_70%_at_95%_0%,rgb(139_92_246/0.14),transparent_50%),radial-gradient(ellipse_70%_45%_at_0%_100%,rgb(34_211_238/0.08),transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gnk-border) / 0.35) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--gnk-border) / 0.35) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 40%, black 10%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 40%, black 10%, transparent 72%)',
        }}
        aria-hidden
      />

      <Container className="relative z-10 py-16 sm:py-24 lg:py-[7.5rem]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-x-12">
          <motion.div
            className="lg:col-span-5 xl:col-span-5"
            variants={reduce ? undefined : stagger}
            initial={reduce ? undefined : 'hidden'}
            animate={reduce ? undefined : 'show'}
          >
            <motion.div variants={reduce ? undefined : item} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gnk-accent shadow-[0_0_0_3px_hsl(var(--gnk-accent)/0.2)] dark:shadow-[0_0_0_3px_rgb(139_92_246/0.25)]" />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-gnk-muted">
                Marketing · Growth · AI
              </p>
            </motion.div>

            <motion.h1
              variants={reduce ? undefined : item}
              className="mt-6 font-display text-[2.5rem] font-bold leading-[1.06] tracking-[-0.035em] text-gnk-fg sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] lg:leading-[1.04] xl:text-[3.5rem]"
            >
              Revenue infrastructure for teams who{' '}
              <span className="text-gradient animate-gradient-shift bg-[length:200%_auto]">ship outcomes.</span>
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-6 max-w-[34rem] text-base leading-[1.65] text-gnk-muted sm:text-[1.0625rem] sm:leading-[1.7]"
            >
              Senior-led marketing craft, wired to an AI layer that qualifies and routes demand in real time—measured on
              pipeline, not vanity.
            </motion.p>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <AnimatedButtonLink href="/free-ai-audit" variant="primary" className="!h-12 !px-7 !py-0 !text-[0.9375rem]">
                Get free AI audit
              </AnimatedButtonLink>
              <AnimatedButtonLink href="/contact" variant="secondary" className="!h-12 !px-7 !py-0 !text-[0.9375rem]">
                Book a demo
              </AnimatedButtonLink>
            </motion.div>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-8 font-mono text-[11px] leading-relaxed text-gnk-muted/90 sm:text-xs"
            >
              <span className="text-gnk-fg/80">ISO-ready discipline</span>
              <span className="mx-2 text-gnk-border dark:text-white/15">·</span>
              Brand-safe automation
              <span className="mx-2 text-gnk-border dark:text-white/15">·</span>
              Board-clear reporting
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-6 lg:col-span-7 lg:items-end xl:col-span-7"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <div className="relative w-full max-w-[min(100%,680px)] lg:max-w-none">
              {/* No visible border/ring; visibility comes from contrast + glow. */}
              <div className="pointer-events-none absolute -inset-10 rounded-[28px] bg-[radial-gradient(ellipse_55%_45%_at_55%_45%,hsl(var(--gnk-accent)/0.28),transparent_70%),radial-gradient(ellipse_55%_45%_at_30%_70%,hsl(var(--gnk-accent-2)/0.18),transparent_72%)] blur-2xl opacity-70 dark:opacity-80" />
              <div className="relative overflow-hidden rounded-[18px] bg-gnk-bg-elevated/10 backdrop-blur-[14px] dark:bg-gnk-card/10">
                <HeroAnimation className="px-4 py-2 sm:px-6 sm:py-4" />
              </div>
            </div>
            <p className="max-w-md text-center font-mono text-[10px] uppercase tracking-[0.22em] text-gnk-muted lg:text-right">
              Signal in · model core · revenue out
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedButtonLink } from '@/components/premium/AnimatedButton';
import { AnimatedGrid } from '@/components/premium/AnimatedGrid';
import { Container } from '@/components/marketing/Container';
import { HeroVisual } from '@/components/premium/HeroVisual';

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <AnimatedGrid className="opacity-40" />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={reduce ? undefined : stagger}
            initial={reduce ? undefined : 'hidden'}
            animate={reduce ? undefined : 'show'}
            className="max-w-xl lg:max-w-none"
          >
            <motion.p
              variants={reduce ? undefined : item}
              className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90"
            >
              AI-first growth infrastructure
            </motion.p>
            <motion.h1
              variants={reduce ? undefined : item}
              className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-gnk-fg sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
            >
              Growth systems that feel{' '}
              <span className="text-gradient animate-gradient-shift bg-[length:200%_auto]">expensive to ignore.</span>
            </motion.h1>
            <motion.p
              variants={reduce ? undefined : item}
              className="mt-6 text-lg leading-relaxed text-gnk-muted sm:text-xl"
            >
              We engineer AI-powered acquisition, qualification, and conversion—so your brand reads as advanced, operates
              with authority, and compounds revenue while your team works on what humans do best.
            </motion.p>
            <motion.div variants={reduce ? undefined : item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AnimatedButtonLink href="/free-ai-audit" variant="primary" className="!px-8 !py-3.5 !text-base">
                Get free AI audit
              </AnimatedButtonLink>
              <AnimatedButtonLink href="/contact" variant="secondary" className="!px-8 !py-3.5 !text-base">
                Book a demo
              </AnimatedButtonLink>
            </motion.div>
            <motion.p variants={reduce ? undefined : item} className="mt-6 text-sm text-gnk-muted">
              Senior-led delivery · measurable outcomes · no template decks
            </motion.p>
          </motion.div>
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

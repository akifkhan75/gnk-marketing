'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function GlowCard({ children, className = '', href }: GlowCardProps) {
  const reduce = useReducedMotion();

  const shell = `group/card relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gnk-card/35 shadow-card backdrop-blur-md transition-[box-shadow,border-color] duration-300 hover:border-violet-500/30 hover:shadow-glow ${className}`;

  const pad = (
    <div className="relative p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-card-shine opacity-40" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`block ${shell}`}>
        <motion.div whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: 0.22, ease: 'easeOut' }}>
          {pad}
        </motion.div>
      </Link>
    );
  }

  return (
    <div className={shell}>
      <motion.div whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: 0.22, ease: 'easeOut' }}>
        {pad}
      </motion.div>
    </div>
  );
}

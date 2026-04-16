'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

const styles = {
  primary:
    'group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-glow ring-1 ring-white/10',
  secondary:
    'rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-gnk-fg shadow-inner-glow backdrop-blur-sm ring-1 ring-white/5 transition-colors hover:border-white/15',
  ghost: 'rounded-xl px-5 py-2.5 text-sm font-semibold text-gnk-muted transition-colors hover:text-gnk-fg',
} as const;

export function AnimatedButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="inline-flex"
      whileHover={reduce || variant === 'ghost' ? undefined : { scale: 1.02 }}
      whileTap={reduce || variant === 'ghost' ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gnk-bg ${styles[variant]} ${className}`}
      >
        {variant === 'primary' ? (
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />
        ) : null}
        <span className="relative z-[1]">{children}</span>
      </Link>
    </motion.span>
  );
}

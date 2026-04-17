'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';
import type { PremiumIconProps } from '@/components/icons/premium/GnkPremiumIcons';

export type IconCardIcon = ComponentType<PremiumIconProps>;

export type IconCardProps = {
  icon: IconCardIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
  /** Smaller padding for dense grids */
  compact?: boolean;
  /** Optional step label or meta (e.g. "01") */
  badge?: string;
  /** Optional footer slot (e.g. link text) */
  footer?: ReactNode;
  /** Center icon + text (e.g. trust chips) */
  align?: 'start' | 'center';
};

/**
 * Premium icon tile: glass container, hover lift, neon glow on icon (CSS-only, GPU-friendly).
 */
export function IconCard({
  icon: Icon,
  title,
  description,
  href,
  className = '',
  compact = false,
  badge,
  footer,
  align = 'start',
}: IconCardProps) {
  const reduce = useReducedMotion();
  const pad = compact ? 'p-5' : 'p-6 sm:p-7';
  const alignCls = align === 'center' ? 'flex flex-col items-center text-center' : '';

  const shell = `group/iconcard relative overflow-hidden rounded-3xl border border-gnk-border/90 bg-gnk-card/80 shadow-card backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 hover:border-gnk-accent/40 hover:shadow-[0_0_36px_-14px_hsl(var(--gnk-glow)/0.22)] dark:border-white/[0.08] dark:bg-gnk-card/35 dark:hover:border-violet-500/35 dark:hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)] ${pad} ${alignCls} ${className}`;

  const iconShell = `iconcard-icon-wrap mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gnk-border/80 bg-gradient-to-br from-gnk-accent/[0.06] to-transparent shadow-[inset_0_1px_0_0_rgb(255_255_255/0.5)] backdrop-blur-sm transition duration-300 group-hover/iconcard:border-gnk-accent/40 group-hover/iconcard:shadow-[0_0_20px_-6px_hsl(var(--gnk-glow)/0.25)] dark:border-white/[0.08] dark:from-white/[0.08] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] dark:group-hover/iconcard:border-violet-500/35 dark:group-hover/iconcard:shadow-[0_0_24px_-4px_rgba(139,92,246,0.45),0_0_20px_-8px_rgba(34,211,238,0.2)]`;

  const inner = (
    <>
      {badge ? (
        <span className="mb-3 inline-flex items-center rounded-full border border-gnk-border/80 bg-gnk-accent/[0.06] px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-gnk-accent dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-violet-300/90">
          {badge}
        </span>
      ) : null}
      <div className={iconShell}>
        <motion.span
          className="flex text-gnk-muted transition duration-300 group-hover/iconcard:text-gnk-accent dark:group-hover/iconcard:text-violet-200"
          whileHover={reduce ? undefined : { scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 520, damping: 22 }}
        >
          <Icon
            className="h-7 w-7 transition-[filter,transform] duration-300 group-hover/iconcard:drop-shadow-[0_0_8px_hsl(var(--gnk-glow)/0.45)] dark:group-hover/iconcard:drop-shadow-[0_0_10px_rgba(167,139,250,0.55)]"
          />
        </motion.span>
      </div>
      <h3 className="font-display text-base font-semibold text-gnk-fg transition duration-300 group-hover/iconcard:text-gnk-accent dark:group-hover/iconcard:text-violet-100 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gnk-muted">{description}</p>
      {footer ? <div className="mt-4">{footer}</div> : null}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <Link href={href} className={`block ${shell}`}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={shell}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {inner}
    </motion.div>
  );
}

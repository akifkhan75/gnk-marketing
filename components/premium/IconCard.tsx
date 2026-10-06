'use client';

import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';
import type { PremiumIconProps } from '@/components/icons/premium/GnkPremiumIcons';
import { cardShell } from './GlowCard';
import { useSpotlight } from './SpotlightSurface';

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

/** Premium icon tile: gradient hairline, cursor spotlight, icon glow on hover. */
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
  const spot = useSpotlight();
  const pad = compact ? 'p-5 sm:p-6' : 'p-6 sm:p-7';
  const alignCls = align === 'center' ? 'flex flex-col items-center text-center' : '';

  const inner = (
    <div className={`relative z-[1] ${alignCls}`}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gnk-border bg-gradient-to-b from-gnk-bg-elevated to-gnk-card text-gnk-fg shadow-inner-glow transition-[border-color,box-shadow,color] duration-500 group-hover/card:border-gnk-accent/50 group-hover/card:text-gnk-accent group-hover/card:shadow-[0_0_28px_-6px_hsl(var(--gnk-glow)/0.6)] dark:border-white/[0.08] dark:group-hover/card:text-violet-300">
          <Icon className="h-6 w-6 transition-transform duration-500 ease-out-expo group-hover/card:scale-110" />
        </div>
        {badge ? (
          <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-gnk-muted">{badge}</span>
        ) : null}
      </div>
      <h3 className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-gnk-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gnk-muted">{description}</p>
      {footer ? <div className="mt-5">{footer}</div> : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`${cardShell} ${pad} ${className}`} {...spot}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${cardShell} ${pad} ${className}`} {...spot}>
      {inner}
    </div>
  );
}

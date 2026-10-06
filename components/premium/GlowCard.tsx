'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useSpotlight } from './SpotlightSurface';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export const cardShell =
  'spotlight gradient-border group/card relative block overflow-hidden rounded-3xl bg-gnk-card/70 shadow-card backdrop-blur-xl transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-glow';

export function GlowCard({ children, className = '', href }: GlowCardProps) {
  const spot = useSpotlight();
  const inner = <div className="relative z-[1] p-6 sm:p-8">{children}</div>;

  if (href) {
    return (
      <Link href={href} className={`${cardShell} ${className}`} {...spot}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={`${cardShell} ${className}`} {...spot}>
      {inner}
    </div>
  );
}

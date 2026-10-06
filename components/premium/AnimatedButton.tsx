import type { ReactNode } from 'react';
import { ButtonLink } from '@/components/marketing/Button';

/** Kept for existing call sites — now a thin alias over the unified ButtonLink. */
export function AnimatedButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <ButtonLink href={href} variant={variant} className={className}>
      {children}
    </ButtonLink>
  );
}

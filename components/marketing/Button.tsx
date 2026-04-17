import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gnk-ring focus-visible:ring-offset-2 focus-visible:ring-offset-gnk-bg disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary: `${base} relative overflow-hidden bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white shadow-glow ring-1 ring-black/5 hover:opacity-[0.96] dark:ring-white/10`,
  secondary: `${base} border border-gnk-border bg-gnk-card/70 text-gnk-fg shadow-inner-glow backdrop-blur-sm ring-1 ring-black/[0.04] transition hover:border-gnk-accent/40 hover:bg-gnk-accent/[0.06] dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/5 dark:hover:border-violet-500/35 dark:hover:bg-white/[0.06]`,
  ghost: `${base} text-gnk-muted transition hover:bg-gnk-accent/[0.06] hover:text-gnk-fg dark:hover:bg-white/[0.04]`,
  outline: `${base} border border-gnk-border bg-transparent text-gnk-fg transition hover:border-gnk-accent/45 hover:bg-gnk-accent/[0.04] dark:border-white/10 dark:hover:border-violet-500/35 dark:hover:bg-transparent`,
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  type = 'button',
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button type={type} className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

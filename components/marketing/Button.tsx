import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gnk-bg disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary: `${base} relative overflow-hidden bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white shadow-glow ring-1 ring-white/10 hover:opacity-[0.96]`,
  secondary: `${base} border border-white/10 bg-white/[0.04] text-gnk-fg shadow-inner-glow backdrop-blur-sm ring-1 ring-white/5 hover:border-violet-500/25`,
  ghost: `${base} text-gnk-muted hover:bg-white/[0.04] hover:text-gnk-fg`,
  outline: `${base} border border-white/10 bg-transparent text-gnk-fg hover:border-violet-500/30`,
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

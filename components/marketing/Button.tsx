import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold tracking-[-0.005em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out-expo active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gnk-ring focus-visible:ring-offset-2 focus-visible:ring-offset-gnk-bg disabled:pointer-events-none disabled:opacity-50';

export const buttonVariants = {
  primary: `${base} overflow-hidden bg-[#d8f938] text-ink shadow-[0_10px_30px_-12px_rgba(216,249,56,0.55)] hover:-translate-y-0.5 hover:bg-[#e4ff5c] hover:shadow-[0_16px_40px_-12px_rgba(216,249,56,0.7)]`,
  secondary: `${base} border border-gnk-border bg-gnk-card/60 text-gnk-fg backdrop-blur-md hover:-translate-y-0.5 hover:border-gnk-accent/50 hover:bg-gnk-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25 dark:hover:bg-white/[0.06]`,
  ghost: `${base} text-gnk-muted hover:text-gnk-fg`,
  outline: `${base} border border-gnk-border bg-transparent text-gnk-fg hover:border-gnk-accent/50 hover:bg-gnk-accent/[0.05] dark:border-white/[0.12] dark:hover:border-white/25`,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

/** Shine sweep + arrow nudge shared by all buttons. */
export function ButtonInner({ children, variant, arrow }: { children: ReactNode; variant: ButtonVariant; arrow?: boolean }) {
  return (
    <>
      {variant === 'primary' ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out-expo group-hover/btn:translate-x-[300%] group-hover/btn:opacity-100"
        />
      ) : null}
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
        {arrow ? (
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        ) : null}
      </span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  arrow,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Defaults to true for primary buttons */
  arrow?: boolean;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const showArrow = arrow ?? variant === 'primary';
  const cls = `${buttonVariants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <ButtonInner variant={variant} arrow={showArrow}>
          {children}
        </ButtonInner>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <ButtonInner variant={variant} arrow={showArrow}>
        {children}
      </ButtonInner>
    </Link>
  );
}

export function Button({
  type = 'button',
  children,
  variant = 'primary',
  className = '',
  arrow,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <button type={type} className={`${buttonVariants[variant]} ${className}`} {...props}>
      <ButtonInner variant={variant} arrow={arrow ?? false}>
        {children}
      </ButtonInner>
    </button>
  );
}

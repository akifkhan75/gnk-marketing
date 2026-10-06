import { useId } from 'react';

type Variant = 0 | 1 | 2 | 3;

const SKIN = ['#f2c9a8', '#c68a63', '#8a5a3c', '#e7b38c'];
const HAIR = ['#1d1630', '#2b1a12', '#120d0a', '#3a2418'];
const SHIRT: [string, string][] = [
  ['#d8f938', 'hsl(var(--gnk-fg))'],
  ['hsl(var(--gnk-fg))', 'hsl(var(--gnk-muted))'],
  ['#d8f938', '#d8f938'],
  ['hsl(var(--gnk-muted))', 'hsl(var(--gnk-fg))'],
];

/**
 * Illustrated AI-agent persona. Deliberately stylised (not photoreal) so it reads as
 * "AI teammate", never as a fake human testimonial.
 */
export function AgentAvatar({ variant = 0, className = '' }: { variant?: Variant; className?: string }) {
  const id = useId().replace(/:/g, '');
  const [s1, s2] = SHIRT[variant];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={s1} stopOpacity="0.35" />
          <stop offset="1" stopColor={s2} stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={`sh${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={s1} />
          <stop offset="1" stopColor={s2} />
        </linearGradient>
        <clipPath id={`c${id}`}>
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <g clipPath={`url(#c${id})`}>
        <rect width="64" height="64" fill={`url(#bg${id})`} />
        {/* back hair for long styles */}
        {variant === 2 ? <path d="M16 30 Q14 52 22 60 L42 60 Q50 52 48 30 Z" fill={HAIR[variant]} /> : null}
        {/* shoulders */}
        <path d="M8 66 Q10 46 32 44 Q54 46 56 66 Z" fill={`url(#sh${id})`} />
        <path d="M27 44 L32 51 L37 44" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.4" />
        {/* neck + head */}
        <rect x="27.5" y="36" width="9" height="10" rx="4" fill={SKIN[variant]} />
        <ellipse cx="32" cy="27" rx="11" ry="12.5" fill={SKIN[variant]} />
        {/* hair */}
        {variant === 0 ? <path d="M20.5 25 Q21 13 32 13 Q44 13 43.5 26 Q40 19 32 19 Q25 19 20.5 25 Z" fill={HAIR[0]} /> : null}
        {variant === 1 ? <path d="M21 24 Q22 12 33 13 Q43 14 43 22 Q37 17 27 20 Q23 21 21 24 Z" fill={HAIR[1]} /> : null}
        {variant === 2 ? <path d="M20 30 Q19 13 32 13 Q45 13 44 30 Q42 20 32 19 Q22 20 20 30 Z" fill={HAIR[2]} /> : null}
        {variant === 3 ? (
          <>
            <circle cx="32" cy="14" r="5" fill={HAIR[3]} />
            <path d="M21 25 Q21 15 32 15.5 Q43 15 43 25 Q38 19.5 32 19.5 Q26 19.5 21 25 Z" fill={HAIR[3]} />
          </>
        ) : null}
        {/* AI visor — the brand tell */}
        <rect x="23" y="25" width="18" height="4" rx="2" fill={`url(#sh${id})`} opacity="0.95" />
        <rect x="23" y="25" width="18" height="4" rx="2" fill="#fff" opacity="0.25" />
      </g>
      <circle cx="32" cy="32" r="31.25" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5" />
    </svg>
  );
}

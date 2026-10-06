/** Stylised product renders used across the Studio page (pure SVG, theme-aware). */

export function SerumBottle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 220" className={className} aria-hidden>
      <defs>
        <linearGradient id="sb-glass" x1="0" x2="1">
          <stop offset="0" stopColor="#2a2a26" />
          <stop offset="0.35" stopColor="#5a5a52" />
          <stop offset="0.55" stopColor="#1c1c19" />
          <stop offset="1" stopColor="#0d0d0b" />
        </linearGradient>
        <linearGradient id="sb-cap" x1="0" x2="1">
          <stop offset="0" stopColor="#c9e82f" />
          <stop offset="0.5" stopColor="#e9ff7a" />
          <stop offset="1" stopColor="#9fbf12" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="212" rx="44" ry="6" fill="#000" opacity="0.35" />
      <rect x="44" y="6" width="32" height="44" rx="8" fill="url(#sb-cap)" />
      <rect x="40" y="46" width="40" height="14" rx="3" fill="#1a1a17" />
      <rect x="18" y="58" width="84" height="150" rx="22" fill="url(#sb-glass)" />
      <rect x="28" y="70" width="10" height="120" rx="5" fill="#fff" opacity="0.12" />
      <rect x="34" y="112" width="52" height="58" rx="6" fill="#f5f5f2" />
      <path d="M50 130h22l-14 18H40Z" fill="#d8f938" />
      <rect x="42" y="154" width="36" height="3" rx="1.5" fill="#040404" opacity="0.6" />
      <rect x="48" y="160" width="24" height="2.5" rx="1.25" fill="#040404" opacity="0.35" />
    </svg>
  );
}

export function ProductBox({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 170" className={className} aria-hidden>
      <ellipse cx="80" cy="160" rx="62" ry="7" fill="#000" opacity="0.3" />
      <path d="M80 20 146 50v72l-66 34-66-34V50Z" fill="#141412" />
      <path d="M80 20 146 50 80 82 14 50Z" fill="#2b2b27" />
      <path d="M80 82v74l66-34V50Z" fill="#0b0b0a" />
      <path d="M80 82v74L14 122V50Z" fill="#1d1d1a" />
      <path d="M30 76l34 17v14L30 90Z" fill="#d8f938" />
      <path d="M96 93l32-16" stroke="#f5f5f2" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 103l20-10" stroke="#f5f5f2" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

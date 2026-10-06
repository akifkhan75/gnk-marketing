import { useId } from 'react';

/** Unique, SSR-stable gradient/filter ids per illustration instance. */
export function useIllIds(prefix: string) {
  const id = useId().replace(/:/g, '');
  return {
    brand: `${prefix}-brand-${id}`,
    brandV: `${prefix}-brandv-${id}`,
    fade: `${prefix}-fade-${id}`,
    glow: `${prefix}-glow-${id}`,
  };
}

/** Standard brand gradient + glow defs used by every illustration. */
export function IllDefs({ ids }: { ids: ReturnType<typeof useIllIds> }) {
  return (
    <defs>
      <linearGradient id={ids.brand} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#d8f938" />
        <stop offset="0.55" stopColor="hsl(var(--gnk-fg))" />
        <stop offset="1" stopColor="hsl(var(--gnk-muted))" />
      </linearGradient>
      <linearGradient id={ids.brandV} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d8f938" stopOpacity="0.45" />
        <stop offset="1" stopColor="hsl(var(--gnk-muted))" stopOpacity="0" />
      </linearGradient>
      <radialGradient id={ids.fade} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#d8f938" stopOpacity="0.35" />
        <stop offset="1" stopColor="#d8f938" stopOpacity="0" />
      </radialGradient>
      <filter id={ids.glow} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/** Logo-style ring node (hollow circle with coloured stroke). */
export function RingNode({
  x,
  y,
  r = 5,
  color = '#d8f938',
  glow,
  className,
  style,
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
  glow?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill="hsl(var(--gnk-bg))"
      stroke={color}
      strokeWidth={2}
      filter={glow ? `url(#${glow})` : undefined}
      className={className}
      style={style}
    />
  );
}

/** Glass chip with label — rendered in SVG so it scales with the drawing. */
export function Chip({
  x,
  y,
  w,
  label,
  accent = '#d8f938',
  className,
  style,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={className} style={style}>
      <rect width={w} height={24} rx={12} fill="hsl(var(--gnk-card))" stroke="hsl(var(--gnk-border))" />
      <circle cx={13} cy={12} r={3.2} fill={accent} />
      <text x={23} y={16} fontSize={10} fontWeight={500} fill="hsl(var(--gnk-fg))" fontFamily="var(--font-inter)">
        {label}
      </text>
      </g>
    </g>
  );
}

export const illFrame = 'h-auto w-full overflow-visible';

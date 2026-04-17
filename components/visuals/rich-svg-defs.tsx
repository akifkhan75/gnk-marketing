'use client';

import type { VisualIdBundle } from '@/components/visuals/visual-utils';

type Props = { id: VisualIdBundle };

/** Shared gradients, patterns, and filters for premium visuals — mount once per SVG with `id={useVisualIds('x')}`. */
export function RichSvgDefs({ id }: Props) {
  return (
    <defs>
      <linearGradient id={id.flow} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.35" />
        <stop offset="45%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.95" />
        <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.55" />
      </linearGradient>
      <linearGradient id={id.flow2} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.08" />
        <stop offset="50%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.35" />
        <stop offset="100%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.12" />
      </linearGradient>
      <radialGradient id={id.core} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.55" />
        <stop offset="40%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.28" />
        <stop offset="75%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0.08" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <pattern id={`${id.flow}-hex`} width="28" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
        <path
          d="M14 0 L26 8 L26 24 L14 32 L2 24 L2 8 Z"
          fill="none"
          stroke="hsl(var(--gnk-accent))"
          strokeOpacity="0.06"
          strokeWidth="0.6"
        />
      </pattern>
      <pattern id={`${id.flow}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(var(--gnk-border))" strokeOpacity="0.35" strokeWidth="0.5" />
      </pattern>
      <filter id={id.filterSoft} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={id.bloom} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feColorMatrix
          in="b"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0"
          result="b2"
        />
        <feMerge>
          <feMergeNode in="b2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

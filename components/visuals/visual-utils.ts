'use client';

import { useId } from 'react';
import { useEffect, useState } from 'react';

/** Stable unique IDs for SVG defs when multiple visuals mount. */
export function useVisualIds(prefix: string) {
  const raw = useId().replace(/:/g, '');
  return {
    flow: `${prefix}-flow-${raw}`,
    flow2: `${prefix}-flow2-${raw}`,
    glow: `${prefix}-glow-${raw}`,
    core: `${prefix}-core-${raw}`,
    filterSoft: `${prefix}-blur-${raw}`,
    bloom: `${prefix}-bloom-${raw}`,
    chartFill: `${prefix}-chart-${raw}`,
    nodeDrop: `${prefix}-nodedrop-${raw}`,
  };
}

export type VisualIdBundle = ReturnType<typeof useVisualIds>;

export function reduced(reduceMotion: boolean | null): boolean {
  return reduceMotion === true;
}

/**
 * Small-screen detection for disabling heavy motion on mobile.
 * Tailwind's `sm` breakpoint is 640px.
 */
export function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const set = () => setIsSmall(mq.matches);
    set();
    mq.addEventListener?.('change', set);
    return () => mq.removeEventListener?.('change', set);
  }, []);

  return isSmall;
}

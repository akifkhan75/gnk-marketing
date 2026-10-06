'use client';

import type { HTMLAttributes, PointerEvent } from 'react';

/** Writes pointer position to --mx/--my so `.spotlight::after` can follow the cursor. */
export function useSpotlight() {
  return {
    onPointerMove(e: PointerEvent<HTMLElement>) {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
  };
}

export function SpotlightSurface({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const handlers = useSpotlight();
  return <div {...props} {...handlers} className={`spotlight ${className}`} />;
}

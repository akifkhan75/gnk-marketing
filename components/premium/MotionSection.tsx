'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/**
 * Scroll reveal driven by IntersectionObserver + CSS (see `[data-reveal]` in globals.css).
 * Content is fully visible without JS, and no animation library ships for it.
 * Children marked `data-reveal-child` stagger in sequence.
 */
export function MotionSection({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.setAttribute('data-shown', '');
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={className}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

export const Reveal = MotionSection;

import { Fragment } from 'react';

export type Segment = { text: string; className?: string };

/**
 * Splits text into masked words that rise into place.
 * - mode "hero": plays on load (CSS keyframes, no JS — safe for LCP)
 * - mode "reveal": plays when the nearest `[data-reveal]` ancestor scrolls into view
 * Real text stays in the DOM for SEO and screen readers.
 */
export function SplitWords({
  segments,
  mode = 'reveal',
  delay = 0,
}: {
  segments: Array<Segment | string>;
  mode?: 'hero' | 'reveal';
  delay?: number;
}) {
  let i = 0;
  const segs = segments.map((s) => (typeof s === 'string' ? { text: s } : s));
  return (
    <span className={mode === 'hero' ? 'split-hero' : 'split-reveal'} style={{ ['--d' as string]: `${delay}s` }}>
      {segs.map((seg, si) => {
        const words = seg.text.split(/\s+/).filter(Boolean);
        const inner = words.map((w, wi) => (
          <Fragment key={wi}>
            <span className="split-line">
              <span className="split-w" style={{ ['--i' as string]: i++ }}>
                {w}
              </span>
            </span>
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        ));
        return (
          <Fragment key={si}>
            {seg.className ? <span className={seg.className}>{inner}</span> : inner}
            {si < segs.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </span>
  );
}

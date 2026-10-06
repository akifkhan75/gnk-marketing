/**
 * GNK Marketing logo — vector trace of the brand mark.
 * White letterforms use `currentColor` (inverts in light mode); the K's upper arm is the lime "slash".
 * Note the K borrows the N's right stem — its arms float free, exactly as in the master logo.
 */
export const MARK_VIEWBOX = '360 336 816 232';

export const MARK_PATHS = {
  g: 'M460 347H620V403H462C432 403 415 425 415 455C415 485 432 507 462 507H571V492H530L484 444H620V562H460C405 562 365 520 365 455C365 390 405 347 460 347Z',
  n: 'M649 562V347H715L871 493V347H925V562H867L703 409V562Z',
  kLower: 'M950 451H1030L1147 562H1069Z',
  slash: 'M1087 342H1171L1047 436H965Z',
} as const;

/** Favicon / app-icon layout: traced G + slash, placed inside a 0–64 box. */
export const ICON_TRANSFORMS = {
  g: 'translate(8 21) scale(0.16) translate(-365 -347)',
  slash: 'translate(33 8.5) scale(0.118) translate(-965 -342)',
} as const;

export const BRAND_HEX = {
  lime: '#d8f938',
  ink: '#040404',
  white: '#f5f5f2',
} as const;

export function BrandMark({
  className = '',
  animated = false,
  title = 'GNK Marketing',
  mono = false,
}: {
  className?: string;
  /** Letters rise in and the lime slash cuts into place (CSS only, respects reduced motion). */
  animated?: boolean;
  title?: string;
  /** Single-colour (currentColor) rendering for watermarks. */
  mono?: boolean;
}) {
  const a = (delay: number) =>
    animated
      ? { className: 'mark-rise', style: { animationDelay: `${delay}s` } as React.CSSProperties }
      : {};
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <g fill="currentColor">
        <path d={MARK_PATHS.g} {...a(0)} />
        <path d={MARK_PATHS.n} {...a(0.08)} />
        <path d={MARK_PATHS.kLower} {...a(0.16)} />
      </g>
      <path
        d={MARK_PATHS.slash}
        fill={mono ? 'currentColor' : BRAND_HEX.lime}
        className={animated ? 'mark-slash' : undefined}
        style={animated ? { animationDelay: '0.38s' } : undefined}
      />
    </svg>
  );
}

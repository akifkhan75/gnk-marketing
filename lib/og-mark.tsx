import { BRAND_HEX, ICON_TRANSFORMS, MARK_PATHS, MARK_VIEWBOX } from '@/components/brand/BrandMark';

/** Static full logo for next/og ImageResponse renders. */
export function OgMark({ width, color = BRAND_HEX.white }: { width: number; color?: string }) {
  return (
    <svg width={width} height={(width * 232) / 816} viewBox={MARK_VIEWBOX}>
      <path d={MARK_PATHS.g} fill={color} />
      <path d={MARK_PATHS.n} fill={color} />
      <path d={MARK_PATHS.kLower} fill={color} />
      <path d={MARK_PATHS.slash} fill={BRAND_HEX.lime} />
    </svg>
  );
}

/** G + slash icon for app icons. */
export function OgIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path transform={ICON_TRANSFORMS.g} d={MARK_PATHS.g} fill={BRAND_HEX.white} />
      <path transform={ICON_TRANSFORMS.slash} d={MARK_PATHS.slash} fill={BRAND_HEX.lime} />
    </svg>
  );
}

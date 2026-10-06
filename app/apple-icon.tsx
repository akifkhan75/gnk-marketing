import { ImageResponse } from 'next/og';
import { OgIcon } from '@/lib/og-mark';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#040404' }}>
        <OgIcon size={160} />
      </div>
    ),
    { ...size }
  );
}

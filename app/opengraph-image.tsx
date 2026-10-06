import { ImageResponse } from 'next/og';
import { OgMark } from '@/lib/og-mark';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: '#f5f5f2',
          backgroundColor: '#040404',
          position: 'relative',
        }}
      >
        {/* Oversized lime slash */}
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: 0,
            width: 520,
            height: 630,
            display: 'flex',
          }}
        >
          <svg width="520" height="630" viewBox="0 0 520 630">
            <path d="M330 0H520L190 630H0Z" fill="#d8f938" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <OgMark width={300} />
          <div style={{ fontSize: 22, letterSpacing: 14, marginTop: 18, fontWeight: 600 }}>MARKETING</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 720 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5 }}>
            Revenue infrastructure for teams who ship outcomes.
          </div>
          <div style={{ display: 'flex', marginTop: 26, gap: 14, fontSize: 22, color: '#9a9b94' }}>
            <span>SEO</span><span>·</span><span>Paid media</span><span>·</span><span>AI automation</span><span>·</span><span>CRO</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: 'linear-gradient(135deg, #09090b 0%, #1e1b4b 42%, #0e7490 100%)',
          color: '#fafafa',
          fontSize: 62,
          fontWeight: 700,
          letterSpacing: -0.04,
        }}
      >
        <div style={{ fontSize: 26, opacity: 0.88, marginBottom: 20, color: '#c4b5fd' }}>
          AI-first growth infrastructure
        </div>
        <div style={{ maxWidth: 920, lineHeight: 1.05 }}>{SITE_NAME}</div>
        <div style={{ marginTop: 32, fontSize: 28, fontWeight: 500, opacity: 0.82, color: '#67e8f9' }}>
          Systems · Automation · Performance
        </div>
      </div>
    ),
    { ...size }
  );
}

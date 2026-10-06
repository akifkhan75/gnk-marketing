import { IllDefs, RingNode, illFrame, useIllIds } from './shared';

const line = 'M24 230 C 70 222 96 206 132 196 S 196 170 228 148 S 300 92 376 44';
const area = `${line} L376 260 L24 260 Z`;
const points = [
  { x: 132, y: 196, c: '#d8f938' },
  { x: 228, y: 148, c: '#d8f938' },
  { x: 300, y: 98, c: 'hsl(var(--gnk-fg))' },
];
const bars = [52, 74, 66, 96, 118, 142, 170];

/** Growth: a compounding curve drawn on scroll, with logo-style milestone nodes. */
export function GrowthIllustration({ className = '' }: { className?: string }) {
  const ids = useIllIds('grow');
  return (
    <svg viewBox="0 0 400 280" className={`${illFrame} ${className}`} role="img" aria-label="Revenue growth chart illustration">
      <IllDefs ids={ids} />
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="24" x2="376" y1={y} y2={y} stroke="hsl(var(--gnk-border))" strokeDasharray="2 6" />
      ))}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 50}
          y={260 - h}
          width="22"
          height={h}
          rx="6"
          fill="hsl(var(--gnk-border))"
          fillOpacity="0.55"
          className="ill-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      <path d={area} fill={`url(#${ids.brandV})`} />
      <path d={line} pathLength={1} fill="none" stroke={`url(#${ids.brand})`} strokeWidth="3.5" strokeLinecap="round" className="draw-on-reveal" filter={`url(#${ids.glow})`} />
      {points.map((p) => (
        <RingNode key={p.x} x={p.x} y={p.y} r={5} color={p.c} />
      ))}
      <circle cx="376" cy="44" r="7" fill="hsl(var(--gnk-muted))" opacity="0.5" className="animate-ping-soft origin-center [transform-box:fill-box]" />
      <RingNode x={376} y={44} r={6} color="hsl(var(--gnk-muted))" glow={ids.glow} />
      <g className="ill-float">
        <rect x="246" y="14" width="102" height="30" rx="15" fill="hsl(var(--gnk-card))" stroke="hsl(var(--gnk-border))" />
        <path d="M262 33 l6 -7 l5 4 l7 -9" stroke="hsl(var(--gnk-muted))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="288" y="33" fontSize="10.5" fontWeight="600" fill="hsl(var(--gnk-fg))" fontFamily="var(--font-inter)">Compounding</text>
      </g>
    </svg>
  );
}

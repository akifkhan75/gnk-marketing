import { Chip, IllDefs, RingNode, illFrame, useIllIds } from './shared';

const audience = Array.from({ length: 15 }, (_, i) => ({
  x: 250 + (i % 5) * 28 + (Math.floor(i / 5) % 2) * 14,
  y: 92 + Math.floor(i / 5) * 40,
  d: ((i * 7) % 15) * 0.2,
}));

/** Marketing / reach: a broadcast mark sending waves to an audience that lights up. */
export function MarketingIllustration({ className = '' }: { className?: string }) {
  const ids = useIllIds('mkt');
  return (
    <svg viewBox="0 0 400 280" className={`${illFrame} ${className}`} role="img" aria-label="Marketing reach illustration">
      <IllDefs ids={ids} />
      <circle cx="110" cy="140" r="110" fill={`url(#${ids.fade})`} />

      {/* Broadcast mark */}
      <g className="ill-float">
        <path d="M58 122 L132 92 Q138 90 138 96 L138 184 Q138 190 132 188 L58 158 Z" fill="hsl(var(--gnk-card))" stroke={`url(#${ids.brand})`} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="40" y="120" width="20" height="40" rx="6" fill="hsl(var(--gnk-card))" stroke="hsl(var(--gnk-border))" strokeWidth="2" />
        <path d="M70 158 L80 196 Q82 202 88 200 L96 198" stroke="hsl(var(--gnk-muted))" strokeOpacity="0.6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <RingNode x={138} y={140} r={5} color="hsl(var(--gnk-muted))" glow={ids.glow} />
      </g>

      {/* Waves */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${156 + i * 4} ${104 - i * 6} A ${46 + i * 10} ${46 + i * 10} 0 0 1 ${156 + i * 4} ${176 + i * 6}`}
          fill="none"
          stroke={`url(#${ids.brand})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="ill-wave"
          style={{ animationDelay: `${i}s` }}
        />
      ))}

      {/* Audience */}
      {audience.map((p, i) => (
        <g key={i} className="ill-light" style={{ animationDelay: `${p.d}s` }}>
          <circle cx={p.x} cy={p.y - 6} r="5" fill={i % 3 === 0 ? 'hsl(var(--gnk-muted))' : i % 3 === 1 ? '#d8f938' : 'hsl(var(--gnk-fg))'} />
          <path d={`M${p.x - 9} ${p.y + 10} Q${p.x} ${p.y - 2} ${p.x + 9} ${p.y + 10}`} fill="none" stroke="hsl(var(--gnk-muted))" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}

      <Chip x={228} y={26} w={72} label="Search" accent="hsl(var(--gnk-muted))" className="ill-float" />
      <Chip x={310} y={42} w={66} label="Social" accent="#d8f938" className="ill-float" style={{ animationDelay: '-1.5s' }} />
      <Chip x={236} y={230} w={64} label="Email" accent="hsl(var(--gnk-fg))" className="ill-float" style={{ animationDelay: '-3s' }} />
      <Chip x={312} y={220} w={62} label="Video" accent="#d8f938" className="ill-float" style={{ animationDelay: '-2s' }} />
    </svg>
  );
}

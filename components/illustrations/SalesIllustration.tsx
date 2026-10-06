import { IllDefs, illFrame, useIllIds } from './shared';

const stages = ['Lead', 'Qualified', 'Proposal', 'Won'];
const deals = [
  { y: 82, d: 0, c: '#d8f938' },
  { y: 130, d: 2, c: 'hsl(var(--gnk-fg))' },
  { y: 178, d: 4, c: 'hsl(var(--gnk-muted))' },
];

/** Sales: a pipeline board where deals glide from lead to closed-won. */
export function SalesIllustration({ className = '' }: { className?: string }) {
  const ids = useIllIds('sales');
  return (
    <svg viewBox="0 0 400 280" className={`${illFrame} ${className}`} role="img" aria-label="Sales pipeline illustration">
      <IllDefs ids={ids} />
      {stages.map((s, i) => {
        const x = 16 + i * 94;
        const won = i === stages.length - 1;
        return (
          <g key={s}>
            <rect
              x={x}
              y="28"
              width="86"
              height="210"
              rx="14"
              fill={won ? 'hsl(var(--gnk-accent) / 0.08)' : 'hsl(var(--gnk-card))'}
              stroke={won ? 'hsl(var(--gnk-accent) / 0.5)' : 'hsl(var(--gnk-border))'}
            />
            <text x={x + 12} y="50" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="1.2" fill={won ? '#d8f938' : 'hsl(var(--gnk-muted))'}>
              {s.toUpperCase()}
            </text>
            {[0, 1, 2].map((r) => (
              <rect key={r} x={x + 10} y={68 + r * 48} width="66" height="34" rx="9" fill="hsl(var(--gnk-border))" fillOpacity="0.28" />
            ))}
          </g>
        );
      })}

      {deals.map((d) => (
        <g key={d.y} className="ill-slide" style={{ animationDelay: `${d.d}s`, ['--slide' as string]: '282px' }}>
          <rect x="26" y={d.y - 14} width="66" height="34" rx="9" fill="hsl(var(--gnk-bg-elevated))" stroke={d.c} strokeOpacity="0.8" />
          <circle cx="40" cy={d.y + 3} r="6" fill={d.c} fillOpacity="0.25" stroke={d.c} />
          <rect x="52" y={d.y - 2} width="30" height="4" rx="2" fill="hsl(var(--gnk-fg))" fillOpacity="0.7" />
          <rect x="52" y={d.y + 6} width="20" height="3" rx="1.5" fill="hsl(var(--gnk-muted))" fillOpacity="0.6" />
        </g>
      ))}

      <g transform="translate(16 252)">
        <rect width="368" height="6" rx="3" fill="hsl(var(--gnk-border))" />
        <rect width="368" height="6" rx="3" fill={`url(#${ids.brand})`} className="ill-progress" />
      </g>
    </svg>
  );
}

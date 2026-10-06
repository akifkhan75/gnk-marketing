import { IllDefs, RingNode, illFrame, useIllIds } from './shared';

const outputs = [
  { y: 58, label: 'CRM updated', color: '#d8f938' },
  { y: 140, label: 'Email sequence', color: 'hsl(var(--gnk-fg))' },
  { y: 222, label: 'WhatsApp reply', color: 'hsl(var(--gnk-muted))' },
];

const inPath = 'M112 140 L168 140';
const outPath = (y: number) => `M232 140 C 262 140 262 ${y} 292 ${y}`;

/** Automation: a trigger flows through an AI core and fans out to completed actions. */
export function AutomationIllustration({ className = '' }: { className?: string }) {
  const ids = useIllIds('auto');
  return (
    <svg viewBox="0 0 400 280" className={`${illFrame} ${className}`} role="img" aria-label="Marketing automation workflow illustration">
      <IllDefs ids={ids} />
      <circle cx="200" cy="140" r="120" fill={`url(#${ids.fade})`} />

      {/* Trigger */}
      <g>
        <rect x="14" y="116" width="98" height="48" rx="14" fill="hsl(var(--gnk-card))" stroke="hsl(var(--gnk-border))" />
        <text x="28" y="136" fontSize="8.5" fontFamily="var(--font-mono)" fill="hsl(var(--gnk-muted))" letterSpacing="1">TRIGGER</text>
        <text x="28" y="152" fontSize="11" fontWeight="600" fill="hsl(var(--gnk-fg))" fontFamily="var(--font-inter)">New lead</text>
        <circle cx="98" cy="130" r="3" fill="hsl(var(--gnk-muted))" className="ill-light" />
      </g>

      {/* Connectors */}
      <path d={inPath} stroke={`url(#${ids.brand})`} strokeWidth="2" fill="none" className="ill-dash" />
      {outputs.map((o) => (
        <path key={o.y} d={outPath(o.y)} stroke="hsl(var(--gnk-border))" strokeWidth="2" fill="none" />
      ))}
      {outputs.map((o, i) => (
        <path key={`d${o.y}`} d={outPath(o.y)} stroke={o.color} strokeWidth="2" fill="none" strokeOpacity="0.7" className="ill-dash" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}

      {/* Travelling signals (SMIL — no JS) */}
      <g className="motion-only">
        <circle r="3.5" fill="#fff" filter={`url(#${ids.glow})`}>
          <animateMotion dur="4s" repeatCount="indefinite" path={inPath} keyPoints="0;1;1" keyTimes="0;0.25;1" calcMode="linear" />
        </circle>
        {outputs.map((o, i) => (
          <circle key={o.y} r="3" fill={o.color} filter={`url(#${ids.glow})`}>
            <animateMotion dur="4s" begin={`${0.1 * i}s`} repeatCount="indefinite" path={outPath(o.y)} keyPoints="0;0;1;1" keyTimes="0;0.3;0.6;1" calcMode="linear" />
          </circle>
        ))}
      </g>

      {/* AI core */}
      <g>
        <circle cx="200" cy="140" r="34" fill="hsl(var(--gnk-card))" stroke={`url(#${ids.brand})`} strokeWidth="2" />
        <circle cx="200" cy="140" r="44" fill="none" stroke="#d8f938" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 7" className="origin-center animate-spin-slow [transform-box:fill-box]" />
        <path d="M200 124 L204 136 L216 140 L204 144 L200 156 L196 144 L184 140 L196 136 Z" fill={`url(#${ids.brand})`} filter={`url(#${ids.glow})`} />
        <text x="200" y="198" textAnchor="middle" fontSize="8.5" fontFamily="var(--font-mono)" fill="hsl(var(--gnk-muted))" letterSpacing="1.5">AI ROUTER</text>
      </g>

      {/* Actions */}
      {outputs.map((o, i) => (
        <g key={o.label}>
          <rect x="292" y={o.y - 20} width="100" height="40" rx="12" fill="hsl(var(--gnk-card))" stroke="hsl(var(--gnk-border))" />
          <text x="304" y={o.y + 4} fontSize="10.5" fontWeight="500" fill="hsl(var(--gnk-fg))" fontFamily="var(--font-inter)">{o.label}</text>
          <g className="ill-pop" style={{ animationDelay: `${0.4 + i * 0.35}s` }}>
            <circle cx="392" cy={o.y - 20} r="8" fill={o.color} />
            <path d={`M388 ${o.y - 20} l3 3 l5 -6`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      ))}
      <RingNode x={112} y={140} r={4} color="hsl(var(--gnk-muted))" />
    </svg>
  );
}

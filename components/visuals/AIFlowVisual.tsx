'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

type AIFlowVisualProps = {
  className?: string;
  compact?: boolean;
};

function Station({
  compact,
  reduce,
  hub,
  dropFilterId,
}: {
  compact: boolean;
  reduce: boolean;
  hub?: boolean;
  dropFilterId: string;
}) {
  const R = compact ? 32 : 42;
  return (
    <g>
      <circle r={R + 18} fill="hsl(var(--gnk-accent) / 0.04)" stroke="hsl(var(--gnk-border))" strokeWidth="0.5" strokeOpacity="0.45" />
      <circle r={R + 8} fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.45" strokeOpacity="0.2" strokeDasharray="2 6" />
      <circle r={R} fill="hsl(var(--gnk-bg-elevated) / 0.85)" stroke="hsl(var(--gnk-accent) / 0.35)" strokeWidth="1.05" filter={`url(#${dropFilterId})`} />
      {[0, 45, 90, 135].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * (R - 6);
        const y = Math.sin(rad) * (R - 6);
        return <circle key={deg} cx={x} cy={y} r="2.2" fill="hsl(var(--gnk-accent-2))" opacity="0.35" />;
      })}
      <circle r="7" fill="hsl(var(--gnk-accent-2))" opacity={hub ? 0.85 : 0.55} />
      {hub ? (
        <motion.circle
          r={R + 12}
          fill="none"
          stroke="hsl(var(--gnk-accent))"
          strokeWidth="0.75"
          strokeOpacity="0.4"
          animate={reduce ? undefined : { opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : null}
    </g>
  );
}

/**
 * System flow: layered stations, dual rails, particle train — AI / product sections.
 */
export function AIFlowVisual({ className = '', compact = false }: AIFlowVisualProps) {
  const reduce = reduced(useReducedMotion());
  const id = useVisualIds('aiflow');
  const vb = compact ? '0 0 580 220' : '0 0 760 300';
  const h = compact ? 168 : 240;

  const pathMain = compact
    ? 'M 56 110 C 148 52, 232 52, 290 110 C 348 168, 432 168, 524 110'
    : 'M 72 150 C 188 72, 288 72, 380 150 C 472 228, 572 228, 688 150';

  const pathGhost = compact
    ? 'M 56 118 C 150 62, 230 62, 290 118 C 350 174, 430 174, 524 118'
    : 'M 72 162 C 192 88, 284 88, 380 162 C 476 236, 568 236, 688 162';

  const xs = compact ? [56, 290, 524] : [72, 380, 688];
  const y = compact ? 110 : 150;

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="AI system data flow between nodes">
      <svg viewBox={vb} className="h-auto w-full" style={{ maxHeight: h }} fill="none" shapeRendering="geometricPrecision" aria-hidden>
        <RichSvgDefs id={id} />
        <defs>
          <filter id={id.nodeDrop} x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="hsl(var(--gnk-accent))" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.65" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.35" />

        {xs.map((x, i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <Station compact={compact} reduce={reduce} hub={i === 1} dropFilterId={id.nodeDrop} />
          </g>
        ))}

        <path
          d={pathGhost}
          stroke={`url(#${id.flow2})`}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <motion.path
          d={pathMain}
          stroke={`url(#${id.flow})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeDasharray="10 14"
          className={reduce ? '' : 'animate-ai-flow-dash'}
          filter={`url(#${id.filterSoft})`}
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.75, ease: [0.25, 0.4, 0.25, 1] }}
        />

        <path
          d={pathMain}
          stroke="hsl(var(--gnk-muted))"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="2 16"
          opacity="0.22"
        />

        {!reduce ? (
          <>
            <circle r="4" fill="hsl(var(--gnk-accent-2))" opacity="0.95" filter={`url(#${id.bloom})`}>
              <animateMotion dur="7.2s" repeatCount="indefinite" path={pathMain} />
            </circle>
            <circle r="3" fill="hsl(var(--gnk-accent))" opacity="0.75">
              <animateMotion dur="7.2s" repeatCount="indefinite" path={pathMain} begin="1.25s" />
            </circle>
          </>
        ) : null}
      </svg>
    </div>
  );
}

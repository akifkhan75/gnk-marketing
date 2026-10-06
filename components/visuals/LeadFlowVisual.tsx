'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';

type LeadFlowVisualProps = { className?: string };

const ease = [0.25, 0.4, 0.25, 1] as const;

/* Traffic sources (top row) */
const trafficSources = [
  { x: 78, y: 46, label: 'ORGANIC' },
  { x: 220, y: 46, label: 'PAID ADS' },
  { x: 362, y: 46, label: 'REFERRAL' },
];

/* AI scoring gate (middle) */
const gateX = 220;
const gateY = 148;

/* Inbound paths: traffic → gate */
const pathT0 = 'M 78 68 C 78 102 150 128 204 140';
const pathT1 = 'M 220 68 L 220 132';
const pathT2 = 'M 362 68 C 362 102 290 128 236 140';

/* Gate to qualified output */
const pathGateOut = 'M 220 170 L 220 232';

/* Qualified output splits */
const pathQ0 = 'M 204 248 C 180 260 130 272 102 280';
const pathQ1 = 'M 220 248 L 220 278';
const pathQ2 = 'M 236 248 C 260 260 310 272 338 280';

/** Lead capture and qualification pipeline: traffic → AI gate → qualified routes */
export function LeadFlowVisual({ className = '' }: LeadFlowVisualProps) {
  const reduce = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = !reduce && !isSmall && inView;
  const id = useVisualIds('lead');

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      role="img"
      aria-label="Lead qualification pipeline: organic, paid, and referral traffic filtered by AI into qualified routes"
    >
      <svg
        viewBox="0 0 440 352"
        className="mx-auto h-auto w-full max-w-lg"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />
        <defs>
          <linearGradient id={`${id.flow}-scan`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--gnk-accent-2))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--gnk-accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.5" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.28" />

        {/* ── Traffic source nodes ── */}
        {trafficSources.map((s) => (
          <g key={s.label} transform={`translate(${s.x} ${s.y})`}>
            <circle r="24" fill="hsl(var(--gnk-accent-2)/0.06)" />
            <circle r="18" fill="none" stroke="hsl(var(--gnk-border))" strokeWidth="0.7" strokeDasharray="2 6" strokeOpacity="0.45" />
            <circle r="13" fill="hsl(var(--gnk-bg-elevated)/0.9)" stroke="hsl(var(--gnk-accent-2)/0.38)" strokeWidth="1" />
            <circle r="4.5" fill="hsl(var(--gnk-accent-2))" opacity="0.85" />
            <text
              y="33"
              textAnchor="middle"
              fill="hsl(var(--gnk-muted))"
              style={{ fontSize: 7, fontWeight: 700 }}
              className="font-mono"
              letterSpacing="0.08em"
            >
              {s.label}
            </text>
          </g>
        ))}

        {/* ── Inbound path glows ── */}
        {[pathT0, pathT1, pathT2].map((p, i) => (
          <path key={`tg-${i}`} d={p} stroke={`url(#${id.flow2})`} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
        ))}

        {/* ── Inbound paths draw ── */}
        {[pathT0, pathT1, pathT2].map((p, i) => (
          <motion.path
            key={`tp-${i}`}
            d={p}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={active ? { duration: 0.95, delay: i * 0.08, ease } : undefined}
          />
        ))}

        {/* ── AI Scoring Gate ── */}
        <g transform={`translate(${gateX} ${gateY})`}>
          {/* Gate container */}
          <rect x="-52" y="-22" width="104" height="44" rx="10" fill="hsl(var(--gnk-bg-elevated)/0.9)" stroke="hsl(var(--gnk-accent)/0.4)" strokeWidth="1.15" />
          <rect x="-44" y="-14" width="88" height="28" rx="6" fill="hsl(var(--gnk-accent)/0.06)" />

          {/* Scan line animation */}
          {active && (
            <motion.rect
              x="-44"
              y="-14"
              width="88"
              height="28"
              rx="6"
              fill={`url(#${id.flow}-scan)`}
              animate={{ opacity: [0.15, 0.8, 0.15] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Gate label */}
          <text
            textAnchor="middle"
            fill="hsl(var(--gnk-accent))"
            style={{ fontSize: 8.5, fontWeight: 800 }}
            className="font-mono"
            letterSpacing="0.1em"
            dy="3"
          >
            AI SCORING GATE
          </text>

          {/* Score dots */}
          {[-26, -8, 10, 28].map((dx, i) => (
            <g key={dx} transform={`translate(${dx} -8)`}>
              {active ? (
                <motion.circle
                  r="2.5"
                  fill="hsl(var(--gnk-accent-2))"
                  opacity="0.75"
                  animate={{ opacity: [0.3, 0.95, 0.3] }}
                  transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                />
              ) : (
                <circle r="2.5" fill="hsl(var(--gnk-accent-2))" opacity="0.5" />
              )}
            </g>
          ))}

          {/* Outer pulse ring */}
          {active && (
            <motion.rect
              x="-56"
              y="-26"
              width="112"
              height="52"
              rx="12"
              fill="none"
              stroke="hsl(var(--gnk-accent))"
              strokeWidth="0.7"
              strokeOpacity="0.3"
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </g>

        {/* ── Gate output path ── */}
        <path d={pathGateOut} stroke={`url(#${id.flow2})`} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.65" />
        <motion.path
          d={pathGateOut}
          stroke={`url(#${id.flow})`}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter={`url(#${id.filterSoft})`}
          initial={active ? { pathLength: 0 } : undefined}
          animate={active ? { pathLength: 1 } : undefined}
          transition={active ? { duration: 0.8, delay: 0.22, ease } : undefined}
        />

        {/* ── Qualified hub ── */}
        <g transform={`translate(${gateX} 240)`}>
          <circle r="32" fill="hsl(var(--gnk-accent)/0.08)" stroke="hsl(var(--gnk-accent-2)/0.25)" strokeWidth="0.7" />
          <circle r="22" fill="hsl(var(--gnk-bg-elevated)/0.92)" stroke="hsl(var(--gnk-accent-2)/0.45)" strokeWidth="1.1" />
          <circle r="7" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`} />
          {/* Label above center dot and above all path start-points (y≥248) */}
          <text
            y="-14"
            textAnchor="middle"
            fill="hsl(var(--gnk-muted))"
            style={{ fontSize: 7, fontWeight: 700 }}
            className="font-mono"
            letterSpacing="0.08em"
          >
            SQL READY
          </text>
        </g>

        {/* ── Qualified output path glows ── */}
        {[pathQ0, pathQ1, pathQ2].map((p, i) => (
          <path key={`qg-${i}`} d={p} stroke={`url(#${id.flow2})`} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.55" />
        ))}

        {/* ── Qualified output paths draw ── */}
        {[pathQ0, pathQ1, pathQ2].map((p, i) => (
          <motion.path
            key={`qp-${i}`}
            d={p}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={active ? { pathLength: 0 } : undefined}
            animate={active ? { pathLength: 1 } : undefined}
            transition={active ? { duration: 0.92, delay: 0.35 + i * 0.08, ease } : undefined}
          />
        ))}

        {/* ── Qualified output nodes ── */}
        {[
          { x: 102, y: 290, label: 'SALES CRM' },
          { x: 220, y: 290, label: 'NURTURE' },
          { x: 338, y: 290, label: 'BOOK DEMO' },
        ].map((n) => (
          <g key={n.label} transform={`translate(${n.x} ${n.y})`}>
            <circle r="20" fill="hsl(var(--gnk-accent)/0.07)" />
            <circle r="14" fill="hsl(var(--gnk-bg-elevated)/0.88)" stroke="hsl(var(--gnk-accent)/0.38)" strokeWidth="0.9" />
            <circle r="4.5" fill="hsl(var(--gnk-accent))" opacity="0.82" />
            <text
              y="29"
              textAnchor="middle"
              fill="hsl(var(--gnk-muted))"
              style={{ fontSize: 7, fontWeight: 700 }}
              className="font-mono"
              letterSpacing="0.08em"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* ── Particles (inbound) ── */}
        {active && (
          <>
            <circle r="3.2" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`}>
              <animateMotion dur="4s" repeatCount="indefinite" path={pathT0} />
            </circle>
            <circle r="3.2" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`}>
              <animateMotion dur="3.8s" repeatCount="indefinite" path={pathT1} begin="0.5s" />
            </circle>
            <circle r="3.2" fill="hsl(var(--gnk-accent-2))" opacity="0.88" filter={`url(#${id.bloom})`}>
              <animateMotion dur="4.2s" repeatCount="indefinite" path={pathT2} begin="1s" />
            </circle>
            {/* Gate → SQL */}
            <circle r="3.5" fill="hsl(var(--gnk-accent))" opacity="0.9" filter={`url(#${id.bloom})`}>
              <animateMotion dur="2.6s" repeatCount="indefinite" path={pathGateOut} />
            </circle>
            {/* SQL → outputs */}
            <circle r="2.8" fill="hsl(var(--gnk-accent))" opacity="0.78">
              <animateMotion dur="3.2s" repeatCount="indefinite" path={pathQ0} begin="0.2s" />
            </circle>
            <circle r="2.8" fill="hsl(var(--gnk-accent))" opacity="0.78">
              <animateMotion dur="3s" repeatCount="indefinite" path={pathQ1} begin="0.7s" />
            </circle>
            <circle r="2.8" fill="hsl(var(--gnk-accent))" opacity="0.78">
              <animateMotion dur="3.4s" repeatCount="indefinite" path={pathQ2} begin="1.2s" />
            </circle>
          </>
        )}

        {/* ── Bottom label ── */}
        <text
          x="220"
          y="344"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 7.5, fontWeight: 600 }}
          className="font-mono"
          letterSpacing="0.12em"
          opacity="0.6"
        >
          RAW TRAFFIC · AI GATE · SQL-READY
        </text>
      </svg>
    </div>
  );
}

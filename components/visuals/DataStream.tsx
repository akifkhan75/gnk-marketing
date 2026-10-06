'use client';

import { useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useIsSmallScreen, useVisualIds } from './visual-utils';

type DataStreamProps = { className?: string };

const lanes = [
  { y: 28,  label: 'SEARCH', color: 'hsl(var(--gnk-accent-2))', dur: ['3.4s', '5.2s', '7.1s'], begins: ['0s', '1.1s', '2.3s'] },
  { y: 58,  label: 'SOCIAL', color: 'hsl(var(--gnk-accent))',   dur: ['4.1s', '6s',   '5.5s'], begins: ['0.4s', '1.8s', '3s'] },
  { y: 88,  label: 'EMAIL',  color: 'hsl(var(--gnk-accent-2))', dur: ['5s',   '3.8s', '6.4s'], begins: ['0.8s', '2.2s', '0.5s'] },
  { y: 118, label: 'ADS',    color: 'hsl(var(--gnk-accent))',   dur: ['3.6s', '5.6s', '4.8s'], begins: ['1.2s', '0.6s', '2.6s'] },
];

const streamPath = (y: number) => `M 72 ${y} L 476 ${y}`;

/** Continuous data particle streams across multiple signal lanes */
export function DataStream({ className = '' }: DataStreamProps) {
  const reduce = reduced(useReducedMotion());
  const isSmall = useIsSmallScreen();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: '-80px', once: true });
  const active = !reduce && !isSmall && inView;
  const id = useVisualIds('ds');

  return (
    <div
      className={`relative w-full ${className}`}
      role="img"
      aria-label="Live data streams: search, social, email, and ads signals flowing in real time"
    >
      <svg
        ref={containerRef}
        viewBox="0 0 548 148"
        className="mx-auto h-auto w-full max-w-2xl"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />

        {/* Panel */}
        <rect x="2" y="2" width="544" height="144" rx="10" fill="hsl(var(--gnk-bg-elevated)/0.5)" stroke="hsl(var(--gnk-border))" strokeWidth="0.7" />
        <rect x="2" y="2" width="544" height="18" rx="10" fill="hsl(var(--gnk-accent)/0.05)" />
        <rect x="2" y="10" width="544" height="10" fill="hsl(var(--gnk-accent)/0.05)" />

        {/* Header */}
        <text x="274" y="15" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7, fontWeight: 600 }} className="font-mono" letterSpacing="0.1em" opacity="0.7">
          SIGNAL INGESTION · REAL-TIME PIPELINE
        </text>

        {/* Lanes */}
        {lanes.map((lane) => {
          const path = streamPath(lane.y);
          return (
            <g key={lane.label}>
              {/* Lane label */}
              <text
                x="66"
                y={lane.y + 4}
                textAnchor="end"
                fill="hsl(var(--gnk-muted))"
                style={{ fontSize: 7, fontWeight: 700 }}
                className="font-mono"
                letterSpacing="0.07em"
                opacity="0.65"
              >
                {lane.label}
              </text>

              {/* Lane source dot */}
              <circle cx="72" cy={lane.y} r="4" fill={lane.color} opacity="0.7" />

              {/* Lane rail */}
              <line
                x1="72" y1={lane.y}
                x2="476" y2={lane.y}
                stroke="hsl(var(--gnk-border))"
                strokeWidth="0.6"
                strokeOpacity="0.4"
              />

              {/* Lane glow track */}
              <line
                x1="72" y1={lane.y}
                x2="476" y2={lane.y}
                stroke={lane.color}
                strokeWidth="1.4"
                strokeOpacity="0.15"
              />

              {/* Lane end indicator */}
              <rect
                x="476" y={lane.y - 8}
                width="52" height="16"
                rx="4"
                fill="hsl(var(--gnk-bg-elevated)/0.85)"
                stroke="hsl(var(--gnk-border))"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              <text
                x="502" y={lane.y + 4}
                textAnchor="middle"
                fill={lane.color}
                style={{ fontSize: 6.5, fontWeight: 700 }}
                className="font-mono"
                letterSpacing="0.05em"
                opacity="0.8"
              >
                INGEST
              </text>

              {/* Particles */}
              {active &&
                lane.dur.map((dur, pi) => (
                  <circle
                    key={pi}
                    r={pi === 0 ? 3.2 : pi === 1 ? 2.4 : 1.8}
                    fill={lane.color}
                    opacity={pi === 0 ? 0.9 : pi === 1 ? 0.65 : 0.4}
                  >
                    <animateMotion dur={dur} repeatCount="indefinite" path={path} begin={lane.begins[pi]} />
                  </circle>
                ))}
            </g>
          );
        })}

        {/* Vertical time markers */}
        {[140, 220, 308, 390].map((x) => (
          <line key={x} x1={x} y1="22" x2={x} y2="136" stroke="hsl(var(--gnk-border))" strokeWidth="0.35" strokeOpacity="0.25" strokeDasharray="2 6" />
        ))}
      </svg>
    </div>
  );
}

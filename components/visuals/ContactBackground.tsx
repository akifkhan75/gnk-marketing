'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useVisualIds } from './visual-utils';

/* Fixed floating node positions */
const floatNodes = [
  { cx: '8%',  cy: '22%', r: 3.2, dur: 7.2,  delay: 0 },
  { cx: '18%', cy: '68%', r: 2.4, dur: 9.1,  delay: 1.4 },
  { cx: '28%', cy: '38%', r: 4,   dur: 8.4,  delay: 0.8 },
  { cx: '42%', cy: '82%', r: 2.8, dur: 10.2, delay: 2.1 },
  { cx: '58%', cy: '15%', r: 3.5, dur: 6.8,  delay: 0.3 },
  { cx: '68%', cy: '55%', r: 2.2, dur: 8.8,  delay: 1.7 },
  { cx: '78%', cy: '30%', r: 3.8, dur: 7.6,  delay: 1.1 },
  { cx: '88%', cy: '72%', r: 2.6, dur: 9.4,  delay: 2.5 },
  { cx: '92%', cy: '20%', r: 2,   dur: 11,   delay: 0.6 },
  { cx: '12%', cy: '48%', r: 2.8, dur: 8,    delay: 1.9 },
];

/** Minimal floating-node background for Contact page */
export function ContactBackground() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Radial gradient atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_30%,hsl(var(--gnk-accent)/0.06),transparent_55%),radial-gradient(ellipse_50%_35%_at_25%_70%,hsl(var(--gnk-accent-2)/0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_55%_35%_at_72%_28%,rgb(139_92_246/0.07),transparent_55%),radial-gradient(ellipse_45%_30%_at_22%_72%,rgb(34_211_238/0.05),transparent_50%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Subtle grid overlay */}
        <defs>
          <pattern id="contact-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="hsl(var(--gnk-border))" strokeOpacity="0.25" strokeWidth="0.15" />
          </pattern>
          <radialGradient id="contact-fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="75%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
          <mask id="contact-mask">
            <rect width="100" height="100" fill="white" />
            <rect width="100" height="100" fill="url(#contact-fade)" />
          </mask>
        </defs>

        <rect width="100" height="100" fill="url(#contact-grid)" mask="url(#contact-mask)" opacity="0.6" />

        {/* Floating nodes */}
        {floatNodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r * 0.24}
            fill={i % 2 === 0 ? 'hsl(var(--gnk-accent))' : 'hsl(var(--gnk-accent-2))'}
            opacity={0.0}
            animate={{
              opacity: [0.08, 0.28, 0.08],
              y: [0, -2.5, 0],
            }}
            transition={{
              duration: n.dur,
              delay: n.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Thin connector lines between adjacent nodes */}
        {floatNodes.slice(0, -2).map((n, i) => {
          const next = floatNodes[i + 2];
          return (
            <line
              key={`cl-${i}`}
              x1={n.cx}
              y1={n.cy}
              x2={next.cx}
              y2={next.cy}
              stroke="hsl(var(--gnk-accent))"
              strokeWidth="0.08"
              strokeOpacity="0.12"
            />
          );
        })}
      </svg>
    </div>
  );
}

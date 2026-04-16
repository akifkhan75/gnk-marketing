'use client';

import { motion, useReducedMotion } from 'framer-motion';

/** Abstract “system” illustration — vector only, no raster. */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square max-w-[min(100%,420px)] sm:max-w-none">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/25 via-transparent to-cyan-500/20 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative z-[1] h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="hv-arc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(139 92 246)" />
            <stop offset="100%" stopColor="rgb(34 211 238)" />
          </linearGradient>
        </defs>
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 72, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="200"
            cy="200"
            r="168"
            fill="none"
            stroke="url(#hv-arc)"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="10 12"
          />
        </motion.g>
        <circle cx="200" cy="200" r="56" fill="rgb(139 92 246 / 0.15)" stroke="rgb(139 92 246 / 0.45)" strokeWidth="1" />
        <circle cx="200" cy="200" r="28" fill="rgb(34 211 238 / 0.22)" stroke="rgb(34 211 238 / 0.55)" strokeWidth="1" />
        <motion.g
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[0, 72, 144, 216, 288].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 200 + Math.cos(rad - Math.PI / 2) * 120;
            const y = 200 + Math.sin(rad - Math.PI / 2) * 120;
            return (
              <line
                key={deg}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="rgb(148 163 184 / 0.35)"
                strokeWidth="1"
                opacity={0.4 + i * 0.1}
              />
            );
          })}
          {[0, 72, 144, 216, 288].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 200 + Math.cos(rad - Math.PI / 2) * 120;
            const y = 200 + Math.sin(rad - Math.PI / 2) * 120;
            return <circle key={`n-${deg}`} cx={x} cy={y} r="6" fill="rgb(139 92 246)" opacity={0.65 + i * 0.05} />;
          })}
        </motion.g>
      </svg>
    </div>
  );
}

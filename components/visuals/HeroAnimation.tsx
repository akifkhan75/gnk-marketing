'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from '@/components/visuals/rich-svg-defs';
import { reduced, useVisualIds } from '@/components/visuals/visual-utils';

const pathInL = 'M 108 298 C 188 215, 268 215, 368 278';
const pathInR = 'M 732 298 C 652 215, 572 215, 472 278';
const pathOut = 'M 420 348 C 420 412, 420 448, 420 518';

/**
 * Premium hero: layered mesh, dual ingress, orbital synthesis, multi-egress lift.
 */
export function HeroAnimation({
  className = '',
  decorative = false,
  showBackdrop = true,
}: {
  className?: string;
  /** When used as a background layer; disables role/label. */
  decorative?: boolean;
  /** Controls the external radial backdrop layer. */
  showBackdrop?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const reduce = reduced(reduceMotion);
  const id = useVisualIds('hero');

  const satAngles = [0, 60, 120, 180, 240, 300];

  return (
    <div
      className={`relative mx-auto w-full max-w-[min(100%,760px)] lg:max-w-none ${className}`}
      {...(decorative
        ? { 'aria-hidden': true }
        : { role: 'img', 'aria-label': 'Animation showing traffic flowing into an AI core and converting to revenue' })}
    >
      {showBackdrop ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_42%,hsl(var(--gnk-accent)/0.1),transparent_62%)] dark:bg-[radial-gradient(ellipse_68%_52%_at_50%_40%,rgb(139_92_246/0.14),transparent_65%)]" />
      ) : null}

      <svg
        viewBox="0 0 840 560"
        className="relative z-[1] h-auto w-full"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />

        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.85" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.45" />

        {/* Distant orbit guides */}
        <g opacity="0.35">
          <ellipse
            cx="420"
            cy="285"
            rx="200"
            ry="118"
            stroke="hsl(var(--gnk-accent-2))"
            strokeWidth="0.6"
            strokeDasharray="4 14"
            fill="none"
            transform="rotate(-12 420 285)"
          />
          <ellipse
            cx="420"
            cy="285"
            rx="168"
            ry="98"
            stroke="hsl(var(--gnk-accent))"
            strokeWidth="0.5"
            strokeDasharray="2 10"
            fill="none"
            transform="rotate(8 420 285)"
          />
        </g>

        {/* Ingress constellation */}
        <g opacity="0.9">
          {[
            [84, 248],
            [102, 278],
            [84, 308],
            [66, 278],
            [96, 322],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 1 ? 5.5 : 4.2} fill="hsl(var(--gnk-accent-2))" opacity={0.28 + i * 0.1} />
          ))}
          <path
            d="M 66 278 L 96 248 M 84 248 L 102 278 M 102 278 L 84 308"
            stroke="hsl(var(--gnk-accent-2))"
            strokeWidth="0.55"
            strokeOpacity="0.25"
          />
        </g>
        <text
          x="92"
          y="382"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 10, fontWeight: 600 }}
          className="font-mono uppercase tracking-wider"
        >
          Traffic
        </text>

        <g transform="translate(748 278)" opacity="0.85">
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={i * 9 - 13} cy={Math.sin(i) * 6} r="3.8" fill="hsl(var(--gnk-accent))" opacity={0.2 + i * 0.14} />
          ))}
        </g>
        <text
          x="748"
          y="382"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 10, fontWeight: 600 }}
          className="font-mono uppercase tracking-wider"
        >
          Signal
        </text>

        {/* Underglow paths */}
        <path
          d={pathInL}
          stroke={`url(#${id.flow2})`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d={pathInR}
          stroke={`url(#${id.flow2})`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        <motion.path
          d={pathInL}
          stroke={`url(#${id.flow})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          filter={`url(#${id.filterSoft})`}
          initial={reduce ? undefined : { pathLength: 0, opacity: 0.45 }}
          animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.45, ease: [0.25, 0.4, 0.25, 1] }}
        />
        <motion.path
          d={pathInR}
          stroke={`url(#${id.flow})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          filter={`url(#${id.filterSoft})`}
          initial={reduce ? undefined : { pathLength: 0, opacity: 0.45 }}
          animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.45, delay: 0.14, ease: [0.25, 0.4, 0.25, 1] }}
        />

        {!reduce ? (
          <>
            <circle r="4.5" fill="hsl(var(--gnk-accent-2))" opacity="0.95" filter={`url(#${id.bloom})`}>
              <animateMotion dur="4.8s" repeatCount="indefinite" path={pathInL} />
            </circle>
            <circle r="3.8" fill="hsl(var(--gnk-accent))" opacity="0.88">
              <animateMotion dur="4.8s" repeatCount="indefinite" path={pathInR} begin="0.75s" />
            </circle>
            <circle r="2.5" fill="hsl(var(--gnk-fg))" opacity="0.35">
              <animateMotion dur="4.8s" repeatCount="indefinite" path={pathInL} begin="1.1s" />
            </circle>
          </>
        ) : null}

        {/* AI core stack */}
        <g transform="translate(420 285)">
          <circle r="92" fill={`url(#${id.core})`} opacity="0.55" filter={`url(#${id.bloom})`} />
          <circle r="78" fill="none" stroke="hsl(var(--gnk-accent))" strokeWidth="0.4" strokeOpacity="0.12" />

          {!reduce ? (
            <>
              <circle r="118" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.65" strokeDasharray="3 10" strokeOpacity="0.38">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="52s" repeatCount="indefinite" />
              </circle>
              <circle r="86" fill="none" stroke="hsl(var(--gnk-accent))" strokeWidth="0.55" strokeDasharray="2 8" strokeOpacity="0.22">
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="38s" repeatCount="indefinite" />
              </circle>
            </>
          ) : (
            <circle r="86" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.55" strokeDasharray="3 10" strokeOpacity="0.22" />
          )}

          <motion.g
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
          >
            <polygon
              points="-44,-26 0,-52 44,-26 44,26 0,52 -44,26"
              fill="hsl(var(--gnk-accent) / 0.1)"
              stroke="hsl(var(--gnk-accent) / 0.45)"
              strokeWidth="1.15"
            />
          </motion.g>

          {satAngles.map((deg, i) => {
            const r = 56;
            const rad = (deg * Math.PI) / 180;
            const x = Math.cos(rad) * r;
            const y = Math.sin(rad) * r;
            return (
              <g key={deg}>
                <line x1="0" y1="0" x2={x} y2={y} stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.45" strokeOpacity="0.22" />
                <circle cx={x} cy={y} r="3.2" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.85" opacity="0.9" />
              </g>
            );
          })}

          {!reduce ? (
            <motion.circle
              r="58"
              fill="none"
              stroke="hsl(var(--gnk-accent-2))"
              strokeWidth="0.7"
              strokeOpacity="0.45"
              animate={{ opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          ) : (
            <circle r="58" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.7" strokeOpacity="0.28" />
          )}

          <circle r="14" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent))" strokeWidth="1.65" filter={`url(#${id.filterSoft})`} />
          <path d="M-18 0 H18 M0 -18 V18" stroke="hsl(var(--gnk-accent-2))" strokeWidth="1.05" strokeOpacity="0.6" />
        </g>

        <text
          x="420"
          y="382"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 10, fontWeight: 600 }}
          className="font-mono uppercase tracking-wider"
        >
          AI core
        </text>

        <path d={pathOut} stroke={`url(#${id.flow2})`} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.75" />
        <motion.path
          d={pathOut}
          stroke={`url(#${id.flow})`}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeDasharray="9 14"
          className={reduce ? '' : 'animate-ai-flow-dash'}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 0.92 }}
          transition={{ delay: 0.55, duration: 0.55 }}
        />
        {!reduce ? (
          <>
            <circle r="4" fill="hsl(var(--gnk-accent-2))" filter={`url(#${id.bloom})`}>
              <animateMotion dur="3.4s" repeatCount="indefinite" path={pathOut} />
            </circle>
            <circle r="2.4" fill="hsl(var(--gnk-fg))" opacity="0.4">
              <animateMotion dur="3.4s" repeatCount="indefinite" path={pathOut} begin="0.5s" />
            </circle>
          </>
        ) : null}

        {/* Revenue motif — settlement node + receipts (more \"real\" than an arrow chart) */}
        <g transform="translate(420 538)">
          <rect x="-130" y="-54" width="260" height="70" rx="14" fill="hsl(var(--gnk-bg-elevated) / 0.28)" stroke="hsl(var(--gnk-border))" strokeWidth="0.7" opacity="0.9" />
          <rect x="-122" y="-46" width="244" height="54" rx="11" fill="hsl(var(--gnk-accent) / 0.05)" opacity="0.95" />
          <path
            d="M-92 -10 C-62 -28 -36 -30 -8 -24 C18 -18 48 -24 84 -40"
            stroke={`url(#${id.flow})`}
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            opacity="0.95"
          />
          <path
            d="M-92 -10 C-62 -28 -36 -30 -8 -24 C18 -18 48 -24 84 -40"
            stroke={`url(#${id.flow2})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
          <g transform="translate(104 -26)">
            <circle r="16" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2))" strokeWidth="1.25" filter={`url(#${id.bloom})`} />
            <path d="M-5 0 H5 M0 -5 V5" stroke="hsl(var(--gnk-accent))" strokeWidth="1.1" strokeOpacity="0.65" />
          </g>
          {[[-114, -26], [-108, -6], [-100, -40]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 1 ? 3.6 : 3.1} fill="hsl(var(--gnk-accent-2))" opacity={0.35 + i * 0.12} />
          ))}
          <path d="M-38 -40 H-10 M-38 -28 H 6 M-38 -16 H 22" stroke="hsl(var(--gnk-border))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
        </g>
        <text
          x="420"
          y="548"
          textAnchor="middle"
          fill="hsl(var(--gnk-muted))"
          style={{ fontSize: 10, fontWeight: 600 }}
          className="font-mono uppercase tracking-wider"
        >
          Revenue
        </text>
      </svg>
    </div>
  );
}

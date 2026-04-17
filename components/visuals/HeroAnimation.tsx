'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RichSvgDefs } from './rich-svg-defs';
import { reduced, useVisualIds } from './visual-utils';

/* ─── Path definitions ───────────────────────────────────────────── */
const pathIn0 = 'M 114 104 C 220 104 318 178 390 224';
const pathIn1 = 'M 114 196 C 222 196 318 212 390 232';
const pathIn2 = 'M 114 288 C 222 288 318 260 390 246';
const pathIn3 = 'M 114 376 C 220 376 316 306 390 254';

const pathOut0 = 'M 450 224 C 544 202 650 162 724 144';
const pathOut1 = 'M 450 240 C 544 240 650 240 724 240';
const pathOut2 = 'M 450 256 C 544 272 650 316 724 336';

const sources = [
  { y: 104, label: 'WEB TRAFFIC', path: pathIn0, dur: '6s', delay: '0s', delay2: '2.1s' },
  { y: 196, label: 'SEARCH INTENT', path: pathIn1, dur: '5.6s', delay: '0.4s', delay2: '2.5s' },
  { y: 288, label: 'SOCIAL SIGNALS', path: pathIn2, dur: '6.4s', delay: '0.8s', delay2: '2.9s' },
  { y: 376, label: 'CRM / EMAIL', path: pathIn3, dur: '5.8s', delay: '1.2s', delay2: '3.3s' },
];

const outputs = [
  { y: 144, label: 'QUALIFIED LEADS', path: pathOut0, dur: '4.8s', delay: '0s' },
  { y: 240, label: 'PIPELINE VALUE', path: pathOut1, dur: '4.4s', delay: '0.35s' },
  { y: 336, label: 'REVENUE', path: pathOut2, dur: '5.2s', delay: '0.7s' },
];

const satAngles = [0, 60, 120, 180, 240, 300];
const ease = [0.25, 0.4, 0.25, 1] as const;

/* ─── Source node ────────────────────────────────────────────────── */
function SourceNode({ y, label, reduce, bloomId }: { y: number; label: string; reduce: boolean; bloomId: string }) {
  return (
    <g transform={`translate(80 ${y})`}>
      <circle r="32" fill="hsl(var(--gnk-accent-2)/0.07)" />
      <circle r="24" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.7" strokeDasharray="2.5 6" strokeOpacity="0.3" />
      <circle r="17" fill="hsl(var(--gnk-bg-elevated)/0.92)" stroke="hsl(var(--gnk-accent-2)/0.45)" strokeWidth="1.15" />
      {reduce ? null : (
        <motion.circle
          r="22"
          fill="none"
          stroke="hsl(var(--gnk-accent-2))"
          strokeWidth="0.6"
          strokeOpacity="0.22"
          animate={{ opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <circle r="5" fill="hsl(var(--gnk-accent-2))" opacity="0.9" filter={`url(#${bloomId})`} />
      <text
        y="36"
        textAnchor="middle"
        fill="hsl(var(--gnk-muted))"
        style={{ fontSize: 7.5, fontWeight: 700 }}
        className="font-mono"
        letterSpacing="0.08em"
      >
        {label}
      </text>
    </g>
  );
}

/* ─── Output node ────────────────────────────────────────────────── */
function OutputNode({ y, label, reduce, bloomId }: { y: number; label: string; reduce: boolean; bloomId: string }) {
  return (
    <g transform={`translate(758 ${y})`}>
      <circle r="30" fill="hsl(var(--gnk-accent)/0.07)" />
      <circle r="22" fill="none" stroke="hsl(var(--gnk-accent))" strokeWidth="0.7" strokeDasharray="2.5 6" strokeOpacity="0.3" />
      <circle r="15" fill="hsl(var(--gnk-bg-elevated)/0.92)" stroke="hsl(var(--gnk-accent)/0.45)" strokeWidth="1.15" />
      {reduce ? null : (
        <motion.circle
          r="20"
          fill="none"
          stroke="hsl(var(--gnk-accent))"
          strokeWidth="0.6"
          strokeOpacity="0.22"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <circle r="4.5" fill="hsl(var(--gnk-accent))" opacity="0.9" filter={`url(#${bloomId})`} />
      <text
        y="33"
        textAnchor="middle"
        fill="hsl(var(--gnk-muted))"
        style={{ fontSize: 7.5, fontWeight: 700 }}
        className="font-mono"
        letterSpacing="0.08em"
      >
        {label}
      </text>
    </g>
  );
}

/* ─── Main component ─────────────────────────────────────────────── */
export function HeroAnimation({
  className = '',
  decorative = false,
  showBackdrop = true,
}: {
  className?: string;
  decorative?: boolean;
  showBackdrop?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const reduce = reduced(reduceMotion);
  const id = useVisualIds('hero');

  return (
    <div
      className={`relative mx-auto w-full max-w-[min(100%,800px)] lg:max-w-none ${className}`}
      {...(decorative
        ? { 'aria-hidden': true }
        : {
            role: 'img',
            'aria-label': 'AI system: traffic sources flow into an AI processing core and emerge as qualified leads, pipeline value, and revenue',
          })}
    >
      {showBackdrop && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_55%_at_50%_45%,hsl(var(--gnk-accent)/0.09),transparent_60%)] dark:bg-[radial-gradient(ellipse_65%_52%_at_50%_42%,rgb(139_92_246/0.13),transparent_65%)]" />
      )}

      <svg
        viewBox="0 0 838 480"
        className="relative z-[1] h-auto w-full"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <RichSvgDefs id={id} />

        {/* Background mesh */}
        <rect width="100%" height="100%" fill={`url(#${id.flow}-hex)`} opacity="0.7" />
        <rect width="100%" height="100%" fill={`url(#${id.flow}-grid)`} opacity="0.38" />

        {/* AI Core backdrop glow */}
        <ellipse cx="419" cy="240" rx="130" ry="120" fill={`url(#${id.core})`} opacity="0.35" filter={`url(#${id.bloom})`} />

        {/* ── Input path glows (underglow) ── */}
        {sources.map((s, i) => (
          <path
            key={`ig-${i}`}
            d={s.path}
            stroke={`url(#${id.flow2})`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />
        ))}

        {/* ── Input paths (draw animation) ── */}
        {sources.map((s, i) => (
          <motion.path
            key={`ip-${i}`}
            d={s.path}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={reduce ? undefined : { pathLength: 0, opacity: 0.5 }}
            animate={reduce ? undefined : { pathLength: 1, opacity: 0.95 }}
            transition={{ duration: 1.4, delay: i * 0.1, ease }}
          />
        ))}

        {/* ── Output path glows ── */}
        {outputs.map((o, i) => (
          <path
            key={`og-${i}`}
            d={o.path}
            stroke={`url(#${id.flow2})`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
        ))}

        {/* ── Output paths (draw animation) ── */}
        {outputs.map((o, i) => (
          <motion.path
            key={`op-${i}`}
            d={o.path}
            stroke={`url(#${id.flow})`}
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${id.filterSoft})`}
            initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduce ? undefined : { pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 1.35, delay: 0.58 + i * 0.1, ease }}
          />
        ))}

        {/* ── Orbital rings ── */}
        {reduce ? (
          <>
            <circle cx="419" cy="240" r="100" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.6" strokeDasharray="3 12" strokeOpacity="0.3" />
            <circle cx="419" cy="240" r="82" fill="none" stroke="hsl(var(--gnk-accent))" strokeWidth="0.5" strokeDasharray="2 8" strokeOpacity="0.2" />
          </>
        ) : (
          <>
            <g transform="translate(419 240)">
              <circle r="100" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.65" strokeDasharray="3.5 14" strokeOpacity="0.38">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="50s" repeatCount="indefinite" />
              </circle>
            </g>
            <g transform="translate(419 240)">
              <circle r="82" fill="none" stroke="hsl(var(--gnk-accent))" strokeWidth="0.5" strokeDasharray="2 9" strokeOpacity="0.24">
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="36s" repeatCount="indefinite" />
              </circle>
            </g>
          </>
        )}

        {/* ── AI Core ── */}
        <g transform="translate(419 240)">
          {/* Core body */}
          <circle r="66" fill="hsl(var(--gnk-bg-elevated)/0.82)" stroke="hsl(var(--gnk-accent)/0.22)" strokeWidth="0.8" />

          {/* Rotating hexagon */}
          <motion.g
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <polygon
              points="-46,-27 0,-54 46,-27 46,27 0,54 -46,27"
              fill="hsl(var(--gnk-accent)/0.07)"
              stroke="hsl(var(--gnk-accent)/0.38)"
              strokeWidth="1"
            />
          </motion.g>

          {/* Satellite nodes on orbit r=82 */}
          {satAngles.map((deg) => {
            const r = 82;
            const rad = (deg * Math.PI) / 180;
            const sx = Math.cos(rad) * r;
            const sy = Math.sin(rad) * r;
            return (
              <g key={deg} transform={`translate(${sx} ${sy})`}>
                <line x1={-sx * 0.8} y1={-sy * 0.8} x2="0" y2="0" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.4" strokeOpacity="0.18" />
                <circle r="4.5" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.85" opacity="0.95" />
                <circle r="1.8" fill="hsl(var(--gnk-accent-2))" opacity="0.75" />
              </g>
            );
          })}

          {/* Inner processing ring */}
          <circle r="54" fill="none" stroke="hsl(var(--gnk-accent)/0.18)" strokeWidth="0.7" />

          {/* Pulsing ring */}
          {reduce ? (
            <circle r="58" fill="none" stroke="hsl(var(--gnk-accent-2))" strokeWidth="0.6" strokeOpacity="0.2" />
          ) : (
            <motion.circle
              r="58"
              fill="none"
              stroke="hsl(var(--gnk-accent-2))"
              strokeWidth="0.7"
              strokeOpacity="0.4"
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Core hub */}
          <circle r="18" fill="hsl(var(--gnk-bg-elevated))" stroke="hsl(var(--gnk-accent))" strokeWidth="1.55" filter={`url(#${id.filterSoft})`} />

          {/* Crosshair */}
          <path d="M-22 0 H22 M0 -22 V22" stroke="hsl(var(--gnk-accent-2))" strokeWidth="1" strokeOpacity="0.55" />

          {/* Center glow dot */}
          <circle r="5" fill="hsl(var(--gnk-accent))" opacity="0.9" filter={`url(#${id.bloom})`} />

          {/* Label */}
          <text
            y="90"
            textAnchor="middle"
            fill="hsl(var(--gnk-muted))"
            style={{ fontSize: 8, fontWeight: 700 }}
            className="font-mono"
            letterSpacing="0.1em"
          >
            AI PROCESSING CORE
          </text>
        </g>

        {/* ── Source nodes ── */}
        {sources.map((s) => (
          <SourceNode key={s.label} y={s.y} label={s.label} reduce={reduce} bloomId={id.bloom} />
        ))}

        {/* ── Output nodes ── */}
        {outputs.map((o) => (
          <OutputNode key={o.label} y={o.y} label={o.label} reduce={reduce} bloomId={id.bloom} />
        ))}

        {/* ── Input particles ── */}
        {!reduce && sources.flatMap((s) => [
          <circle key={`${s.label}-p1`} r="3.8" fill="hsl(var(--gnk-accent-2))" opacity="0.92" filter={`url(#${id.bloom})`}>
            <animateMotion dur={s.dur} repeatCount="indefinite" path={s.path} begin={s.delay} />
          </circle>,
          <circle key={`${s.label}-p2`} r="2.6" fill="hsl(var(--gnk-accent))" opacity="0.7">
            <animateMotion dur={s.dur} repeatCount="indefinite" path={s.path} begin={s.delay2} />
          </circle>,
        ])}

        {/* ── Output particles ── */}
        {!reduce && outputs.flatMap((o) => [
          <circle key={`${o.label}-p1`} r="3.5" fill="hsl(var(--gnk-accent))" opacity="0.88" filter={`url(#${id.bloom})`}>
            <animateMotion dur={o.dur} repeatCount="indefinite" path={o.path} begin={o.delay} />
          </circle>,
          <circle key={`${o.label}-p2`} r="2.2" fill="hsl(var(--gnk-fg))" opacity="0.35">
            <animateMotion dur={o.dur} repeatCount="indefinite" path={o.path} begin={`${parseFloat(o.delay) + 1.8}s`} />
          </circle>,
        ])}

        {/* ── Divider lines ── */}
        <line x1="148" y1="48" x2="148" y2="432" stroke="hsl(var(--gnk-border))" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 8" />
        <line x1="690" y1="48" x2="690" y2="432" stroke="hsl(var(--gnk-border))" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 8" />

        {/* ── Section labels ── */}
        <text x="80" y="462" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7.5, fontWeight: 700 }} className="font-mono" letterSpacing="0.1em" opacity="0.6">
          SIGNAL IN
        </text>
        <text x="419" y="462" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7.5, fontWeight: 700 }} className="font-mono" letterSpacing="0.1em" opacity="0.6">
          MODEL LAYER
        </text>
        <text x="758" y="462" textAnchor="middle" fill="hsl(var(--gnk-muted))" style={{ fontSize: 7.5, fontWeight: 700 }} className="font-mono" letterSpacing="0.1em" opacity="0.6">
          REVENUE OUT
        </text>
      </svg>
    </div>
  );
}

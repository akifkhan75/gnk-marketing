import { BrandMark } from '@/components/brand/BrandMark';
import { AgentAvatar } from './AgentAvatar';

const agents = [
  { name: 'Ava', role: 'Lead qualifier', status: 'Scoring inbound lead · 92 fit', pos: 'left-[1%] top-[6%]', v: 0, x: 170, y: 95 },
  { name: 'Kai', role: 'Ads optimizer', status: 'Shifting budget to winning set', pos: 'right-[1%] top-[6%]', v: 1, x: 830, y: 95 },
  { name: 'Noor', role: 'Content strategist', status: 'Drafting SEO topic cluster', pos: 'left-[1%] bottom-[6%]', v: 2, x: 170, y: 425 },
  { name: 'Leo', role: 'Sales follow-up', status: 'Demo booked · Thu 3:00 pm', pos: 'right-[1%] bottom-[6%]', v: 3, x: 830, y: 425 },
] as const;

const CORE = { x: 500, y: 260 };
const link = (x: number, y: number) => {
  const dx = x < CORE.x ? 150 : -150;
  return `M${CORE.x} ${CORE.y} C ${CORE.x - dx} ${CORE.y}, ${x + dx} ${y}, ${x} ${y}`;
};

function AgentCard({ a }: { a: (typeof agents)[number] }) {
  return (
    <div className="gradient-border flex w-full items-center gap-3 md:w-[15.5rem] rounded-2xl bg-gnk-card/80 p-3 pr-4 shadow-card backdrop-blur-xl">
      <div className="relative shrink-0">
        <AgentAvatar variant={a.v} className="h-11 w-11" />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gnk-bg">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        </span>
      </div>
      <div className="min-w-0">
        <p className="text-[0.8125rem] font-semibold leading-tight text-gnk-fg">
          {a.name} <span className="font-normal text-gnk-muted">· {a.role}</span>
        </p>
        <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-gnk-accent">AI teammate</p>
        <p className="mt-1 truncate text-xs text-gnk-muted">{a.status}</p>
      </div>
    </div>
  );
}

/**
 * Hero centrepiece: the GNK core orchestrating four AI teammates.
 * Server-rendered SVG + CSS/SMIL motion — zero client JS.
 */
export function HeroEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[1100px]">
      {/* Desktop / tablet composition */}
      <div className="relative hidden aspect-[1000/520] md:block">
        <svg viewBox="0 0 1000 520" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="he-core" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#d8f938" stopOpacity="0.45" />
              <stop offset="0.6" stopColor="hsl(var(--gnk-fg))" stopOpacity="0.08" />
              <stop offset="1" stopColor="hsl(var(--gnk-fg))" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="he-line" x1="0" x2="1">
              <stop offset="0" stopColor="#d8f938" />
              <stop offset="0.5" stopColor="hsl(var(--gnk-fg))" />
              <stop offset="1" stopColor="hsl(var(--gnk-muted))" />
            </linearGradient>
            <filter id="he-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={CORE.x} cy={CORE.y} r="230" fill="url(#he-core)" />
          {[90, 140, 200].map((r, i) => (
            <circle
              key={r}
              cx={CORE.x}
              cy={CORE.y}
              r={r}
              fill="none"
              stroke="hsl(var(--gnk-border))"
              strokeDasharray={i === 1 ? '2 10' : undefined}
              className={i === 1 ? 'origin-center animate-spin-slow [transform-box:fill-box]' : undefined}
            />
          ))}

          {agents.map((a) => (
            <path key={a.name} d={link(a.x, a.y)} fill="none" stroke="hsl(var(--gnk-border))" strokeWidth="1.5" />
          ))}
          {agents.map((a, i) => (
            <path
              key={`g${a.name}`}
              d={link(a.x, a.y)}
              fill="none"
              stroke="url(#he-line)"
              strokeWidth="1.5"
              strokeOpacity="0.8"
              className="ill-dash"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          <g className="motion-only">
            {agents.map((a, i) => (
              <circle key={`p${a.name}`} r="3.5" fill={i % 2 ? 'hsl(var(--gnk-muted))' : '#d8f938'} filter="url(#he-glow)">
                <animateMotion
                  dur={`${3.2 + i * 0.4}s`}
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                  path={link(a.x, a.y)}
                  keyPoints={i % 2 ? '0;1' : '1;0'}
                  keyTimes="0;1"
                  calcMode="linear"
                />
              </circle>
            ))}
          </g>

          {/* Orbiting satellites */}
          {[0, 120, 240].map((deg, i) => (
            <g key={deg} className="origin-center animate-spin-slow [transform-box:view-box]" style={{ animationDuration: `${30 + i * 8}s`, transformOrigin: `${CORE.x}px ${CORE.y}px` }}>
              <circle
                cx={CORE.x + 140 * Math.cos((deg * Math.PI) / 180)}
                cy={CORE.y + 140 * Math.sin((deg * Math.PI) / 180)}
                r="4.5"
                fill="hsl(var(--gnk-bg))"
                stroke={['#d8f938', 'hsl(var(--gnk-fg))', 'hsl(var(--gnk-muted))'][i]}
                strokeWidth="2"
              />
            </g>
          ))}
        </svg>

        {/* Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-gnk-bg/80 shadow-[0_0_80px_-10px_rgba(216,249,56,0.385),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl lg:h-44 lg:w-44">
            <span className="absolute inset-0 rounded-full border border-gnk-accent/40 animate-ping-soft" aria-hidden />
            <div className="flex flex-col items-center">
              <BrandMark animated className="h-11 w-auto text-gnk-fg lg:h-14" title="" />
              <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.24em] text-gnk-muted">Growth core</span>
            </div>
          </div>
        </div>

        {agents.map((a) => (
          <div key={a.name} className={`absolute ${a.pos} ill-float`} style={{ animationDelay: `${-a.v * 1.2}s` }}>
            <AgentCard a={a} />
          </div>
        ))}

        {/* Outcome chips */}
        <div className="absolute left-1/2 top-[2%] -translate-x-1/2">
          <div className="rounded-full border border-gnk-border bg-gnk-card/80 px-3.5 py-1.5 text-xs text-gnk-muted backdrop-blur-xl dark:border-white/10">
            <span className="font-semibold text-gnk-fg">+38%</span> qualified demos in 90 days
          </div>
        </div>
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
          <div className="rounded-full border border-gnk-border bg-gnk-card/80 px-3.5 py-1.5 text-xs text-gnk-muted backdrop-blur-xl dark:border-white/10">
            <span className="font-semibold text-gnk-fg">−62%</span> average speed-to-lead
          </div>
        </div>
      </div>

      {/* Mobile composition */}
      <div className="md:hidden">
        <div className="relative mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-gnk-bg/80 shadow-[0_0_70px_-10px_rgba(216,249,56,0.385)]">
          <span className="absolute inset-0 rounded-full border border-gnk-accent/40 animate-ping-soft" aria-hidden />
          <BrandMark animated className="h-10 w-auto text-gnk-fg" title="" />
        </div>
        <div className="grid gap-3">
          {agents.map((a) => (
            <AgentCard key={a.name} a={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

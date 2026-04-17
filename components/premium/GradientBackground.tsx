'use client';

/**
 * Fixed ambient layer: depth without heavy canvas. GPU-friendly transforms only.
 */
export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gnk-bg" />
      <div
        className="absolute -left-[20%] -top-[30%] h-[min(70vw,720px)] w-[min(70vw,720px)] rounded-full bg-gradient-to-br from-violet-600/18 via-transparent to-transparent blur-3xl animate-float-soft dark:from-violet-600/30"
        style={{ willChange: 'transform' }}
      />
      <div
        className="absolute -right-[15%] top-[10%] h-[min(60vw,560px)] w-[min(60vw,560px)] rounded-full bg-gradient-to-bl from-cyan-500/12 via-transparent to-transparent blur-3xl animate-float-soft dark:from-cyan-500/20"
        style={{ animationDelay: '-4s', willChange: 'transform' }}
      />
      <div
        className="absolute bottom-[-20%] left-1/3 h-[min(55vw,480px)] w-[min(55vw,480px)] rounded-full bg-gradient-to-t from-violet-700/8 to-transparent blur-3xl dark:from-violet-700/15"
        style={{ willChange: 'transform' }}
      />
      <div className="absolute inset-0 bg-hero-mesh opacity-70 dark:opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--gnk-bg))_92%)]" />
    </div>
  );
}

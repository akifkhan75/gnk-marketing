'use client';

/** Subtle perspective grid — very low contrast. */
export function AnimatedGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-[-100%] h-[200%] w-[200%] opacity-40 animate-grid-pan"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--gnk-border) / 0.55) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--gnk-border) / 0.55) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 72%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

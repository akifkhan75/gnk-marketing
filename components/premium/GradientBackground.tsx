/**
 * Fixed ambient layer — brand aurora (violet → blue → sky) on deep navy.
 * Pure CSS, server-rendered, GPU-friendly transforms only.
 */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gnk-bg" />
      <div className="absolute left-1/2 top-[-28rem] h-[48rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(216,249,56,0.088),transparent)] blur-2xl dark:bg-[radial-gradient(closest-side,rgba(216,249,56,0.121),transparent)]" />
      <div
        className="absolute right-[-18rem] top-[8rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,245,242,0.035),transparent)] blur-2xl animate-float-soft"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  );
}

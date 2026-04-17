import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-cyan-400 text-sm font-extrabold text-white shadow-glow ring-1 ring-black/10 transition group-hover:shadow-glow-lg dark:ring-white/15">
        G
      </span>
      <span className="text-gnk-fg">
        GNK <span className="text-gnk-muted font-semibold">Marketing</span>
      </span>
    </Link>
  );
}

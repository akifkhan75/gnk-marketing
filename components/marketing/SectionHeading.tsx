import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  gradientTitle = false,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Accent phrase styling for hero-style headings */
  gradientTitle?: boolean;
}) {
  const a = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          gradientTitle
            ? 'text-gradient bg-[length:200%_auto] animate-gradient-shift'
            : 'text-gnk-fg'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-lg leading-relaxed text-gnk-muted">{description}</div>
      ) : null}
    </div>
  );
}

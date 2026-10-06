import type { ReactNode } from 'react';
import { SplitWords } from '@/components/motion/SplitWords';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  gradientTitle = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Brand-gradient title (use sparingly) */
  gradientTitle?: boolean;
  as?: 'h1' | 'h2';
}) {
  const center = align === 'center';
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p> : null}
      <Tag
        className={`mt-5 font-display text-display-md font-semibold ${gradientTitle ? 'text-gradient' : 'text-gnk-fg'}`}
      >
        {typeof title === 'string' ? <SplitWords segments={[title]} /> : title}
      </Tag>
      {description ? (
        <div className={`mt-5 text-[1.0625rem] leading-relaxed text-gnk-muted ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </div>
      ) : null}
    </div>
  );
}

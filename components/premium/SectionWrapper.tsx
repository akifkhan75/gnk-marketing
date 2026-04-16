import type { ReactNode } from 'react';

export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Extra classes on inner max-width wrapper */
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>{children}</div>
    </section>
  );
}

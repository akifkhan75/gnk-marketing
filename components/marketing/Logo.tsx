import Link from 'next/link';
import { BrandMark } from '@/components/brand/BrandMark';

/** Stacked lockup — GNK mark over a wide-tracked MARKETING wordmark, as in the master logo. */
export function Logo({
  className = '',
  size = 'md',
  animated = false,
}: {
  className?: string;
  size?: 'md' | 'lg';
  animated?: boolean;
}) {
  const markH = size === 'lg' ? 'h-9' : 'h-[22px]';
  const word = size === 'lg' ? 'text-[0.62rem] mt-2.5' : 'text-[0.45rem] mt-[5px]';
  return (
    <Link
      href="/"
      aria-label="GNK Marketing — home"
      className={`group inline-flex flex-col items-start text-gnk-fg ${className}`}
    >
      <BrandMark animated={animated} title="" className={`${markH} w-auto overflow-visible`} />
      <span aria-hidden className={`flex w-full justify-between px-[3%] font-display font-semibold uppercase leading-none ${word}`}>
        {'MARKETING'.split('').map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
    </Link>
  );
}

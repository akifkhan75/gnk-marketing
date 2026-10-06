'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Hides the footer CTA band on pages that already end with their own CTA (home). */
export function FooterCtaGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <>{children}</>;
}

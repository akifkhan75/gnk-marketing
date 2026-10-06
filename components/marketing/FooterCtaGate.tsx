'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Hides the footer CTA band on pages that already end with their own CTA (home, studio). */
export function FooterCtaGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/' || pathname === '/studio') return null;
  return <>{children}</>;
}

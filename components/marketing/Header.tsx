'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { Logo } from '@/components/marketing/Logo';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/services/ai', label: 'AI systems' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-gnk-bg/70 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gnk-muted transition hover:text-gnk-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/free-ai-audit" variant="ghost" className="!px-3 !py-2 text-sm">
            Free AI audit
          </ButtonLink>
          <ButtonLink href="/contact" variant="primary" className="!px-4 !py-2 text-sm">
            Book a demo
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gnk-fg backdrop-blur-sm"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-white/[0.06] bg-gnk-bg/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-gnk-fg hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
              <ButtonLink href="/free-ai-audit" variant="secondary" className="w-full">
                Free AI audit
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary" className="w-full">
                Book a demo
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

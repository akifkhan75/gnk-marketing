'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ButtonLink } from '@/components/marketing/Button';
import { Logo } from '@/components/marketing/Logo';
import { AI_SERVICES } from '@/lib/ai-services';
import { SERVICES } from '@/lib/services';

const primaryNav = [
  { href: '/studio', label: 'Studio' },
  { href: '/real-estate-growth-system', label: 'Real estate' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
] as const;

const featuredAI = AI_SERVICES.slice(0, 6);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: PointerEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMegaOpen(false);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [megaOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 rounded-2xl border px-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out-expo sm:px-5 ${
          scrolled || open || megaOpen
            ? 'border-gnk-border/80 bg-gnk-bg/75 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/[0.07]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div ref={megaRef} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                megaOpen || pathname.startsWith('/services') ? 'text-gnk-fg' : 'text-gnk-muted hover:text-gnk-fg'
              }`}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              aria-controls="mega-services"
              onClick={() => setMegaOpen((v) => !v)}
            >
              Services
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              id="mega-services"
              className={`absolute left-1/2 top-full w-[min(880px,calc(100vw-2rem))] -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-300 ease-out-expo ${
                megaOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="gradient-border overflow-hidden rounded-3xl bg-gnk-bg-elevated shadow-glow-lg">
                <div className="grid grid-cols-[1.35fr_1fr]">
                  <div className="p-6">
                    <p className="eyebrow">Marketing services</p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-0.5">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-[0.8125rem] text-gnk-muted transition-colors hover:bg-white/[0.04] hover:text-gnk-fg"
                          >
                            {s.title}
                            <span className="translate-x-[-4px] text-gnk-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-l border-gnk-border/70 bg-gradient-to-b from-gnk-accent/[0.06] to-transparent p-6 dark:border-white/[0.06]">
                    <p className="eyebrow">AI growth systems</p>
                    <ul className="mt-4 space-y-0.5">
                      {featuredAI.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/ai/${s.slug}`}
                            className="block rounded-lg px-2.5 py-2 text-[0.8125rem] text-gnk-muted transition-colors hover:bg-white/[0.04] hover:text-gnk-fg"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/free-ai-audit"
                      className="mt-5 flex items-center justify-between rounded-2xl border border-gnk-accent/30 bg-gnk-accent/[0.08] p-4 transition-colors hover:border-gnk-accent/60"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-gnk-fg">Free AI growth audit</span>
                        <span className="mt-0.5 block text-xs text-gnk-muted">Funnel leaks, automation surfaces, 90-day roadmap</span>
                      </span>
                      <span className="text-gnk-accent">→</span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gnk-border/70 px-6 py-3.5 text-xs text-gnk-muted dark:border-white/[0.06]">
                  <span>Senior-led strategy · AI-assisted execution · Revenue reporting</span>
                  <span className="flex gap-4">
                    <Link href="/services" className="font-medium text-gnk-fg hover:text-gnk-accent">
                      All services →
                    </Link>
                    <Link href="/services/ai" className="font-medium text-gnk-fg hover:text-gnk-accent">
                      AI systems hub →
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-gnk-fg' : 'text-gnk-muted hover:text-gnk-fg'
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-brand-gradient" aria-hidden />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink href="/contact" variant="primary" className="!px-4 !py-2">
            Book a strategy call
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gnk-border bg-gnk-card/60 text-gnk-fg transition hover:border-gnk-accent/40 dark:border-white/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-3 bottom-3 top-[5.25rem] z-40 overflow-y-auto rounded-3xl border border-gnk-border/80 bg-gnk-bg/95 p-5 backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ease-out-expo dark:border-white/[0.07] lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          <button
            type="button"
            className="flex items-center justify-between border-b border-gnk-border/70 py-4 text-left font-display text-xl font-semibold text-gnk-fg dark:border-white/[0.06]"
            aria-expanded={mobileServices}
            onClick={() => setMobileServices((v) => !v)}
          >
            Services
            <ChevronDownIcon className={`h-5 w-5 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
          </button>
          {mobileServices ? (
            <div className="grid gap-1 border-b border-gnk-border/70 py-3 dark:border-white/[0.06]">
              <Link href="/services" className="py-1.5 text-sm font-semibold text-gnk-fg">
                All services →
              </Link>
              <Link href="/services/ai" className="py-1.5 text-sm font-semibold text-gnk-fg">
                AI systems hub →
              </Link>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="py-1.5 text-sm text-gnk-muted">
                  {s.title}
                </Link>
              ))}
            </div>
          ) : null}
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-gnk-border/70 py-4 font-display text-xl font-semibold text-gnk-fg dark:border-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-b border-gnk-border/70 py-4 font-display text-xl font-semibold text-gnk-fg dark:border-white/[0.06]"
          >
            Contact
          </Link>
        </nav>
        <div className="mt-6 grid gap-3">
          <ButtonLink href="/contact" variant="primary" className="w-full !py-3">
            Book a strategy call
          </ButtonLink>
          <ButtonLink href="/free-ai-audit" variant="secondary" className="w-full !py-3">
            Free AI audit
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

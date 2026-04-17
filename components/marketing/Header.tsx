'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { Logo } from '@/components/marketing/Logo';
import { SERVICES } from '@/lib/services';

const servicesOverviewNav = [
  { href: '/services', label: 'Services overview', description: 'Catalog of capabilities and execution standards.' },
  { href: '/services/ai', label: 'AI systems', description: 'Automation layers, routing logic, and measurable AI.' },
] as const;

const primaryNav = [
  { href: '/real-estate-growth-system', label: 'Real estate system' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!servicesOpen) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gnk-border/80 bg-gnk-bg/80 backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.06] dark:bg-gnk-bg/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <div
            ref={servicesMenuRef}
            className="relative"
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gnk-muted transition hover:text-gnk-accent dark:hover:text-gnk-fg"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180 text-gnk-accent dark:text-gnk-fg' : ''}`}
              />
            </button>

            {servicesOpen ? (
              <div
                className="absolute left-0 top-full mt-3 w-[420px] overflow-hidden rounded-2xl border border-gnk-border/80 bg-gnk-bg/95 p-2 shadow-glow-lg backdrop-blur-xl dark:border-white/[0.08] dark:bg-gnk-bg/80"
                role="menu"
                aria-label="Services"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesOverviewNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="group block rounded-xl px-3 py-3 transition hover:bg-gnk-accent/[0.06] dark:hover:bg-white/[0.04]"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-gnk-fg">{item.label}</span>
                      <span className="text-xs font-semibold text-gnk-accent-2 opacity-0 transition group-hover:opacity-100 dark:text-cyan-400/90">
                        Open →
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-gnk-muted">{item.description}</p>
                  </Link>
                ))}

                <div className="my-2 h-px bg-gnk-border/80 dark:bg-white/[0.08]" />

                <div className="px-3 pb-1 pt-2">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gnk-muted">
                    Top-level services
                  </p>
                </div>

                <div className="max-h-[60vh] overflow-auto px-1 pb-1">
                  <div className="grid gap-1 sm:grid-cols-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        role="menuitem"
                        className="group rounded-xl px-3 py-3 transition hover:bg-gnk-accent/[0.06] dark:hover:bg-white/[0.04]"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-sm font-semibold text-gnk-fg">{service.title}</span>
                          <span className="text-xs font-semibold text-gnk-accent-2 opacity-0 transition group-hover:opacity-100 dark:text-cyan-400/90">
                            Open →
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gnk-muted">{service.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gnk-muted transition hover:text-gnk-accent dark:hover:text-gnk-fg"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gnk-border bg-gnk-card/50 text-gnk-fg backdrop-blur-sm transition hover:border-gnk-accent/30 dark:border-white/10 dark:bg-transparent dark:hover:border-white/20"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-gnk-border/80 bg-gnk-bg/95 backdrop-blur-xl dark:border-white/[0.06] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <button
              type="button"
              className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-gnk-fg transition hover:bg-gnk-accent/[0.06] dark:hover:bg-white/[0.04]"
              aria-expanded={servicesMobileOpen}
              aria-controls="mobile-services"
              onClick={() => setServicesMobileOpen((v) => !v)}
            >
              <span>Services</span>
              <ChevronDownIcon className={`h-5 w-5 transition ${servicesMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            <div id="mobile-services" className={`${servicesMobileOpen ? 'block' : 'hidden'} -mt-1 pb-2`}>
              {servicesOverviewNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-3 mt-1 block rounded-lg border border-gnk-border/60 bg-gnk-card/30 px-3 py-3 text-sm font-semibold text-gnk-fg transition hover:border-gnk-accent/30 hover:bg-gnk-accent/[0.05] dark:border-white/[0.08] dark:bg-gnk-card/10 dark:hover:bg-white/[0.04]"
                  onClick={() => {
                    setOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  <span className="block">{item.label}</span>
                  <span className="mt-1 block text-xs font-medium text-gnk-muted">{item.description}</span>
                </Link>
              ))}

              <div className="mx-3 my-3 h-px bg-gnk-border/70 dark:bg-white/[0.08]" />

              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="ml-3 mt-1 block rounded-lg border border-gnk-border/60 bg-gnk-card/20 px-3 py-3 text-sm font-semibold text-gnk-fg transition hover:border-gnk-accent/30 hover:bg-gnk-accent/[0.05] dark:border-white/[0.08] dark:bg-gnk-card/10 dark:hover:bg-white/[0.04]"
                  onClick={() => {
                    setOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  <span className="block">{service.title}</span>
                  <span className="mt-1 block text-xs font-medium text-gnk-muted">{service.shortDescription}</span>
                </Link>
              ))}
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-gnk-fg transition hover:bg-gnk-accent/[0.06] dark:hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-gnk-border/80 pt-4 dark:border-white/[0.06]">
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

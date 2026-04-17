import Link from 'next/link';
import { AI_SERVICES } from '@/lib/ai-services';
import { SERVICES } from '@/lib/services';
import { COMPANY, SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';
import { Container } from '@/components/marketing/Container';
import { Logo } from '@/components/marketing/Logo';

const footerServices = SERVICES.slice(0, 6);
const footerAI = AI_SERVICES.slice(0, 6);

export function Footer() {
  return (
    <footer className="relative border-t border-gnk-border/80 bg-gnk-bg/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-gnk-bg/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gnk-accent/35 to-transparent dark:via-violet-500/40" />
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-gnk-muted">{SITE_DESCRIPTION}</p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-gnk-fg">Services</p>
            <ul className="mt-4 space-y-2">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-gnk-muted transition hover:text-gnk-accent dark:hover:text-violet-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-gnk-accent-2 transition hover:opacity-90 dark:text-cyan-400/90 dark:hover:text-cyan-300">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-gnk-fg">AI systems</p>
            <ul className="mt-4 space-y-2">
              {footerAI.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/ai/${s.slug}`}
                    className="text-sm text-gnk-muted transition hover:text-gnk-accent dark:hover:text-violet-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/ai" className="text-sm font-medium text-gnk-accent-2 transition hover:opacity-90 dark:text-cyan-400/90 dark:hover:text-cyan-300">
                  All AI systems →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-gnk-fg">Company</p>
            <ul className="mt-4 space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/case-studies', label: 'Case studies' },
                { href: '/blog', label: 'Blog' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Contact' },
                { href: '/free-ai-audit', label: 'Free AI audit' },
                { href: '/free-audit', label: 'Growth audit' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gnk-muted transition hover:text-gnk-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-gnk-fg">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-gnk-muted">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition hover:text-gnk-accent dark:hover:text-violet-300">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`} className="transition hover:text-gnk-fg">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-gnk-muted">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <ul className="mt-4 flex flex-wrap gap-4 text-xs text-gnk-muted">
              <li>
                <Link href="/privacy-policy" className="hover:text-gnk-fg">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gnk-fg">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

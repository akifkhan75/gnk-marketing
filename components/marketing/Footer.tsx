import Link from 'next/link';
import { BrandMark } from '@/components/brand/BrandMark';
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@/components/icons';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { FooterCtaGate } from '@/components/marketing/FooterCtaGate';
import { Logo } from '@/components/marketing/Logo';
import { AI_SERVICES } from '@/lib/ai-services';
import { SERVICES } from '@/lib/services';
import { ADDRESS_LINE, COMPANY, SITE_NAME } from '@/lib/site';

const footerServices = SERVICES.slice(0, 7);
const footerAI = AI_SERVICES.slice(0, 6);

const company = [
  { href: '/about', label: 'About' },
  { href: '/studio', label: 'Studio' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/real-estate-growth-system', label: 'Real estate system' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
  { href: '/free-ai-audit', label: 'Free AI audit' },
  { href: '/free-audit', label: 'Growth audit' },
];

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.8.83-3-.2-.31a8.2 8.2 0 1 1 6.97 3.84Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.86 10.86 0 0 0 4.16 3.68c1.55.67 2.16.73 2.93.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-gnk-fg/80">{title}</p>
      <ul className="mt-5 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

const linkCls = 'text-gnk-muted transition-colors hover:text-gnk-fg';

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-gnk-border/70 dark:border-white/[0.06]">
      <div className="hairline-x absolute inset-x-0 top-0" aria-hidden />

      {/* CTA band */}
      <FooterCtaGate>
      <Container className="pt-20 sm:pt-24">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-gnk-border/70 pb-16 dark:border-white/[0.06] lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Let&apos;s build your growth engine</p>
            <p className="mt-5 font-display text-display-md font-semibold text-gnk-fg">
              Ready to turn traffic into <span className="text-gradient">predictable revenue?</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary" className="!px-6 !py-3">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href={COMPANY.whatsappUrl} variant="secondary" className="!px-6 !py-3">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
            </ButtonLink>
          </div>
        </div>
      </Container>
      </FooterCtaGate>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <ul className="mt-8 space-y-4 text-sm text-gnk-muted">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-3 transition-colors hover:text-gnk-fg">
                  <MailIcon className="h-4 w-4 shrink-0 text-gnk-accent" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phoneE164}`} className="flex items-center gap-3 transition-colors hover:text-gnk-fg">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gnk-accent" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-gnk-fg">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-gnk-accent" />
                  {COMPANY.mobile}
                </a>
              </li>
              <li>
                <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 leading-relaxed transition-colors hover:text-gnk-fg">
                  <LocationMarkerIcon className="mt-0.5 h-4 w-4 shrink-0 text-gnk-accent" />
                  <address className="not-italic">{ADDRESS_LINE}</address>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title="Services">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkCls}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-medium text-gnk-fg hover:text-gnk-accent">
                  All services →
                </Link>
              </li>
            </FooterCol>
            <FooterCol title="AI systems">
              {footerAI.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/ai/${s.slug}`} className={linkCls}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/ai" className="font-medium text-gnk-fg hover:text-gnk-accent">
                  All AI systems →
                </Link>
              </li>
            </FooterCol>
            <FooterCol title="Company">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterCol>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark sign-off */}
      <div className="relative select-none" aria-hidden>
        <Container>
          <div className="flex items-end justify-center gap-[3vw] pb-2 text-gnk-fg/[0.06] dark:text-white/[0.05]">
            <BrandMark mono className="h-[11vw] max-h-40 w-auto" title="" />
          </div>
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gnk-bg to-transparent" />
      </div>

      <div className="border-t border-gnk-border/70 dark:border-white/[0.06]">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-gnk-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved. · Islamabad, Pakistan · Serving clients worldwide
          </p>
          <ul className="flex gap-5">
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
            <li>
              <a href="/sitemap.xml" className="hover:text-gnk-fg">
                Sitemap
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

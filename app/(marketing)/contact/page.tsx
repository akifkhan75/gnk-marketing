import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@/components/icons';
import { Container } from '@/components/marketing/Container';
import { ContactForm } from '@/components/marketing/ContactForm';
import { JsonLd } from '@/components/marketing/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { ADDRESS_LINE, COMPANY } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Contact GNK Marketing',
  description:
    'Book a strategy call or send a message. Tell us your goals—we respond within one business day with next steps. Office in Blue Area, Islamabad; serving clients worldwide.',
  path: '/contact',
  keywords: [
    'contact marketing agency',
    'book strategy call',
    'GNK Marketing contact',
    'digital marketing agency Islamabad',
    'marketing agency Blue Area Islamabad',
  ],
});

const channels = [
  {
    icon: MailIcon,
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: PhoneIcon,
    label: 'Office',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneE164}`,
  },
  {
    icon: PhoneIcon,
    label: 'Mobile / WhatsApp',
    value: COMPANY.mobile,
    href: COMPANY.whatsappUrl,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="relative">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }])} />

      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative">
          <p className="eyebrow hero-in">Get in touch</p>
          <h1
            className="hero-in mt-6 max-w-4xl font-display text-display-lg font-semibold text-gnk-fg"
            style={{ ['--d' as string]: '0.08s' }}
          >
            Let&apos;s build a growth plan <span className="text-gradient">you can defend.</span>
          </h1>
          <p className="hero-in mt-6 max-w-2xl text-lg text-gnk-muted" style={{ ['--d' as string]: '0.16s' }}>
            Share your goals, timeline, and what you have tried. We will reply with honest fit feedback—and if we are
            not the right partner, we will say so.
          </p>
        </Container>
      </section>

      <section className="relative pb-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...('external' in c ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="gradient-border group flex items-center gap-4 rounded-2xl bg-gnk-card/60 p-5 backdrop-blur-xl transition-transform duration-500 ease-out-expo hover:-translate-y-0.5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gnk-border bg-gnk-bg text-gnk-accent transition-shadow group-hover:shadow-[0_0_24px_-6px_hsl(var(--gnk-glow)/0.7)] dark:border-white/10">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">{c.label}</span>
                      <span className="mt-1 block truncate font-display text-base font-semibold text-gnk-fg">{c.value}</span>
                    </span>
                    <span className="ml-auto text-gnk-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-gnk-fg">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border group relative overflow-hidden rounded-2xl bg-gnk-card/60 p-6 backdrop-blur-xl"
              >
                {/* Stylised map grid with location pin */}
                <svg viewBox="0 0 400 140" className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="xMidYMid slice" aria-hidden>
                  <defs>
                    <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M28 0H0V28" fill="none" stroke="hsl(var(--gnk-border))" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="140" fill="url(#map-grid)" />
                  <path d="M-10 96 C 80 80 140 120 220 90 S 340 40 420 60" stroke="hsl(var(--gnk-border))" strokeWidth="10" fill="none" />
                  <path d="M150 -10 L190 150" stroke="hsl(var(--gnk-border))" strokeWidth="7" fill="none" />
                  <circle cx="300" cy="62" r="18" fill="#d8f938" opacity="0.25" className="animate-ping-soft origin-center [transform-box:fill-box]" />
                  <circle cx="300" cy="62" r="7" fill="hsl(var(--gnk-bg))" stroke="#d8f938" strokeWidth="3" />
                </svg>
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gnk-border bg-gnk-bg text-gnk-accent dark:border-white/10">
                    <LocationMarkerIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">Office · Islamabad</span>
                    <address className="mt-1.5 block max-w-xs not-italic leading-relaxed text-gnk-fg">{ADDRESS_LINE}</address>
                    <span className="mt-3 inline-flex text-sm font-medium text-gnk-accent">Open in Google Maps →</span>
                  </span>
                </div>
              </a>

              <div className="rounded-2xl border border-gnk-border/70 p-6 dark:border-white/[0.06]">
                <ul className="space-y-3">
                  {[
                    { label: 'Response time', value: '< 1 business day' },
                    { label: 'Fit call', value: '30 min, no pitch deck' },
                    { label: 'Free AI audit', value: 'Available to qualified teams' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-2.5 text-gnk-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        {item.label}
                      </span>
                      <span className="font-medium text-gnk-fg">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-gnk-border/70 pt-5 text-sm text-gnk-muted dark:border-white/[0.06]">
                  Prefer async? Use the form—include your site URL, monthly ad spend (if relevant), and your biggest
                  constraint right now.
                </p>
              </div>
            </div>

            <div className="gradient-border rounded-3xl bg-gnk-card/70 p-6 shadow-card backdrop-blur-xl sm:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-gnk-fg">Send a message</h2>
              <div className="mt-8">
                <ContactForm source="contact" submitLabel="Send message" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

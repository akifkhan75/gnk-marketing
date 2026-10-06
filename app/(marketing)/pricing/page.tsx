import Link from 'next/link';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { MotionSection } from '@/components/premium/MotionSection';
import { SplitWords } from '@/components/motion/SplitWords';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Pricing & Packages',
  description:
    'Marketing retainers from $1,000/month. Foundation $1,000/mo, Growth $2,000/mo, and custom Enterprise programs—scoped to your funnel stage and goals.',
  path: '/pricing',
  keywords: [
    'marketing agency pricing',
    'digital marketing packages',
    'SEO retainer',
    'PPC management pricing',
    'marketing agency pricing Pakistan',
  ],
});

type Tier = {
  name: string;
  amount: number | null;
  desc: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Foundation',
    amount: 1000,
    desc: 'Best for teams fixing measurement and rebuilding core acquisition basics.',
    features: ['Analytics & tracking audit + fixes roadmap', 'SEO or PPC (single channel)', 'Monthly strategy call', 'Slack/email support'],
    cta: 'Discuss Foundation',
  },
  {
    name: 'Growth',
    amount: 2000,
    desc: 'Best for brands ready to scale with experimentation and multi-channel coordination.',
    features: ['Two core channels (e.g., SEO + CRO)', 'Experiment backlog + monthly tests', 'Creative iteration cadence (paid)', 'Executive reporting'],
    cta: 'Discuss Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    amount: null,
    desc: 'For complex stacks, multi-brand, or international rollouts requiring governance.',
    features: ['Custom squad model', 'Migration & technical SEO support', 'Advanced analytics (BigQuery optional)', 'SLAs & security review coordination'],
    cta: 'Contact sales',
  },
];

const offersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'GNK Marketing retainers',
  url: `${SITE_URL}/pricing`,
  itemListElement: tiers
    .filter((t) => t.amount)
    .map((t) => ({
      '@type': 'Offer',
      name: `${t.name} marketing retainer`,
      description: t.desc,
      price: t.amount,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: t.amount,
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      seller: { '@id': `${SITE_URL}/#organization` },
    })),
};

function Check({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        dark ? 'bg-ink text-[#d8f938]' : 'bg-[#d8f938]/15 text-gnk-accent'
      }`}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3.5 8.5l3 3 6-7" />
      </svg>
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={offersJsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Pricing', path: '/pricing' }])} />

      <section className="relative overflow-hidden pb-12 pt-16 sm:pt-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative">
          <p className="eyebrow hero-in">Pricing</p>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-gnk-fg">
            <SplitWords
              mode="hero"
              segments={['Pricing that matches scope—not a fake', { text: '“package” fantasy.', className: 'text-slash' }]}
            />
          </h1>
          <p className="hero-in mt-6 max-w-2xl text-lg text-gnk-muted" style={{ ['--d' as string]: '0.35s' }}>
            Final pricing depends on competitive intensity, geography, creative volume, and your internal team. The tiers
            below are starting frameworks we use to align expectations fast.
          </p>
        </Container>
      </section>

      <MotionSection as="section" className="pb-16 sm:pb-24">
        <Container>
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {tiers.map((t) => {
              const hi = t.highlighted;
              return (
                <div
                  key={t.name}
                  data-reveal-child
                  className={`relative flex flex-col overflow-hidden rounded-[1.75rem] p-8 sm:p-9 ${
                    hi ? 'bg-[#d8f938] text-ink shadow-[0_30px_80px_-30px_rgba(216,249,56,0.55)] lg:-my-4 lg:py-12' : 'gradient-border bg-gnk-card/70 backdrop-blur-xl'
                  }`}
                >
                  {hi ? (
                    <span className="absolute right-6 top-6 rounded-full bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d8f938]">
                      Recommended
                    </span>
                  ) : null}
                  <h2 className={`font-display text-lg font-semibold ${hi ? 'text-ink' : 'text-gnk-fg'}`}>{t.name}</h2>
                  <p className="mt-6 flex items-end gap-2">
                    {t.amount ? (
                      <>
                        <span className={`font-display text-6xl font-semibold tracking-[-0.05em] ${hi ? 'text-ink' : 'text-gnk-fg'}`}>
                          ${t.amount.toLocaleString('en-US')}
                        </span>
                        <span className={`mb-2 text-sm ${hi ? 'text-ink/70' : 'text-gnk-muted'}`}>/ month</span>
                      </>
                    ) : (
                      <span className="font-display text-6xl font-semibold tracking-[-0.05em] text-gnk-fg">Custom</span>
                    )}
                  </p>
                  <p className={`mt-5 text-sm leading-relaxed ${hi ? 'text-ink/75' : 'text-gnk-muted'}`}>{t.desc}</p>
                  <div className={`my-8 h-px ${hi ? 'bg-ink/15' : 'bg-gnk-border'}`} />
                  <ul className={`flex-1 space-y-3.5 text-sm ${hi ? 'text-ink' : 'text-gnk-fg/90'}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <Check dark={hi} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {hi ? (
                    <Link
                      href="/contact"
                      className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-[#d8f938] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {t.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </Link>
                  ) : (
                    <ButtonLink href="/contact" variant="secondary" className="mt-10 w-full !py-3.5">
                      {t.cta}
                    </ButtonLink>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-gnk-border/70 p-7 dark:border-white/[0.07]">
              <p className="eyebrow">One-time projects</p>
              <p className="mt-4 text-gnk-muted">
                Need a one-time project? We scope audits, migrations, and launches separately—ask in your message.
              </p>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-gnk-fg hover:text-gnk-accent">
                Scope a project →
              </Link>
            </div>
            <Link
              href="/studio"
              className="group relative overflow-hidden rounded-3xl border border-gnk-border/70 p-7 transition-colors hover:border-[#d8f938]/50 dark:border-white/[0.07]"
            >
              <p className="eyebrow">GNK Studio</p>
              <p className="mt-4 max-w-sm text-gnk-muted">
                Ad creative production—motion, video, and product photography for your campaigns.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-gnk-fg transition-colors group-hover:text-gnk-accent">
                Explore the Studio →
              </span>
              <svg viewBox="0 0 600 900" preserveAspectRatio="none" className="pointer-events-none absolute -right-6 top-0 h-full w-24 opacity-90 transition-transform duration-700 ease-out-expo group-hover:translate-x-2" aria-hidden>
                <path d="M380 0H600L220 900H0Z" fill="#d8f938" />
              </svg>
            </Link>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}

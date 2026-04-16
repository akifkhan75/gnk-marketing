import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Pricing & Packages',
  description:
    'Transparent starting points for retained growth programs—scoped to your funnel stage, competitive intensity, and internal resources.',
  path: '/pricing',
  keywords: ['marketing agency pricing', 'SEO retainer', 'PPC management pricing'],
});

const tiers = [
  {
    name: 'Foundation',
    price: 'From $4.5k / mo',
    desc: 'Best for teams fixing measurement and rebuilding core acquisition basics.',
    features: ['Analytics & tracking audit + fixes roadmap', 'SEO or PPC (single channel)', 'Monthly strategy call', 'Slack/email support'],
    cta: 'Discuss Foundation',
  },
  {
    name: 'Growth',
    price: 'From $9.5k / mo',
    desc: 'Best for brands ready to scale with experimentation and multi-channel coordination.',
    features: ['Two core channels (e.g., SEO + CRO)', 'Experiment backlog + monthly tests', 'Creative iteration cadence (paid)', 'Executive reporting'],
    cta: 'Discuss Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For complex stacks, multi-brand, or international rollouts requiring governance.',
    features: ['Custom squad model', 'Migration & technical SEO support', 'Advanced analytics (BigQuery optional)', 'SLAs & security review coordination'],
    cta: 'Contact sales',
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Pricing that matches scope—not a fake “package” fantasy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Final pricing depends on competitive intensity, geography, creative volume, and your internal team. The tiers
            below are starting frameworks we use to align expectations fast.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-3xl border p-8 ${
                  t.highlighted
                    ? 'border-gnk-accent bg-gnk-card shadow-glow'
                    : 'border-gnk-border bg-gnk-card shadow-card'
                }`}
              >
                <h2 className="font-display text-xl font-bold text-gnk-fg">{t.name}</h2>
                <p className="mt-2 font-display text-2xl font-semibold text-gnk-accent">{t.price}</p>
                <p className="mt-4 text-sm text-gnk-muted">{t.desc}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-gnk-muted">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gnk-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant={t.highlighted ? 'primary' : 'secondary'} className="mt-8 w-full justify-center">
                  {t.cta}
                </ButtonLink>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-gnk-muted">
            Need a one-time project? We scope audits, migrations, and launches separately—ask in your message.
          </p>
        </Container>
      </section>
    </>
  );
}

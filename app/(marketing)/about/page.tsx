import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About GNK Marketing',
  description:
    'We are a performance-led digital marketing agency: senior practitioners, clean measurement, and roadmaps tied to revenue—not vanity metrics.',
  path: '/about',
  keywords: ['digital marketing agency', 'performance marketing', 'GNK Marketing'],
});

const values = [
  {
    title: 'Clarity over noise',
    body: 'We would rather tell you the truth about tradeoffs than sell a fantasy roadmap. Strategy starts with constraints.',
  },
  {
    title: 'Measurement you can defend',
    body: 'If the data cannot support decisions, we fix the data. Reliable reporting is a product, not an afterthought.',
  },
  {
    title: 'Execution quality',
    body: 'Great strategy dies in sloppy launches. We QA campaigns, tags, and pages like engineers—not interns.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            A modern agency for teams who want growth—and governance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            GNK Marketing partners with marketing leaders who are tired of opaque reporting, channel silos, and endless
            “activity.” We build systems: positioning that converts, channels that learn, and analytics that leadership
            trusts.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-gnk-fg">What we believe</h2>
              <p className="mt-4 text-gnk-muted leading-relaxed">
                Marketing is not magic. It is disciplined experimentation under economic reality. The best teams know
                their unit economics, protect brand trust, and scale what repeats—not what merely looks busy.
              </p>
              <p className="mt-4 text-gnk-muted leading-relaxed">
                We work across SEO, paid media, lifecycle marketing, CRO, and analytics because those pieces either
                reinforce each other—or they fight each other. Our job is alignment.
              </p>
            </div>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-gnk-border bg-gnk-card p-6">
                  <h3 className="font-display font-semibold text-gnk-fg">{v.title}</h3>
                  <p className="mt-2 text-sm text-gnk-muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-gnk-border bg-gnk-card py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-gnk-fg">See if we are a fit</h2>
            <p className="mt-2 max-w-xl text-gnk-muted">
              Bring your goals, your metrics, and your skepticism. We will meet you with a clear plan—and no pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Book a call
            </ButtonLink>
            <ButtonLink href="/case-studies" variant="secondary">
              View case studies
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

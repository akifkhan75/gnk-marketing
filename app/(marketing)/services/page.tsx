import Link from 'next/link';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { buildPageMetadata } from '@/lib/seo';
import { SERVICES } from '@/lib/services';

export const metadata = buildPageMetadata({
  title: 'Digital Marketing Services',
  description:
    'AI-first growth systems plus SEO, PPC, social, content, CRO, analytics, and web—full-funnel services engineered for revenue and time saved.',
  path: '/services',
  keywords: [
    'digital marketing agency services',
    'AI marketing automation',
    'SEO',
    'PPC',
    'CRO',
    'marketing automation',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">Services</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Everything you need to acquire, convert, and retain—without the agency chaos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Pick a capability to see how we work, what tools we use, and the outcomes we optimize for. Prefer a human
            walkthrough? Book a strategy call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Book a call
            </ButtonLink>
            <ButtonLink href="/free-ai-audit" variant="secondary">
              Free AI audit
            </ButtonLink>
            <ButtonLink href="/free-audit" variant="outline">
              Growth audit
            </ButtonLink>
          </div>
          <Link
            href="/services/ai"
            className="mt-10 block rounded-3xl border border-gnk-accent/35 bg-gnk-card p-6 transition hover:border-gnk-accent/60 hover:shadow-glow sm:p-8"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">AI differentiator</p>
            <p className="mt-2 font-display text-xl font-bold text-gnk-fg sm:text-2xl">
              AI-powered growth systems: chatbots, funnels, ads optimization, voice, and analytics.
            </p>
            <p className="mt-2 text-sm text-gnk-muted">
              We build automation that replaces manual work and tightens spend-to-pipeline—see all ten AI service
              lines.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-gnk-accent">Open AI systems hub →</span>
          </Link>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Catalog"
            title="Modern marketing services, executed with senior oversight."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl border border-gnk-border bg-gnk-card p-8 shadow-card transition hover:border-gnk-accent/30 hover:shadow-glow"
              >
                <h2 className="font-display text-xl font-semibold text-gnk-fg group-hover:text-gnk-accent">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{s.shortDescription}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gnk-accent">View service →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

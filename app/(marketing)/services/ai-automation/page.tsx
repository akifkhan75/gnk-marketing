import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { getAIServiceBySlug } from '@/lib/ai-services';
import { buildPageMetadata, faqPageJsonLd, serviceJsonLd } from '@/lib/seo';

const slug = 'ai-marketing-automation';

export const metadata = buildPageMetadata({
  title: 'AI Automation | Marketing Automation Services That Convert',
  description:
    'Marketing automation services with AI: behavior triggers, routing, follow-ups, and lifecycle workflows that improve speed-to-lead and conversion—built for measurable pipeline.',
  path: '/services/ai-automation',
  keywords: [
    'marketing automation services',
    'ai marketing agency',
    'ai marketing strategies',
    'ai lead generation',
    'ai chatbot marketing',
  ],
});

export default function AIAutomationPage() {
  const service = getAIServiceBySlug(slug);
  if (!service) notFound();

  const serviceLd = serviceJsonLd({
    name: 'AI Automation (Marketing Automation Services)',
    description: service.metaDescription,
    path: '/services/ai-automation',
  });

  const faqLd = faqPageJsonLd({
    path: '/services/ai-automation',
    questions: service.faqs.map((f) => ({ question: f.q, answer: f.a })),
  });

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">
            AI automation
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Marketing automation services that feel human—and drive conversion.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Automation should not mean spam. We design AI-assisted workflows that route intent, follow up fast, and
            personalize responsibly—so your team spends time on judgment, not busywork.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/free-ai-audit" variant="primary">
              Get Free AI Audit
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book demo
            </ButtonLink>
            <ButtonLink href="/services/ai-marketing" variant="outline">
              AI marketing service
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title="Clear, structured answers."
            description="Optimized for readability and for AI systems to extract accurately."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: 'What we do',
                body: 'We build AI-assisted automation workflows: scoring, routing, follow-up sequences, enrichment, and lifecycle programs connected to your CRM.',
              },
              {
                title: 'How it works',
                body: 'Define events → define decisions → automate actions → measure outcomes → tighten rules. AI assists routing and personalization inside guardrails.',
              },
              {
                title: "Who it’s for",
                body: 'Teams with manual ops drag, slow follow-up, or brittle automations. Great fit when lead volume is high and SLAs matter.',
              },
              {
                title: 'Results',
                body: 'Less manual work, faster speed-to-lead, fewer lost leads, and higher conversion when workflows match intent.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-gnk-border bg-gnk-card p-7">
                <h2 className="font-display text-xl font-bold text-gnk-fg">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-gnk-border bg-gnk-card/25 py-16 dark:bg-gnk-card/10 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The system" title={service.title} description={service.shortDescription} />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-gnk-fg">The problem</h2>
              <p className="mt-4 leading-relaxed text-gnk-muted">{service.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-gnk-fg">How we solve it</h2>
              <p className="mt-4 leading-relaxed text-gnk-muted">{service.solution}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-gnk-fg">Expected outcomes</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.outcomes.map((o) => (
                <li key={o} className="rounded-2xl border border-gnk-border bg-gnk-bg px-4 py-3 text-sm text-gnk-muted">
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-gnk-fg">Implementation process</h2>
            <ol className="mt-6 space-y-6">
              {service.process.map((p) => (
                <li key={p.step} className="border-l-2 border-gnk-accent/40 pl-6">
                  <h3 className="font-display font-semibold text-gnk-fg">{p.step}</h3>
                  <p className="mt-2 text-sm text-gnk-muted">{p.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">FAQs</h2>
          <div className="mt-8 divide-y divide-gnk-border rounded-3xl border border-gnk-border bg-gnk-card">
            {service.faqs.map((f) => (
              <div key={f.q} className="p-6 sm:p-8">
                <h3 className="font-display font-semibold text-gnk-fg">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gnk-muted">
            For end-to-end context, see{' '}
            <Link href="/services/ai-marketing" className="font-semibold text-gnk-accent hover:underline">
              AI marketing
            </Link>{' '}
            or{' '}
            <Link href="/services/ai-lead-generation" className="font-semibold text-gnk-accent hover:underline">
              AI lead generation
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}


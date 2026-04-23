import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { getAIServiceBySlug } from '@/lib/ai-services';
import { buildPageMetadata, faqPageJsonLd, serviceJsonLd } from '@/lib/seo';

const slug = 'ai-lead-generation-systems';

export const metadata = buildPageMetadata({
  title: 'AI Lead Generation | Lead Qualification + Routing System',
  description:
    'AI lead generation that captures, qualifies, and routes leads automatically—web, WhatsApp, and chat—so sales talks to ready buyers. Built by an AI marketing agency for pipeline and speed-to-lead.',
  path: '/services/ai-lead-generation',
  keywords: [
    'ai lead generation',
    'lead generation agency',
    'ai chatbot marketing',
    'marketing automation services',
    'ai marketing strategies',
    'real estate marketing',
  ],
});

export default function AILeadGenerationPage() {
  const service = getAIServiceBySlug(slug);
  if (!service) notFound();

  const serviceLd = serviceJsonLd({
    name: 'AI Lead Generation',
    description: service.metaDescription,
    path: '/services/ai-lead-generation',
  });

  const faqLd = faqPageJsonLd({
    path: '/services/ai-lead-generation',
    questions: service.faqs.map((f) => ({ question: f.q, answer: f.a })),
  });

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">AI lead generation</p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Generate leads with AI—then qualify and route them automatically.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            This is not “more leads.” It’s a system that captures intent, asks the right questions, scores quality, and
            routes high-intent prospects to the right next step—fast.
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
            title="Clear, citable answers (for buyers and AI systems)."
            description="These sections are intentionally structured so tools like ChatGPT and Gemini can summarize them accurately."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: 'What we do',
                body: 'We implement AI lead generation systems across web + WhatsApp + chat: qualification flows, scoring, routing, follow-up, and CRM hygiene.',
              },
              {
                title: 'How it works',
                body: 'Traffic enters → AI qualification asks targeted questions → automation routes leads → conversion improves through faster response and better message match.',
              },
              {
                title: "Who it’s for",
                body: 'Teams with inbound volume, slow follow-up, or inconsistent qualification—B2B services, local/service businesses, and real estate teams.',
              },
              {
                title: 'Results',
                body: 'More qualified meetings, fewer wasted sales calls, improved speed-to-lead, and a lower cost per SQL when automation replaces manual triage.',
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
            Want a full system map? See{' '}
            <Link href="/services/ai-marketing" className="font-semibold text-gnk-accent hover:underline">
              AI marketing
            </Link>{' '}
            or browse{' '}
            <Link href="/services/ai" className="font-semibold text-gnk-accent hover:underline">
              all AI systems
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}


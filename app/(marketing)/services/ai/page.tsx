import { AIServicesCatalogIconGrid } from '@/components/marketing/AIServicesCatalogIconGrid';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { AutomationPipeline } from '@/components/visuals';
import { AI_SERVICES } from '@/lib/ai-services';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI-Powered Marketing & Automation Systems',
  description:
    'GNK builds AI systems that replace manual marketing work: chatbots, funnels, ads optimization, voice, and analytics—measured on revenue, time saved, and cost per outcome.',
  path: '/services/ai',
  keywords: [
    'AI marketing agency',
    'marketing automation AI',
    'AI chatbot business',
    'AI sales funnel',
  ],
});

export default function AIServicesHubPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">
            AI growth systems
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            We don&apos;t just run campaigns—we build AI systems that scale how you acquire and convert customers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            The goal is simple:{' '}
            <span className="font-medium text-gnk-fg">
              less manual work, lower cost per outcome, faster follow-up, more revenue.
            </span>{' '}
            Every engagement is grounded in your funnel, your data, and proof—not buzzwords.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/free-ai-audit" variant="primary">
              Free AI audit
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book a demo
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Classic marketing services
            </ButtonLink>
          </div>
          <div className="mt-10 rounded-3xl bg-gnk-card/25 px-4 py-8 dark:bg-gnk-card/15">
            <AutomationPipeline labels={['Ingest', 'Reason', 'Act', 'Learn']} />
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-gnk-muted">
              Closed-loop automation · human QA at the edges
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-3xl border border-gnk-border bg-gnk-card px-6 py-8 sm:px-10">
            <p className="font-display text-sm font-semibold text-gnk-fg">How we position AI</p>
            <ul className="mt-4 grid gap-3 text-sm text-gnk-muted sm:grid-cols-2">
              <li className="flex gap-2">
                <span className="text-red-500">✕</span>
                <span>
                  <strong className="text-gnk-fg">Not:</strong> “We use AI tools.”
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                <span>
                  <strong className="text-gnk-fg">Yes:</strong> “We build AI systems that replace manual work and scale
                  revenue.”
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gnk-muted">
              Angles we design around: replace the repetitive 80%, turn follow-up into a 24/7 system, and tighten
              spend-to-pipeline—not chase novelty.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="AI services"
            title="Ten systems we design, implement, and measure."
            description="Pick a capability to see the business problem we solve, the implementation process, tools, and FAQs."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <AIServicesCatalogIconGrid services={AI_SERVICES} />
          </div>
        </Container>
      </section>
    </>
  );
}

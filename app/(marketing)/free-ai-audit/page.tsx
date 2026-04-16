import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { ContactForm } from '@/components/marketing/ContactForm';
import { LeadQualifyChatMock } from '@/components/marketing/LeadQualifyChatMock';
import { SimpleROICalculator } from '@/components/marketing/SimpleROICalculator';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Free AI Growth Audit',
  description:
    'Request a free AI audit: where to automate follow-up, reduce cost per lead, and build 24/7 qualification—without risky hype or tool sprawl.',
  path: '/free-ai-audit',
  keywords: ['free AI audit', 'AI marketing assessment', 'automation audit', 'AI funnel review'],
});

const includes = [
  'Where manual work is inflating CAC or slowing follow-up',
  'Highest-ROI automation surfaces (chat, CRM, ads ops, reporting)',
  'Data & consent gaps that would break scaling',
  'A 90-day sequence: quick wins vs. platform bets',
];

export default function FreeAIAuditPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">Free AI audit</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Work less, scale faster—start with an honest automation map.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            We review your funnel, channels, and operations to show where AI systems replace repetitive work and where
            humans should own judgment. You get a prioritized plan tied to revenue and time saved—not a generic tool
            list.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/ai" variant="outline">
              Browse AI systems
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-gnk-fg">What you receive</h2>
              <ul className="mt-6 space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 text-gnk-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gnk-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gnk-muted">
                Deep integrations or regulated industries may need a paid discovery—we&apos;ll say so plainly.
              </p>
            </div>
            <div className="rounded-3xl border border-gnk-border bg-gnk-card p-8 shadow-card">
              <ContactForm source="free-ai-audit" submitLabel="Request free AI audit" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gnk-border bg-gnk-card py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-gnk-fg">See qualification in action (UI mock)</h2>
              <p className="mt-3 text-sm text-gnk-muted">
                A lightweight preview of how conversational capture can feel on your site or WhatsApp—before we wire
                your CRM.
              </p>
              <div className="mt-8">
                <LeadQualifyChatMock />
              </div>
            </div>
            <div>
              <SimpleROICalculator />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

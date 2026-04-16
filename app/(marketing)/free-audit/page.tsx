import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { ContactForm } from '@/components/marketing/ContactForm';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Free Growth Audit',
  description:
    'Request a free digital marketing audit: funnel, messaging, SEO/PPC/CRO opportunities, and measurement gaps—prioritized for impact.',
  path: '/free-audit',
  keywords: ['free marketing audit', 'SEO audit', 'PPC audit', 'growth audit'],
});

const includes = [
  'Channel fit vs. your ICP and economics',
  'Quick wins vs. structural bets (90-day lens)',
  'Tracking and attribution risks we would validate first',
  'Honest fit assessment—no forced pitch',
];

export default function FreeAuditPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Free growth audit—clear priorities, not a generic PDF.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Tell us about your business. We will review your site and go-to-market motion at a high level and respond
            with actionable next steps. If deeper diagnostics require access, we will outline what we need.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-gnk-fg">What you can expect</h2>
              <ul className="mt-6 space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 text-gnk-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gnk-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gnk-muted">
                This audit is a starting point—not a substitute for paid discovery when your stack, compliance, or data
                model is complex.
              </p>
              <ButtonLink href="/contact" variant="ghost" className="mt-6 !px-0">
                Need a deeper engagement? Book a strategy call →
              </ButtonLink>
            </div>
            <div className="rounded-3xl border border-gnk-border bg-gnk-card p-8 shadow-card">
              <ContactForm
                source="free-audit"
                submitLabel="Request my audit"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

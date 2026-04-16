import Link from 'next/link';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Case Studies & Portfolio',
  description:
    'Outcomes from SEO, paid media, CRO, analytics, and AI automation—pipeline, revenue, time saved, and lower cost per qualified lead.',
  path: '/case-studies',
  keywords: ['marketing case studies', 'AI automation results', 'SEO results', 'PPC case study', 'CRO results'],
});

const aiStudies = [
  {
    title: 'After-hours revenue capture with WhatsApp + web qualification',
    industry: 'AI systems',
    summary:
      'Unified conversational entry points, CRM routing, and calendar booking—cutting average speed-to-lead from hours to under two minutes on nights and weekends.',
    metrics: ['+31% SQL volume from same ad spend', 'SDR time reallocated to closing conversations'],
  },
  {
    title: 'Creative velocity without quality collapse (paid social)',
    industry: 'AI systems',
    summary:
      'Structured briefs, AI-assisted variant generation, and human final-edit gates—doubling weekly valid creative tests while tightening brand compliance.',
    metrics: ['2.1× creative tests per week', 'Stable ROAS with faster fatigue detection'],
  },
];

const studies = [
  {
    title: 'B2B SaaS: search-led pipeline recovery',
    industry: 'Software',
    summary:
      'Rebuilt topic clusters around commercial intent, fixed technical indexation issues, and aligned landing copy to sales objections.',
    metrics: ['+38% qualified demos (90 days)', '−21% CAC in paid search (blended)'],
  },
  {
    title: 'Multi-location services: local dominance playbook',
    industry: 'Home services',
    summary:
      'Standardized GBP execution, built localized landing templates, and installed call tracking with market-level reporting.',
    metrics: ['Top 3 map pack in 4 metros', '+27% tracked calls QoQ'],
  },
  {
    title: 'Ecommerce: creative system + measurement reset',
    industry: 'Retail',
    summary:
      'Restructured Meta accounts, rebuilt creative testing hooks, and implemented server-side tracking with consent-aware defaults.',
    metrics: ['Stable ROAS through signal loss', '+19% MER on incremental spend'],
  },
  {
    title: 'Lead gen: CRO program replacing random tests',
    industry: 'Financial services',
    summary:
      'Research sprint (analytics + qualitative), prioritized hypotheses, and ran a disciplined experiment roadmap with engineering partnership.',
    metrics: ['+14% form completion', 'Faster experiment velocity without quality loss'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Proof in patterns—not promises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            These case summaries reflect common engagement shapes. In a real proposal, we tailor benchmarks to your
            category, sales cycle, and data maturity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Discuss your goals
            </ButtonLink>
            <ButtonLink href="/services/ai" variant="secondary">
              Explore AI systems
            </ButtonLink>
          </div>
        </Container>
      </section>
      <section className="border-b border-gnk-border bg-gnk-card py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">AI automation impact</h2>
          <p className="mt-3 max-w-2xl text-gnk-muted">
            Representative patterns from engagements where the primary lever was replacing manual follow-up, creative
            production, or routing with measured automation—not novelty for its own sake.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {aiStudies.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-gnk-border bg-gnk-bg p-8 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gnk-accent">{s.industry}</p>
                <h3 className="font-display mt-3 text-xl font-bold text-gnk-fg">{s.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gnk-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2 border-t border-gnk-border pt-6">
                  {s.metrics.map((m) => (
                    <li key={m} className="text-sm font-medium text-gnk-fg">
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-gnk-muted">
            Want the playbook for your stack?{' '}
            <Link href="/free-ai-audit" className="font-medium text-gnk-accent hover:underline">
              Request a free AI audit →
            </Link>
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">Marketing & growth programs</h2>
          <p className="mt-3 text-gnk-muted">SEO, local, paid media, CRO, and analytics engagements.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {studies.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-gnk-border bg-gnk-card p-8 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gnk-accent">{s.industry}</p>
                <h2 className="font-display mt-3 text-xl font-bold text-gnk-fg">{s.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gnk-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2 border-t border-gnk-border pt-6">
                  {s.metrics.map((m) => (
                    <li key={m} className="text-sm font-medium text-gnk-fg">
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

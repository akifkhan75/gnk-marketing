import Link from 'next/link';
import { CheckIcon } from '@/components/icons';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { AI_SERVICES } from '@/lib/ai-services';
import { SERVICES } from '@/lib/services';
import { AIFlowDiagram } from '@/components/premium/AIFlowDiagram';
import { AnimatedButtonLink } from '@/components/premium/AnimatedButton';
import { GlowCard } from '@/components/premium/GlowCard';
import { HomeHero } from '@/components/premium/HomeHero';
import { MotionSection } from '@/components/premium/MotionSection';

const aiShowcase = [
  'ai-chatbots-conversational-ai',
  'ai-sales-funnels',
  'ai-ads-optimization',
  'ai-marketing-automation',
] as const;

const problems = [
  {
    title: 'Traffic without pipeline',
    body: 'Rankings and clicks look fine—but SQLs do not move. We connect acquisition to conversion and revenue proof.',
  },
  {
    title: 'Fragmented channels',
    body: 'Paid, organic, email, and sales tell different stories. We align messaging, measurement, and handoffs.',
  },
  {
    title: 'Brittle tracking',
    body: 'If leadership cannot trust the numbers, teams optimize opinions. We build GA4/GTM foundations you can defend.',
  },
];

const process = [
  { step: '01', title: 'Diagnose', desc: 'Economics, funnel leaks, and technical constraints—before we spend a dollar on tactics.' },
  { step: '02', title: 'Design', desc: 'A prioritized roadmap: quick wins, structural bets, and clear success metrics.' },
  { step: '03', title: 'Ship', desc: 'Execution with QA discipline: launches, tests, and documentation your team can run.' },
  { step: '04', title: 'Compound', desc: 'Weekly learning loops. Scale what wins; cut what fails—without ego.' },
];

const cases = [
  {
    name: 'AI qualification + CRM routing',
    result: '−62% average speed-to-lead',
    detail: 'Web + WhatsApp flows, after-hours capture, and automated handoff so sales only talks to ready buyers.',
  },
  {
    name: 'B2B SaaS pipeline recovery',
    result: '+38% qualified demos in 90 days',
    detail: 'Search + landing alignment, offer clarification, and CRO experiments on the signup path.',
  },
  {
    name: 'Regional services brand',
    result: 'Map pack dominance in 4 metros',
    detail: 'Local SEO system: profiles, localized pages, review velocity, and call tracking clarity.',
  },
  {
    name: 'Ecommerce paid social',
    result: 'Stable ROAS during iOS signal loss',
    detail: 'Creative testing, catalog hygiene, server-side measurement, and margin-aware budgeting.',
  },
];

const testimonials = [
  {
    quote:
      'GNK replaced vanity dashboards with decisions. We finally knew which campaigns actually drove revenue—not just leads.',
    name: 'Jordan M.',
    role: 'VP Marketing, B2B technology',
  },
  {
    quote:
      'Their technical SEO work saved our migration. We expected a dip—we came out stronger within weeks.',
    name: 'Priya S.',
    role: 'Head of Growth, ecommerce',
  },
];

const logos = ['Northline', 'Atlas CRM', 'Brightform', 'Kite Health', 'Silverline Legal', 'Craft & Co.'];

const trustMetrics = [
  { label: '24/7 AI systems', sub: 'Capture & qualify while you sleep' },
  { label: 'Human QA gates', sub: 'Brand-safe automation' },
  { label: 'Revenue reporting', sub: 'Pipeline-grade measurement' },
];

export function HomePage() {
  return (
    <>
      <HomeHero />

      <MotionSection>
        <section className="border-b border-white/[0.06] py-16 sm:py-20">
          <Container>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
              Trusted by teams who outgrow activity metrics
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-90">
              {logos.map((name) => (
                <span key={name} className="font-display text-sm font-semibold text-gnk-muted transition hover:text-gnk-fg">
                  {name}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              {trustMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/[0.06] bg-gnk-card/30 px-5 py-4 text-center backdrop-blur-sm"
                >
                  <p className="font-display text-sm font-bold text-gnk-fg">{m.label}</p>
                  <p className="mt-1 text-xs text-gnk-muted">{m.sub}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </MotionSection>

      <MotionSection className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Reality check"
            title="Noise is usually a systems problem—not a channel problem."
            description="We work with leaders who want proof: what to do, why it matters, and how we will show impact on pipeline and margin."
            align="center"
          />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <GlowCard key={p.title}>
                <h3 className="font-display text-lg font-semibold text-gnk-fg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{p.body}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="border-y border-white/[0.06] bg-gnk-card/20 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="AI-powered growth systems"
            gradientTitle
            title="We automate the repetitive 80% so your team owns strategy."
            description="Replace manual follow-up, triage, and reporting with measured AI layers—then scale what already wins. This is the architecture prospects feel in the first three seconds: advanced, intentional, expensive."
            align="center"
          />
          <div className="mt-16">
            <AIFlowDiagram />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiShowcase.map((slug) => {
              const item = AI_SERVICES.find((s) => s.slug === slug)!;
              return (
                <GlowCard key={slug} href={`/services/ai/${slug}`}>
                  <h3 className="font-display font-semibold text-gnk-fg transition group-hover/card:text-violet-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gnk-muted">{item.shortDescription}</p>
                  <span className="mt-4 inline-block text-xs font-semibold text-cyan-400/90">Explore →</span>
                </GlowCard>
              );
            })}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AnimatedButtonLink href="/services/ai" variant="primary">
              Explore all AI systems
            </AnimatedButtonLink>
            <AnimatedButtonLink href="/free-ai-audit" variant="secondary">
              Free AI audit
            </AnimatedButtonLink>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-funnel marketing with senior oversight."
            description="Every capability is executed with documentation, QA, and reporting your CFO will not roll their eyes at."
            align="center"
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <GlowCard key={s.slug} href={`/services/${s.slug}`}>
                <h3 className="font-display font-semibold text-gnk-fg group-hover/card:text-violet-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gnk-muted">{s.shortDescription}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-cyan-400/90">Explore →</span>
              </GlowCard>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/services" variant="outline">
              Services overview
            </ButtonLink>
            <ButtonLink href="/services/ai" variant="outline">
              AI systems hub
            </ButtonLink>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="border-y border-white/[0.06] bg-gnk-card/15 py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="Operating system"
              title="Diagnose → design → ship → compound."
              description="We are not a ticket factory. We partner with your team, protect brand quality, and tie every decision to business outcomes."
            />
            <div className="relative space-y-4 pl-2">
              <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/40 to-transparent" />
              {process.map((p) => (
                <div key={p.step} className="relative flex gap-5 pl-10">
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/40 bg-gnk-bg/80 font-display text-xs font-bold text-violet-300">
                    {p.step}
                  </span>
                  <div className="rounded-2xl border border-white/[0.06] bg-gnk-card/25 px-5 py-4 backdrop-blur-sm">
                    <h3 className="font-display font-semibold text-gnk-fg">{p.title}</h3>
                    <p className="mt-1 text-sm text-gnk-muted">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Proof"
            title="Outcomes we aim for—by stage and category."
            description="Representative patterns. In proposals we benchmark against your market and your data maturity."
            align="center"
          />
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {cases.map((c) => (
              <GlowCard key={c.name}>
                <p className="font-display text-xl font-bold text-gnk-fg">{c.result}</p>
                <p className="mt-2 text-sm font-medium text-violet-400/90">{c.name}</p>
                <p className="mt-4 text-sm leading-relaxed text-gnk-muted">{c.detail}</p>
                <Link href="/case-studies" className="mt-6 inline-block text-sm font-semibold text-cyan-400/90 hover:text-cyan-300">
                  Case studies →
                </Link>
              </GlowCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="border-t border-white/[0.06] bg-gnk-card/10 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Clients" title="What marketing leaders say" align="center" />
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <GlowCard key={t.name}>
                <p className="text-lg leading-relaxed text-gnk-fg">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-gnk-muted">
                  <span className="font-semibold text-gnk-fg">{t.name}</span> — {t.role}
                </footer>
              </GlowCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="pb-24 pt-12 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-white/[0.1] bg-gradient-to-br from-violet-950/40 via-gnk-card/50 to-cyan-950/20 p-10 shadow-glow-lg sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-gnk-fg sm:text-4xl">
                Ready for infrastructure-grade growth?
              </h2>
              <p className="mt-4 text-lg text-gnk-muted">
                Start with a free AI audit: funnel leaks, automation surfaces, and a prioritized 90-day roadmap.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gnk-muted">
                {[
                  'Where revenue leaks today (and why)',
                  'Quick wins vs. structural bets',
                  'A plan aligned to your team’s capacity',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0 text-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <AnimatedButtonLink href="/free-ai-audit" variant="primary" className="!py-3">
                  Get free AI audit
                </AnimatedButtonLink>
                <AnimatedButtonLink href="/free-audit" variant="secondary" className="!py-3">
                  Classic growth audit
                </AnimatedButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}

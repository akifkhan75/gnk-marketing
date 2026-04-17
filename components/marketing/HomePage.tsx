import Link from 'next/link';
import { CheckIcon } from '@/components/icons';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import {
  HomeAIShowcaseIconCards,
  HomeProblemIconCards,
  HomeProcessIconCards,
  HomeServicesIconCards,
  HomeTrustMetricCards,
} from '@/components/marketing/HomePremiumIconSections';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { SERVICES } from '@/lib/services';
import {
  AIFlowVisual,
  AnalyticsStreamVisual,
  AutomationPipeline,
  ConversationGraphVisual,
  FunnelDiagram,
  GrowthGraphVisual,
  LeadFlowVisual,
} from '@/components/visuals';
import { AnimatedButtonLink } from '@/components/premium/AnimatedButton';
import { GlowCard } from '@/components/premium/GlowCard';
import { HomeHero } from '@/components/premium/HomeHero';
import { MotionSection } from '@/components/premium/MotionSection';

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

export function HomePage() {
  return (
    <>
      <HomeHero />

      <MotionSection>
        <section className="border-b border-gnk-border/80 py-16 dark:border-white/[0.06] sm:py-20">
          <Container>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gnk-accent dark:text-violet-400/80">
              Trusted by teams who outgrow activity metrics
            </p>
            <div className="mt-8 flex justify-center">
              <GrowthGraphVisual className="opacity-90" />
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-90">
              {logos.map((name) => (
                <span
                  key={name}
                  className="font-display text-sm font-semibold text-gnk-muted transition hover:text-gnk-accent dark:hover:text-gnk-fg"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              <HomeTrustMetricCards />
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
          <div className="mt-10 flex justify-center px-2">
            <AutomationPipeline className="max-w-2xl opacity-95" />
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <HomeProblemIconCards />
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="relative border-y border-gnk-border/70 bg-gnk-card/40 py-20 dark:border-white/[0.06] dark:bg-gnk-card/20 sm:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-gnk-accent/12 via-transparent to-gnk-accent-2/10 blur-3xl dark:from-violet-600/20 dark:to-cyan-500/15"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="AI-powered growth systems"
            gradientTitle
            title="We automate the repetitive 80% so your team owns strategy."
            description="Replace manual follow-up, triage, and reporting with measured AI layers—then scale what already wins. This is the architecture prospects feel in the first three seconds: advanced, intentional, expensive."
            align="center"
          />
          <div className="mt-16 rounded-3xl bg-gnk-card/25 px-4 py-10 dark:bg-gnk-card/15 sm:px-8 sm:py-12">
            <AIFlowVisual />
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">
              Automation fabric · policy gates · live routing
            </p>
          </div>
          <div className="mt-10 flex justify-center px-2">
            <ConversationGraphVisual />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <HomeAIShowcaseIconCards />
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
          <div className="mt-10 flex justify-center">
            <LeadFlowVisual />
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <HomeServicesIconCards services={SERVICES} />
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

      <MotionSection className="border-y border-gnk-border/70 bg-gnk-card/30 py-20 dark:border-white/[0.06] dark:bg-gnk-card/15 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Operating system"
                title="Diagnose → design → ship → compound."
                description="We are not a ticket factory. We partner with your team, protect brand quality, and tie every decision to business outcomes."
              />
              <div className="mt-10 hidden justify-center lg:flex">
                <FunnelDiagram />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <HomeProcessIconCards />
            </div>
            <div className="mt-10 flex justify-center lg:hidden">
              <FunnelDiagram />
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
          <div className="mt-10 flex justify-center">
            <AnalyticsStreamVisual />
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {cases.map((c) => (
              <GlowCard key={c.name}>
                <p className="font-display text-xl font-bold text-gnk-fg">{c.result}</p>
                <p className="mt-2 text-sm font-medium text-gnk-accent dark:text-violet-400/90">{c.name}</p>
                <p className="mt-4 text-sm leading-relaxed text-gnk-muted">{c.detail}</p>
                <Link
                  href="/case-studies"
                  className="mt-6 inline-block text-sm font-semibold text-gnk-accent-2 transition hover:opacity-90 dark:text-cyan-400/90 dark:hover:text-cyan-300"
                >
                  Case studies →
                </Link>
              </GlowCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="border-t border-gnk-border/70 bg-gnk-card/25 py-20 dark:border-white/[0.06] dark:bg-gnk-card/10 sm:py-28">
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
          <div className="relative overflow-hidden rounded-4xl border border-gnk-border/90 bg-gradient-to-br from-gnk-accent/[0.08] via-gnk-card to-gnk-accent-2/[0.06] p-10 shadow-glow-lg dark:border-white/[0.1] dark:from-violet-950/40 dark:via-gnk-card/50 dark:to-cyan-950/20 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gnk-accent/20 blur-3xl dark:bg-violet-500/20" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-gnk-accent-2/15 blur-3xl dark:bg-cyan-500/15" />
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
                    <CheckIcon className="h-5 w-5 shrink-0 text-gnk-accent dark:text-violet-400" />
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

import Link from 'next/link';
import { CheckIcon } from '@/components/icons';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { GlowCard } from '@/components/premium/GlowCard';
import { MotionSection } from '@/components/premium/MotionSection';
import { RealEstateGrowthSystemVisual } from '@/components/visuals';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI-Powered Real Estate Growth System',
  description:
    'A productized marketing system for real estate teams: AI Property Assistant, interactive funnels, WhatsApp automation, short-form video, retargeting, investor campaigns, 360 tours, and pre-launch orchestration.',
  path: '/real-estate-growth-system',
  keywords: [
    'real estate marketing system',
    'AI property assistant',
    'whatsapp automation for real estate',
    'real estate funnels',
    'real estate retargeting',
    'investor marketing campaigns',
    '360 virtual tours marketing',
    'pre-launch real estate marketing',
    'reels marketing for real estate',
  ],
});

const modules = [
  {
    name: 'AI Property Assistant',
    value: 'Answers instantly, qualifies hard, routes cleanly.',
    points: ['Listing-aware Q&A', 'Budget + timeline scoring', 'Agent handoff with context'],
    stage: 'Conversion layer',
  },
  {
    name: 'Interactive Property Funnels',
    value: 'Different paths for buyers, renters, and investors—without chaos.',
    points: ['Dynamic pages per asset', 'Micro-commitments (view, save, tour)', 'Speed-to-lead optimizations'],
    stage: 'Acquisition → conversion',
  },
  {
    name: 'WhatsApp Automation',
    value: 'Follow-up that feels human—at machine speed.',
    points: ['Instant replies + routing', 'Tour scheduling nudges', 'After-hours capture'],
    stage: 'Nurture',
  },
  {
    name: 'Video Marketing (Reels/Shorts)',
    value: 'A repeatable creative engine tied to pipeline, not vibes.',
    points: ['Hooks + formats library', 'Property + lifestyle cuts', 'Weekly testing cadence'],
    stage: 'Demand generation',
  },
  {
    name: 'Retargeting Systems',
    value: 'Spend where intent is proven—across devices and sessions.',
    points: ['Signal-based audiences', 'Sequenced creative', 'Budget rules + guardrails'],
    stage: 'Recovery + scale',
  },
  {
    name: 'Investor-focused Campaigns',
    value: 'Position the deal: yield, risk, timeline, and certainty.',
    points: ['Deal pages + proof packs', 'Capital-raise funnels', 'Qualified investor routing'],
    stage: 'Investor pipeline',
  },
  {
    name: '360 Virtual Tours',
    value: 'Immersive tours that increase intent before the call.',
    points: ['Tour embeds + fast load', 'CTA overlays', 'Event tracking (hotspots, duration)'],
    stage: 'Experience layer',
  },
  {
    name: 'Pre-launch Marketing Systems',
    value: 'Create demand before the listing goes live.',
    points: ['Waitlist + early access', 'Price-intent surveys', 'Launch sequence orchestration'],
    stage: 'Launch control',
  },
] as const;

const steps = [
  {
    k: '01',
    title: 'Asset intelligence',
    body: 'We ingest listing details, comps, angle options, and restrictions—so every message stays accurate and compliant.',
  },
  {
    k: '02',
    title: 'Funnel architecture',
    body: 'Interactive paths for buyers vs. investors, with friction tuned to your market and team capacity.',
  },
  {
    k: '03',
    title: 'Automation fabric',
    body: 'WhatsApp + AI assistant + routing rules: speed-to-lead stays low, even after hours.',
  },
  {
    k: '04',
    title: 'Creative engine',
    body: 'Reels/Shorts production and testing loops that feed your retargeting and keep your pipeline warm.',
  },
  {
    k: '05',
    title: 'Compounding retargeting',
    body: 'Sequenced ads and audience logic that follows intent signals—tour views, saves, messages, and repeats.',
  },
] as const;

export default function RealEstateGrowthSystemPage() {
  return (
    <>
      <MotionSection>
        <section className="border-b border-gnk-border/80 py-16 dark:border-white/[0.06] sm:py-20">
          <Container>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-gnk-accent dark:text-violet-400/80">
              Productized offering
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-gnk-fg sm:text-6xl">
              AI-Powered Real Estate Growth System
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gnk-muted">
              A complete, engineered system that turns listings into qualified conversations—then turns conversations into tours,
              offers, and investor capital. Designed to feel advanced in the first three seconds.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'System output', value: 'More tours + cleaner pipelines' },
                { label: 'Core mechanic', value: 'AI + automation + creative loops' },
                { label: 'Built for', value: 'Agents, brokerages, developers, funds' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-gnk-border/80 bg-gnk-card/30 p-6 shadow-glow-sm dark:border-white/[0.08] dark:bg-gnk-card/12"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gnk-muted">{m.label}</p>
                  <p className="mt-2 font-display text-xl font-bold text-gnk-fg">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary" className="!px-6 !py-3">
                Book a demo
              </ButtonLink>
              <ButtonLink href="/free-ai-audit" variant="secondary" className="!px-6 !py-3">
                Get a free AI audit
              </ButtonLink>
            </div>

            <div className="mt-14 rounded-4xl border border-gnk-border/70 bg-gnk-card/25 px-4 py-10 shadow-glow-lg dark:border-white/[0.08] dark:bg-gnk-card/10 sm:px-8 sm:py-12">
              <SectionHeading
                eyebrow="System map"
                title="One pipeline. Two lanes. Measured at every step."
                description="The buyer lane drives tours and offers. The investor lane drives certainty, yield clarity, and qualified capital conversations—without fighting your buyer campaigns."
                align="center"
              />
              <div className="mt-10">
                <RealEstateGrowthSystemVisual />
              </div>
              <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">
                Automated pipelines · policy gates · creative loops · routing logic
              </p>
            </div>
          </Container>
        </section>
      </MotionSection>

      <MotionSection className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why it feels like a system"
            title="A step-by-step engine that compounds."
            description="This is built like infrastructure: inputs → processing → outputs. Each step improves the next."
            align="center"
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {steps.map((s) => (
              <GlowCard key={s.k} className="lg:col-span-1">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-gnk-accent dark:text-violet-400/90">
                    {s.k}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">stage</p>
                </div>
                <p className="mt-3 font-display text-lg font-bold text-gnk-fg">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gnk-muted">{s.body}</p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-gnk-border/70 bg-gnk-card/20 p-6 dark:border-white/[0.08] dark:bg-gnk-card/10 sm:p-8">
            <p className="font-display text-lg font-semibold text-gnk-fg">What your team experiences</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { k: 'Speed', v: 'Faster response + fewer missed leads' },
                { k: 'Clarity', v: 'Buyers vs investors separated cleanly' },
                { k: 'Proof', v: 'Tracking tied to intent signals, not vanity' },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-gnk-border/60 bg-gnk-bg/40 p-4 dark:border-white/[0.08] dark:bg-gnk-bg/30">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gnk-muted">{x.k}</p>
                  <p className="mt-2 text-sm font-medium text-gnk-fg/90">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="border-y border-gnk-border/70 bg-gnk-card/25 py-20 dark:border-white/[0.06] dark:bg-gnk-card/10 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Modules"
            title="Eight components that lock together."
            description="Each module is engineered to feed the next one—so performance improves as data accumulates."
            align="center"
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((m) => (
              <GlowCard key={m.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-bold text-gnk-fg">{m.name}</p>
                    <p className="mt-2 text-sm font-medium text-gnk-accent dark:text-violet-400/90">{m.value}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gnk-border/70 bg-gnk-bg/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted dark:border-white/[0.08] dark:bg-gnk-bg/30">
                    {m.stage}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-gnk-muted">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckIcon className="h-5 w-5 shrink-0 text-gnk-accent dark:text-violet-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Build this for my team
            </ButtonLink>
            <Link
              href="/services/ai"
              className="text-sm font-semibold text-gnk-accent-2 transition hover:opacity-90 dark:text-cyan-400/90 dark:hover:text-cyan-300"
            >
              See the broader AI systems hub →
            </Link>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="pb-24 pt-12 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-gnk-border/90 bg-gradient-to-br from-gnk-accent/[0.08] via-gnk-card to-gnk-accent-2/[0.06] p-10 shadow-glow-lg dark:border-white/[0.1] dark:from-violet-950/40 dark:via-gnk-card/50 dark:to-cyan-950/20 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gnk-accent/20 blur-3xl dark:bg-violet-500/20" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-gnk-accent-2/15 blur-3xl dark:bg-cyan-500/15" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-gnk-muted">
                Implementation
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gnk-fg sm:text-4xl">
                A premium system deserves premium execution.
              </h2>
              <p className="mt-4 text-lg text-gnk-muted">
                We’ll map your market, your inventory, and your constraints—then ship a versioned system with QA, measurement, and clear ownership.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gnk-muted">
                {[
                  'System map + message architecture',
                  'Funnels + WhatsApp automation',
                  'Video testing loop + retargeting sequences',
                  'Investor lane (deal pages + routing)',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0 text-gnk-accent dark:text-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary" className="!py-3">
                  Book a demo
                </ButtonLink>
                <ButtonLink href="/free-ai-audit" variant="secondary" className="!py-3">
                  Start with a free AI audit
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}


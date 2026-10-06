import Link from 'next/link';
import { CheckIcon } from '@/components/icons';
import { CountUp } from '@/components/home/CountUp';
import { HeroEngine } from '@/components/home/HeroEngine';
import { HeroParallax } from '@/components/home/HeroParallax';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ScrollMarquee } from '@/components/home/ScrollMarquee';
import { StoryScroll } from '@/components/home/StoryScroll';
import { SplitWords } from '@/components/motion/SplitWords';
import {
  AutomationIllustration,
  GrowthIllustration,
  MarketingIllustration,
  SalesIllustration,
} from '@/components/illustrations';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import {
  HomeAIShowcaseIconCards,
  HomeProblemIconCards,
} from '@/components/marketing/HomePremiumIconSections';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { GlowCard } from '@/components/premium/GlowCard';
import { MotionSection } from '@/components/premium/MotionSection';
import { SERVICES } from '@/lib/services';

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

const stats = [
  { value: 24, suffix: '/7', label: '24/7 AI systems', sub: 'Capture & qualify while you sleep' },
  { value: 62, prefix: '−', suffix: '%', label: 'Average speed-to-lead', sub: 'AI qualification + CRM routing' },
  { value: 38, prefix: '+', suffix: '%', label: 'Qualified demos in 90 days', sub: 'B2B SaaS pipeline recovery' },
  { value: 4, label: 'Metros with map pack dominance', sub: 'Local SEO system' },
];


function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(216,249,56,0.44)]">
      {initials}
    </span>
  );
}

export function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HeroParallax>
        <section className="relative -mt-[4.75rem] overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />

          {/* Giant brand slash — the K's lime arm, scaled to architecture */}
          <div data-hero-slash className="pointer-events-none absolute -right-[18vw] -top-[10vh] hidden h-[115vh] w-[62vw] md:block" aria-hidden>
            <div data-hero-slash-inner className="h-full w-full">
              <svg viewBox="0 0 600 900" preserveAspectRatio="none" className="h-full w-full animate-slash-in">
                <defs>
                  <linearGradient id="hero-slash" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#d8f938" stopOpacity="0" />
                    <stop offset="0.45" stopColor="#d8f938" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#d8f938" />
                  </linearGradient>
                </defs>
                <path d="M380 0H600L220 900H0Z" fill="url(#hero-slash)" />
              </svg>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--gnk-bg))_30%,hsl(var(--gnk-bg)/0.6)_60%,transparent)]" aria-hidden />

          <Container className="relative">
            <div data-hero-copy className="max-w-4xl">
              <p className="eyebrow hero-in">Marketing · Growth · AI</p>

              <h1 className="mt-8 font-display text-display-xl font-semibold text-gnk-fg">
                <SplitWords
                  mode="hero"
                  delay={0.05}
                  segments={['Revenue infrastructure for teams who', { text: 'ship outcomes.', className: 'text-slash' }]}
                />
              </h1>

              <p
                className="hero-in mt-8 max-w-xl text-lg leading-relaxed text-gnk-muted sm:text-xl"
                style={{ ['--d' as string]: '0.45s' }}
              >
                Senior-led marketing craft, wired to an AI layer that qualifies and routes demand in real time—measured on
                pipeline, not vanity.
              </p>

              <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ ['--d' as string]: '0.55s' }}>
                <ButtonLink href="/free-ai-audit" variant="primary" className="!px-7 !py-3.5 !text-[0.9375rem]">
                  Get free AI audit
                </ButtonLink>
                <ButtonLink href="#how-it-works" variant="secondary" className="!px-7 !py-3.5 !text-[0.9375rem]">
                  See how it works
                </ButtonLink>
              </div>

              <p
                className="hero-in mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-gnk-muted"
                style={{ ['--d' as string]: '0.65s' }}
              >
                ISO-ready discipline <span className="mx-2 text-gnk-accent">/</span> Brand-safe automation{' '}
                <span className="mx-2 text-gnk-accent">/</span> Board-clear reporting
              </p>
            </div>

            <div data-hero-engine className="hero-in mt-20 sm:mt-24" style={{ ['--d' as string]: '0.75s' }}>
              <HeroEngine />
            </div>
          </Container>
        </section>
      </HeroParallax>

      {/* ── Trust + stats ───────────────────────────────────── */}
      <MotionSection as="section" className="pb-8 pt-16 sm:pt-20">
        <Container>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-gnk-muted">
            Trusted by teams who outgrow activity metrics
          </p>
          <div className="mask-fade-x mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-16 pr-16 hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  aria-hidden={i >= logos.length}
                  className="font-display text-xl font-semibold tracking-tight text-gnk-muted/70 transition-colors hover:text-gnk-fg"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-gnk-border bg-gnk-border sm:grid-cols-2 lg:grid-cols-4 dark:border-white/[0.07] dark:bg-white/[0.07]">
            {stats.map((s) => (
              <div key={s.label} data-reveal-child className="bg-gnk-bg p-7 sm:p-8">
                <p className="font-display text-5xl font-semibold tracking-[-0.04em] text-gnk-fg">
                  <span className="text-gradient">
                    <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-4 text-sm font-medium text-gnk-fg">{s.label}</p>
                <p className="mt-1 text-xs text-gnk-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      {/* ── How it works (pinned scroll story) ─────────────── */}
      <StoryScroll />

      <ScrollMarquee />

      {/* ── Reality check ───────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Reality check"
                title="Noise is usually a systems problem—not a channel problem."
                description="We work with leaders who want proof: what to do, why it matters, and how we will show impact on pipeline and margin."
              />
              <div className="gradient-border mt-10 rounded-3xl bg-gnk-card/50 p-6 backdrop-blur-xl">
                <MarketingIllustration />
              </div>
            </div>
            <div className="grid gap-4">
              <HomeProblemIconCards />
            </div>
          </div>
        </Container>
      </MotionSection>

      {/* ── AI systems bento ────────────────────────────────── */}
      <MotionSection as="section" className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[min(100vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(216,249,56,0.099),transparent)] blur-2xl"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="AI-powered growth systems"
            title={
              <SplitWords segments={['We automate the repetitive 80% so your team', { text: 'owns strategy.', className: 'text-slash' }]} />
            }
            description="Replace manual follow-up, triage, and reporting with measured AI layers—then scale what already wins. This is the architecture prospects feel in the first three seconds: advanced, intentional, expensive."
            align="center"
          />
          <div className="mt-16 grid gap-4 lg:grid-cols-4">
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-gnk-card/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-2 lg:row-span-2">
              <p className="eyebrow">Automation fabric</p>
              <p className="mt-4 max-w-sm font-display text-2xl font-semibold tracking-tight text-gnk-fg">
                Policy gates · live routing · every lead answered.
              </p>
              <div className="mt-8">
                <AutomationIllustration />
              </div>
            </div>
            <HomeAIShowcaseIconCards />
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/services/ai" variant="primary">
              Explore all AI systems
            </ButtonLink>
            <ButtonLink href="/free-ai-audit" variant="secondary">
              Free AI audit
            </ButtonLink>
          </div>
        </Container>
      </MotionSection>

      {/* ── Capabilities ────────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Capabilities"
              title="Full-funnel marketing with senior oversight."
              description="Every capability is executed with documentation, QA, and reporting your CFO will not roll their eyes at."
            />
            <div className="flex shrink-0 gap-3">
              <ButtonLink href="/services" variant="outline">
                Services overview
              </ButtonLink>
              <ButtonLink href="/services/ai" variant="outline">
                AI systems hub
              </ButtonLink>
            </div>
          </div>
          <ul className="mt-14 grid border-t border-gnk-border md:grid-cols-2 md:gap-x-12 dark:border-white/[0.07]">
            {SERVICES.map((s, i) => (
              <li key={s.slug} className="border-b border-gnk-border dark:border-white/[0.07]">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex items-start gap-5 py-6 transition-colors"
                >
                  <span className="mt-1 font-mono text-[11px] text-gnk-muted transition-colors group-hover:text-gnk-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold tracking-tight text-gnk-fg transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                      {s.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-gnk-muted">{s.shortDescription}</span>
                  </span>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gnk-border text-gnk-muted transition-all duration-500 ease-out-expo group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-ink dark:border-white/10">
                    →
                  </span>
                  <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-brand-gradient transition-transform duration-700 ease-out-expo group-hover:scale-x-100" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </MotionSection>

      {/* ── Operating system ────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Operating system"
              title="Diagnose → design → ship → compound."
              description="We are not a ticket factory. We partner with your team, protect brand quality, and tie every decision to business outcomes."
            />
            <div className="gradient-border rounded-3xl bg-gnk-card/50 p-6 backdrop-blur-xl">
              <GrowthIllustration />
            </div>
          </div>

          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </Container>
      </MotionSection>

      {/* ── Proof ───────────────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Proof"
                title="Outcomes we aim for—by stage and category."
                description="Representative patterns. In proposals we benchmark against your market and your data maturity."
              />
              <div className="gradient-border mt-10 rounded-3xl bg-gnk-card/50 p-6 backdrop-blur-xl">
                <SalesIllustration />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cases.map((c) => (
                <GlowCard key={c.name} href="/case-studies" className="h-full">
                  <p className="font-display text-2xl font-semibold leading-tight tracking-tight text-gnk-fg">{c.result}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gnk-accent">{c.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gnk-muted">{c.detail}</p>
                  <span className="mt-6 inline-flex text-sm font-medium text-gnk-muted transition-colors group-hover/card:text-gnk-fg">
                    Case studies →
                  </span>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </MotionSection>

      {/* ── Testimonials ────────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Clients" title="What marketing leaders say" align="center" />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} data-reveal-child className="gradient-border relative rounded-3xl bg-gnk-card/60 p-8 backdrop-blur-xl sm:p-10">
                <svg viewBox="0 0 32 24" className="h-6 w-8 text-gnk-accent" fill="currentColor" aria-hidden>
                  <path d="M0 24V14C0 6 4.5 1.3 12 0l1.4 3.4C9 4.8 7 7.6 6.8 11H12v13H0Zm19 0V14c0-8 4.5-12.7 12-14l1 3.4C27.6 4.8 25.6 7.6 25.4 11H31v13H19Z" />
                </svg>
                <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed tracking-tight text-gnk-fg sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Initials name={t.name} />
                  <span className="text-sm">
                    <span className="block font-semibold text-gnk-fg">{t.name}</span>
                    <span className="text-gnk-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </MotionSection>

      {/* ── Final CTA ───────────────────────────────────────── */}
      <MotionSection as="section" className="pb-8 pt-12">
        <Container>
          <div className="gradient-border relative overflow-hidden rounded-[2.5rem] bg-gnk-card/70 p-8 backdrop-blur-xl sm:p-14 lg:p-16">
            <svg viewBox="0 0 600 900" preserveAspectRatio="none" className="pointer-events-none absolute -right-10 top-0 hidden h-full w-[42%] lg:block" aria-hidden>
              <path d="M380 0H600L220 900H0Z" fill="#d8f938" />
            </svg>
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(245,245,242,0.07),transparent)]" aria-hidden />
            <div className="relative max-w-2xl">
              <p className="eyebrow">Free AI audit</p>
              <h2 className="mt-5 font-display text-display-lg font-semibold text-gnk-fg">
                <SplitWords segments={['Ready for', { text: 'infrastructure-grade', className: 'text-slash' }, 'growth?']} />
              </h2>
              <p className="mt-5 text-lg text-gnk-muted">
                Start with a free AI audit: funnel leaks, automation surfaces, and a prioritized 90-day roadmap.
              </p>
              <ul className="mt-8 grid gap-3 text-sm text-gnk-muted sm:grid-cols-1">
                {[
                  'Where revenue leaks today (and why)',
                  'Quick wins vs. structural bets',
                  'A plan aligned to your team’s capacity',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gnk-accent/15">
                      <CheckIcon className="h-3.5 w-3.5 text-gnk-accent" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/free-ai-audit" variant="primary" className="!px-7 !py-3.5">
                  Get free AI audit
                </ButtonLink>
                <ButtonLink href="/free-audit" variant="secondary" className="!px-7 !py-3.5">
                  Classic growth audit
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs text-gnk-muted">
                Prefer to talk?{' '}
                <Link href="/contact" className="text-gnk-fg underline decoration-gnk-accent/40 underline-offset-4 hover:decoration-gnk-accent">
                  Book a strategy call
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}

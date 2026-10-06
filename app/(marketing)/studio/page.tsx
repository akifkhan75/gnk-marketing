import Link from 'next/link';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { SplitWords } from '@/components/motion/SplitWords';
import { GlowCard } from '@/components/premium/GlowCard';
import { MotionSection } from '@/components/premium/MotionSection';
import { FormatMorph } from '@/components/studio/FormatMorph';
import { StudioHeroCanvas } from '@/components/studio/StudioHeroCanvas';
import { breadcrumbJsonLd, buildPageMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'GNK Studio — Ad Creative, Video & Product Photography',
  description:
    'GNK Studio produces digital ad creative: motion graphics and animated ads, video ads for Reels, TikTok and YouTube, product photography, lifestyle shoots, and static ads—built for performance.',
  path: '/studio',
  keywords: [
    'ad creative studio',
    'video ads production',
    'motion graphics ads',
    'animated ads',
    'product photography',
    'ecommerce product photography',
    'UGC style video ads',
    'product photography Islamabad',
    'video production Islamabad',
  ],
});

const LIME = '#d8f938';

/* Mini illustrations — animate on card hover */
const art = {
  motion: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <path d="M8 20h28M4 36h36M10 52h24" stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" className="transition-transform duration-500 group-hover/card:-translate-x-2" />
      <path d="M70 8h34L72 64H38Z" fill={LIME} className="transition-transform duration-700 ease-out-expo group-hover/card:translate-x-3 group-hover/card:-rotate-6" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <rect x="6" y="6" width="80" height="50" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2.5" />
      <path d="M38 20l18 11-18 11Z" fill={LIME} className="transition-transform duration-500 group-hover/card:scale-125" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={94 + (i % 3) * 7} y={i < 3 ? 22 : 40} width="4" height={[14, 22, 10, 18, 12, 20][i]} rx="2" fill="currentColor" opacity="0.4" className="ed-wave" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
      <rect x="6" y="62" width="80" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="6" y="62" width="34" height="4" rx="2" fill={LIME} />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <rect x="20" y="16" width="80" height="48" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2.5" />
      <rect x="44" y="8" width="22" height="10" rx="3" fill="currentColor" opacity="0.5" />
      <circle cx="60" cy="40" r="15" fill="none" stroke={LIME} strokeWidth="3" />
      <circle cx="60" cy="40" r="7" fill="currentColor" opacity="0.5" className="transition-transform duration-500 group-hover/card:scale-50" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
      <circle cx="88" cy="26" r="3" fill={LIME} className="rec-blink" />
    </svg>
  ),
  lifestyle: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      <circle cx="92" cy="18" r="9" fill={LIME} className="transition-transform duration-700 group-hover/card:-translate-y-1" />
      <path d="M4 66 36 30l22 22 14-12 30 26Z" fill="currentColor" opacity="0.3" />
      <circle cx="48" cy="30" r="7" fill="currentColor" opacity="0.7" />
      <path d="M36 66c0-14 6-24 12-24s12 10 12 24" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  statics: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto overflow-visible" aria-hidden>
      {[0, 1, 2].map((i) => (
        <g key={i} className="transition-transform duration-500 ease-out-expo" style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
          <rect
            x={34 + i * 8}
            y={10 - i * 2}
            width="44"
            height="56"
            rx="8"
            fill={i === 2 ? LIME : 'hsl(var(--gnk-card))'}
            stroke="currentColor"
            strokeOpacity={i === 2 ? 0 : 0.4}
            strokeWidth="2"
            className={`transition-transform duration-500 ${i === 0 ? 'group-hover/card:-translate-x-5 group-hover/card:-rotate-6' : i === 1 ? '' : 'group-hover/card:translate-x-5 group-hover/card:rotate-6'}`}
            style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          />
        </g>
      ))}
      <rect x="58" y="44" width="28" height="6" rx="3" fill="#040404" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 120 72" className="h-16 w-auto" aria-hidden>
      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={i}
          x={8 + (i % 4) * 27}
          y={i < 4 ? 6 : 38}
          width="22"
          height="28"
          rx="6"
          fill={LIME}
          className="ill-light"
          style={{ animationDelay: `${(i * 0.37) % 3}s`, opacity: 0.4 }}
        />
      ))}
    </svg>
  ),
};

const services = [
  {
    key: 'motion' as const,
    title: 'Motion & animated ads',
    body: 'Scroll-stopping motion graphics, kinetic typography, and animated product reveals built for paid social and display.',
  },
  {
    key: 'video' as const,
    title: 'Video ads',
    body: 'Reels, Shorts, TikTok, and YouTube cuts—scripted, shot, and edited to win the first three seconds.',
  },
  {
    key: 'product' as const,
    title: 'Product photography',
    body: 'Clean e-commerce packshots, white-background catalog images, and detail close-ups that sell the texture.',
  },
  {
    key: 'lifestyle' as const,
    title: 'Lifestyle & brand shoots',
    body: 'On-model and in-context imagery that shows your product in real life—for ads, sites, and social.',
  },
  {
    key: 'statics' as const,
    title: 'Static & carousel ads',
    body: 'Feed, story, and carousel creatives designed around a hook, an offer, and a clear call to action.',
  },
  {
    key: 'ai' as const,
    title: 'AI-assisted variations',
    body: 'Rapid, on-brand variations of winning concepts—new hooks, backgrounds, and sizes for creative testing.',
  },
];

const steps = [
  { step: '01', title: 'Brief & strategy', desc: 'Audience, offer, and channel goals—so every asset has a job before anything is shot.' },
  { step: '02', title: 'Concept & storyboard', desc: 'Hooks, scripts, shot lists, and moodboards you approve before production.' },
  { step: '03', title: 'Shoot & produce', desc: 'Product, lifestyle, and video production plus motion design and animation.' },
  { step: '04', title: 'Edit, version & test', desc: 'Cut-downs for every placement, delivered for testing—then iterate on what wins.' },
];

const deliverables = ['9:16', '4:5', '1:1', '16:9', 'MP4', 'GIF', 'PNG', 'JPG', 'RAW', 'Captions', 'Cut-downs', 'Thumbnails'];

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: 'GNK Studio — ad creative production',
          description:
            'Motion graphics and animated ads, video ads, product photography, lifestyle shoots, static ads, and AI-assisted creative variations.',
          path: '/studio',
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Studio', path: '/studio' }])} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow hero-in justify-center">GNK Studio</p>
            <h1 className="mt-6 font-display text-display-xl font-semibold text-gnk-fg">
              <SplitWords mode="hero" segments={['Ad creative that', { text: 'stops the scroll.', className: 'text-slash' }]} />
            </h1>
            <p className="hero-in mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-gnk-muted sm:text-xl" style={{ ['--d' as string]: '0.4s' }}>
              Animations, video, and product photography—produced in-house and built to perform in the placements you
              actually buy.
            </p>
            <div className="hero-in mt-10 flex flex-col justify-center gap-3 sm:flex-row" style={{ ['--d' as string]: '0.5s' }}>
              <ButtonLink href="/contact" variant="primary" className="!px-7 !py-3.5">
                Brief the Studio
              </ButtonLink>
              <ButtonLink href="#studio-services" variant="secondary" className="!px-7 !py-3.5">
                What we produce
              </ButtonLink>
            </div>
          </div>

          <div className="hero-in mx-auto mt-16 max-w-5xl" style={{ ['--d' as string]: '0.6s' }}>
            <StudioHeroCanvas />
          </div>
        </Container>
      </section>

      {/* ── Deliverables ticker ─────────────────────────────── */}
      <div className="mask-fade-x overflow-hidden border-y border-gnk-border py-5 dark:border-white/[0.06]" aria-label="Deliverable formats">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...deliverables, ...deliverables].map((d, i) => (
            <span key={i} aria-hidden={i >= deliverables.length} className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.18em] text-gnk-muted">
              {d}
              <span className="h-2.5 w-4 bg-[#d8f938] [clip-path:polygon(45%_0,100%_0,55%_100%,0_100%)]" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ────────────────────────────────────────── */}
      <MotionSection as="section" id="studio-services" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we produce"
            title="Everything your ads need to look expensive—and convert."
            description="One studio for motion, video, and photography, so creative stays consistent across every channel and test."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <GlowCard key={s.key} className="h-full">
                <div className="flex h-20 items-center text-gnk-fg">{art[s.key]}</div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-gnk-fg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{s.body}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </MotionSection>

      {/* ── Formats (pinned GSAP morph) ─────────────────────── */}
      <FormatMorph />

      {/* ── Process ─────────────────────────────────────────── */}
      <MotionSection as="section" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How a production runs"
            title="From brief to a library of winning assets."
            description="Creative is part of the growth system: we brief from your data, produce, then feed results back into the next round."
          />
          <div className="mt-16">
            <ProcessTimeline steps={steps} />
          </div>
        </Container>
      </MotionSection>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <MotionSection as="section" className="pb-8 pt-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#d8f938] p-8 text-ink sm:p-14 lg:p-16">
            <svg viewBox="0 0 600 900" preserveAspectRatio="none" className="pointer-events-none absolute -right-16 top-0 hidden h-full w-[38%] lg:block" aria-hidden>
              <path d="M380 0H600L220 900H0Z" fill="#040404" />
            </svg>
            <div className="relative max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70">Start a production</p>
              <h2 className="mt-5 font-display text-display-lg font-semibold">Brief us your next campaign.</h2>
              <p className="mt-5 text-lg text-ink/75">
                Tell us the product, the offer, and where it will run. We&apos;ll come back with concepts and a production
                plan.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-[#d8f938] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Brief the Studio <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-ink"
                >
                  See retainers
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}

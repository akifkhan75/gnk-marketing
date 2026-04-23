import Link from 'next/link';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { JsonLd } from '@/components/marketing/JsonLd';
import { AIMarketingSystemFlow } from '@/components/visuals';
import { buildPageMetadata, faqPageJsonLd, serviceJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Marketing Agency Growth System | Marketing Automation Services',
  description:
    'An AI marketing agency service that replaces manual follow-up with an AI-powered growth system: traffic capture, AI qualification, marketing automation workflows, and conversion optimization—built for lead generation and revenue.',
  path: '/services/ai-marketing',
  keywords: [
    'ai marketing agency',
    'marketing automation services',
    'lead generation agency',
    'ai lead generation',
    'ai chatbot marketing',
    'real estate marketing',
    'marketing automation workflows',
  ],
});

const faqs = [
  {
    question: 'Is this a chatbot project or a full growth system?',
    answer:
      'A full system. Chat is one interface. The system includes qualification logic, routing, follow-up automation, funnel experiments, and measurement so conversion improves—not just “engagement.”',
  },
  {
    question: 'What data do you need to start?',
    answer:
      'At minimum: current lead sources, your intake questions, how your team qualifies leads today, and where leads go (CRM / inbox / calendar). We can start lightweight and mature the system over time.',
  },
  {
    question: 'Will AI replace my sales team?',
    answer:
      'No. It removes repetitive triage and follow-up so humans spend time on high-intent conversations. We keep human QA at key handoff points and design guardrails for brand and compliance.',
  },
];

export default function AIMarketingServicePage() {
  const serviceLd = serviceJsonLd({
    name: 'AI-Powered Growth System',
    description:
      'An end-to-end AI marketing system that qualifies leads, automates follow-up, and optimizes funnels to increase conversion and reduce manual work.',
    path: '/services/ai-marketing',
  });

  const faqLd = faqPageJsonLd({
    path: '/services/ai-marketing',
    questions: faqs.map((f) => ({ question: f.question, answer: f.answer })),
  });

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      {/* 1) HERO */}
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gnk-accent">
            AI-Powered Growth System
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            AI-driven growth, automation, and conversion
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Turn traffic into qualified conversations automatically—so you get more leads, higher intent, and less
            manual follow-up. Built like infrastructure: measurable, fast, and designed to compound.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/free-ai-audit" variant="primary">
              Get Free AI Audit
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book demo
            </ButtonLink>
            <ButtonLink href="/services/ai" variant="outline">
              Explore AI systems hub
            </ButtonLink>
          </div>

          <div className="mt-12 rounded-3xl bg-gnk-card/25 px-4 py-10 dark:bg-gnk-card/15 sm:px-8 sm:py-12">
            <AIMarketingSystemFlow />
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">
              Traffic → AI Qualification → Automation → Conversion
            </p>
          </div>
        </Container>
      </section>

      {/* 2) PROBLEM */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The leak"
            title="Most marketing teams are doing manual work that should be a system."
            description="If your pipeline depends on humans being fast and perfect, it will break under volume."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Manual marketing eats time',
                body: 'Leads get handled through inboxes, spreadsheets, and “tribal process.” Follow-up slips, routing is slow, and outcomes become random.',
              },
              {
                title: 'Leads are unqualified',
                body: 'You pay for clicks, then sales spends time filtering. Without qualification logic, you scale cost—not revenue.',
              },
              {
                title: 'Low conversion rates',
                body: 'The funnel is treated like a landing page, not a decision engine. Messaging mismatches, weak offers, and slow response kill intent.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-gnk-border bg-gnk-card p-7 shadow-card">
                <h3 className="font-display text-lg font-bold text-gnk-fg">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3) AI SOLUTION */}
      <section className="border-y border-gnk-border bg-gnk-card/25 py-16 dark:bg-gnk-card/10 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The system"
            gradientTitle
            title="AI layers that qualify, route, and improve conversion—without chaos."
            description="We build a closed-loop growth system where every interaction strengthens qualification and reduces time-to-revenue."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: 'AI chatbots (qualification + handoff)',
                body: 'Capture intent on web/WhatsApp, ask the right questions, and route high-intent leads instantly—without making your brand feel automated.',
              },
              {
                title: 'Automation workflows',
                body: 'Follow-ups, reminders, enrichment, CRM routing, and calendar flows that run 24/7. Humans step in only when it matters.',
              },
              {
                title: 'Predictive targeting',
                body: 'Use behavior + funnel signals to prioritize budget and attention. The goal is not more traffic—it’s more qualified pipeline.',
              },
              {
                title: 'Funnel optimization',
                body: 'Message/offer alignment, landing path experiments, and speed-to-lead improvements tied to conversion and booked revenue.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gnk-border bg-gnk-bg p-7">
                <h3 className="font-display text-lg font-bold text-gnk-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4) SYSTEM FLOW (visual) */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="System flow"
            title="Traffic → AI Qualification → Automation → Conversion"
            description="A simple map with a hard requirement: every stage must reduce manual work and increase qualified intent."
            align="center"
          />
          <div className="mt-12 rounded-3xl border border-gnk-border bg-gnk-card p-6 sm:p-10">
            <AIMarketingSystemFlow />
            <div className="mt-8 grid gap-3 text-sm text-gnk-muted sm:grid-cols-2">
              <p>
                <span className="font-semibold text-gnk-fg">Traffic</span> is useless without fast routing and offer
                clarity.
              </p>
              <p>
                <span className="font-semibold text-gnk-fg">AI Qualification</span> ensures sales only sees high-intent
                leads.
              </p>
              <p>
                <span className="font-semibold text-gnk-fg">Automation</span> creates consistent follow-up and prevents
                leakage.
              </p>
              <p>
                <span className="font-semibold text-gnk-fg">Conversion</span> improves through experimentation and
                measurement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5) FEATURES */}
      <section className="border-y border-gnk-border bg-gnk-card/25 py-16 dark:bg-gnk-card/10 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What you get" title="Features that drive speed-to-lead and conversion." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'AI chatbots', body: 'Brand-safe chat flows that qualify and hand off cleanly.' },
              { title: 'AI lead scoring', body: 'Prioritize high-intent leads using behavioral + form signals.' },
              { title: 'Automated follow-ups', body: 'Sequenced outreach across email/SMS/WhatsApp with guardrails.' },
              { title: 'Personalized campaigns', body: 'Targeting and messaging tuned to funnel stage and intent.' },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl border border-gnk-border bg-gnk-bg p-7">
                <h3 className="font-display text-base font-bold text-gnk-fg">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6) PROCESS */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Implementation" title="A clear process. No tool chaos." />
          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              {
                step: 'Analyze',
                detail: 'Audit funnel leakage, response time, qualification criteria, and routing—then define success metrics.',
              },
              {
                step: 'Build system',
                detail: 'Design flows, prompts, and guardrails. Connect CRM, forms, calendar, and tracking.',
              },
              {
                step: 'Automate',
                detail: 'Ship workflows for follow-up, enrichment, scoring, and handoff—tested end-to-end.',
              },
              {
                step: 'Optimize',
                detail: 'Run conversion experiments and iterate based on intent signals and revenue outcomes.',
              },
            ].map((p) => (
              <li key={p.step} className="rounded-3xl border border-gnk-border bg-gnk-card p-7">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gnk-accent">
                  {p.step}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{p.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7) USE CASES */}
      <section className="border-t border-gnk-border bg-gnk-card py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Use cases"
            title="Where AI qualification + automation changes outcomes fast."
            description="Three common patterns where speed-to-lead and intent routing directly impacts revenue."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Real estate',
                body: 'AI property assistant, buyer/seller qualification, appointment booking, and after-hours routing that protects response time.',
                link: { href: '/real-estate-growth-system', label: 'See real estate system' },
              },
              {
                title: 'eCommerce',
                body: 'Intent capture, product guidance, abandoned cart recovery, segmentation, and creative testing loops tied to margin.',
                link: { href: '/services', label: 'Explore marketing services' },
              },
              {
                title: 'Service businesses',
                body: 'Lead scoring, route-to-rep, quote flows, and follow-up sequences that reduce no-shows and improve booked calls.',
                link: { href: '/contact', label: 'Talk through your funnel' },
              },
            ].map((u) => (
              <div key={u.title} className="rounded-3xl border border-gnk-border bg-gnk-bg p-7">
                <h3 className="font-display text-lg font-bold text-gnk-fg">{u.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{u.body}</p>
                <Link href={u.link.href} className="mt-5 inline-block text-sm font-semibold text-gnk-accent hover:underline">
                  {u.link.label} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8) CTA */}
      <section className="border-t border-gnk-border py-16 sm:py-20">
        <Container>
          <div className="rounded-4xl border border-gnk-border bg-gradient-to-br from-gnk-accent/[0.08] via-gnk-card to-gnk-accent-2/[0.06] p-10 shadow-glow-lg dark:from-violet-950/40 dark:via-gnk-card/50 dark:to-cyan-950/20 sm:p-14">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-gnk-fg sm:text-4xl">
                Want a growth system that runs even when your team is offline?
              </h2>
              <p className="mt-4 text-lg text-gnk-muted">
                Book a demo or start with a free AI audit. We’ll map automation surfaces, qualification logic, and a
                prioritized 90-day rollout.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary" className="!py-3">
                  Book Demo
                </ButtonLink>
                <ButtonLink href="/free-ai-audit" variant="secondary" className="!py-3">
                  Free AI Audit
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-gnk-muted">
                Prefer to browse first?{' '}
                <Link href="/services/ai" className="font-semibold text-gnk-accent hover:underline">
                  See the AI systems catalog
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs (on-page) */}
      <section className="pb-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">FAQs</h2>
          <div className="mt-8 divide-y divide-gnk-border rounded-3xl border border-gnk-border bg-gnk-card">
            {faqs.map((f) => (
              <div key={f.question} className="p-6 sm:p-8">
                <h3 className="font-display font-semibold text-gnk-fg">{f.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}


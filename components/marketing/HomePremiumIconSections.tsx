'use client';

import {
  IconAnalytics,
  IconBrand,
  IconCompound,
  IconDesign,
  IconDiagnose,
  IconFragmented,
  IconPipelineLeak,
  IconBrittleData,
  IconShip,
} from '@/components/icons/premium/GnkPremiumIcons';
import { IconCard } from '@/components/premium/IconCard';
import { AI_SERVICES } from '@/lib/ai-services';
import { getAIServiceIcon } from '@/lib/ai-service-icon-map';
import { getServiceIcon } from '@/lib/service-icon-map';
import type { Service } from '@/lib/services';

const trustMetrics = [
  { icon: IconCompound, label: '24/7 AI systems', sub: 'Capture & qualify while you sleep' },
  { icon: IconBrand, label: 'Human QA gates', sub: 'Brand-safe automation' },
  { icon: IconAnalytics, label: 'Revenue reporting', sub: 'Pipeline-grade measurement' },
] as const;

const problems = [
  {
    icon: IconPipelineLeak,
    title: 'Traffic without pipeline',
    body: 'Rankings and clicks look fine—but SQLs do not move. We connect acquisition to conversion and revenue proof.',
  },
  {
    icon: IconFragmented,
    title: 'Fragmented channels',
    body: 'Paid, organic, email, and sales tell different stories. We align messaging, measurement, and handoffs.',
  },
  {
    icon: IconBrittleData,
    title: 'Brittle tracking',
    body: 'If leadership cannot trust the numbers, teams optimize opinions. We build GA4/GTM foundations you can defend.',
  },
] as const;

const process = [
  {
    step: '01',
    icon: IconDiagnose,
    title: 'Diagnose',
    desc: 'Economics, funnel leaks, and technical constraints—before we spend a dollar on tactics.',
  },
  {
    step: '02',
    icon: IconDesign,
    title: 'Design',
    desc: 'A prioritized roadmap: quick wins, structural bets, and clear success metrics.',
  },
  {
    step: '03',
    icon: IconShip,
    title: 'Ship',
    desc: 'Execution with QA discipline: launches, tests, and documentation your team can run.',
  },
  {
    step: '04',
    icon: IconCompound,
    title: 'Compound',
    desc: 'Weekly learning loops. Scale what wins; cut what fails—without ego.',
  },
] as const;

const aiShowcase = [
  'ai-chatbots-conversational-ai',
  'ai-sales-funnels',
  'ai-ads-optimization',
  'ai-marketing-automation',
] as const;

export function HomeTrustMetricCards() {
  return (
    <>
      {trustMetrics.map((m) => (
        <IconCard
          key={m.label}
          icon={m.icon}
          title={m.label}
          description={m.sub}
          compact
          align="center"
          className="[&_h3]:text-sm [&_p]:text-xs"
        />
      ))}
    </>
  );
}

export function HomeProblemIconCards() {
  return (
    <>
      {problems.map((p) => (
        <IconCard key={p.title} icon={p.icon} title={p.title} description={p.body} />
      ))}
    </>
  );
}

export function HomeAIShowcaseIconCards() {
  return (
    <>
      {aiShowcase.map((slug) => {
        const item = AI_SERVICES.find((s) => s.slug === slug)!;
        const AiIcon = getAIServiceIcon(slug);
        return (
          <IconCard
            key={slug}
            icon={AiIcon}
            href={`/services/ai/${slug}`}
            title={item.title}
            description={item.shortDescription}
            compact
            footer={
              <span className="text-xs font-semibold text-gnk-accent-2 transition group-hover/iconcard:opacity-90 dark:text-cyan-400/90">
                Explore →
              </span>
            }
          />
        );
      })}
    </>
  );
}

export function HomeServicesIconCards({ services }: { services: Service[] }) {
  return (
    <>
      {services.map((s) => {
        const SvcIcon = getServiceIcon(s.slug);
        return (
          <IconCard
            key={s.slug}
            icon={SvcIcon}
            href={`/services/${s.slug}`}
            title={s.title}
            description={s.shortDescription}
            footer={
              <span className="text-sm font-medium text-gnk-accent-2 transition group-hover/iconcard:opacity-90 dark:text-cyan-400/90">
                Explore →
              </span>
            }
          />
        );
      })}
    </>
  );
}

export function HomeProcessIconCards() {
  return (
    <>
      {process.map((p) => (
        <IconCard
          key={p.step}
          icon={p.icon}
          badge={p.step}
          title={p.title}
          description={p.desc}
          compact
        />
      ))}
    </>
  );
}

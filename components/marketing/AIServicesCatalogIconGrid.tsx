'use client';

import { IconCard } from '@/components/premium/IconCard';
import { getAIServiceIcon } from '@/lib/ai-service-icon-map';
import type { AIService } from '@/lib/ai-services';

export function AIServicesCatalogIconGrid({ services }: { services: AIService[] }) {
  return (
    <>
      {services.map((s) => {
        const Icon = getAIServiceIcon(s.slug);
        return (
          <IconCard
            key={s.slug}
            icon={Icon}
            href={`/services/ai/${s.slug}`}
            title={s.title}
            description={s.shortDescription}
            className="border-gnk-border bg-gnk-bg hover:border-gnk-accent/35 hover:shadow-glow"
            footer={<span className="text-sm font-semibold text-gnk-accent">View system →</span>}
          />
        );
      })}
    </>
  );
}

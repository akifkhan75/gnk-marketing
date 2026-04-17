'use client';

import { IconCard } from '@/components/premium/IconCard';
import { getServiceIcon } from '@/lib/service-icon-map';
import type { Service } from '@/lib/services';

export function ServicesCatalogIconGrid({ services }: { services: Service[] }) {
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
            className="border-gnk-border bg-gnk-card !shadow-card hover:border-gnk-accent/30 hover:shadow-glow"
            footer={<span className="text-sm font-semibold text-gnk-accent">View service →</span>}
          />
        );
      })}
    </>
  );
}

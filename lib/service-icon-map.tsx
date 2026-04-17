import type { ComponentType } from 'react';
import type { PremiumIconProps } from '@/components/icons/premium/GnkPremiumIcons';
import {
  IconAnalytics,
  IconAutomation,
  IconBrand,
  IconContent,
  IconCopywriting,
  IconCro,
  IconEmail,
  IconFunnel,
  IconLanding,
  IconLocalSeo,
  IconPpc,
  IconSeo,
  IconSocialManagement,
  IconSocialMarketing,
  IconTechnicalSeo,
  IconWeb,
} from '@/components/icons/premium/GnkPremiumIcons';

export type ServiceIconComponent = ComponentType<PremiumIconProps>;

export const SERVICE_ICON_MAP: Record<string, ServiceIconComponent> = {
  seo: IconSeo,
  'local-seo': IconLocalSeo,
  'technical-seo': IconTechnicalSeo,
  'ppc-advertising': IconPpc,
  'social-media-marketing': IconSocialMarketing,
  'social-media-management': IconSocialManagement,
  'content-marketing': IconContent,
  copywriting: IconCopywriting,
  'email-marketing-automation': IconEmail,
  'conversion-rate-optimization': IconCro,
  'funnel-building': IconFunnel,
  'branding-positioning': IconBrand,
  'website-design-development': IconWeb,
  'landing-page-optimization': IconLanding,
  'marketing-automation': IconAutomation,
  'analytics-tracking': IconAnalytics,
};

export function getServiceIcon(slug: string): ServiceIconComponent {
  return SERVICE_ICON_MAP[slug] ?? IconAutomation;
}

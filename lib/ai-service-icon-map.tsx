import type { ComponentType } from 'react';
import type { PremiumIconProps } from '@/components/icons/premium/GnkPremiumIcons';
import {
  IconAiChat,
  IconAiLead,
  IconAutomation,
  IconContent,
  IconCro,
  IconFunnel,
  IconPpc,
  IconTechnicalSeo,
  IconWeb,
} from '@/components/icons/premium/GnkPremiumIcons';

export type AIServiceIconComponent = ComponentType<PremiumIconProps>;

export const AI_SERVICE_ICON_MAP: Record<string, AIServiceIconComponent> = {
  'ai-marketing-automation': IconAutomation,
  'ai-lead-generation-systems': IconAiLead,
  'ai-chatbots-conversational-ai': IconAiChat,
  'ai-content-creation': IconContent,
  'ai-ads-optimization': IconPpc,
  'ai-sales-funnels': IconFunnel,
  'ai-personalization-systems': IconCro,
  'ai-data-analytics-insights': IconTechnicalSeo,
  'custom-ai-solutions': IconWeb,
  'ai-voice-call-automation': IconAiChat,
};

export function getAIServiceIcon(slug: string): AIServiceIconComponent {
  return AI_SERVICE_ICON_MAP[slug] ?? IconAutomation;
}

import { HomePage } from '@/components/marketing/HomePage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Marketing Agency | Marketing Automation Services | Lead Generation Agency',
  description:
    'GNK Marketing is an AI-first marketing agency building automation systems that qualify leads, reduce manual follow-up, and increase conversion. Marketing automation services, AI lead generation, and performance growth.',
  path: '/',
  keywords: [
    'ai marketing agency',
    'marketing automation services',
    'lead generation agency',
    'ai lead generation',
    'ai chatbot marketing',
    'ai marketing strategies',
    'real estate marketing',
  ],
});

export default function Page() {
  return <HomePage />;
}

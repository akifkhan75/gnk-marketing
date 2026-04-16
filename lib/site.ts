export const SITE_URL = 'https://www.gnkmarketing.com' as const;

export const SITE_NAME = 'GNK Marketing';

export const SITE_DESCRIPTION =
  'GNK Marketing is an AI-first performance agency. We build automated growth systems—chatbots, funnels, ads ops, and analytics—alongside SEO, paid media, and CRO to turn traffic into pipeline and revenue.';

export const COMPANY = {
  name: SITE_NAME,
  legalName: 'GNK Marketing',
  url: SITE_URL,
  email: 'hello@gnkmarketing.com',
  phone: '+1 (555) 010-4200',
  sameAs: [
    'https://www.linkedin.com/company/gnkmarketing',
    'https://twitter.com/gnkmarketing',
  ],
  logo: `${SITE_URL}/icon`,
} as const;

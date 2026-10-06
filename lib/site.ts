export const SITE_URL = 'https://www.gnkmarketing.com' as const;

export const SITE_NAME = 'GNK Marketing';

export const SITE_TAGLINE = 'AI Powered Growth Systems';

export const SITE_DESCRIPTION =
  'GNK Marketing is an AI-first performance agency. We build automated growth systems—chatbots, funnels, ads ops, and analytics—alongside SEO, paid media, and CRO to turn traffic into pipeline and revenue.';

export const COMPANY = {
  name: SITE_NAME,
  legalName: 'GNK Marketing',
  url: SITE_URL,
  email: 'info@gnkmarketing.com',
  /** Office landline — display + E.164 */
  phone: '051 2222031',
  phoneE164: '+92512222031',
  /** Mobile / WhatsApp — display + E.164 */
  mobile: '+92 345 9680375',
  mobileE164: '+923459680375',
  whatsappUrl: 'https://wa.me/923459680375?text=' + encodeURIComponent("Hi GNK Marketing — I'd like to discuss growth for my business."),
  address: {
    street: 'Office # 6, Mezzanine Floor, Manzoor Plaza, Near Tabaq Hotel, Fazal e Haq Road, Blue Area',
    locality: 'Islamabad',
    region: 'Islamabad Capital Territory',
    postalCode: '44000',
    country: 'PK',
    countryName: 'Pakistan',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Manzoor Plaza, Fazal e Haq Road, Blue Area, Islamabad'),
  hours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.linkedin.com/company/gnkmarketing',
    'https://twitter.com/gnkmarketing',
  ],
  /** Raster logo — Google requires PNG/JPG (not SVG) for Organization.logo */
  logo: `${SITE_URL}/apple-icon`,
} as const;

export const ADDRESS_LINE = `${COMPANY.address.street}, ${COMPANY.address.locality}, ${COMPANY.address.countryName}`;

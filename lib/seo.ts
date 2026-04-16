import type { Metadata } from 'next';
import { COMPANY, SITE_NAME, SITE_URL } from './site';

type BuildMetaArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage,
  noIndex,
}: BuildMetaArgs): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const image = ogImage ?? `${SITE_URL}/opengraph-image`;

  return {
    title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.url,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    logo: COMPANY.logo,
    sameAs: [...COMPANY.sameAs],
    description:
      'AI-first performance marketing agency: automated growth systems, SEO, paid media, conversion optimization, and marketing automation.',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  const url = `${SITE_URL}${args.path.startsWith('/') ? args.path : `/${args.path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    provider: { '@type': 'Organization', name: COMPANY.name, url: COMPANY.url },
    areaServed: args.areaServed ?? 'Worldwide',
    url,
  };
}

export function blogPostingJsonLd(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${args.path.startsWith('/') ? args.path : `/${args.path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { '@type': 'Organization', name: COMPANY.name },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: { '@type': 'ImageObject', url: COMPANY.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

import type { MetadataRoute } from 'next';
import { getAllAIServiceSlugs } from '@/lib/ai-services';
import { BLOG_POSTS } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services';
import { SITE_URL } from '@/lib/site';

const staticPaths = [
  '',
  '/about',
  '/services',
  '/services/ai-marketing',
  '/services/ai-lead-generation',
  '/services/ai-automation',
  '/real-estate-growth-system',
  '/studio',
  '/case-studies',
  '/blog',
  '/contact',
  '/free-audit',
  '/free-ai-audit',
  '/services/ai',
  '/pricing',
  '/privacy-policy',
  '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/services' || path === '/contact' ? 0.9 : 0.7,
  }));

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const aiServices: MetadataRoute.Sitemap = getAllAIServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/ai/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...staticEntries, ...services, ...aiServices, ...posts];
}

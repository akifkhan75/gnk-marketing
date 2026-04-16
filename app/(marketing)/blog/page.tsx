import Link from 'next/link';
import { Container } from '@/components/marketing/Container';
import { BLOG_POSTS } from '@/lib/blog';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Growth & Marketing Insights',
  description:
    'Practical articles on SEO, PPC, CRO, analytics, and content—written for operators who care about revenue, not jargon.',
  path: '/blog',
  keywords: ['digital marketing blog', 'SEO tips', 'PPC strategy', 'CRO', 'analytics'],
});

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Insights for serious marketers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Long-form thinking on the systems behind growth. New posts ship regularly—structured for search and for
            teams who execute.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl border border-gnk-border bg-gnk-card p-8 transition hover:border-gnk-accent/30 hover:shadow-card"
              >
                <time className="text-xs font-medium text-gnk-muted" dateTime={post.datePublished}>
                  {post.datePublished}
                </time>
                <h2 className="font-display mt-3 text-2xl font-bold text-gnk-fg group-hover:text-gnk-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-gnk-muted">{post.description}</p>
                <p className="mt-4 text-sm font-semibold text-gnk-accent">Read article →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

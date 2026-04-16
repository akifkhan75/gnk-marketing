import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { blogPostingJsonLd, buildPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = blogPostingJsonLd({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="border-b border-gnk-border py-14 sm:py-16">
          <Container>
            <nav className="text-sm text-gnk-muted">
              <Link href="/blog" className="hover:text-gnk-fg">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="line-clamp-1 text-gnk-fg">{post.title}</span>
            </nav>
            <time className="mt-6 block text-sm text-gnk-muted" dateTime={post.datePublished}>
              Published {post.datePublished}
            </time>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gnk-muted">{post.description}</p>
            <p className="mt-4 text-sm text-gnk-muted">{post.readTimeMinutes} min read</p>
          </Container>
        </header>
        <div className="py-14 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              {post.sections.map((sec) => (
                <section key={sec.heading} className="mb-12">
                  <h2 className="font-display text-2xl font-bold text-gnk-fg">{sec.heading}</h2>
                  {sec.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-4 text-gnk-muted leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
            <div className="mt-16 rounded-3xl border border-gnk-border bg-gnk-card p-8">
              <p className="font-display text-xl font-semibold text-gnk-fg">Want this applied to your business?</p>
              <p className="mt-2 text-gnk-muted">
                Get a prioritized growth roadmap—SEO, paid, CRO, and measurement—in a free audit.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/free-audit" variant="primary">
                  Free audit
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Book a call
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      </article>
    </>
  );
}

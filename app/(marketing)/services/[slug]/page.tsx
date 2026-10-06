import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata, faqPageJsonLd, serviceJsonLd } from '@/lib/seo';
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = serviceJsonLd({
    name: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });

  const faqLd = faqPageJsonLd({
    path: `/services/${service.slug}`,
    questions: service.faqs.map((f) => ({ question: f.q, answer: f.a })),
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.slug}` }])} />
      <section className="relative overflow-hidden border-b border-gnk-border py-14 dark:border-white/[0.06] sm:py-20">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.16em] text-gnk-muted">
            <Link href="/services" className="hover:text-gnk-fg">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gnk-fg">{service.title}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-gnk-fg">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Discuss this service
            </ButtonLink>
            <ButtonLink href="/free-audit" variant="secondary">
              Start with an audit
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">Overview</h2>
                <div className="mt-4 space-y-4 text-gnk-muted leading-relaxed whitespace-pre-line">
                  {service.overview}
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">Benefits</h2>
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-gnk-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gnk-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">How we work</h2>
                <ol className="mt-6 space-y-6">
                  {service.process.map((p) => (
                    <li key={p.step} className="border-l-2 border-gnk-accent/40 pl-6">
                      <p className="font-display font-semibold text-gnk-fg">{p.step}</p>
                      <p className="mt-2 text-sm text-gnk-muted">{p.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <aside className="space-y-8">
              <div className="rounded-3xl border border-gnk-border bg-gnk-card p-6 shadow-card">
                <h3 className="font-display font-semibold text-gnk-fg">Tools & platforms</h3>
                <ul className="mt-4 space-y-2 text-sm text-gnk-muted">
                  {service.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-gnk-border bg-gradient-to-br from-gnk-card to-gnk-bg p-6">
                <p className="text-sm font-medium text-gnk-fg">Need a bundled program?</p>
                <p className="mt-2 text-sm text-gnk-muted">
                  Combine this service with SEO, CRO, and analytics for a unified growth roadmap.
                </p>
                <ButtonLink href="/pricing" variant="primary" className="mt-4 w-full !py-2.5 text-center">
                  View packages
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-gnk-border bg-gnk-card py-14 sm:py-18">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">FAQs</h2>
          <div className="mt-8 divide-y divide-gnk-border overflow-hidden rounded-3xl border border-gnk-border bg-gnk-bg/60 dark:divide-white/[0.07] dark:border-white/[0.07]">
            {service.faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-white/[0.02] sm:px-8 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display font-semibold text-gnk-fg">{f.q}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gnk-border text-gnk-muted transition-transform duration-300 group-open:rotate-45 group-open:border-gnk-accent/50 group-open:text-gnk-accent dark:border-white/10">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-gnk-muted sm:px-8">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-gnk-border bg-gnk-bg p-8 text-center">
            <p className="font-display text-xl font-semibold text-gnk-fg">Ready to talk specifics?</p>
            <p className="mt-2 text-gnk-muted">Tell us your goals—we will come prepared with a point of view.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" variant="primary">
                Book a call
              </ButtonLink>
              <ButtonLink href="/free-audit" variant="secondary">
                Free audit
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

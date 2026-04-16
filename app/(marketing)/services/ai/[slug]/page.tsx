import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';
import { JsonLd } from '@/components/marketing/JsonLd';
import { AI_SERVICES, getAIServiceBySlug, getAllAIServiceSlugs } from '@/lib/ai-services';
import { buildPageMetadata, serviceJsonLd } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllAIServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getAIServiceBySlug(slug);
  if (!s) return {};
  return buildPageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/ai/${s.slug}`,
    keywords: s.keywords,
  });
}

export default async function AIServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getAIServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = serviceJsonLd({
    name: service.title,
    description: service.metaDescription,
    path: `/services/ai/${service.slug}`,
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-gnk-border py-14 sm:py-16">
        <Container>
          <nav className="text-sm text-gnk-muted">
            <Link href="/services" className="hover:text-gnk-fg">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/ai" className="hover:text-gnk-fg">
              AI systems
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gnk-fg">{service.title}</span>
          </nav>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Book a demo
            </ButtonLink>
            <ButtonLink href="/free-ai-audit" variant="secondary">
              Free AI audit
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">The problem</h2>
                <p className="mt-4 leading-relaxed text-gnk-muted">{service.problem}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">The AI-powered system</h2>
                <p className="mt-4 leading-relaxed text-gnk-muted">{service.solution}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">Business outcomes</h2>
                <ul className="mt-4 space-y-3">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-gnk-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gnk-accent" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">How we implement it</h2>
                <ol className="mt-6 space-y-6">
                  {service.process.map((p) => (
                    <li key={p.step} className="border-l-2 border-gnk-accent/40 pl-6">
                      <p className="font-display font-semibold text-gnk-fg">{p.step}</p>
                      <p className="mt-2 text-sm text-gnk-muted">{p.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-gnk-fg">Real-world use cases</h2>
                <ul className="mt-4 space-y-3">
                  {service.useCases.map((u) => (
                    <li key={u} className="rounded-xl border border-gnk-border bg-gnk-card px-4 py-3 text-sm text-gnk-muted">
                      {u}
                    </li>
                  ))}
                </ul>
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
                <p className="text-sm font-medium text-gnk-fg">Explore adjacent systems</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {AI_SERVICES.filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/ai/${s.slug}`} className="text-gnk-accent hover:underline">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-gnk-border bg-gnk-card py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-gnk-fg">FAQs</h2>
          <div className="mt-8 divide-y divide-gnk-border rounded-3xl border border-gnk-border bg-gnk-bg">
            {service.faqs.map((f) => (
              <div key={f.q} className="p-6 sm:p-8">
                <h3 className="font-display font-semibold text-gnk-fg">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gnk-muted">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-gnk-border bg-gnk-bg p-8 text-center">
            <p className="font-display text-xl font-semibold text-gnk-fg">Want this system on your stack?</p>
            <p className="mt-2 text-gnk-muted">
              Start with a free AI audit—we map where automation replaces manual work and where humans should stay in
              the loop.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-ai-audit" variant="primary">
                Free AI audit
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Book a demo
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

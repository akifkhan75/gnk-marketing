import { Container } from '@/components/marketing/Container';
import { ContactForm } from '@/components/marketing/ContactForm';
import { COMPANY } from '@/lib/site';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Contact GNK Marketing',
  description:
    'Book a strategy call or send a message. Tell us your goals—we respond within one business day with next steps.',
  path: '/contact',
  keywords: ['contact marketing agency', 'book strategy call', 'GNK Marketing contact'],
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-gnk-border py-16 sm:py-20">
        <Container>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-gnk-fg sm:text-5xl">
            Let’s build a growth plan you can defend.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gnk-muted">
            Share your goals, timeline, and what you have tried. We will reply with honest fit feedback—and if we are
            not the right partner, we will say so.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-gnk-fg">Direct</h2>
              <ul className="mt-4 space-y-3 text-gnk-muted">
                <li>
                  <span className="font-medium text-gnk-fg">Email: </span>
                  <a href={`mailto:${COMPANY.email}`} className="text-gnk-accent hover:underline">
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-gnk-fg">Phone: </span>
                  <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`} className="hover:underline">
                    {COMPANY.phone}
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-sm text-gnk-muted">
                Prefer async? Use the form—include your site URL, monthly ad spend (if relevant), and your biggest
                constraint right now.
              </p>
            </div>
            <div className="rounded-3xl border border-gnk-border bg-gnk-card p-8 shadow-card">
              <ContactForm source="contact" submitLabel="Send message" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

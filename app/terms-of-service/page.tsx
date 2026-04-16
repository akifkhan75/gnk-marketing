import { Container } from '@/components/marketing/Container';
import { buildPageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: 'Terms governing use of the GNK Marketing website and introductory services.',
  path: '/terms-of-service',
  noIndex: true,
});

export default function TermsOfServicePage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-gnk-fg">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gnk-muted">
          <p className="font-semibold text-gnk-fg">Last updated: April 16, 2026</p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">1. Agreement</h2>
          <p>
            By accessing gnkmarketing.com, you agree to these Terms. If you disagree, do not use the Site. Separate
            statements of work govern paid engagements.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">2. Not professional advice</h2>
          <p>
            Site content is informational. It is not legal, financial, or guaranteed performance advice. Results vary by
            market, offer, and execution.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">3. Intellectual property</h2>
          <p>
            The Site and its content are owned by GNK Marketing and licensors. You may not copy, resell, or scrape the
            Site without permission.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">4. Third-party links</h2>
          <p>
            The Site may link to third parties. We are not responsible for their content, policies, or practices.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, GNK Marketing is not liable for indirect or consequential damages
            arising from use of the Site.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">6. Changes</h2>
          <p>We may update these Terms. Continued use after changes constitutes acceptance of the updated Terms.</p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">7. Contact</h2>
          <p>
            Questions:{' '}
            <a href={`mailto:${COMPANY.email}`} className="font-medium text-gnk-accent hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

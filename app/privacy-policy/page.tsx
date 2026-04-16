import { Container } from '@/components/marketing/Container';
import { buildPageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'How GNK Marketing collects, uses, and protects personal data when you use our website and services.',
  path: '/privacy-policy',
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-gnk-fg">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gnk-muted">
          <p className="font-semibold text-gnk-fg">Last updated: April 16, 2026</p>
          <p>
            GNK Marketing (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates{' '}
            <span className="text-gnk-fg">gnkmarketing.com</span> (the &quot;Site&quot;). This policy describes how we
            handle personal information when you interact with our Site, forms, and related services.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">Information we collect</h2>
          <p>We may collect information you provide directly, including:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>Name and business email address</li>
            <li>Company name and phone number (if provided)</li>
            <li>Messages you send through contact or audit request forms</li>
            <li>Technical data such as IP address, device type, and cookies (where permitted)</li>
          </ul>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">How we use information</h2>
          <p>We use personal information to:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>Respond to inquiries and schedule calls</li>
            <li>Operate, secure, and improve the Site</li>
            <li>Analyze aggregated usage trends (for example, with analytics tools)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with service providers who assist us (for
            example, email delivery or analytics), subject to appropriate safeguards and contracts.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">Your choices</h2>
          <p>
            You may request access, correction, or deletion of your personal information where applicable. You can also
            unsubscribe from marketing communications at any time.
          </p>

          <h2 className="font-display pt-4 text-2xl font-bold text-gnk-fg">Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href={`mailto:${COMPANY.email}`} className="font-medium text-gnk-accent hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

import { ButtonLink } from '@/components/marketing/Button';
import { Container } from '@/components/marketing/Container';

export default function NotFoundPage() {
  return (
    <Container className="py-32 text-center">
      <p className="font-display text-sm font-semibold text-gnk-accent">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold text-gnk-fg sm:text-5xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-gnk-muted">
        That URL may be outdated or mistyped. Start from the homepage or contact us if you need help finding
        something specific.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </Container>
  );
}

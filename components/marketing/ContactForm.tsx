'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/marketing/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({
  source = 'contact',
  submitLabel = 'Send message',
}: {
  source?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      company: fd.get('company'),
      message: fd.get('message'),
      source,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(typeof data.error === 'string' ? data.error : 'Request failed');
      }
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-gnk-border bg-gnk-card p-8 text-center shadow-card">
        <p className="font-display text-lg font-semibold text-gnk-fg">Thanks — we received your message.</p>
        <p className="mt-2 text-sm text-gnk-muted">We typically respond within one business day.</p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-gnk-accent hover:underline"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gnk-fg">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-gnk-border bg-gnk-bg px-4 py-2.5 text-sm text-gnk-fg outline-none ring-gnk-ring placeholder:text-gnk-muted focus:ring-2"
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gnk-fg">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-gnk-border bg-gnk-bg px-4 py-2.5 text-sm text-gnk-fg outline-none ring-gnk-ring placeholder:text-gnk-muted focus:ring-2"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gnk-fg">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className="mt-1.5 w-full rounded-xl border border-gnk-border bg-gnk-bg px-4 py-2.5 text-sm text-gnk-fg outline-none ring-gnk-ring placeholder:text-gnk-muted focus:ring-2"
          placeholder="Acme Inc."
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gnk-fg">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-gnk-border bg-gnk-bg px-4 py-2.5 text-sm text-gnk-fg outline-none ring-gnk-ring placeholder:text-gnk-muted focus:ring-2"
          placeholder="Goals, timeline, budget range, and what “winning” looks like for you."
        />
      </div>
      {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      <Button type="submit" variant="primary" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? 'Sending…' : submitLabel}
      </Button>
    </form>
  );
}

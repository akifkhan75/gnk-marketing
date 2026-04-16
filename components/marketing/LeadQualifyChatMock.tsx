'use client';

import { useState } from 'react';

const script = [
  { role: 'bot' as const, text: 'Hi — what are you trying to improve first: leads, sales speed, or support volume?' },
  { role: 'user' as const, text: 'We need more qualified leads from our website.' },
  {
    role: 'bot' as const,
    text: 'Got it. Roughly how many monthly visitors, and do you sell B2B or B2C?',
  },
];

/** UI mock only — no backend; demonstrates conversational qualification. */
export function LeadQualifyChatMock() {
  const [step, setStep] = useState(0);

  return (
    <div className="overflow-hidden rounded-3xl border border-gnk-border bg-gnk-card shadow-card">
      <div className="border-b border-gnk-border bg-gnk-bg px-4 py-3">
        <p className="font-display text-sm font-semibold text-gnk-fg">AI qualification (demo)</p>
        <p className="text-xs text-gnk-muted">Example flow — not connected to a live model in this preview.</p>
      </div>
      <div className="max-h-72 space-y-3 overflow-y-auto p-4">
        {script.slice(0, step + 1).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                m.role === 'user'
                  ? 'bg-gnk-accent text-gnk-accent-fg'
                  : 'border border-gnk-border bg-gnk-bg text-gnk-fg'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gnk-border p-4">
        {step < script.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(s + 1, script.length - 1))}
            className="w-full rounded-xl border border-gnk-border bg-gnk-bg py-2.5 text-sm font-medium text-gnk-fg transition hover:border-gnk-accent/40"
          >
            Next message
          </button>
        ) : (
          <p className="text-center text-xs text-gnk-muted">
            Next: calendar link + CRM lead record —{' '}
            <span className="font-medium text-gnk-fg">we wire this to your real stack on build.</span>
          </p>
        )}
      </div>
    </div>
  );
}

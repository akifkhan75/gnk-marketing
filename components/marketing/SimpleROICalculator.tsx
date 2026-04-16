'use client';

import { useMemo, useState } from 'react';

/** Illustrative calculator — not financial advice; shows directional impact of automation. */
export function SimpleROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(400);
  const [qualRate, setQualRate] = useState(18);
  const [closeRate, setCloseRate] = useState(22);
  const [avgDeal, setAvgDeal] = useState(3500);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(25);
  const [hourlyCost, setHourlyCost] = useState(55);

  const baseline = useMemo(() => {
    const sql = monthlyLeads * (qualRate / 100);
    const deals = sql * (closeRate / 100);
    const revenue = deals * avgDeal;
    return { sql, deals, revenue };
  }, [monthlyLeads, qualRate, closeRate, avgDeal]);

  const improved = useMemo(() => {
    // Conservative illustrative lift from faster follow-up + qualification (not a guarantee)
    const lift = 1.12;
    const sql = baseline.sql * lift;
    const deals = sql * (closeRate / 100);
    const revenue = deals * avgDeal;
    const laborSaved = hoursSavedPerWeek * 4.33 * hourlyCost * 12;
    return { sql, deals, revenue, laborSaved };
  }, [baseline.sql, closeRate, avgDeal, hoursSavedPerWeek, hourlyCost]);

  const deltaRev = improved.revenue - baseline.revenue;

  return (
    <div className="rounded-3xl border border-gnk-border bg-gnk-card p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-gnk-fg">Directional ROI model (illustrative)</h3>
      <p className="mt-2 text-sm text-gnk-muted">
        Adjust inputs to stress-test what happens if AI systems improve qualification speed and reduce manual follow-up.
        We validate real numbers in discovery.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Monthly leads" value={monthlyLeads} min={50} max={5000} step={50} onChange={setMonthlyLeads} />
        <Field label="Lead → SQL rate %" value={qualRate} min={5} max={60} step={1} onChange={setQualRate} />
        <Field label="SQL → close rate %" value={closeRate} min={5} max={50} step={1} onChange={setCloseRate} />
        <Field label="Avg deal value ($)" value={avgDeal} min={500} max={50000} step={100} onChange={setAvgDeal} />
        <Field label="Hours saved / week (ops)" value={hoursSavedPerWeek} min={0} max={120} step={1} onChange={setHoursSavedPerWeek} />
        <Field label="Fully loaded hourly cost ($)" value={hourlyCost} min={25} max={200} step={5} onChange={setHourlyCost} />
      </div>
      <div className="mt-8 grid gap-4 rounded-2xl border border-gnk-border bg-gnk-bg p-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gnk-muted">Baseline (annual revenue)</p>
          <p className="mt-1 font-display text-2xl font-bold text-gnk-fg">
            ${Math.round(baseline.revenue * 12).toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-gnk-muted">
            ~{baseline.deals.toFixed(1)} deals/mo from {baseline.sql.toFixed(0)} SQLs
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gnk-accent">Illustrative + automation*</p>
          <p className="mt-1 font-display text-2xl font-bold text-gnk-fg">
            ${Math.round(improved.revenue * 12).toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-gnk-muted">
            +${Math.round(deltaRev * 12).toLocaleString()}/yr revenue (12% SQL lift scenario) · labor save ~$
            {Math.round(improved.laborSaved).toLocaleString()}/yr
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-gnk-muted">
        *Scenario only: assumes a 12% lift to SQL volume from faster response and better triage—not a promise. We model
        your funnel with your CRM data.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-gnk-fg">{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1.5 w-full rounded-xl border border-gnk-border bg-gnk-bg px-3 py-2 text-gnk-fg"
      />
    </label>
  );
}

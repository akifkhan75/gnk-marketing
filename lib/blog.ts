export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
  readTimeMinutes: number;
  /** HTML-safe simple markdown-ish: we use paragraphs as array of strings */
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-generate-leads-with-ai',
    title: 'How to Generate Leads With AI (Without Killing Trust)',
    description:
      'A practical playbook for AI lead generation: qualification, routing, automation workflows, and conversion fixes that increase pipeline—not spam.',
    datePublished: '2026-04-23',
    keywords: [
      'how to generate leads with ai',
      'ai lead generation',
      'ai marketing strategies',
      'lead generation agency',
      'ai chatbot marketing',
      'marketing automation services',
    ],
    readTimeMinutes: 9,
    sections: [
      {
        heading: 'Start with the funnel, not the tool',
        paragraphs: [
          'Most “AI lead gen” projects fail because they start with a chatbot and end with more noise. Start with your funnel: where demand enters, how intent is qualified, how fast sales responds, and where leads die.',
          'If you cannot define what a qualified lead is in one sentence, automation will scale confusion.',
        ],
      },
      {
        heading: 'Build AI qualification that sales will trust',
        paragraphs: [
          'Qualification works when it mirrors how your best rep qualifies: the questions that disqualify, the signals that indicate urgency, and the proof required before booking.',
          'Good systems route high-intent leads instantly and nurture low-intent leads automatically—without polluting calendars.',
        ],
      },
      {
        heading: 'Automate follow-up with guardrails',
        paragraphs: [
          'Automation should improve speed-to-lead and consistency. It should not spam. Use clear caps (frequency), escalation rules (when a human intervenes), and brand-safe tone constraints.',
          'The most profitable automation is usually the boring stuff: reminders, rescheduling, enrichment, and handoff notes in the CRM.',
        ],
      },
      {
        heading: 'Conversion is the multiplier',
        paragraphs: [
          'Even perfect qualification fails if landing pages are vague and mobile UX is slow. Fix offer clarity, proof, and response-time friction before you scale spend.',
          'Treat every stage like a decision engine: what must a buyer believe to move forward?',
        ],
      },
      {
        heading: 'A simple system map to implement',
        paragraphs: [
          'Traffic → AI Qualification → Automation → Conversion. If a component does not reduce manual work or increase intent, it is not part of the system.',
          'Start with one high-volume entry point (website or WhatsApp), one routing destination (calendar/CRM), and one follow-up sequence. Expand only after you can measure quality.',
        ],
      },
    ],
  },
  {
    slug: 'ai-marketing-strategies-that-convert',
    title: 'AI Marketing Strategies That Convert (Not Just Automate)',
    description:
      'Practical AI marketing strategies for pipeline: qualification, speed-to-lead, personalization guardrails, and conversion experiments tied to revenue.',
    datePublished: '2026-04-23',
    keywords: [
      'ai marketing strategies',
      'ai marketing agency',
      'marketing automation services',
      'ai lead generation',
      'ai chatbot marketing',
    ],
    readTimeMinutes: 8,
    sections: [
      {
        heading: 'Strategy first: what must be true for conversion?',
        paragraphs: [
          'The fastest way to waste money with AI is to automate a broken funnel. Start with the beliefs and proof a buyer needs before they book, buy, or request pricing.',
          'AI should reduce friction and increase relevance. If it increases complexity or uncertainty, it is not helping conversion.',
        ],
      },
      {
        heading: 'Speed-to-lead is still the simplest advantage',
        paragraphs: [
          'For lead generation, response time often beats ad targeting. AI assistants and routing workflows can turn “tomorrow follow-up” into “now,” especially after hours.',
          'Measure speed-to-lead by channel and by intent tier. Optimize the slowest handoff first.',
        ],
      },
      {
        heading: 'Personalization with guardrails',
        paragraphs: [
          'Personalization works when it is constrained: which segments exist, what claims are allowed, and how you fall back when data is missing.',
          'Avoid creepy tracking. Use first-party signals (source, page, form answers) and keep the experience simple.',
        ],
      },
      {
        heading: 'Conversion experiments: prove lift, then scale',
        paragraphs: [
          'Use AI to increase test velocity (more variants), but keep governance: a hypothesis, an acceptance threshold, and a rollback plan.',
          'The best AI marketing strategy is the one you can measure and repeat.',
        ],
      },
    ],
  },
  {
    slug: 'ai-chatbot-marketing-playbook',
    title: 'AI Chatbot Marketing Playbook: Qualify, Route, and Convert',
    description:
      'How to use AI chatbot marketing without annoying visitors: qualification flows, human handoff, automation, and measurement that ties to pipeline.',
    datePublished: '2026-04-23',
    keywords: ['ai chatbot marketing', 'ai lead generation', 'ai marketing agency', 'marketing automation services'],
    readTimeMinutes: 7,
    sections: [
      {
        heading: 'A chatbot is an interface, not a strategy',
        paragraphs: [
          'Chat works when it solves a real user job: answer a question, help choose, book a next step, or route to the right human.',
          'If chat exists only because “AI is trendy,” it will create noise and reduce trust.',
        ],
      },
      {
        heading: 'Qualification: ask fewer, better questions',
        paragraphs: [
          'Use progressive questions: start broad, then narrow only if the visitor opts in. Add clear exits (email us, call us, browse pricing).',
          'Record answers into the CRM so sales has context. Without this, the system does not compound.',
        ],
      },
      {
        heading: 'Handoff: route intent, not just a transcript',
        paragraphs: [
          'A good handoff includes: intent tier, key answers, urgency, and recommended next action (book / nurture / human).',
          'Always allow human takeover. Trust is built by options.',
        ],
      },
      {
        heading: 'Measurement: what to track',
        paragraphs: [
          'Track: containment rate (when appropriate), qualified lead rate, booking rate, speed-to-lead, and assisted conversions.',
          'If you cannot tie chat to outcomes, it becomes a cosmetic widget.',
        ],
      },
    ],
  },
  {
    slug: 'seo-roadmap-revenue-not-traffic',
    title: 'Build an SEO Roadmap That Optimizes for Revenue, Not Traffic',
    description:
      'How to prioritize keywords, pages, and technical fixes when leadership cares about pipeline—not vanity visits.',
    datePublished: '2026-01-18',
    keywords: ['SEO strategy', 'revenue SEO', 'keyword prioritization', 'B2B SEO'],
    readTimeMinutes: 8,
    sections: [
      {
        heading: 'Why traffic is a misleading north star',
        paragraphs: [
          'Traffic can grow while revenue stays flat. That usually means you are winning informational queries with low commercial intent, or attracting visitors who will never fit your ICP.',
          'A revenue-first roadmap starts with margins, sales cycle, and the pages that actually influence pipeline. Search becomes a channel for qualified demand—not a content hobby.',
        ],
      },
      {
        heading: 'Map keywords to buyer stages',
        paragraphs: [
          'Group topics by intent: problem-aware, solution-aware, and vendor-aware. Your homepage and product pages should win high-intent terms; your blog should earn trust and capture early research without cannibalizing money pages.',
          'Use SERP analysis to validate intent. If Google ranks marketplaces, directories, or UGC for a query, your “blog post with a CTA” may never convert—no matter how well written.',
        ],
      },
      {
        heading: 'Technical SEO as a multiplier',
        paragraphs: [
          'Even the best content fails if Google cannot crawl, render, and index efficiently. Prioritize fixes that unlock entire template classes: canonicalization patterns, internal linking modules, and page speed constraints on mobile.',
          'After major releases, monitor crawl stats, indexed pages, and rendered HTML for key templates. Regressions are common—and expensive—when releases ship without an SEO acceptance checklist.',
        ],
      },
      {
        heading: 'Reporting leadership will believe',
        paragraphs: [
          'Translate SEO outcomes into business language: qualified sessions, assisted conversions, and influenced revenue where attribution allows. Pair SEO reporting with CRO insights so traffic gains turn into incremental leads.',
          'If you only report rankings, you invite skepticism. If you connect SEO work to measurable funnel movement, you earn budget.',
        ],
      },
    ],
  },
  {
    slug: 'ppc-tracking-that-survives-privacy-changes',
    title: 'PPC Tracking That Survives Privacy Changes (and Still Improves Performance)',
    description:
      'A practical framework for consent, conversion modeling, offline imports, and clean account structure in Google and Meta.',
    datePublished: '2026-02-06',
    keywords: ['PPC tracking', 'Consent Mode', 'conversion modeling', 'Google Ads measurement'],
    readTimeMinutes: 7,
    sections: [
      {
        heading: 'Start with the decision you need to make',
        paragraphs: [
          'Measurement exists to answer: which campaigns, creatives, and audiences deserve more budget? If your tracking cannot support that decision weekly, fix measurement before scaling spend.',
          'Write down your non-negotiables: lead quality definition, sales acceptance criteria, and payback targets. Tracking should serve those definitions—not vanity metrics.',
        ],
      },
      {
        heading: 'Consent and data quality',
        paragraphs: [
          'Implement consent flows that match your legal posture and update tags accordingly. Poor consent implementation creates silent gaps that look like “bad performance.”',
          'Use enhanced conversions / offline conversion imports when CRM discipline allows. This improves signal for bidding algorithms and clarifies which keywords truly drive qualified leads.',
        ],
      },
      {
        heading: 'Account structure is a measurement choice',
        paragraphs: [
          'Over-segmentation creates fragmentation; under-segmentation hides winners. Structure campaigns so budgets can move without destroying learning, and so tests have clear hypotheses.',
          'Document naming conventions and UTMs religiously. Most “mystery performance” issues trace back to inconsistent parameters and broken rules in analytics.',
        ],
      },
    ],
  },
  {
    slug: 'cro-program-not-random-tests',
    title: 'Run a CRO Program, Not a Random Test Generator',
    description:
      'How to build a repeatable research → hypothesis → experiment cycle that compounds learning.',
    datePublished: '2026-02-22',
    keywords: ['CRO program', 'A/B testing', 'experimentation', 'conversion research'],
    readTimeMinutes: 6,
    sections: [
      {
        heading: 'Research is the product',
        paragraphs: [
          'The best experiments come from patterns: repeated drop-offs, confusing value props, missing proof, and mobile UX friction. Quantitative funnels tell you where; qualitative insights tell you why.',
          'If you skip research, you end up testing buttons. If you invest in research, you test narratives, offers, and decision-critical UX.',
        ],
      },
      {
        heading: 'Governance beats novelty',
        paragraphs: [
          'A backlog prioritized with a transparent scoring model prevents politics from picking tests. It also helps engineering trust the roadmap.',
          'Document results—even failures. Failed tests save money if they stop the organization from repeating the same mistake.',
        ],
      },
      {
        heading: 'Velocity only matters with quality',
        paragraphs: [
          'Broken experiments produce false conclusions. Invest in QA, instrumentation checks, and a definition of “done” that includes monitoring after launch.',
        ],
      },
    ],
  },
  {
    slug: 'content-marketing-measurement-b2b',
    title: 'Measure B2B Content Marketing Without Lying to Yourself',
    description:
      'Practical metrics for content programs: assisted conversions, sales enablement usage, and search durability.',
    datePublished: '2026-03-10',
    keywords: ['content marketing metrics', 'B2B content', 'assisted conversions', 'content ROI'],
    readTimeMinutes: 7,
    sections: [
      {
        heading: 'Leading indicators vs. lagging outcomes',
        paragraphs: [
          'Pageviews and time on page can hint at resonance, but they are not business outcomes. Pair engagement metrics with conversion paths and sales feedback loops.',
          'For long sales cycles, “demo influenced by content” can be more honest than last-click ROI fantasies.',
        ],
      },
      {
        heading: 'Make sales part of the measurement system',
        paragraphs: [
          'If sales never uses your content, your program may be optimizing for awards—not revenue. Build snippets, battlecards, and case assets reps actually want.',
          'Quarterly reviews should include: top assets by pipeline influence, gaps surfaced by sales, and SEO performance on commercial clusters.',
        ],
      },
      {
        heading: 'Editorial discipline',
        paragraphs: [
          'Publish less, but publish strategically. One strong pillar with excellent internal linking beats ten thin posts that compete for the same terms.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

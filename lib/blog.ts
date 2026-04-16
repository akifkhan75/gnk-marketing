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

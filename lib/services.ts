export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  tools: string[];
  faqs: ServiceFAQ[];
};

const step = (s: string, d: string) => ({ step: s, detail: d });

export const SERVICES: Service[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortDescription:
      'Earn durable organic demand with a search strategy built on technical excellence, intent-led content, and authoritative signals.',
    metaTitle: 'SEO Services That Drive Qualified Organic Revenue',
    metaDescription:
      'Full-funnel SEO for brands that want rankings that convert—not vanity traffic. Technical audits, content architecture, and measurement you can trust.',
    keywords: [
      'SEO agency',
      'search engine optimization services',
      'organic growth',
      'enterprise SEO',
    ],
    overview: `Most SEO programs stall because they optimize for traffic, not revenue. We align keyword strategy with commercial intent, fix the technical foundations Google actually rewards, and build content that moves prospects from discovery to decision.

Whether you are rebuilding after a migration or scaling a proven offer, we treat search as a compounding acquisition channel—with executive-ready reporting tied to pipeline and revenue, not just impressions.`,
    benefits: [
      'Keyword and topic clusters mapped to buyer stages—not generic blog volume',
      'Technical SEO that protects crawl budget, Core Web Vitals, and indexation',
      'Editorial standards and internal linking that compound authority over time',
      'Forecasting and scenario modeling so leadership sees where growth comes from',
    ],
    process: [
      step('Commercial diagnosis', 'We map your products, margins, and LTV to search demand and prioritize pages that move the needle.'),
      step('Technical & content audit', 'Crawl analysis, log insights where available, and a prioritized fix list with effort vs. impact.'),
      step('Roadmap & execution', 'On-page, information architecture, links, and fresh assets—released in measurable milestones.'),
      step('Measure & scale', 'Rankings, traffic quality, conversions, and assisted revenue—optimized in quarterly growth cycles.'),
    ],
    tools: [
      'Google Search Console',
      'Screaming Frog',
      'Ahrefs / Semrush',
      'Looker Studio',
      'GA4',
    ],
    faqs: [
      {
        q: 'How is SEO different from paid search?',
        a: 'SEO builds durable visibility in organic results. It takes longer to compound but typically delivers stronger margins at scale. Paid search buys placement immediately; the right strategy often uses both.',
      },
      {
        q: 'Do you guarantee rankings?',
        a: 'No ethical agency can guarantee positions. We guarantee rigorous methodology, transparent reporting, and a roadmap tied to business outcomes—not tricks that risk penalties.',
      },
    ],
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortDescription:
      'Win the map pack and localized SERPs when buyers search for services “near me” or in your target cities.',
    metaTitle: 'Local SEO Services | Maps, Reviews & Local Rankings',
    metaDescription:
      'Google Business Profile optimization, local landing pages, citations, and review strategy—built for multi-location brands and service-area businesses.',
    keywords: ['local SEO', 'Google Business Profile', 'map pack SEO', 'near me SEO'],
    overview: `Local search is won in the details: profile completeness, category precision, review velocity, localized landing pages, and consistent NAP data. We build systems that make your locations visible when high-intent buyers are ready to call, book, or visit.

For multi-location brands, we standardize what should scale and localize what should feel human—so every storefront competes without cannibalizing the others.`,
    benefits: [
      'Map pack visibility for high-intent “near me” and city + service queries',
      'Location page templates that rank without duplicate thin content',
      'Review acquisition workflows that protect brand reputation',
      'Local reporting by region, so operators know what to fix first',
    ],
    process: [
      step('Market & competitor scan', 'SERP features, competitor GBP tactics, and citation benchmarks by market.'),
      step('Profile & onsite foundation', 'GBP optimization, schema, and localized on-page structure.'),
      step('Authority & relevance', 'Citations, local links, and content that reinforces service + geography.'),
      step('Iterate on performance', 'Call tracking, GA4/GTM events, and rank reporting by location.'),
    ],
    tools: ['Google Business Profile', 'BrightLocal / Yext (as needed)', 'GA4', 'CallRail / similar'],
    faqs: [
      {
        q: 'Can you help if we have duplicate listings?',
        a: 'Yes. We audit duplicates, merge where possible, and establish a single source of truth for each location.',
      },
      {
        q: 'Do you write posts for Google Business Profile?',
        a: 'We can run a cadence of GBP posts, offers, and updates aligned with promotions and seasonal demand.',
      },
    ],
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    shortDescription:
      'Make your site crawlable, fast, and indexable—so every other marketing dollar performs better.',
    metaTitle: 'Technical SEO Audits & Implementation',
    metaDescription:
      'Crawl budget, JavaScript rendering, structured data, migrations, and Core Web Vitals—technical SEO that protects and accelerates growth.',
    keywords: ['technical SEO', 'site migration SEO', 'Core Web Vitals', 'JavaScript SEO'],
    overview: `Technical SEO is infrastructure. When it breaks, content and links cannot compound. We diagnose issues with evidence—logs, crawls, and rendered DOM—and prioritize fixes by revenue impact, not checklist theater.

We partner with engineering teams to ship changes safely, especially during replatforms, international rollouts, and major template updates.`,
    benefits: [
      'Clear, prioritized backlog engineering can actually ship',
      'Migration playbooks that preserve rankings and minimize downtime risk',
      'Structured data and internal linking patterns that improve discovery',
      'Performance improvements that lift UX and conversion—not just Lighthouse scores',
    ],
    process: [
      step('Baseline & constraints', 'CMS, release cycles, staging access, and risk boundaries.'),
      step('Deep crawl + render review', 'Identify index bloat, orphan pages, redirect chains, and template defects.'),
      step('Fix sequencing', 'Quick wins vs. structural fixes; acceptance criteria for each ticket.'),
      step('Validate & monitor', 'Post-release checks, monitoring dashboards, and regression alerts.'),
    ],
    tools: ['Screaming Frog', 'Sitebulb', 'Google Search Console', 'Lighthouse / CrUX', 'Git + CI hooks (client-dependent)'],
    faqs: [
      {
        q: 'Do you need developer access?',
        a: 'For implementation-heavy work, yes—read access at minimum, and collaboration with your engineering team for releases.',
      },
      {
        q: 'Can you help after a failed migration?',
        a: 'Yes. We run recovery diagnostics, map old-to-new URLs, fix redirect and canonical issues, and rebuild signals methodically.',
      },
    ],
  },
  {
    slug: 'ppc-advertising',
    title: 'Pay-Per-Click Advertising',
    shortDescription:
      'Google Ads and Meta campaigns engineered for pipeline—structured for learning, scaled with governance.',
    metaTitle: 'PPC Agency | Google Ads & Meta Ads Management',
    metaDescription:
      'Search, Shopping, Performance Max, and paid social—built with clean data, disciplined creative testing, and budgets tied to revenue outcomes.',
    keywords: ['Google Ads agency', 'Meta ads management', 'PPC management', 'paid search'],
    overview: `Paid media fails when accounts are built for clicks. We architect accounts around profit: clean conversion definitions, meaningful audiences, creative that clarifies offer and objection, and bidding strategies aligned with your sales motion.

You get transparent pacing, experiment logs, and executive summaries that explain what changed, what we learned, and what we do next.`,
    benefits: [
      'Account structures that scale without turning into un-auditable complexity',
      'Creative testing frameworks for hooks, angles, and landing continuity',
      'Feed and catalog discipline for ecommerce performance',
      'Measurement plans that survive privacy changes (Consent Mode, server-side as needed)',
    ],
    process: [
      step('Goals & economics', 'Margins, payback windows, and acceptable CPA/ROAS by segment.'),
      step('Build & instrument', 'Campaign architecture, pixel/consent setup, offline imports if applicable.'),
      step('Test & learn', 'Structured experiments with pre-registered success criteria.'),
      step('Scale & protect', 'Budget governance, brand safety, and continuous negative keyword/audience hygiene.'),
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'GA4', 'GTM', 'Looker Studio', 'Supermetrics (optional)'],
    faqs: [
      {
        q: 'Do you manage both Google and Meta?',
        a: 'Yes. We also coordinate messaging and landing experiences so channels reinforce each other—not compete blindly.',
      },
      {
        q: 'What if our tracking is broken?',
        a: 'We start with a measurement audit. Scaling spend on bad data costs more than fixing the foundation first.',
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription:
      'Paid and organic social that builds familiarity, trust, and demand—anchored to a clear offer and CTA.',
    metaTitle: 'Social Media Marketing Strategy & Campaigns',
    metaDescription:
      'Positioning, creative direction, creator workflows, and performance campaigns across the networks that matter for your category.',
    keywords: ['social media marketing', 'paid social strategy', 'B2B social', 'brand social'],
    overview: `Social is both brand and performance. We define the narrative pillars that make you memorable, then translate them into a calendar and ad concepts that earn attention without sacrificing clarity.

We focus on platforms where your buyers actually spend time—and on creative formats that fit each channel’s native behavior.`,
    benefits: [
      'Messaging architecture that stays consistent across organic and paid',
      'Creative testing roadmap (hooks, formats, lengths) with documented learnings',
      'Influencer and creator workflows where they genuinely move trust',
      'Reporting that connects social engagement to site behavior and leads',
    ],
    process: [
      step('Audience & positioning', 'Who buys, why now, and what proof they need to believe you.'),
      step('Channel selection', 'Organic cadence vs. paid amplification; resource realities included.'),
      step('Produce & launch', 'Briefs, batch production, and QA for brand and compliance.'),
      step('Optimize', 'Weekly performance reviews, creative refresh rules, and budget reallocation.'),
    ],
    tools: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'TikTok Ads (as needed)', 'Notion / Asana', 'GA4'],
    faqs: [
      {
        q: 'Do you create the creative in-house?',
        a: 'We can lead concepting and direction, collaborate with your team, or partner with trusted production specialists depending on scope.',
      },
      {
        q: 'Is organic social still worth it?',
        a: 'For many B2B and high-consideration categories, organic builds trust while paid captures demand. We recommend what fits your goals—not vanity posting.',
      },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    shortDescription:
      'Day-to-day publishing, community care, and reporting—so your brand stays active and on-message.',
    metaTitle: 'Social Media Management Services',
    metaDescription:
      'Editorial calendars, publishing workflows, moderation guidelines, and monthly performance reporting for consistent brand presence.',
    keywords: ['social media management', 'community management', 'social posting service'],
    overview: `Consistency is a competitive advantage. We operationalize social with calendars, approval flows, and moderation playbooks—so your brand sounds like one voice, even when multiple stakeholders are involved.

Management is not “random posting.” It is a disciplined system aligned to launches, campaigns, and customer questions.`,
    benefits: [
      'Predictable cadence with proactive planning around launches and seasonality',
      'Crisis and moderation guidelines that protect brand reputation',
      'Asset reuse systems that reduce production drag',
      'Monthly reporting with actionable next steps—not vanity metrics alone',
    ],
    process: [
      step('Brand & voice guidelines', 'Tone, taboo topics, approval chain, and exemplar posts.'),
      step('Calendar build', 'Themes, hooks, and CTA mapping to business priorities.'),
      step('Publish & engage', 'Scheduling, community responses, and escalation paths.'),
      step('Review & refine', 'What worked, what to stop, and what to test next month.'),
    ],
    tools: ['Buffer / Hootsuite / Sprout (client preference)', 'Google Drive', 'Slack', 'GA4 UTM discipline'],
    faqs: [
      {
        q: 'Who approves posts?',
        a: 'You define approvers. We build a lightweight workflow so marketing moves quickly without surprises.',
      },
      {
        q: 'Do you handle DMs and comments?',
        a: 'Yes, within agreed guidelines—and we route sensitive issues to your team immediately.',
      },
    ],
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortDescription:
      'Editorial programs that earn trust and rank—mapped to revenue, not arbitrary publishing quotas.',
    metaTitle: 'Content Marketing Strategy & Production',
    metaDescription:
      'Editorial strategy, SEO-led briefs, long-form assets, and distribution plans that turn expertise into pipeline.',
    keywords: ['content marketing agency', 'B2B content strategy', 'SEO content', 'thought leadership'],
    overview: `Great content answers the questions buyers ask at each stage—and earns the right to be recommended by search and sales. We build a content system: pillars, clusters, briefs, SME interviews, editing standards, and repurposing into social and email.

We measure content by business impact: assisted conversions, demo requests, sales enablement usage, and search visibility for topics that matter.`,
    benefits: [
      'Editorial strategy tied to ICP pain points and objections',
      'Briefs your experts can actually contribute to without wasting time',
      'Repurposing workflows: one asset becomes many formats',
      'Governance for brand, compliance, and consistency at scale',
    ],
    process: [
      step('ICP & messaging', 'Jobs-to-be-done, objections, and proof assets.'),
      step('Topic architecture', 'Pillars, clusters, and internal linking plan.'),
      step('Produce & optimize', 'Draft, edit, on-page SEO, visuals, and publishing.'),
      step('Distribute & measure', 'Newsletter, social, sales snippets, and performance reviews.'),
    ],
    tools: ['Notion', 'Google Docs', 'Ahrefs / Semrush', 'Grammarly / Hemingway (editing)', 'CMS (client)'],
    faqs: [
      {
        q: 'Do you write technical content?',
        a: 'Yes, often via SME interviews and structured reviews so accuracy stays high.',
      },
      {
        q: 'How much content do we need?',
        a: 'We prioritize quality and fit over volume. The plan depends on competition, sales cycle, and what you can operationalize.',
      },
    ],
  },
  {
    slug: 'copywriting',
    title: 'Copywriting',
    shortDescription:
      'Conversion copy for ads, landing pages, and emails—clear, specific, and tested.',
    metaTitle: 'Conversion Copywriting for Ads & Landing Pages',
    metaDescription:
      'Offer positioning, landing page copy, ad scripts, and email sequences engineered to clarify value and drive action.',
    keywords: ['conversion copywriting', 'landing page copy', 'ad copywriting', 'B2B copywriter'],
    overview: `Copy is the interface between your product and your customer’s decision. We write with specificity: who it’s for, what changes, why now, and what proof exists—then we iterate with experiments where volume allows.

This is not “clever” writing. It’s persuasive clarity aligned to your funnel.`,
    benefits: [
      'Messaging hierarchy that works across ads, pages, and sales decks',
      'Landing page narratives structured for scanning and conversion',
      'Experiment backlog for headlines, CTAs, and objection handling',
      'Voice guidelines so teams ship consistent copy without bottlenecks',
    ],
    process: [
      step('Research', 'Reviews, sales calls, analytics, and competitor messaging.'),
      step('Positioning & outline', 'Big idea, promise, proof, and CTA logic.'),
      step('Draft & collaborate', 'Fast iterations with stakeholder input at the right moments.'),
      step('Launch & test', 'Measure, document learnings, and refine winners.'),
    ],
    tools: ['Google Docs', 'Figma comments', 'Optimizely / VWO (testing, client-dependent)', 'Hotjar / Clarity'],
    faqs: [
      {
        q: 'Can you match our brand voice?',
        a: 'Yes. We start from your guidelines and refine with examples of what “great” sounds like for your team.',
      },
      {
        q: 'Do you write long-form sales pages?',
        a: 'Yes—for launches and high-ticket offers where education and proof are required.',
      },
    ],
  },
  {
    slug: 'email-marketing-automation',
    title: 'Email Marketing & Automation',
    shortDescription:
      'Lifecycle email that nurtures leads, recovers revenue, and scales personalization responsibly.',
    metaTitle: 'Email Marketing & Marketing Automation',
    metaDescription:
      'Lifecycle strategy, ESP implementation, segmentation, and automated flows—built for deliverability and revenue.',
    keywords: ['email marketing agency', 'lifecycle email', 'Klaviyo', 'HubSpot email'],
    overview: `Email is still one of the highest-ROI owned channels—when lists are healthy, segments are meaningful, and automation supports the buyer journey. We design programs that combine broadcasts, triggers, and sales handoffs without spamming your market.

We align email with your CRM so marketing and sales see the same story.`,
    benefits: [
      'List hygiene and deliverability practices that protect domain reputation',
      'Segmentation based on behavior—not only demographics',
      'Automations for onboarding, consideration, churn risk, and win-back',
      'Reporting tied to revenue, engagement quality, and cohort performance',
    ],
    process: [
      step('Audit & goals', 'ESP setup, data sources, compliance, and current performance.'),
      step('Lifecycle map', 'Stages, triggers, messaging, and ownership between teams.'),
      step('Build & migrate', 'Templates, flows, QA, and tracking parameters.'),
      step('Optimize', 'Test plans, send-time strategy, and continuous list governance.'),
    ],
    tools: ['HubSpot', 'Klaviyo', 'Customer.io', 'Iterable', 'Salesforce Marketing Cloud (as needed)'],
    faqs: [
      {
        q: 'Can you help with deliverability issues?',
        a: 'Yes—authentication (SPF/DKIM/DMARC), domain strategy, bounce handling, and engagement repair plans.',
      },
      {
        q: 'Do you write the emails?',
        a: 'We can fully write, co-write with your team, or train editors using voice guidelines.',
      },
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization',
    shortDescription:
      'Evidence-led experimentation that increases revenue per visitor—without guessing.',
    metaTitle: 'CRO Services | Experimentation & Landing Page Optimization',
    metaDescription:
      'Research-backed hypotheses, A/B testing, and UX fixes that lift conversion rates across your funnel.',
    keywords: ['CRO agency', 'conversion rate optimization', 'A/B testing', 'experimentation program'],
    overview: `CRO is not “change the button color.” It is a research discipline: qualitative insights, quantitative funnels, and prioritized experiments with clear risk controls. We build a roadmap that balances quick fixes with deeper UX improvements.

We work best when tracking is trustworthy and you can support a steady test velocity.`,
    benefits: [
      'Diagnostic research: heatmaps, session replay, surveys, and funnel analysis',
      'Prioritized opportunity backlog with expected impact and effort',
      'Experiment design, QA, and statistical guardrails',
      'Learning documentation so wins compound across teams',
    ],
    process: [
      step('Measurement readiness', 'Events, goals, and data quality checks.'),
      step('Research sprint', 'Identify friction, objections, and drop-off points.'),
      step('Hypothesis roadmap', 'ICE/RICE-style prioritization aligned to business goals.'),
      step('Test & implement', 'Build, launch, analyze, and iterate.'),
    ],
    tools: ['Optimizely', 'VWO', 'Google Optimize successors', 'Hotjar', 'Clarity', 'BigQuery (advanced)'],
    faqs: [
      {
        q: 'What if we have low traffic?',
        a: 'We adjust strategy: fewer but higher-impact changes, time-based evaluation where needed, and qualitative methods to de-risk redesigns.',
      },
      {
        q: 'Do you build the variants?',
        a: 'We can coordinate with your developers or implement in supported testing tools depending on complexity.',
      },
    ],
  },
  {
    slug: 'funnel-building',
    title: 'Funnel Building',
    shortDescription:
      'End-to-end funnels that connect acquisition, nurture, and sales—measured at every step.',
    metaTitle: 'Marketing Funnel Design & Build',
    metaDescription:
      'Funnel architecture, offers, landing experiences, and automation—engineered for conversion and LTV.',
    keywords: ['marketing funnel', 'sales funnel builder', 'lead funnel', 'growth funnel'],
    overview: `A funnel is the operational expression of your go-to-market strategy. We define the offer, the narrative, the pages, the follow-up, and the metrics—so you can see where money leaks and where to scale.

We integrate paid, organic, email, and sales touchpoints into one coherent buyer journey.`,
    benefits: [
      'Offer and messaging clarity that improves ad efficiency and close rates',
      'Landing + thank-you + nurture sequences that match intent',
      'CRM and automation wiring so leads don’t die in the handoff',
      'Dashboards that show stage conversion—not just top-of-funnel vanity',
    ],
    process: [
      step('Economics & ICP', 'What you sell, to whom, at what velocity, and with what proof.'),
      step('Journey mapping', 'Stages, assets required, and responsibilities across teams.'),
      step('Build', 'Pages, forms, tags, automations, and sales notifications.'),
      step('Optimize', 'Weekly reviews until stable, then continuous testing.'),
    ],
    tools: ['Webflow / WordPress / Next.js (client stack)', 'HubSpot', 'Zapier / Make', 'GA4', 'Stripe (if applicable)'],
    faqs: [
      {
        q: 'Is this only for B2B?',
        a: 'No—ecommerce and lead-gen both benefit. The architecture changes, but the principles stay the same: clarity, proof, and fast next steps.',
      },
      {
        q: 'Do you build websites as part of funnels?',
        a: 'We can coordinate builds with your team or partners, and we specify what the funnel needs to convert.',
      },
    ],
  },
  {
    slug: 'branding-positioning',
    title: 'Branding & Positioning',
    shortDescription:
      'Clarify your category, differentiation, and narrative—so marketing and sales speak one language.',
    metaTitle: 'Brand Positioning & Messaging for Growth Teams',
    metaDescription:
      'Positioning workshops, messaging systems, and brand guidelines that make campaigns sharper and sales conversations easier.',
    keywords: ['brand positioning', 'messaging strategy', 'B2B branding', 'value proposition'],
    overview: `Growth breaks when messaging is fuzzy. We help you articulate what you do, for whom, why you win, and what proof matters—then translate that into messaging hierarchies for web, ads, content, and sales enablement.

This is strategy you can execute, not a slide deck that sits in a folder.`,
    benefits: [
      'Clear ICP and category definition—who you serve and who you ignore',
      'Differentiation rooted in proof, not buzzwords',
      'Messaging architecture: taglines, pillars, proof points, and objections',
      'Guidelines that speed up creative and reduce stakeholder thrash',
    ],
    process: [
      step('Discovery', 'Customers, competitors, product reality, and ambition.'),
      step('Positioning synthesis', 'The strategic narrative and “only we” claims we can defend.'),
      step('Messaging system', 'Web hierarchy, ad angles, and sales talk tracks.'),
      step('Rollout plan', 'How teams adopt messaging without breaking execution velocity.'),
    ],
    tools: ['Miro', 'Notion', 'Figma (brand kits)', 'Customer interview templates'],
    faqs: [
      {
        q: 'Is this a logo redesign?',
        a: 'Not by default. We focus on positioning and messaging. Visual identity can be coordinated with design partners if needed.',
      },
      {
        q: 'How long does positioning take?',
        a: 'Many engagements land in 3–6 weeks depending on stakeholder access and research depth.',
      },
    ],
  },
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    shortDescription:
      'Fast, credible, conversion-minded sites—built with modern stacks and SEO-aware architecture.',
    metaTitle: 'Website Design & Web Development Agency',
    metaDescription:
      'UX, visual design, and development for marketing sites that load fast, rank cleanly, and convert visitors into leads.',
    keywords: ['web design agency', 'marketing website development', 'Next.js agency', 'B2B website'],
    overview: `Your website is the center of gravity for trust. We design for clarity and speed: strong hierarchy, credible proof, and technical foundations that support SEO, analytics, and experimentation.

We prefer modern stacks (including Next.js) when performance and maintainability matter.`,
    benefits: [
      'UX that respects buyer scanning behavior and reduces cognitive load',
      'Performance budgets aligned to Core Web Vitals and mobile reality',
      'Component-based builds that scale with your content team',
      'Analytics and tagging planned before launch—not after',
    ],
    process: [
      step('Requirements & IA', 'Sitemap, templates, integrations, and success metrics.'),
      step('Design', 'Wireframes to high-fidelity; responsive patterns and accessibility checks.'),
      step('Build', 'Implementation, CMS wiring, QA, and SEO baseline.'),
      step('Launch & measure', 'Redirect plans, monitoring, and post-launch optimization backlog.'),
    ],
    tools: ['Figma', 'Next.js', 'Tailwind', 'Sanity / Contentful (CMS options)', 'Vercel', 'GitHub'],
    faqs: [
      {
        q: 'Do you support WordPress?',
        a: 'We can, depending on requirements. We recommend the stack that fits your team’s operating model.',
      },
      {
        q: 'Can you work with our internal developers?',
        a: 'Yes—we can lead, support, or hand off with documentation and components.',
      },
    ],
  },
  {
    slug: 'landing-page-optimization',
    title: 'Landing Page Optimization',
    shortDescription:
      'High-intent pages engineered for one job: convert the click into the next step.',
    metaTitle: 'Landing Page Design & Optimization',
    metaDescription:
      'Landing page strategy, copy, design, and testing for paid and organic campaigns—aligned to message match and speed.',
    keywords: ['landing page agency', 'landing page design', 'PPC landing pages', 'message match'],
    overview: `A landing page is a contract with the visitor: you promised something in the ad—now prove it fast. We optimize for message match, clarity, proof density, and friction removal—while keeping pages fast enough to protect conversion on mobile.

We build systems for repeatable launches, not one-off pages that break brand consistency.`,
    benefits: [
      'Message match between ad creative and above-the-fold promise',
      'Modular sections that speed launches while preserving quality',
      'Experiment-friendly layouts for headline and CTA testing',
      'Performance checks so speed doesn’t silently kill conversion',
    ],
    process: [
      step('Intent mapping', 'Traffic sources, offers, objections, and success actions.'),
      step('Wireframe & copy', 'Structure first; copy and social proof placed deliberately.'),
      step('Design & build', 'Responsive UI, accessibility, and tracking.'),
      step('Launch & iterate', 'QA, monitor, and test improvements on a cadence.'),
    ],
    tools: ['Figma', 'Webflow / Next.js', 'Hotjar', 'GA4', 'VWO / Optimizely'],
    faqs: [
      {
        q: 'How many landing pages do we need?',
        a: 'Enough to match meaningful audience/offer segments—usually fewer pages with smarter variants beats dozens of thin pages.',
      },
      {
        q: 'Do you handle forms and CRM routing?',
        a: 'Yes—routing, enrichment, and SLA-friendly notifications are part of a complete build.',
      },
    ],
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    shortDescription:
      'Orchestrate campaigns across channels with CRM-connected automation and clean data.',
    metaTitle: 'Marketing Automation & CRM Integrations',
    metaDescription:
      'Automation architecture, lead scoring, lifecycle campaigns, and integrations—so marketing scales without losing personalization.',
    keywords: ['marketing automation', 'HubSpot automation', 'CRM integration', 'lead scoring'],
    overview: `Automation should reduce manual work and increase relevance—not blast everyone the same sequence. We map objects, fields, and triggers so your CRM reflects reality, then build programs that respond to behavior with appropriate urgency.

We emphasize governance: naming conventions, auditability, and documentation your team can maintain.`,
    benefits: [
      'Lifecycle programs aligned to sales stages and SLAs',
      'Lead scoring that sales actually trusts',
      'Integrations between ads, web, ESP, and CRM with error handling',
      'Operational playbooks so automations don’t decay into technical debt',
    ],
    process: [
      step('Systems audit', 'CRM objects, data hygiene, and current automations.'),
      step('Blueprint', 'Triggers, segments, content, and ownership.'),
      step('Implement', 'Build, QA, and staged rollout with monitoring.'),
      step('Train & document', 'Runbooks so your team can extend safely.'),
    ],
    tools: ['HubSpot', 'Salesforce', 'Marketo', 'Pardot', 'Zapier / Make', 'Segment (as needed)'],
    faqs: [
      {
        q: 'We’re mid-migration—can you help?',
        a: 'Yes. We plan cutover sequencing, mapping, and rollback strategies to reduce downtime and data loss risk.',
      },
      {
        q: 'Do you replace our marketing ops hire?',
        a: 'We complement internal ops—accelerating execution while transferring documentation and training.',
      },
    ],
  },
  {
    slug: 'analytics-tracking',
    title: 'Analytics & Tracking',
    shortDescription:
      'GA4, GTM, event models, and dashboards that leadership trusts—built for decisions, not charts.',
    metaTitle: 'Analytics & Tracking | GA4, GTM, Measurement Strategy',
    metaDescription:
      'Measurement planning, GA4 implementation, tag governance, and executive dashboards tied to revenue outcomes.',
    keywords: ['GA4 implementation', 'Google Tag Manager', 'measurement plan', 'marketing analytics'],
    overview: `If your data isn’t trusted, your teams debate opinions instead of improving results. We build measurement that matches how your business actually makes money: event definitions, parameters, conversions, and reporting that finance and marketing can align on.

We emphasize governance—so tags don’t become a fragile pile of one-offs.`,
    benefits: [
      'Measurement plans mapped to funnel stages and business outcomes',
      'GA4 + GTM implementations with naming conventions and versioning discipline',
      'Consent and privacy-aware tracking patterns',
      'Looker Studio / BigQuery approaches for real executive clarity',
    ],
    process: [
      step('Stakeholder interviews', 'Decisions the data must support—not every metric imaginable.'),
      step('Tracking design', 'Events, parameters, UTMs, and attribution assumptions documented.'),
      step('Implement & QA', 'Tags, tests, and validation across key flows.'),
      step('Dashboards & training', 'How to read numbers, and how to avoid common misinterpretations.'),
    ],
    tools: ['GA4', 'Google Tag Manager', 'Looker Studio', 'BigQuery', 'Snowflake (client-dependent)'],
    faqs: [
      {
        q: 'Can you fix a messy GTM container?',
        a: 'Yes—audit, consolidate, document, and migrate safely with staging workflows.',
      },
      {
        q: 'Server-side tagging—do we need it?',
        a: 'Not always. We recommend it when privacy, accuracy, or performance requirements justify the operational cost.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

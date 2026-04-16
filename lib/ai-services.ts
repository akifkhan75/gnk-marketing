export type AIServiceFAQ = { q: string; a: string };

export type AIService = {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: string;
  solution: string;
  outcomes: string[];
  process: { step: string; detail: string }[];
  tools: string[];
  useCases: string[];
  faqs: AIServiceFAQ[];
};

const st = (s: string, d: string) => ({ step: s, detail: d });

export const AI_SERVICES: AIService[] = [
  {
    slug: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    shortDescription:
      'Campaigns, audiences, and triggers that run 24/7—so your team stops babysitting tasks and starts steering strategy.',
    metaTitle: 'AI Marketing Automation | Campaigns & Triggers That Scale',
    metaDescription:
      'Build AI-powered marketing automation: behavior triggers, smart audiences, and always-on campaigns tied to revenue events—not vanity opens.',
    keywords: ['AI marketing automation', 'behavior triggers', 'automated campaigns', 'marketing ops AI'],
    problem:
      'Teams drown in manual list pulls, one-off sends, and reactive fixes. Automation exists, but it is brittle: wrong triggers, stale segments, and no feedback loop to what actually drives pipeline.',
    solution:
      'We design automation as a system: clear events (what happened), decisions (what to do next), and guardrails (what never to do). Models and rules prioritize speed-to-lead, win-back, and expansion—measured against SQLs and revenue, not email volume.',
    outcomes: [
      'Less manual campaign ops: repeatable journeys owned by logic, not spreadsheets',
      'Faster response to intent: behavior-based triggers beat batch “every Tuesday” habits',
      'Lower cost per qualified lead when nurture only touches prospects who show buying signals',
      'Executive-ready reporting: what automated, what converted, what to tune next',
    ],
    process: [
      st('Map revenue events', 'Define the actions that matter: demo requests, purchases, churn risk, expansion signals.'),
      st('Audit stack & data', 'CRM, ESP/MAP, web events, and consent—so automation is trustworthy.'),
      st('Build & test flows', 'Journeys, holdouts, and failure handling (retries, fallbacks, human handoff).'),
      st('Operate & improve', 'Weekly reviews on conversion by segment; prune dead branches; document playbooks.'),
    ],
    tools: ['HubSpot / Customer.io / Iterable', 'Zapier / Make', 'Segment (optional)', 'OpenAI APIs (where judgment assists routing)', 'GA4 + warehouse exports'],
    useCases: [
      'SaaS: trial → activation sequences that adapt to product usage',
      'Ecommerce: win-back and replenishment with margin-aware offers',
      'Services: speed-to-call when a high-intent form fires after hours',
    ],
    faqs: [
      {
        q: 'Is this “set and forget”?',
        a: 'No. The goal is fewer manual tasks, not zero oversight. We monitor outcomes and adjust rules as your offer and market change.',
      },
      {
        q: 'Do we need a new CRM?',
        a: 'Usually not. We work inside your stack and only recommend replatforming when data or routing is the real bottleneck.',
      },
    ],
  },
  {
    slug: 'ai-lead-generation-systems',
    title: 'AI Lead Generation Systems',
    shortDescription:
      'Capture, qualify, and route leads automatically—web, WhatsApp, and chat—so sales talks to ready buyers, not every visitor.',
    metaTitle: 'AI Lead Generation Systems | Qualify & Route Leads Automatically',
    metaDescription:
      'AI lead gen: chatbots, WhatsApp flows, qualification scoring, and CRM routing that increases booked meetings without adding headcount.',
    keywords: ['AI lead generation', 'lead qualification automation', 'WhatsApp business automation', 'chatbot leads'],
    problem:
      'Forms collect noise. SDRs chase cold leads. WhatsApp and web chat go unanswered after hours. Marketing pays for traffic, but the handoff to sales is slow and inconsistent.',
    solution:
      'We build a lead system: conversational entry points, structured qualification, calendar booking where appropriate, and CRM records that arrive complete. AI handles repetitive triage; your team handles judgment calls.',
    outcomes: [
      'Higher meeting quality: fewer calls with “just browsing” prospects',
      '24/7 capture and qualification on web and messaging channels',
      'Shorter speed-to-lead—often the biggest lever in competitive categories',
      'Lower cost per SQL when nurture and routing replace brute-force dialing',
    ],
    process: [
      st('Define ICP & disqualifiers', 'Plain-language rules: who is worth a meeting, who gets nurture, who gets self-serve.'),
      st('Design conversation flows', 'Web + WhatsApp paths with brand-safe tone and escalation to humans.'),
      st('Integrate CRM & calendar', 'Fields, ownership, SLAs, and dedupe so ops trusts the data.'),
      st('Launch, measure, tighten', 'Funnel metrics by source; weekly tuning on drop-offs and objections.'),
    ],
    tools: ['WhatsApp Business API', 'HubSpot / Salesforce', 'Cal.com / Calendly', 'OpenAI / Anthropic APIs', 'Zapier / Make', 'GA4 events'],
    useCases: [
      'B2B services: after-hours qualification and booking',
      'Local businesses: WhatsApp-first lead capture from ads',
      'Mid-market SaaS: demo request triage before AE assignment',
    ],
    faqs: [
      {
        q: 'Will this annoy visitors?',
        a: 'We design opt-in flows and clear exits. The point is helpful speed—not interrogation.',
      },
      {
        q: 'Can sales override the AI?',
        a: 'Yes. We build human takeover, notes, and audit trails so reps stay in control.',
      },
    ],
  },
  {
    slug: 'ai-chatbots-conversational-ai',
    title: 'AI Chatbots & Conversational AI',
    shortDescription:
      'Website, WhatsApp, and Messenger assistants that answer, qualify, and escalate—grounded in your real policies and offers.',
    metaTitle: 'AI Chatbots & Conversational AI for Web & WhatsApp',
    metaDescription:
      'Deploy GPT-powered chatbots with guardrails: FAQs, lead capture, handoff to humans, and analytics on conversations that drive revenue.',
    keywords: ['AI chatbot agency', 'WhatsApp chatbot', 'conversational AI', 'customer support automation'],
    problem:
      'Generic chatbots frustrate users with loops. Teams bolt on AI without grounding, creating wrong answers and brand risk. Support queues grow while simple questions burn human time.',
    solution:
      'We implement conversational AI with retrieval over your approved content, structured actions (book, refund policy lookup, ticket creation), and escalation paths. It is built like a product: logging, evaluation, and continuous improvement.',
    outcomes: [
      'Deflection of repetitive questions without sacrificing accuracy',
      'More captured leads from visitors who will not fill a long form',
      'Consistent answers across channels (web, WhatsApp, Messenger)',
      'Measurable impact: containment rate, CSAT, and assisted revenue',
    ],
    process: [
      st('Content & policy inventory', 'What the bot may say, must never say, and when to escalate.'),
      st('Architecture', 'RAG vs. structured flows; tool calls; PII handling; retention settings.'),
      st('Pilot & QA', 'Red-team prompts, edge cases, and human review loops before wide release.'),
      st('Scale & monitor', 'Dashboards, conversation labeling, and monthly accuracy reviews.'),
    ],
    tools: ['OpenAI / Azure OpenAI', 'Anthropic', 'WhatsApp Cloud API', 'Meta Messenger', 'Vector DB (Pinecone / pgvector)', 'LangChain / custom'],
    useCases: [
      'Ecommerce: order status, returns policy, and product guidance',
      'Healthcare-adjacent: scheduling triage with strict compliance boundaries',
      'B2B: technical FAQs with engineer handoff',
    ],
    faqs: [
      {
        q: 'How do you reduce hallucinations?',
        a: 'Grounding in approved sources, constrained tools, and human escalation for high-risk topics—not “the model guesses.”',
      },
      {
        q: 'Can we start small?',
        a: 'Yes. Many clients pilot on one intent cluster (e.g., pricing & packaging) before expanding.',
      },
    ],
  },
  {
    slug: 'ai-content-creation',
    title: 'AI Content Creation',
    shortDescription:
      'Production pipelines for ads, emails, and social—human-edited, brand-safe, and paced for testing—not generic spam.',
    metaTitle: 'AI Content Creation for Ads, Email & Social',
    metaDescription:
      'AI-assisted content pipelines: faster creative variants, consistent voice, and measurement hooks—without publishing low-quality filler.',
    keywords: ['AI copywriting', 'AI content marketing', 'generative creative', 'social automation'],
    problem:
      'Teams need volume for testing, but speed without standards destroys trust. Copycat AI posts add noise. Creative bottlenecks stall paid social and lifecycle programs.',
    solution:
      'We build content systems: briefs, variant generation, editorial review, and publishing workflows. AI drafts and expands; humans approve what ships. Everything ties to hooks you can test and kill quickly.',
    outcomes: [
      'More valid tests per week in ads and lifecycle email',
      'Lower production cost per asset at the same quality bar',
      'Consistent positioning across channels with less committee thrash',
      'Faster time-to-market for launches and promotions',
    ],
    process: [
      st('Voice & constraints', 'Tone, claims you can defend, and legal/compliance boundaries.'),
      st('Template library', 'Angles, structures, and channel-specific formats.'),
      st('Generate + edit', 'Batch creation with reviewer roles and change logs.'),
      st('Learn from performance', 'Winners become templates; losers get documented reasons.'),
    ],
    tools: ['OpenAI / Claude', 'Notion / Google Docs', 'Figma', 'Meta Ads / LinkedIn', 'ESP/CMS integrations'],
    useCases: [
      'Performance marketing: 10–30 hooks per offer rotation',
      'Newsletter operations: first drafts from outlines and transcripts',
      'Social: repurposing long-form into native short posts',
    ],
    faqs: [
      {
        q: 'Will Google penalize AI content?',
        a: 'Search rewards helpful, original content. We focus on expertise, accuracy, and usefulness—not auto-generated thin pages.',
      },
      {
        q: 'Who approves final copy?',
        a: 'You define approvers. We set workflows so marketing moves fast without surprises.',
      },
    ],
  },
  {
    slug: 'ai-ads-optimization',
    title: 'AI Ads Optimization',
    shortDescription:
      'Smarter targeting, budget allocation, and creative iteration—grounded in your margins and real conversion data.',
    metaTitle: 'AI Ads Optimization | Google & Meta Performance',
    metaDescription:
      'Improve ROAS with disciplined creative testing, signal quality, and automation rules aligned to revenue—not vanity clicks.',
    keywords: ['AI PPC optimization', 'Meta ads automation', 'Google Ads AI', 'creative testing'],
    problem:
      'Accounts grow messy. Creative fatigue burns budget. Signal loss makes optimization guesswork. Teams chase cheap leads that never close.',
    solution:
      'We combine algorithmic platform tools with governance: clean event definitions, structured experiments, and creative pipelines AI accelerates. Budget moves toward segments and messages that improve pipeline, not just CTR.',
    outcomes: [
      'Better marginal efficiency: spend shifts to what compounds',
      'Faster creative learning cycles without chaotic account structure',
      'Improved downstream quality when optimization targets SQLs/LTV proxies',
      'Less manual bid micromanagement when foundations are trustworthy',
    ],
    process: [
      st('Economics & targets', 'Acceptable CPA/ROAS, payback, and constraints by product line.'),
      st('Measurement hardening', 'Pixels, CAPI/server-side, offline conversions where possible.'),
      st('Creative + audience system', 'Angles, hooks, exclusions, and naming discipline.'),
      st('Weekly optimization loop', 'Kill losers, scale winners, document learnings.'),
    ],
    tools: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'Supermetrics / BigQuery', 'Creative analytics'],
    useCases: [
      'Ecommerce SKU mixes with different margin profiles',
      'B2B lead gen with long sales cycles and CRM feedback',
      'Local services with call tracking and geo tests',
    ],
    faqs: [
      {
        q: 'Does AI mean “set Performance Max and hope”?',
        a: 'No. We use automation where it helps and add governance where it hides risk—especially for creative and query intent.',
      },
      {
        q: 'What if our data is weak?',
        a: 'We fix measurement first. Scaling spend on bad data costs more than fixing the foundation.',
      },
    ],
  },
  {
    slug: 'ai-sales-funnels',
    title: 'AI Sales Funnels',
    shortDescription:
      'End-to-end funnels where AI handles speed, personalization, and follow-up—so more visitors become booked revenue.',
    metaTitle: 'AI Sales Funnels | Automated Conversion Journeys',
    metaDescription:
      'Design AI-assisted funnels: landing continuity, chat qualification, email/WhatsApp nurture, and CRM routing measured end-to-end.',
    keywords: ['AI sales funnel', 'automated funnel', 'conversion journey', 'lead nurture AI'],
    problem:
      'Funnels leak at handoffs: ad → landing → form → CRM → sales. Slow follow-up kills conversion. Nurture is generic. No one owns the full numbers.',
    solution:
      'We architect the funnel as one system: message match, AI-assisted qualification, timed follow-ups, and human steps where trust is won. Each stage has an owner metric and a test plan.',
    outcomes: [
      'Higher conversion from click to conversation when response time improves',
      'Lower drop-off between MQL and meeting held',
      'More consistent pipeline when nurture adapts to behavior',
      'Clear CAC payback narrative for leadership',
    ],
    process: [
      st('Funnel economics', 'ACV, close rate, and velocity assumptions made explicit.'),
      st('Journey blueprint', 'Stages, assets, AI touchpoints, human touchpoints.'),
      st('Build & instrument', 'Pages, chat, email/WhatsApp, CRM fields, SLAs.'),
      st('Optimize weekly', 'Bottleneck removal before adding new traffic.'),
    ],
    tools: ['Webflow / Next.js / WordPress', 'HubSpot', 'Customer.io / Klaviyo', 'OpenAI APIs', 'Zapier / Make'],
    useCases: [
      'High-ticket services: consultative funnel with qualification',
      'Product-led SaaS: activation nudges tied to usage events',
      'Webinar/event funnels with post-event automation',
    ],
    faqs: [
      {
        q: 'How is this different from “just more emails”?',
        a: 'Funnels are timed decisions. We automate the right next step based on behavior—not blast everyone the same sequence.',
      },
      {
        q: 'Can our sales team stay in the loop?',
        a: 'Yes. Routing, tasks, and summaries are designed so reps get context, not surprises.',
      },
    ],
  },
  {
    slug: 'ai-personalization-systems',
    title: 'AI Personalization Systems',
    shortDescription:
      'Dynamic experiences that change by segment, intent, and behavior—without building 50 one-off landing pages.',
    metaTitle: 'AI Personalization | Dynamic Web & Product Experiences',
    metaDescription:
      'Implement personalization with rules + models: industry-specific messaging, offer modules, and recommendations—measured with experiments.',
    keywords: ['website personalization', 'dynamic content AI', 'behavior based UX', 'recommendation engine'],
    problem:
      'Everyone sees the same page. Campaign traffic does not match the headline. Product recommendations feel random. Personalization projects stall in engineering queues.',
    solution:
      'We implement personalization pragmatically: start with high-impact modules (hero, proof, CTA, social proof), grounded in first-party data and clear eligibility rules. AI suggests variants; experiments prove lift.',
    outcomes: [
      'Higher conversion when message matches visitor context',
      'Better AOV when recommendations respect margin and inventory rules',
      'Less engineering drag via componentized personalization',
      'Measurable lift with holdouts—not vanity “personalized for you” badges',
    ],
    process: [
      st('Opportunity sizing', 'Which pages and segments justify complexity?'),
      st('Data contracts', 'Events, traits, and consent—what can we safely use?'),
      st('Module library', 'Swappable blocks with brand guardrails.'),
      st('Experiment & roll out', 'A/B tests, monitoring, and rollback plans.'),
    ],
    tools: ['Segment / RudderStack', 'Optimizely / VWO', 'Edge middleware (Vercel)', 'Warehouse (optional)', 'OpenAI for variant suggestions'],
    useCases: [
      'Multi-ICP SaaS: industry-specific headlines from firmographic signals',
      'Ecommerce: category-aware bundles and urgency rules',
      'Marketplace: supplier/buyer tailored onboarding',
    ],
    faqs: [
      {
        q: 'Is this GDPR-friendly?',
        a: 'We design around consent and data minimization. Personalization should not mean creepy tracking.',
      },
      {
        q: 'Do we need a CDP on day one?',
        a: 'Not always. We start with the smallest data path that unlocks the first experiment.',
      },
    ],
  },
  {
    slug: 'ai-data-analytics-insights',
    title: 'AI Data Analytics & Insights',
    shortDescription:
      'Forecasting, anomaly detection, and narrative reporting—so leaders see what changed, why it matters, and what to do next.',
    metaTitle: 'AI Analytics & Insights | Dashboards & Predictive Metrics',
    metaDescription:
      'Build analytics that drive decisions: clean GA4/GTM, warehouse models, and AI-assisted insight summaries grounded in your KPIs.',
    keywords: ['predictive analytics', 'AI dashboards', 'marketing analytics', 'funnel analysis AI'],
    problem:
      'Dashboards multiply; answers do not. Teams debate charts instead of changing tactics. Forecasts are gut-based. Funnel issues are found too late.',
    solution:
      'We align metrics to decisions, then automate the boring parts: anomaly alerts, cohort views, and natural-language summaries of what moved—with links back to underlying data. AI assists interpretation; humans approve actions.',
    outcomes: [
      'Faster detection of spend or conversion issues',
      'Better forecasting for budget and hiring decisions',
      'Shared vocabulary between marketing, finance, and ops',
      'Less manual reporting time each month',
    ],
    process: [
      st('Decision map', 'What choices must this data support?'),
      st('Modeling & hygiene', 'Events, definitions, and reconciliations.'),
      st('Dashboards & alerts', 'Role-based views; thresholds that matter.'),
      st('Insight cadence', 'Weekly narrative + monthly deep dive rituals.'),
    ],
    tools: ['GA4', 'BigQuery / Snowflake', 'Looker Studio', 'dbt (optional)', 'Python notebooks', 'OpenAI for summarization (governed)'],
    useCases: [
      'Multi-channel brands reconciling blended MER/ROAS',
      'Subscription businesses focused on retention curves',
      'Lead gen teams connecting CRM stages to ad spend',
    ],
    faqs: [
      {
        q: 'Will AI replace our analyst?',
        a: 'No—it removes grunt work so analysts focus on hypotheses and experiments.',
      },
      {
        q: 'Can we keep spreadsheets?',
        a: 'If they help—but we aim for one source of truth to end version battles.',
      },
    ],
  },
  {
    slug: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    shortDescription:
      'Internal copilots, workflow APIs, and integrations that fit how your company actually operates—not generic SaaS wrappers.',
    metaTitle: 'Custom AI Solutions | GPT Tools & Workflow Automation',
    metaDescription:
      'Design and ship custom AI tools: internal assistants, API orchestration, and secure integrations mapped to ROI and adoption.',
    keywords: ['custom GPT enterprise', 'AI workflow automation', 'OpenAI integration', 'internal copilot'],
    problem:
      'Off-the-shelf AI tools do not match your data, permissions, or processes. Shadow IT spreads. Pilots never reach production because security, UX, and ownership are unclear.',
    solution:
      'We scope custom AI like any product: user stories, data boundaries, evaluation, and rollout. Deliverables might be an internal copilot, a workflow that calls your APIs, or a customer-facing tool with audit logs.',
    outcomes: [
      'Hours saved on repetitive research, drafting, and routing tasks',
      'Faster onboarding for sales/support with grounded knowledge access',
      'Controlled rollout with permissions and monitoring',
      'IP retained: your workflows, your data contracts',
    ],
    process: [
      st('Use-case ROI', 'Pick workflows where accuracy and frequency justify build cost.'),
      st('Design & security review', 'PII, retention, access, and failure modes.'),
      st('MVP build', 'Narrow scope; real users; logging from day one.'),
      st('Expand or stop', 'Score adoption and impact; expand winners, kill distractions.'),
    ],
    tools: ['OpenAI / Azure OpenAI', 'AWS Lambda / Cloud Functions', 'Postgres / vector store', 'OAuth / SSO', 'Observability (LangSmith / custom)'],
    useCases: [
      'RFP/proposal drafting from a controlled knowledge base',
      'Ops ticket triage with suggested responses',
      'Partner support portal with tool calls into your systems',
    ],
    faqs: [
      {
        q: 'How long is an MVP?',
        a: 'Often 4–8 weeks for a focused workflow, depending on integrations and compliance.',
      },
      {
        q: 'Who maintains it?',
        a: 'We can hand off with runbooks or operate it as a managed service—your choice.',
      },
    ],
  },
  {
    slug: 'ai-voice-call-automation',
    title: 'AI Voice & Call Automation',
    shortDescription:
      'Voice agents for qualification, reminders, and support—with human escalation when empathy or complexity demands it.',
    metaTitle: 'AI Voice Agents | Call Automation for Sales & Support',
    metaDescription:
      'Deploy AI voice systems for outbound/inbound calls: scheduling, reminders, and tier-1 support—integrated with your CRM and compliance requirements.',
    keywords: ['AI voice agent', 'call automation', 'AI phone assistant', 'appointment setting AI'],
    problem:
      'Missed calls mean lost revenue. Tier-1 phone work burns team hours. Scaling outbound follow-up is expensive and inconsistent.',
    solution:
      'We implement voice automation where it is safe and valuable: structured scripts, tool integrations (calendar, CRM), and clear handoff to humans. Quality monitoring includes call review and continuous prompt/tool tuning.',
    outcomes: [
      'Higher answer and booking rates for time-sensitive leads',
      'Lower cost per handled conversation for repetitive intents',
      'After-hours coverage without promising what AI cannot deliver',
      'Auditability: recordings, transcripts, and escalation reasons',
    ],
    process: [
      st('Call taxonomy', 'Which intents are in-scope vs. human-only?'),
      st('Pilot numbers & compliance', 'TCPA/consent, disclosures, regional rules—validated with your counsel.'),
      st('Integrations', 'CRM updates, appointment tools, ticketing.'),
      st('Monitor & improve', 'Quality scoring, objection handling drills, weekly tuning.'),
    ],
    tools: ['Vapi / Bland / Retell (stack-dependent)', 'Twilio', 'OpenAI Realtime / speech pipelines', 'HubSpot / Salesforce', 'Recording storage + redaction'],
    useCases: [
      'Home services: missed-call callback and booking',
      'Clinics: reminder calls with reschedule flows',
      'B2B: qualify inbound interest before AE assignment',
    ],
    faqs: [
      {
        q: 'Will customers hate talking to AI?',
        a: 'We optimize for brevity, transparency, and fast human escalation—especially for complaints and edge cases.',
      },
      {
        q: 'What about regulatory-sensitive industries?',
        a: 'We follow your legal guidance on disclosures, recording, and data handling.',
      },
    ],
  },
];

export function getAIServiceBySlug(slug: string): AIService | undefined {
  return AI_SERVICES.find((s) => s.slug === slug);
}

export function getAllAIServiceSlugs(): string[] {
  return AI_SERVICES.map((s) => s.slug);
}

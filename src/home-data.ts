export type Service = {
  title: string
  description: string
}

export type Stat = {
  label: string
  value: string
}

export const services: Service[] = [
  {
    title: 'Custom Web & Mobile Apps',
    description:
      'Design and build modern products with clean UX, scalable architecture, and production-grade quality.',
  },
  {
    title: 'AI Automations & Agents',
    description:
      'Automate workflows with AI, document processing, chat assistants, and intelligent orchestration.',
  },
  {
    title: 'SaaS Platforms',
    description:
      'Ship subscription products with auth, billing-ready foundations, analytics, and maintainable codebases.',
  },
  {
    title: 'Integrations & API Systems',
    description:
      'Connect tools and data sources with secure APIs, webhooks, ETL, and reliable background jobs.',
  },
]

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: '180+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Avg. Efficiency Gain', value: '35%' },
  { label: 'Countries Supported', value: '12' },
]

export const testimonials = [
  {
    quote:
      'Dotsel delivered a high-end product experience end-to-end. The app feels premium and performs flawlessly.',
    author: 'Aarav Mehta',
    role: 'Founder, Nexa Solutions',
  },
  {
    quote:
      'We replaced manual work with AI automation. Their implementation was fast, reliable, and easy for our team to run.',
    author: 'Nina Roy',
    role: 'Operations Lead, Horizon Systems',
  },
  {
    quote:
      'The codebase, DevOps, and dashboards are clean and future-proof. Dotsel is a serious engineering partner.',
    author: 'Sami Khan',
    role: 'COO, Vertex Digital',
  },
]

export const industries = ['Startups', 'E-commerce', 'Healthcare', 'FinTech', 'Education']

export const faqs = [
  {
    question: 'How long does a typical automation rollout take?',
    answer:
      'Most builds ship in 4-10 weeks depending on scope, integrations, and the number of user roles and workflows.',
  },
  {
    question: 'Can you integrate with our existing tools and data?',
    answer:
      'Yes. We integrate with CRMs, ERPs, payment gateways, Google Workspace, Slack, and custom internal APIs.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. We offer ongoing maintenance, performance monitoring, security updates, and feature iteration cycles.',
  },
]

export const trustMarks = ['Secure by Design', 'Performance First', 'Clean Architecture', 'Fast Delivery']

export const caseStudies = [
  {
    title: 'Customer Portal + Admin Suite',
    impact: '-62% support load',
    summary: 'Built a self-serve portal with role-based access, reporting, and a premium UI.',
  },
  {
    title: 'AI Document Automation',
    impact: '-70% manual work',
    summary: 'Automated extraction, validation, and routing with a human-in-the-loop workflow.',
  },
  {
    title: 'Mobile App + Payments',
    impact: '+34% conversion',
    summary: 'Shipped an app with fast onboarding, payments, and analytics-driven optimization.',
  },
]

export const innovationPillars = [
  {
    title: 'Product Thinking',
    description: 'We design for real users, real workflows, and premium UX that drives adoption.',
  },
  {
    title: 'AI + Automation',
    description: 'We automate repetitive work with AI systems your team can trust and operate.',
  },
  {
    title: 'Scalable Engineering',
    description: 'Clean architecture, strong types, reliable deployments, and room to evolve.',
  },
]

export const outcomes = [
  { label: 'Cycle Time Reduced', value: 52 },
  { label: 'Manual Work Eliminated', value: 44 },
  { label: 'Page Speed Improvement', value: 38 },
  { label: 'Automation Coverage', value: 61 },
]

export const integrationTiles = [
  { title: 'APIs & Webhooks', detail: 'Secure integrations, event-driven workflows, and reliable retries.', wide: true },
  { title: 'Auth & Roles', detail: 'JWT/OAuth, SSO patterns, RBAC, and permission-aware UIs.' },
  { title: 'Payments', detail: 'Subscription and one-time payments with clean billing flows.' },
  { title: 'Databases', detail: 'Postgres, search, caching, and analytics-friendly schemas.' },
  { title: 'AI pipelines', detail: 'RAG, tool calling, evaluation, and safe automation patterns.' },
  { title: 'DevOps', detail: 'CI/CD, monitoring, error tracking, and performance budgets.' },
]

export const engineeringHighlights = [
  'Discovery workshops with stakeholders and real users.',
  'Design systems + UX flows that feel premium and consistent.',
  'Strict TypeScript, clean architecture, and reviewable PRs.',
  'Performance budgets, monitoring, and error tracking from day one.',
  'Post-launch iteration cycles and product roadmap support.',
]

export const blueprintGoals = [
  'Ship faster',
  'Automate operations',
  'Improve conversion',
  'Reduce support load',
  'AI enablement',
] as const

export const mainNavLinks = [
  { label: 'Solutions', to: '/#solutions' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Case Studies', to: '/#case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/1HhJeBHqZb/',
  instagram: 'https://www.instagram.com/dotsel_automation_and_ventures/',
} as const

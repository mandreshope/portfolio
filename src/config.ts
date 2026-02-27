// ─────────────────────────────────────────────────────────────────────────────
//  Portfolio Configuration  –  edit this file to personalise your site
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
    name: 'Randrianarinjaka Mandresy',
    shortName: 'Mandresy',
    role: 'Mobile Developer · Backend Developer · AI Enthusiast',
    location: 'Madagascar 🇲🇬',
    bio: "I build mobile apps and backend APIs, integrate payments (Stripe), and work on AI tooling & automation. I care deeply about clean architecture, performance, and shipping reliable products.",
    github: 'https://github.com/mandreshope',       // ← update with your username
    linkedin: 'https://linkedin.com/in/mandresy',   // ← update with your profile
    email: 'mandreshope@gmail.com',
    githubUsername: 'mandreshope',                  // ← used for the GitHub API
    googlePlay: 'https://play.google.com/store/apps/dev?id=6690241281899002210',
} as const

// Repos that appear first / are highlighted with a ⭐ badge
export const FEATURED_REPOS: string[] = [
    // Add repo names exactly as they appear on GitHub, e.g.:
    // 'my-flutter-app',
    // 'nestjs-stripe-api',
]

// Skills displayed in the Skills section
export const SKILLS = [
    {
        category: 'Mobile',
        icon: '📱',
        items: ['Flutter', 'Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI'],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        items: ['Node.js', 'NestJS', 'REST APIs', 'Stripe / Webhooks', 'PostgreSQL'],
    },
    {
        category: 'DevOps & Tools',
        icon: '🔧',
        items: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Firebase'],
    },
    {
        category: 'AI & Vision',
        icon: '🤖',
        items: ['Computer Vision', '360° Panorama', 'AI Tooling', 'Automation', 'OpenCV'],
    },
] as const

// Services / experience cards
export const SERVICES = [
    {
        icon: '📱',
        title: 'Mobile App Development',
        description:
            'Cross-platform Flutter, React Native apps and native iOS/Android apps with Kotlin (Jetpack Compose) or Swift. Pixel-perfect UI, offline-first, and app-store ready.',
    },
    {
        icon: '🔗',
        title: 'Backend & API Development',
        description:
            'Scalable REST APIs with NestJS, clean architecture, Stripe payment integration, webhooks, and robust authentication.',
    },
    {
        icon: '🤖',
        title: 'AI & Automation',
        description:
            'AI-powered tooling, workflow automation, computer-vision pipelines (360° panorama stitching), and LLM integrations.',
    },
    {
        icon: '🚀',
        title: 'Technical Consulting',
        description:
            'Architecture reviews, code audits, CI/CD setup, and mentoring. I help teams ship reliable products faster.',
    },
] as const

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { SITE_CONFIG } from '../config'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,184,0,0.08) 0%, transparent 70%)' }}
        >
            {/* Background blobs — jaune doré + marine */}
            <div
                className="blob w-[500px] h-[500px] top-0 -left-32 opacity-15 dark:opacity-20"
                style={{ background: 'radial-gradient(circle, #F5B800, #D49E00)' }}
            />
            <div
                className="blob w-72 h-72 bottom-20 right-0 opacity-10 dark:opacity-15"
                style={{ background: 'radial-gradient(circle, #1a2340, #F5B800)', animationDelay: '3s' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Logo / Avatar */}
                <div className="fade-up flex justify-center mb-8">
                    <div className="relative">
                        <img
                            src={`${BASE}mandreshope.png`}
                            alt="Mandresy logo"
                            width={96}
                            height={96}
                            className="rounded-2xl shadow-2xl"
                            style={{ boxShadow: '0 0 48px rgba(245,184,0,0.35)' }}
                        />
                        {/* Available dot */}
                        <span
                            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-[#080c18]"
                            title="Available for freelance"
                        />
                    </div>
                </div>

                {/* Badge */}
                <div className="fade-up delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-8 shadow-sm"
                    style={{ color: '#F5B800' }}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for freelance &amp; consulting
                </div>

                {/* Name */}
                <h1 className="fade-up delay-200 text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none">
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Mandresy</span>
                </h1>

                {/* Role */}
                <p className="fade-up delay-300 text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6">
                    {SITE_CONFIG.role}
                </p>

                {/* Bio */}
                <p className="fade-up delay-300 max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                    {SITE_CONFIG.bio}
                </p>

                {/* CTA buttons */}
                <div className="fade-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-16">
                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn-ghost">
                        <Mail size={16} />
                        Get in Touch
                    </a>
                </div>

                {/* Social links */}
                <div className="fade-up flex items-center justify-center gap-5">
                    {[
                        { href: SITE_CONFIG.github, label: 'GitHub', icon: <Github size={20} /> },
                        { href: SITE_CONFIG.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} /> },
                        { href: `mailto:${SITE_CONFIG.email}`, label: 'Email', icon: <Mail size={20} /> },
                    ].map(({ href, label, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            aria-label={label}
                            className="p-3 rounded-xl glass transition-all hover:scale-110"
                            style={{ '--tw-border-color': 'rgba(245,184,0,0.3)' } as React.CSSProperties}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#F5B800')}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <a
                href="#projects"
                aria-label="Scroll to projects"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
                style={{ color: 'rgba(245,184,0,0.6)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5B800')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,184,0,0.6)')}
            >
                <ArrowDown size={22} />
            </a>
        </section>
    )
}

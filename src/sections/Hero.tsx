import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { SITE_CONFIG } from '../config'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20"
        >
            {/* Background blobs */}
            <div
                className="blob w-96 h-96 top-10 -left-20 opacity-20 dark:opacity-30"
                style={{ background: 'radial-gradient(circle, #6366f1, #a78bfa)' }}
            />
            <div
                className="blob w-72 h-72 bottom-20 right-0 opacity-15 dark:opacity-25"
                style={{ background: 'radial-gradient(circle, #38bdf8, #6366f1)', animationDelay: '3s' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for freelance &amp; consulting
                </div>

                {/* Name */}
                <h1 className="fade-up delay-100 text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none">
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Mandresy</span>
                </h1>

                {/* Role */}
                <p className="fade-up delay-200 text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6">
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
                    <a
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub profile"
                        className="p-3 rounded-xl glass hover:scale-110 hover:border-indigo-400 transition-all"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn profile"
                        className="p-3 rounded-xl glass hover:scale-110 hover:border-indigo-400 transition-all"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        aria-label="Send email"
                        className="p-3 rounded-xl glass hover:scale-110 hover:border-indigo-400 transition-all"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            {/* Scroll hint */}
            <a
                href="#projects"
                aria-label="Scroll to projects"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-indigo-500 transition-colors animate-bounce"
            >
                <ArrowDown size={22} />
            </a>
        </section>
    )
}

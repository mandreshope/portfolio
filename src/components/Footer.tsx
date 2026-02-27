import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '../config'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-500">
                    © {year} {SITE_CONFIG.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-slate-400 hover:text-indigo-500 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-slate-400 hover:text-indigo-500 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        aria-label="Email"
                        className="text-slate-400 hover:text-indigo-500 transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

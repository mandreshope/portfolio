import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '../config'
import { GooglePlayIcon } from './GooglePlayIcon'

export default function Footer() {
    const year = new Date().getFullYear()

    const links = [
        { href: SITE_CONFIG.github, label: 'GitHub', icon: <Github size={20} /> },
        { href: SITE_CONFIG.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} /> },
        { href: SITE_CONFIG.googlePlay, label: 'Google Play', icon: <GooglePlayIcon size={20} /> },
        { href: `mailto:${SITE_CONFIG.email}`, label: 'Email', icon: <Mail size={20} /> },
    ]

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-500">
                    © {year} {SITE_CONFIG.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    {links.map(({ href, label, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            aria-label={label}
                            className="text-slate-400 hover:text-[#F5B800] transition-colors"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

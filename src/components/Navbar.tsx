import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import type { Theme } from '../types'
import { SITE_CONFIG } from '../config'

interface NavbarProps {
    theme: Theme
    onToggle: () => void
}

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggle }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass shadow-lg shadow-black/20 py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">

                {/* Logo — image PNG du logo */}
                <a href="#hero" aria-label="Home" className="flex items-center gap-2.5 group">
                    <img
                        src="/mandreshope.png"
                        alt="Mandresy logo"
                        width={36}
                        height={36}
                        className="rounded-lg shadow-md shadow-[#F5B800]/20 group-hover:scale-105 transition-transform"
                    />
                    <span className="font-extrabold text-base tracking-tight gradient-text hidden sm:inline">
                        {SITE_CONFIG.shortName}
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="nav-link">{l.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={onToggle}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        className="p-2 rounded-lg hover:bg-[#F5B800]/10 transition-colors"
                    >
                        {theme === 'dark' ? (
                            <Sun size={18} style={{ color: '#F5B800' }} />
                        ) : (
                            <Moon size={18} style={{ color: '#0f1629' }} />
                        )}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-[#F5B800]/10 transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen
                            ? <X size={20} />
                            : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col px-6 pb-4 gap-1 glass border-t border-[#F5B800]/10">
                    {NAV_LINKS.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={closeMenu}
                                className="block py-2.5 text-sm font-medium hover:text-[#F5B800] transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

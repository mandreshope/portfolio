import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react'
import { SITE_CONFIG } from '../config'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [copied, setCopied] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
        const body = encodeURIComponent(`Hi Mandresy Randrianarinjaka,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`)
        window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`
    }

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(SITE_CONFIG.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // fallback – create temp element
            const el = document.createElement('textarea')
            el.value = SITE_CONFIG.email
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const inputClass =
        'w-full px-4 py-3 rounded-xl text-sm border border-slate-200 dark:border-slate-700 ' +
        'bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ' +
        'placeholder:text-slate-400 transition'

    return (
        <section
            id="contact"
            className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/30"
        >
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="section-label">Get in touch</p>
                    <h2 className="section-title">
                        Let&apos;s{' '}
                        <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
                        Have a project in mind or just want to say hello? Fill out the form
                        below — it opens your email client with everything pre-filled.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-10">
                    {/* Left: links */}
                    <aside className="md:col-span-2 flex flex-col gap-4">
                        <div className="card p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                                <Mail size={18} className="text-indigo-500" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                                <button
                                    onClick={copyEmail}
                                    className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 hover:text-indigo-500 transition-colors"
                                    aria-label="Copy email address"
                                >
                                    <span className="truncate">{SITE_CONFIG.email}</span>
                                    {copied ? (
                                        <Check size={13} className="text-emerald-500 shrink-0" />
                                    ) : (
                                        <Copy size={13} className="shrink-0 opacity-60" />
                                    )}
                                </button>
                                {copied && (
                                    <p className="text-xs text-emerald-500 mt-0.5">Copied!</p>
                                )}
                            </div>
                        </div>

                        <a
                            href={SITE_CONFIG.github}
                            target="_blank"
                            rel="noreferrer"
                            className="card p-5 flex items-center gap-4 hover:border-indigo-400 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                <Github size={18} className="group-hover:text-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                                <p className="text-sm font-medium group-hover:text-indigo-500 transition-colors">
                                    @{SITE_CONFIG.githubUsername}
                                </p>
                            </div>
                        </a>

                        <a
                            href={SITE_CONFIG.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="card p-5 flex items-center gap-4 hover:border-indigo-400 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                                <Linkedin size={18} className="text-sky-600 group-hover:text-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                                <p className="text-sm font-medium group-hover:text-indigo-500 transition-colors">
                                    Connect with me
                                </p>
                            </div>
                        </a>

                        <div className="rounded-xl p-4 bg-indigo-50 dark:bg-indigo-900/20 text-sm text-indigo-700 dark:text-indigo-300">
                            📍 Based in {SITE_CONFIG.location} · Available globally (remote)
                        </div>
                    </aside>

                    {/* Right: form */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:col-span-3 card p-8 flex flex-col gap-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-xs font-medium mb-1.5 text-slate-500">
                                    Your Name *
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    placeholder="Jane Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-xs font-medium mb-1.5 text-slate-500">
                                    Your Email *
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    placeholder="jane@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-xs font-medium mb-1.5 text-slate-500">
                                Message *
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={6}
                                placeholder="Tell me about your project…"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={inputClass + ' resize-none'}
                            />
                        </div>

                        <button type="submit" className="btn-primary self-start">
                            <Send size={15} />
                            Send via Email
                        </button>

                        <p className="text-xs text-slate-400">
                            This opens your default email client with the message pre-filled.
                            No data is stored or sent to any server.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

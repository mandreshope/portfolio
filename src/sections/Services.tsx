import { SERVICES } from '../config'

export default function Services() {
    return (
        <section id="services" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="section-label">What I do</p>
                    <h2 className="section-title">
                        Services &amp;{' '}
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
                        I work as a freelance engineer and consultant, helping teams build
                        exceptional mobile and backend products.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {SERVICES.map((s) => (
                        <div
                            key={s.title}
                            className="card group p-7 flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-2xl
                              group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base mb-2 group-hover:text-indigo-500 transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call-to-action strip */}
                <div className="mt-14 rounded-2xl glass p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-1">
                            Ready to build something great?
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Let&apos;s talk about your next project.
                        </p>
                    </div>
                    <a href="#contact" className="btn-primary shrink-0">
                        Start a conversation →
                    </a>
                </div>
            </div>
        </section>
    )
}

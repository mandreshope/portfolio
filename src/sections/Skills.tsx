import { SKILLS } from '../config'

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="section-label">Expertise</p>
                    <h2 className="section-title">
                        Skills &amp;{' '}
                        <span className="gradient-text">Technologies</span>
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((group, gi) => (
                        <div
                            key={group.category}
                            className="card p-6"
                            style={{ animationDelay: `${gi * 100}ms` }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl" role="img" aria-label={group.category}>
                                    {group.icon}
                                </span>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-indigo-500">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Skills list */}
                            <ul className="flex flex-col gap-2">
                                {group.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Proficiency ribbon */}
                <div className="mt-14 grid sm:grid-cols-3 gap-6 text-center">
                    {[
                        { label: 'Years Coding', value: '4+' },
                        { label: 'Apps Shipped', value: '10+' },
                        { label: 'Happy Clients', value: '5+' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl glass py-8 px-4"
                        >
                            <p className="text-4xl font-black gradient-text mb-1">{stat.value}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { useState, useMemo } from 'react'
import {
    Star, GitFork, ExternalLink, RefreshCw, Search, Pin, Clock,
} from 'lucide-react'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { SITE_CONFIG, FEATURED_REPOS } from '../config'
import type { GitHubRepo } from '../types'
import { formatDistanceToNow } from 'date-fns'

const LANG_COLORS: Record<string, string> = {
    Dart: 'bg-[#00B4AB]/20 text-[#00B4AB]',
    Kotlin: 'bg-[#7F52FF]/20 text-[#7F52FF]',
    Swift: 'bg-[#FF7F2A]/20 text-[#FF7F2A]',
    TypeScript: 'bg-[#3178C6]/20 text-[#3178C6]',
    JavaScript: 'bg-[#F7DF1E]/20 text-[#ca9f00]',
    Python: 'bg-[#3572A5]/20 text-[#3572A5]',
    default: 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
}

function langClass(lang: string | null) {
    if (!lang) return LANG_COLORS.default
    return LANG_COLORS[lang] ?? LANG_COLORS.default
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
    const isFeatured = FEATURED_REPOS.includes(repo.name)
    const updated = formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="card group flex flex-col p-5 gap-3"
            aria-label={`Open ${repo.name} on GitHub`}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                    {isFeatured && (
                        <Pin
                            size={13}
                            className="shrink-0 text-indigo-500"
                            aria-label="Featured"
                        />
                    )}
                    <span className="font-semibold text-sm truncate group-hover:text-indigo-500 transition-colors">
                        {repo.name}
                    </span>
                </div>
                <ExternalLink
                    size={14}
                    className="shrink-0 text-slate-400 group-hover:text-indigo-500 transition-colors mt-0.5"
                />
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 flex-1 leading-relaxed">
                {repo.description ?? 'No description provided.'}
            </p>

            {/* Footer metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                {repo.language && (
                    <span className={`px-2 py-0.5 rounded-full font-medium ${langClass(repo.language)}`}>
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400" />
                        {repo.stargazers_count}
                    </span>
                )}
                {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                    </span>
                )}
                <span className="flex items-center gap-1 ml-auto">
                    <Clock size={11} />
                    {updated}
                </span>
            </div>
        </a>
    )
}

export default function Projects() {
    const { repos, status, error, refetch } = useGitHubRepos(SITE_CONFIG.githubUsername)
    const [search, setSearch] = useState('')
    const [lang, setLang] = useState<string>('all')

    // Collect unique languages
    const languages = useMemo(() => {
        const langs = repos.map((r) => r.language).filter(Boolean) as string[]
        return ['all', ...Array.from(new Set(langs)).sort()]
    }, [repos])

    // Sort: featured first, then by updated_at
    const sorted = useMemo(() => {
        return [...repos].sort((a, b) => {
            const aF = FEATURED_REPOS.includes(a.name) ? 0 : 1
            const bF = FEATURED_REPOS.includes(b.name) ? 0 : 1
            if (aF !== bF) return aF - bF
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        })
    }, [repos])

    // Filter
    const filtered = useMemo(() => {
        return sorted.filter((r) => {
            const matchSearch =
                r.name.toLowerCase().includes(search.toLowerCase()) ||
                (r.description ?? '').toLowerCase().includes(search.toLowerCase())
            const matchLang = lang === 'all' || r.language === lang
            return matchSearch && matchLang
        })
    }, [sorted, search, lang])

    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="section-label">Portfolio</p>
                    <h2 className="section-title">
                        Open Source{' '}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
                        Fetched live from GitHub · sorted by most recently updated.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="search"
                            placeholder="Search repositories…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700
                         bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         placeholder:text-slate-400"
                        />
                    </div>

                    {/* Language filter */}
                    <select
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        className="px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                       cursor-pointer"
                    >
                        {languages.map((l) => (
                            <option key={l} value={l}>
                                {l === 'all' ? 'All languages' : l}
                            </option>
                        ))}
                    </select>

                    {/* Refresh */}
                    <button
                        onClick={refetch}
                        aria-label="Refresh repos"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700
                       hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                    >
                        <RefreshCw
                            size={16}
                            className={status === 'loading' ? 'animate-spin text-indigo-500' : 'text-slate-400'}
                        />
                    </button>
                </div>

                {/* Status messages */}
                {status === 'loading' && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-36 rounded-2xl animate-pulse bg-slate-100 dark:bg-slate-800"
                            />
                        ))}
                    </div>
                )}

                {(status === 'rate-limited' || status === 'error') && (
                    <div className="mb-6 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 text-amber-700 dark:text-amber-400 text-sm">
                        ⚠️ {error ?? 'Could not fetch repositories.'}{' '}
                        {repos.length > 0 && 'Showing cached data.'}
                    </div>
                )}

                {/* Grid */}
                {(status === 'success' || status === 'rate-limited' || status === 'error') && (
                    <>
                        {filtered.length === 0 ? (
                            <p className="text-center text-slate-400 py-16">
                                No repositories match your filters.
                            </p>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filtered.map((r) => (
                                    <RepoCard key={r.id} repo={r} />
                                ))}
                            </div>
                        )}
                        <p className="text-xs text-center text-slate-400 mt-6">
                            {filtered.length} of {repos.length} repositories shown
                        </p>
                    </>
                )}
            </div>
        </section>
    )
}

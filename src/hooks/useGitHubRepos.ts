import { useState, useEffect, useCallback } from 'react'
import type { GitHubRepo } from '../types'

const CACHE_KEY = 'gh_repos_cache'
const CACHE_TTL = 1000 * 60 * 15 // 15 minutes

interface CacheEntry {
    repos: GitHubRepo[]
    timestamp: number
}

function loadCache(): GitHubRepo[] | null {
    try {
        const raw = localStorage.getItem(CACHE_KEY)
        if (!raw) return null
        const entry: CacheEntry = JSON.parse(raw)
        if (Date.now() - entry.timestamp < CACHE_TTL) return entry.repos
        return null
    } catch {
        return null
    }
}

function saveCache(repos: GitHubRepo[]) {
    try {
        const entry: CacheEntry = { repos, timestamp: Date.now() }
        localStorage.setItem(CACHE_KEY, JSON.stringify(entry))
    } catch {
        // quota exceeded – ignore
    }
}

export type FetchStatus = 'idle' | 'loading' | 'success' | 'rate-limited' | 'error'

interface UseGitHubReposResult {
    repos: GitHubRepo[]
    status: FetchStatus
    error: string | null
    refetch: () => void
}

export function useGitHubRepos(username: string): UseGitHubReposResult {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [status, setStatus] = useState<FetchStatus>('idle')
    const [error, setError] = useState<string | null>(null)

    const fetchRepos = useCallback(async () => {
        // Try cache first
        const cached = loadCache()
        if (cached) {
            setRepos(cached)
            setStatus('success')
            return
        }

        setStatus('loading')
        setError(null)

        try {
            const token = import.meta.env.VITE_GITHUB_TOKEN
            const headers: HeadersInit = { Accept: 'application/vnd.github+json' }
            if (token) headers['Authorization'] = `Bearer ${token}`

            const res = await fetch(
                `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
                { headers }
            )

            if (res.status === 403 || res.status === 429) {
                // Rate limited – try stale cache
                const staleRaw = localStorage.getItem(CACHE_KEY)
                if (staleRaw) {
                    const stale: CacheEntry = JSON.parse(staleRaw)
                    setRepos(stale.repos)
                }
                setStatus('rate-limited')
                setError('GitHub API rate limit reached. Showing cached data.')
                return
            }

            if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)

            const data: GitHubRepo[] = await res.json()
            const filtered = data
                .filter((r) => !r.fork && !r.archived)
                .sort(
                    (a, b) =>
                        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                )

            saveCache(filtered)
            setRepos(filtered)
            setStatus('success')
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Unknown error'
            // Try stale cache as fallback
            const staleRaw = localStorage.getItem(CACHE_KEY)
            if (staleRaw) {
                try {
                    const stale: CacheEntry = JSON.parse(staleRaw)
                    setRepos(stale.repos)
                } catch {
                    // ignore
                }
            }
            setStatus('error')
            setError(msg)
        }
    }, [username])

    useEffect(() => {
        fetchRepos()
    }, [fetchRepos])

    return { repos, status, error, refetch: fetchRepos }
}

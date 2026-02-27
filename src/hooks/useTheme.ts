import { useState, useEffect } from 'react'
import type { Theme } from '../types'

const KEY = 'portfolio_theme'

function getInitial(): Theme {
    const stored = localStorage.getItem(KEY) as Theme | null
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitial)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem(KEY, theme)
    }, [theme])

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

    return { theme, toggle }
}

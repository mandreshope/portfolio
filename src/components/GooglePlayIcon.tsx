/** Icône Google Play (SVG officiel simplifié, 4 couleurs) */
export function GooglePlayIcon({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Triangle gauche — vert */}
            <path d="M3.18 1.42 13.6 12 3.18 22.58A1.5 1.5 0 0 1 2 21.14V2.86a1.5 1.5 0 0 1 1.18-1.44Z" fill="currentColor" opacity=".85" />
            {/* Triangle haut — bleu */}
            <path d="m5.07 1 9.6 5.54L11.5 9.7 5.07 1Z" fill="currentColor" opacity=".6" />
            {/* Triangle bas — jaune */}
            <path d="m5.07 23 6.43-8.7 3.17 3.16L5.07 23Z" fill="currentColor" opacity=".6" />
            {/* Triangle droit — rouge */}
            <path d="m21.1 10.56-3.43-1.98-3.37 3.42 3.37 3.42 3.45-1.99a1.5 1.5 0 0 0 0-2.87Z" fill="currentColor" />
        </svg>
    )
}

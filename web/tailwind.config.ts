import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        'bg-card': '#0f0f11',
        border: '#1e1e24',
        'border-hi': '#2e2e38',
        muted: '#4a4a5a',
        dim: '#7a7a90',
        text: '#c8c8d8',
        bright: '#e8e8f0',
        white: '#f4f4f8',
        accent: '#8b5cf6',
        'accent-lo': '#4c1d95',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config

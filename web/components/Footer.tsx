import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-5xl mx-auto px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="font-mono text-[0.65rem] text-muted leading-relaxed">
          <div>© 2026 Teliminal Protocol / MMAD-EI</div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_6px_#22c55e] inline-block" />
            <span>Phase 2 Active</span>
            <span className="text-border-hi mx-1">·</span>
            <span>Rally, LLC — Tennessee</span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Teliminal/protocol' },
            { label: 'Partner', href: '/partner/' },
            { label: 'Protocol', href: 'https://github.com/Teliminal/protocol/tree/main/protocol' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[0.65rem] text-muted hover:text-dim tracking-[0.08em] uppercase transition-colors"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

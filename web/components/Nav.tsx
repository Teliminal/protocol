'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Research',    href: '/#research' },
  { label: 'Platform',    href: '/#platform' },
  { label: 'Methodology', href: '/#methodology' },
  { label: 'Partner',     href: '/partner/' },
  { label: 'About',       href: '/#about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent z-[200] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                    px-12 h-14 transition-all duration-200
                    ${scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
      >
        <Link href="/" className="font-mono text-[0.85rem] font-medium text-bright tracking-[0.12em] uppercase hover:text-white transition-colors">
          Teliminal
        </Link>

        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-mono text-[0.7rem] tracking-[0.08em] uppercase transition-colors
                  ${pathname === '/partner/' && href === '/partner/'
                    ? 'text-bright'
                    : 'text-muted hover:text-dim'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

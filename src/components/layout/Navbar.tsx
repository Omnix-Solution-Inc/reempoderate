'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#metodo', label: 'Método' },
    { href: '#coaching', label: 'Coaching' },
    { href: '#talleres', label: 'Talleres' },
    { href: '#bio', label: 'Bio' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-bloom/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl text-bloom-deep font-semibold">
          ReEmpoderate
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-bloom-deep transition">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/re_empoderate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @re_empoderate"
            className="text-ink/50 hover:text-bloom-deep transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@reempoderate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok @reempoderate"
            className="text-ink/50 hover:text-bloom-deep transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>

          {/* Acceder button */}
          <a
            href="/auth/login"
            className="bg-bloom-deep text-white text-sm px-5 py-2 rounded-full hover:bg-bloom transition"
          >
            Acceder
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ink/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-bloom/10 px-6 py-4 flex flex-col gap-4 text-sm text-ink/70">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-bloom-deep transition" onClick={() => setIsOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.instagram.com/re_empoderate" target="_blank" rel="noopener noreferrer" className="hover:text-bloom-deep transition">
              @re_empoderate
            </a>
            <a href="https://www.tiktok.com/@reempoderate" target="_blank" rel="noopener noreferrer" className="hover:text-bloom-deep transition">
              TikTok
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

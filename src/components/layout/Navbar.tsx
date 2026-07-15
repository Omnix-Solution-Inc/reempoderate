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
          <a
            href="/auth/login"
            className="bg-bloom-deep text-white text-sm px-5 py-2 rounded-full hover:bg-bloom transition"
          >
            Acceder
          </a>

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

      {isOpen && (
        <div className="md:hidden bg-cream border-t border-bloom/10 px-6 py-4 flex flex-col gap-4 text-sm text-ink/70">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-bloom-deep transition" onClick={() => setIsOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ReEmpoderate" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-playfair text-xl text-ink font-bold tracking-wide">ReEmpoderate</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-bloom transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="bg-bloom text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-bloom-deep transition-colors"
          >
            Acceder
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream border-t border-bloom/10 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-ink/70 hover:text-bloom font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="block bg-bloom text-white px-5 py-2.5 rounded-full text-sm font-medium text-center"
          >
            Acceder
          </Link>
        </div>
      )}
    </nav>
  )
}

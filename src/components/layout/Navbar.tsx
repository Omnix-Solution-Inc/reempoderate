'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export function Navbar() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-light/90 backdrop-blur-md border-b border-shamrock/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-playfair text-xl text-shamrock font-bold">ReEmpoderate</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#metodo" className="text-sm text-gray-600 hover:text-shamrock transition">Método</a>
          <a href="#coaching" className="text-sm text-gray-600 hover:text-shamrock transition">Coaching</a>
          <a href="#talleres" className="text-sm text-gray-600 hover:text-shamrock transition">Talleres</a>
          <a href="#filosofia" className="text-sm text-gray-600 hover:text-shamrock transition">Filosofía</a>
          {session ? (
            <>
              <Link href="/dashboard" className="text-sm text-shamrock font-medium hover:text-shamrock-dark transition">Mi Portal</Link>
              <button onClick={() => signOut()} className="text-sm text-gray-400 hover:text-gray-600 transition">Salir</button>
            </>
          ) : (
            <button onClick={() => signIn()} className="bg-shamrock text-cream px-5 py-2 rounded-xl text-sm font-medium hover:bg-shamrock-dark transition">
              Acceder
            </button>
          )}
        </div>

        <button className="md:hidden text-shamrock" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-light border-t border-shamrock/10 px-6 py-4 flex flex-col gap-4">
          <a href="#metodo" className="text-sm text-gray-600" onClick={() => setOpen(false)}>Método</a>
          <a href="#coaching" className="text-sm text-gray-600" onClick={() => setOpen(false)}>Coaching</a>
          <a href="#talleres" className="text-sm text-gray-600" onClick={() => setOpen(false)}>Talleres</a>
          <a href="#filosofia" className="text-sm text-gray-600" onClick={() => setOpen(false)}>Filosofía</a>
          {session ? (
            <Link href="/dashboard" className="text-sm text-shamrock font-medium" onClick={() => setOpen(false)}>Mi Portal</Link>
          ) : (
            <button onClick={() => signIn()} className="bg-shamrock text-cream px-5 py-2 rounded-xl text-sm font-medium">Acceder</button>
          )}
        </div>
      )}
    </nav>
  )
}

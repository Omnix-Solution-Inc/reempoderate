'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl text-primary font-semibold">
          ReEmpoderate
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/gallery" className="hover:text-primary transition">Galería</Link>
          <Link href="/marketplace" className="hover:text-primary transition">Marketplace</Link>
          <Link href="/about" className="hover:text-primary transition">Nosotras</Link>
          {session && (
            <Link href="/dashboard" className="hover:text-primary transition">Mi Espacio</Link>
          )}
        </div>

        <div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-sm text-gray-500 hover:text-primary transition"
            >
              Salir
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-primary text-white text-sm px-5 py-2 rounded-full hover:bg-primary-dark transition"
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

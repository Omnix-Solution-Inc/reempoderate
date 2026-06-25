'use client'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export function HeroSection() {
  const { data: session } = useSession()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-bg via-pink-50 to-green-50 pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6">
          ✦ Certified ICF Coach · Axon Training · Ibero Business Center
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
          Tu transformación
          <span className="text-gradient block">comienza aquí</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Coaching ontológico certificado, talleres de arte y una comunidad de mujeres 
          que construyen vidas con propósito.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/coaching"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-primary-dark transition text-base shadow-lg shadow-primary/25"
          >
            Empieza tu transformación
          </Link>
          {!session && (
            <button
              onClick={() => signIn()}
              className="border border-primary text-primary px-8 py-4 rounded-2xl font-medium hover:bg-primary/5 transition text-base"
            >
              Crear cuenta gratis
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

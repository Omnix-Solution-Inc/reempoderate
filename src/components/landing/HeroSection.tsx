'use client'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export function HeroSection() {
  const { data: session } = useSession()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cream via-cream-light to-shamrock/5 pt-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-shamrock/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 border border-shamrock/20 rounded-full px-4 py-2 text-xs font-medium text-shamrock mb-8">
          ✦ Coaching Ontológico Certificado · Ibero Business Center
        </div>

        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Rediseña tu futuro desde la
          <span className="text-gradient block">Autotransformación Consciente</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          Un espacio de acompañamiento profesional diseñado para mujeres que eligen salir del automatismo, habitar su presencia y construir una nueva realidad en coherencia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/coaching"
            className="bg-shamrock text-cream px-8 py-4 rounded-2xl font-medium hover:bg-shamrock-dark transition text-base shadow-lg shadow-shamrock/25"
          >
            Empieza tu transformación
          </Link>
          {!session && (
            <button
              onClick={() => signIn()}
              className="border border-shamrock text-shamrock px-8 py-4 rounded-2xl font-medium hover:bg-shamrock/5 transition text-base"
            >
              Acceder a mi portal
            </button>
          )}
          {session && (
            <Link
              href="/dashboard"
              className="border border-shamrock text-shamrock px-8 py-4 rounded-2xl font-medium hover:bg-shamrock/5 transition text-base"
            >
              Ir a mi dashboard
            </Link>
          )}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="font-playfair text-3xl text-terracotta font-bold">10+</p>
            <p className="text-xs text-gray-500 mt-1">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-terracotta font-bold">100%</p>
            <p className="text-xs text-gray-500 mt-1">No directivo</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-terracotta font-bold">ICF</p>
            <p className="text-xs text-gray-500 mt-1">Certificación</p>
          </div>
        </div>
      </div>
    </section>
  )
}

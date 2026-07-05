'use client'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export function CTASection() {
  const { data: session } = useSession()

  return (
    <section className="py-24 bg-shamrock relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl text-cream font-bold mb-6">
          Tu transformación comienza con una conversación
        </h2>
        <p className="text-cream/80 text-lg mb-10 leading-relaxed">
          Da el primer paso hacia una vida en coherencia. Acompañamos tu proceso con rigor profesional, respeto absoluto y la pureza del método no directivo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/coaching"
            className="bg-terracotta text-white px-8 py-4 rounded-2xl font-medium hover:bg-terracotta-dark transition text-base shadow-lg"
          >
            Empieza tu transformación
          </Link>
          {!session && (
            <button
              onClick={() => signIn()}
              className="border border-cream/40 text-cream px-8 py-4 rounded-2xl font-medium hover:bg-cream/10 transition text-base"
            >
              Acceder a mi portal
            </button>
          )}
          {session && (
            <Link
              href="/dashboard"
              className="border border-cream/40 text-cream px-8 py-4 rounded-2xl font-medium hover:bg-cream/10 transition text-base"
            >
              Ir a mi dashboard
            </Link>
          )}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-cream/60 text-sm">
          <span>✦</span>
          <span>Coaching Ontológico Certificado · Ibero Business Center</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  )
}

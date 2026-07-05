'use client'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const { data: session } = useSession()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cream via-cream-light to-bloom/5 pt-24 pb-16">
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloom/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo 5x5 pulgadas = 480x480px */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="ReEmpoderate"
            width={480}
            height={480}
            className="w-80 h-80 md:w-[480px] md:h-[480px] object-contain drop-shadow-xl"
            priority
          />
        </div>

        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight">
          Rediseña tu futuro desde la
          <span className="text-gradient block">Autotransformación Consciente</span>
        </h1>

        <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          Un espacio de acompañamiento profesional diseñado para mujeres que eligen salir del automatismo, habitar su presencia y construir una nueva realidad en coherencia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/diagnostico"
            className="bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition text-base shadow-lg shadow-bloom/25 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Empieza tu transformación
          </Link>
          {!session && (
            <button
              onClick={() => signIn()}
              className="border border-ink text-ink px-8 py-4 rounded-2xl font-medium hover:bg-ink/5 transition text-base"
            >
              Acceder a mi portal
            </button>
          )}
          {session && (
            <Link
              href="/dashboard"
              className="border border-ink text-ink px-8 py-4 rounded-2xl font-medium hover:bg-ink/5 transition text-base"
            >
              Ir a mi dashboard
            </Link>
          )}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">10+</p>
            <p className="text-xs text-ink/50 mt-1">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">100%</p>
            <p className="text-xs text-ink/50 mt-1">No directivo</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">ICF</p>
            <p className="text-xs text-ink/50 mt-1">Certificación</p>
          </div>
        </div>
      </div>
    </section>
  )
}

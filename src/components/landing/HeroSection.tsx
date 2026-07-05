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
          <a
            href="https://wa.me/13217329993?text=Hola%2C%20quiero%20iniciar%20mi%20proceso%20de%20transformaci%C3%B3n%20con%20ReEmpoderate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition text-base shadow-lg shadow-bloom/25 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empieza tu transformación
          </a>
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

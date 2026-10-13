'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { hasAdminSessionHint } from '@/lib/auth/adminSessionHint'
import { useI18n } from '@/lib/i18n'

export function HeroSection() {
  const [hasSession, setHasSession] = useState(false)
  useEffect(() => setHasSession(hasAdminSessionHint()), [])
  const { t } = useI18n()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cream via-cream-light to-bloom/5 pt-24 pb-16">
      <div className="absolute top-20 right-10 w-72 h-72 bg-bloom/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo 5x5 pulgadas = 480x480px */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="ReEmpodérate"
            width={480}
            height={480}
            className="w-80 h-80 md:w-[480px] md:h-[480px] object-contain drop-shadow-xl"
            priority
          />
        </div>

        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight">
          {t('hero.h1a')}
          <span className="text-gradient block">{t('hero.h1b')}</span>
        </h1>

        <p className="font-arimo text-base text-ink/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.p')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/rueda-de-la-vida"
            className="bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition text-base shadow-lg shadow-bloom/25 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
            </svg>
            {t('hero.rueda')}
          </Link>
          <Link
            href="/agendar"
            className="border border-bloom-deep text-bloom-deep px-8 py-4 rounded-2xl font-medium hover:bg-bloom/10 transition text-base inline-flex items-center gap-2"
          >
            {t('hero.agendar')}
          </Link>
          {!hasSession && (
            <Link
              href="/auth/login"
              className="border border-ink text-ink px-8 py-4 rounded-2xl font-medium hover:bg-ink/5 transition text-base"
            >
              {t('hero.portal')}
            </Link>
          )}
          {hasSession && (
            <Link
              href="/dashboard"
              className="border border-ink text-ink px-8 py-4 rounded-2xl font-medium hover:bg-ink/5 transition text-base"
            >
              {t('hero.dashboard')}
            </Link>
          )}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">10+</p>
            <p className="text-xs text-ink/50 mt-1">{t('hero.stat1')}</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">100%</p>
            <p className="text-xs text-ink/50 mt-1">{t('hero.stat2')}</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-bloom-deep font-bold">ICF</p>
            <p className="text-xs text-ink/50 mt-1">{t('hero.stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

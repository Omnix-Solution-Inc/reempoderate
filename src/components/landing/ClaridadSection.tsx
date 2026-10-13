'use client'
// Sesión de Claridad — conversación de 15 a 20 minutos (reempoderate.com)
// Añadida Oct 2026 (rama conversion-octubre): la puerta de entrada al programa.

import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

export function ClaridadSection() {
  const { t } = useI18n()

  return (
    <section id="claridad" className="py-24 bg-cream-light/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
              {t('claridad.tag')}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-ink-dark mb-5">
              {t('claridad.h2')}
            </h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              {t('claridad.p1')}
            </p>
            <p className="text-ink/70 leading-relaxed mb-8">
              {t('claridad.p2')}
            </p>
            <Link
              href="/agendar"
              className="inline-block bg-bloom-deep text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-bloom transition"
            >
              {t('claridad.cta')}
            </Link>
          </div>
          <div className="bg-white/70 rounded-3xl p-8 shadow-sm border border-bloom/10">
            <div className="flex items-start gap-4 mb-6">
              <span className="w-10 h-10 shrink-0 rounded-full bg-mint/40 flex items-center justify-center text-bloom-deep font-playfair text-lg">1</span>
              <p className="text-ink/70 leading-relaxed">{t('claridad.p1')}</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 shrink-0 rounded-full bg-gold/40 flex items-center justify-center text-bloom-deep font-playfair text-lg">2</span>
              <p className="text-ink/70 leading-relaxed">{t('claridad.p2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

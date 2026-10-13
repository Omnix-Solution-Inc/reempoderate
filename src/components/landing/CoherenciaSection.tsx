'use client'
// 90 Días de Coherencia — la oferta del programa (reempoderate.com)
// Añadida Oct 2026 (rama conversion-octubre). Sin precio público:
// el precio se cierra en conversación (decisión de Mariela y Pedro).

import { useI18n, getWhatsAppUrl } from '@/lib/i18n'

export function CoherenciaSection() {
  const { t, lang } = useI18n()

  const items = [t('coh.item1'), t('coh.item2'), t('coh.item3')]
  const bonos = [t('coh.bono1'), t('coh.bono2'), t('coh.bono3')]

  return (
    <section id="coherencia" className="py-24 bg-gradient-to-b from-cream to-bloom/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
          {t('coh.tag')}
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl text-ink-dark mb-4">
          {t('coh.h2')}
        </h2>
        <p className="font-arimo text-base text-ink/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('coh.sub')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
          <div className="bg-white/70 rounded-3xl p-8 shadow-sm border border-bloom/10">
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-bloom-deep" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-ink/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/70 rounded-3xl p-8 shadow-sm border border-gold/30">
            <p className="text-xs uppercase tracking-[0.2em] text-bloom-deep mb-4">
              {t('coh.regaloH')}
            </p>
            <div className="space-y-4">
              {bonos.map((bono, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg leading-none">🎁</span>
                  <p className="text-ink/80 leading-relaxed">{bono}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-mint/20 rounded-3xl p-8 shadow-sm border border-mint/40 mb-6 max-w-3xl mx-auto">
          <p className="font-playfair text-xl text-ink-dark mb-2">
            {t('coh.garantiaH')} 🛡
          </p>
          <p className="text-ink/70 leading-relaxed">
            {t('coh.garantia')}
          </p>
        </div>

        <p className="text-ink/60 text-sm mb-8">
          {t('coh.escasez')}
        </p>

        <a
          href={getWhatsAppUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-bloom-deep text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-bloom transition shadow-lg shadow-bloom/25"
        >
          {t('coh.cta')}
        </a>
      </div>
    </section>
  )
}

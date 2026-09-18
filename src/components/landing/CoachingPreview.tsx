'use client'

import { useI18n } from '@/lib/i18n'

export function CoachingPreview() {
  const { t } = useI18n()
  return (
    <section id="coaching" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Coaching Ontológico */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">{t('coach.ontoTitle')}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {t('coach.ontoP')}
          </p>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.aborda')}</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.ontoQ1')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.ontoQ2')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.ontoQ3')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.ontoQ4')}</p>
            </div>
          </div>
        </div>

        {/* Coaching Laboral */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">{t('coach.laboralTitle')}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {t('coach.laboralP')}
          </p>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.aborda')}</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.laboralQ1')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.laboralQ2')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.laboralQ3')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.laboralQ4')}</p>
            </div>
          </div>
        </div>

        {/* Ejecución Sistémica | Programa Élite XM */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">{t('coach.xmTitle')}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {t('coach.xmP1')}
          </p>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.xmConsiste')}</p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {t('coach.xmP2')}
          </p>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.xmCamino')}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmF1')}</strong>{t('coach.xmF1p')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmF2')}</strong>{t('coach.xmF2p')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmF3')}</strong>{t('coach.xmF3p')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmF4')}</strong>{t('coach.xmF4p')}</p>
            </div>
          </div>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.xmPorque')}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmW1')}</strong>{t('coach.xmW1p')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm"><strong className="text-ink">{t('coach.xmW2')}</strong>{t('coach.xmW2p')}</p>
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed italic">
            {t('coach.xmCierre')}
          </p>
        </div>

        {/* Alquimia Floral */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">{t('coach.alqTitle')}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {t('coach.alqP')}
          </p>
          <p className="text-ink font-medium text-sm mb-3">{t('coach.aborda')}</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.alqQ1')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.alqQ2')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.alqQ3')}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">{t('coach.alqQ4')}</p>
            </div>
          </div>
        </div>

        {/* Bloque unificado */}
        <div className="bg-shamrock/5 rounded-2xl p-8 border border-shamrock/10">
          <p className="text-gray-600 text-base leading-relaxed mb-6 text-center italic">
            {t('coach.bloqueP')}
          </p>
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">{t('coach.b1')}</strong>{t('coach.b1p')}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">{t('coach.b2')}</strong>{t('coach.b2p')}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">{t('coach.b3')}</strong>{t('coach.b3p')}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">{t('coach.b4')}</strong>{t('coach.b4p')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

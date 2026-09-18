'use client'

import { useI18n } from '@/lib/i18n'

export function ServicesSection() {
  const { t } = useI18n()
  return (
    <section id="metodo" className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta italic text-lg mb-3">{t('services.tag')}</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold">
            {t('services.h2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm text-center">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/ser_final.png" alt="Ser" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">{t('services.serT')}<br/><span className="text-base text-gray-500 font-normal">{t('services.serS')}</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('services.serP')}
            </p>
          </div>

          {/* HACER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-terracotta shadow-sm text-center">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/hacer_icon.png" alt="Hacer" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">{t('services.hacerT')}<br/><span className="text-base text-gray-500 font-normal">{t('services.hacerS')}</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('services.hacerP')}
            </p>
          </div>

          {/* TENER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm text-center">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/tener_icon.png" alt="Tener" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">{t('services.tenerT')}<br/><span className="text-base text-gray-500 font-normal">{t('services.tenerS')}</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('services.tenerP')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

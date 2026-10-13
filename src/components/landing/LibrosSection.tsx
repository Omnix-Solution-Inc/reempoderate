'use client'
// LibrosSection — Colecciones Florales a la venta en Amazon (reempoderate.com)
// Añadida Oct 2026 a pedido de Mariela: botón de compra para los libros publicados en KDP.
// ES: https://a.co/d/08KFQjMx · EN: https://a.co/d/06wnu679

import Image from 'next/image'

import { useI18n } from '@/lib/i18n'

const AMAZON_ES = 'https://a.co/d/08KFQjMx'
const AMAZON_EN = 'https://a.co/d/06wnu679'

export function LibrosSection() {
  const { t, lang } = useI18n()

  // La edición en el idioma del cliente aparece primero
  const esBook = {
      key: 'es',
      cover: '/libro-coleccion-es.png',
      title: t('libros.esTitle'),
      desc: t('libros.esDesc'),
      url: AMAZON_ES,
      badge: 'Español',
  }
  const enBook = {
      key: 'en',
      cover: '/libro-coleccion-en.png',
      title: t('libros.enTitle'),
      desc: t('libros.enDesc'),
      url: AMAZON_EN,
      badge: 'English',
  }
  const books = lang === 'en' ? [enBook, esBook] : [esBook, enBook]

  return (
    <section id="libros" className="py-24 bg-gradient-to-b from-bloom/5 to-cream">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
          {t('libros.tag')}
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl text-ink-dark mb-4">
          {t('libros.h2')}
        </h2>
        <p className="font-arimo text-base text-ink/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('libros.sub')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {books.map((b) => (
            <div
              key={b.key}
              className="bg-white/70 rounded-3xl p-8 shadow-sm border border-bloom/10 flex flex-col items-center"
            >
              <div className="relative w-48 md:w-56 aspect-[0.756] mb-6">
                <Image
                  src={b.cover}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-bloom-deep mb-2">
                {b.badge}
              </p>
              <h3 className="font-playfair text-xl text-ink-dark mb-3">{b.title}</h3>
              <p className="font-arimo text-sm text-ink/70 leading-relaxed mb-6">{b.desc}</p>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bloom-deep hover:bg-bloom-deep/90 text-white font-arimo font-bold text-sm px-8 py-3 rounded-full transition-colors shadow-sm"
              >
                {t('libros.buy')}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="font-arimo text-sm text-ink/50 italic">{t('libros.note')}</p>
      </div>
    </section>
  )
}

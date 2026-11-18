'use client'
// LibrosSection — libros de ReEmpodérate a la venta en Amazon (reempoderate.com)
// Oct 2026 a pedido de Mariela: botón de compra de los libros publicados en KDP.
// Nov 2026: la sección muestra los cuatro libros, SINCRONÍA y SYNCHRONY incluidos.
// Enlaces: SINCRONÍA https://www.amazon.com/dp/B0HQ3LFMYV
//          SYNCHRONY https://www.amazon.com/dp/B0HQ5XS82P
//          Colección floral ES https://a.co/d/0bwS9lDe · EN https://www.amazon.com/dp/B0HP9K5WTL

import Image from 'next/image'
import Link from 'next/link'

import { useI18n } from '@/lib/i18n'

const AUTHOR_PAGE = 'https://www.amazon.com/author/www.reempoderate.com'

type HomeBook = {
  key: string
  cover: string
  title: string
  desc: string
  format: string
  url: string
  badge: string
  altUrl?: string
  altLabel?: string
}

export function LibrosSection() {
  const { t, lang } = useI18n()

  const sincronia: HomeBook = {
      key: 'sincronia',
      cover: '/sincronia-portada.png',
      title: t('librosPage.sinTitle'),
      desc: t('librosPage.sinSub'),
      format: t('librosPage.sinFormat'),
      url: 'https://www.amazon.com/dp/B0HQ3LFMYV',
      altUrl: 'https://a.co/d/01vylx0q',
      altLabel: t('librosPage.hardcoverLink'),
      badge: t('librosPage.badgeEs'),
  }
  const synchrony: HomeBook = {
      key: 'synchrony',
      cover: '/synchrony-portada.png',
      title: t('librosPage.synEnTitle'),
      desc: t('librosPage.synEnSub'),
      format: t('librosPage.synEnFormat'),
      url: 'https://www.amazon.com/dp/B0HQ5XS82P',
      badge: t('librosPage.badgeEn'),
  }
  const floralEs: HomeBook = {
      key: 'floral-es',
      cover: '/libro-coleccion-es.png',
      title: t('libros.esTitle'),
      desc: t('librosPage.floralEsSub'),
      format: t('librosPage.floralEsFormat'),
      url: 'https://a.co/d/0bwS9lDe',
      badge: t('librosPage.badgeEs'),
  }
  const floralEn: HomeBook = {
      key: 'floral-en',
      cover: '/libro-coleccion-en.png',
      title: t('libros.enTitle'),
      desc: t('librosPage.floralEnSub'),
      format: t('librosPage.floralEnFormat'),
      url: 'https://www.amazon.com/dp/B0HP9K5WTL',
      badge: t('librosPage.badgeEn'),
  }

  // La edición en el idioma del cliente aparece primero
  const books: HomeBook[] = lang === 'en'
    ? [synchrony, sincronia, floralEn, floralEs]
    : [sincronia, synchrony, floralEs, floralEn]

  return (
    <section id="libros" className="py-24 bg-gradient-to-b from-bloom/5 to-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
          {t('libros.tag')}
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl text-ink-dark mb-4">
          {t('libros.h2')}
        </h2>
        <p className="font-arimo text-base text-ink/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('libros.sub')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {books.map((b) => (
            <div
              key={b.key}
              className="bg-white/70 rounded-3xl p-6 shadow-sm border border-bloom/10 flex flex-col items-center"
            >
              <div className="relative w-36 md:w-40 aspect-[0.756] mb-5">
                <Image
                  src={b.cover}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 144px, 160px"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-bloom-deep mb-2">
                {b.badge}
              </p>
              <h3 className="font-playfair text-lg text-ink-dark mb-1">{b.title}</h3>
              <p className="font-arimo text-[11px] uppercase tracking-[0.12em] text-ink/45 mb-3">
                {b.format}
              </p>
              <p className="font-arimo text-sm text-ink/70 leading-relaxed mb-6 flex-1">{b.desc}</p>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bloom-deep hover:bg-bloom-deep/90 text-white font-arimo font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
              >
                {t('libros.buy')}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {b.altUrl && (
                <a
                  href={b.altUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 font-arimo text-xs font-medium text-bloom-deep underline underline-offset-4 transition-colors hover:text-bloom"
                >
                  {b.altLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="font-arimo text-sm text-ink/50 italic">{t('libros.note')}</p>

        <div className="mt-6">
          <Link
            href="/libros"
            className="inline-flex items-center gap-2 rounded-full border border-bloom-deep/30 px-7 py-3 font-arimo text-sm font-bold text-bloom-deep transition-colors hover:bg-bloom-deep hover:text-white"
          >
            {t('librosPage.seeAll')}
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-4">
          <a
            href={AUTHOR_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-arimo text-sm font-medium text-bloom-deep underline underline-offset-4 transition-colors hover:text-bloom"
          >
            {t('librosPage.author')}
          </a>
        </div>
      </div>
    </section>
  )
}

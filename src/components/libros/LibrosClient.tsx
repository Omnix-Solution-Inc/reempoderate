'use client'
// Página /libros — todos los libros de ReEmpodérate en un solo lugar.
// Creada Nov 2026 a pedido de Mariela: pestaña "Libros" en la barra superior.
// Cada ficha lleva a su edición publicada en Amazon.

import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'

type Book = {
  key: string
  cover: string
  title: string
  subtitle: string
  format: string
  url: string
  badge: string
  featured?: boolean
}

const AUTHOR_PAGE = 'https://www.amazon.com/author/www.reempoderate.com'

export default function LibrosClient() {
  const { t } = useI18n()

  const books: Book[] = [
    {
      key: 'sincronia',
      cover: '/sincronia-portada.png',
      title: t('librosPage.sinTitle'),
      subtitle: t('librosPage.sinSub'),
      format: t('librosPage.sinFormat'),
      url: 'https://www.amazon.com/dp/B0HQ3LFMYV',
      badge: t('librosPage.badgeEs'),
      featured: true,
    },
    {
      key: 'synchrony',
      cover: '/synchrony-portada.png',
      title: t('librosPage.synEnTitle'),
      subtitle: t('librosPage.synEnSub'),
      format: t('librosPage.synEnFormat'),
      url: 'https://www.amazon.com/dp/B0HQ5XS82P',
      badge: t('librosPage.badgeEn'),
      featured: true,
    },
    {
      key: 'floral-es',
      cover: '/libro-coleccion-es.png',
      title: t('libros.esTitle'),
      subtitle: t('librosPage.floralEsSub'),
      format: t('librosPage.floralEsFormat'),
      url: 'https://a.co/d/0bwS9lDe',
      badge: t('librosPage.badgeEs'),
    },
    {
      key: 'floral-en',
      cover: '/libro-coleccion-en.png',
      title: t('libros.enTitle'),
      subtitle: t('librosPage.floralEnSub'),
      format: t('librosPage.floralEnFormat'),
      url: 'https://www.amazon.com/dp/B0HP9K5WTL',
      badge: t('librosPage.badgeEn'),
    },
  ]

  return (
    <main className="min-h-screen bg-light-bg">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-bloom/5 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
              {t('librosPage.tag')}
            </p>
            <h1 className="font-playfair text-3xl md:text-5xl text-ink-dark mb-5">
              {t('librosPage.h2')}
            </h1>
            <p className="font-arimo text-base text-ink/70 max-w-2xl mx-auto leading-relaxed">
              {t('librosPage.sub')}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {books.map((book) => (
              <article
                key={book.key}
                className={`flex flex-col items-center rounded-3xl border border-bloom/10 bg-white/70 p-8 shadow-sm ${
                  book.featured ? 'lg:ring-1 lg:ring-bloom/20' : ''
                }`}
              >
                <div className="relative mb-6 h-60 w-full">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 70vw, 280px"
                    className="object-contain drop-shadow-md"
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-bloom-deep mb-2 text-center">
                  {book.badge}
                </p>
                <h2 className="font-playfair text-xl text-ink-dark mb-2 text-center">
                  {book.title}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.15em] text-ink/45 mb-3 text-center">
                  {book.format}
                </p>
                <p className="font-arimo text-sm text-ink/70 leading-relaxed mb-6 text-center flex-1">
                  {book.subtitle}
                </p>

                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-bloom-deep px-7 py-3 font-arimo text-sm font-bold text-white shadow-sm transition-colors hover:bg-bloom"
                >
                  {t('librosPage.buy')}
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center font-arimo text-sm italic text-ink/50">
            {t('librosPage.note')}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={AUTHOR_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bloom-deep px-8 py-3 font-arimo text-sm font-bold text-white shadow-sm transition-colors hover:bg-bloom"
            >
              {t('librosPage.author')}
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="font-arimo text-xs text-ink/50">{t('librosPage.authorNote')}</p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="font-arimo text-sm font-medium text-bloom-deep underline underline-offset-4 hover:text-bloom"
            >
              {t('librosPage.back')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

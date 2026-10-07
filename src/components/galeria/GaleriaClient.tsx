'use client'

// GaleriaClient — pestaña de galería de los libros de ReEmpodérate
// 1. Referencias de Peonías y Mándalas · 2. Flores · 3. …
// Títulos por libro según el idioma activo (ES/EN).

import { useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from '@/components/shared/LangToggle'

type Img = { src: string; alt: string }

const peonias: Img[] = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/peonias/ref-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Peonía ${i + 1}`,
}))

const floresVariadas: Img[] = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/flores/ref-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Flor ${i + 1}`,
}))

export default function GaleriaClient() {
  const { t } = useI18n()
  const [lightbox, setLightbox] = useState<Img | null>(null)

  const Section = ({ book, sub, note, images }: {
    book: string; sub: string; note: string; images: Img[] | null
  }) => (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl text-ink mb-2">{book}</h2>
        <p className="text-sm font-medium text-bloom-deep tracking-wide uppercase">{sub}</p>
        <p className="text-sm text-ink/60 max-w-2xl mx-auto mt-3 leading-relaxed">{note}</p>
      </div>
      {images ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(img)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-bloom/20 bg-white shadow-sm hover:shadow-md transition-shadow"
              aria-label={`${img.alt} — ${book}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-ink/40 text-sm italic">…</div>
      )}
    </section>
  )

  return (
    <div className="min-h-screen bg-cream">
      {/* Encabezado */}
      <header className="border-b border-bloom/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl text-bloom-deep font-semibold">
            ReEmpodérate
          </Link>
          <div className="flex items-center gap-4">
            <LangToggle />
            <Link href="/" className="text-sm underline underline-offset-4 text-ink">
              {t('gal.volver')}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-14">
          <h1 className="font-playfair text-4xl text-ink mb-4">{t('gal.title')}</h1>
          <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">{t('gal.intro')}</p>
        </div>

        <Section
          book={t('gal.b1.book')}
          sub={t('gal.b1.sub')}
          note={t('gal.b1.note')}
          images={peonias}
        />
        <Section
          book={t('gal.b2.book')}
          sub={t('gal.b2.sub')}
          note={t('gal.b2.note')}
          images={peonias}
        />
        <Section
          book={t('gal.b3.book')}
          sub={t('gal.b3.sub')}
          note={t('gal.b3.note')}
          images={floresVariadas}
        />
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
          role="button"
          aria-label={t('gal.title')}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Escape') setLightbox(null) }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-full max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  )
}

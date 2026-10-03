'use client'
import { useEffect, useState } from 'react'
import { hasAdminSessionHint } from '@/lib/auth/adminSessionHint'
import { useI18n, getWhatsAppUrl } from '@/lib/i18n'
import Link from 'next/link'

export function CTASection() {
  const [hasSession, setHasSession] = useState(false)
  useEffect(() => setHasSession(hasAdminSessionHint()), [])
  const { t, lang } = useI18n()
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simula guardado — aquí se puede conectar a Base44 o Mailchimp
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-shamrock relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl text-cream font-bold mb-6">
          {t('cta.h2')}
        </h2>
        <p className="text-cream/80 text-lg mb-10 leading-relaxed">
          {t('cta.p')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition text-base shadow-lg inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empieza tu transformación
          </a>

          {!hasSession && (
            <button
              onClick={() => setShowModal(true)}
              className="border border-cream/40 text-cream px-8 py-4 rounded-2xl font-medium hover:bg-cream/10 transition text-base"
            >
              Acceder a mi portal
            </button>
          )}
          {hasSession && (
            <Link
              href="/dashboard"
              className="border border-cream/40 text-cream px-8 py-4 rounded-2xl font-medium hover:bg-cream/10 transition text-base"
            >
              Ir a mi dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Modal Escuela Online + Newsletter */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => { setShowModal(false); setSubmitted(false); setEmail('') }}
        >
          <div
            className="bg-cream rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <div className="text-4xl mb-3">🌸</div>
                <h3 className="font-playfair text-2xl text-ink font-bold mb-1">
                  {t('cta.b1')}
                </h3>
                <p className="text-bloom-deep font-medium text-sm mb-3 italic">
                  {t('cta.b2')}
                </p>
                <p className="text-ink/60 text-sm leading-relaxed mb-6">
                  {t('cta.b3')} <strong>{t('cta.guideName')}</strong>{t('cta.b4')}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder={t('cta.placeholder')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-bloom/30 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-bloom-deep"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-bloom-deep text-white px-8 py-3 rounded-2xl font-medium hover:bg-bloom transition text-sm w-full disabled:opacity-60"
                  >
                    {loading ? t('cta.enviando') : t('cta.enviar')}
                  </button>
                </form>

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 text-xs text-ink/30 hover:text-ink/50 transition"
                >
                  {t('cta.ahoraNo')}
                </button>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">💌</div>
                <h3 className="font-playfair text-2xl text-ink font-bold mb-3">
                  {t('cta.gracias')}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed mb-6">
                  {t('cta.guiaCamino1')} <strong>{email}</strong>{t('cta.guiaCamino2')}
                </p>
                <p className="text-bloom-deep font-medium text-sm italic mb-6">
                  {t('cta.tagline')}
                </p>
                <button
                  onClick={() => { setShowModal(false); setSubmitted(false); setEmail('') }}
                  className="bg-bloom-deep text-white px-8 py-3 rounded-2xl font-medium hover:bg-bloom transition text-sm w-full"
                >
                  {t('cta.cerrar')}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

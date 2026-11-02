'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

// Versión con la que se cargó esta página (queda fija en el build)
const LOADED_VERSION = process.env.NEXT_PUBLIC_BUILD_ID || ''

export function NewVersionBanner() {
  const { t } = useI18n()
  const [available, setAvailable] = useState(false)
  const [reloading, setReloading] = useState(false)

  useEffect(() => {
    if (!LOADED_VERSION) return
    let active = true

    const check = async () => {
      try {
        const res = await fetch('/api/version', { cache: 'no-store' })
        if (!res.ok) return
        const data = (await res.json()) as { id?: string }
        if (active && data?.id && data.id !== LOADED_VERSION) setAvailable(true)
      } catch {
        // sin conexión: se reintenta en la próxima comprobación
      }
    }

    check()
    const timer = setInterval(check, 60000)
    const onReturn = () => {
      if (document.visibilityState === 'visible') check()
    }
    document.addEventListener('visibilitychange', onReturn)
    window.addEventListener('focus', onReturn)

    return () => {
      active = false
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onReturn)
      window.removeEventListener('focus', onReturn)
    }
  }, [])

  if (!available) return null

  const reload = () => {
    setReloading(true)
    const recargar = () => window.location.reload()
    // Recarga limpia: descarta la caché del navegador antes de volver a pedir la página
    if (typeof caches !== 'undefined' && typeof caches.keys === 'function') {
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .finally(recargar)
    } else {
      recargar()
    }
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4"
    >
      <div
        className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-2xl px-5 py-4 text-center shadow-lg sm:flex-row sm:text-left"
        style={{ background: '#5D4E5C', color: '#FEFAFC' }}
      >
        <p className="flex-1 text-sm leading-relaxed">{t('version.texto')}</p>
        <button
          onClick={reload}
          disabled={reloading}
          className="rounded-full px-6 py-2 text-sm font-semibold disabled:opacity-70"
          style={{ background: '#D17BA8', color: '#FEFAFC' }}
        >
          {reloading ? t('version.recargando') : t('version.boton')}
        </button>
      </div>
    </div>
  )
}

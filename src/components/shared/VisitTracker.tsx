'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * VisitTracker — Registra cada visita al sitio en la entidad SiteVisit
 * (vía la función trackVisit de Base44). Anónimo: solo path, referrer,
 * session_id aleatorio local, idioma del navegador.
 */
export function VisitTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_BASE44_API_URL || 'https://witmakers-1a5946c3.base44.app/functions'

    // Sesión anónima persistente (24h) — no guarda datos personales
    let sessionId: string | null = null
    try {
      const raw = localStorage.getItem('re_sid')
      const parsed = raw ? JSON.parse(raw) : null
      if (parsed && Date.now() - parsed.t < 24 * 60 * 60 * 1000) {
        sessionId = parsed.id
      } else {
        sessionId = Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
        localStorage.setItem('re_sid', JSON.stringify({ id: sessionId, t: Date.now() }))
      }
    } catch {
      sessionId = Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
    }

    const payload = {
      path: pathname || '/',
      referrer: typeof document !== 'undefined' && document.referrer ? document.referrer : 'direct',
      session_id: sessionId,
      language: typeof navigator !== 'undefined' ? navigator.language : '',
    }

    fetch(`${API_URL}/trackVisit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // El rastreo nunca debe romper la experiencia del sitio
    })
  }, [pathname])

  return null
}

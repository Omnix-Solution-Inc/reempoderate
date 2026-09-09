'use client'

// Página de un programa de formación — Portal de Estudiantes ReEmpodérate
// Acceso protegido por sesión

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { PORTAL_PROGRAMS } from '@/lib/portal/programs'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

export default function ProgramaPage() {
  const router = useRouter()
  const params = useParams()
  const slug = String(params?.slug || '')
  const program = PORTAL_PROGRAMS.find(p => p.slug === slug)

  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem('ree_portal')
    if (!raw) {
      router.replace('/portal/login')
      return
    }
    let token: string
    try {
      token = JSON.parse(raw).token
    } catch {
      localStorage.removeItem('ree_portal')
      router.replace('/portal/login')
      return
    }

    fetch(`${API}/portalSession`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.ok) setChecking(false)
        else {
          localStorage.removeItem('ree_portal')
          router.replace('/portal/login')
        }
      })
      .catch(() => setChecking(false))
  }, [router])

  if (checking) {
    return (
      <main className="min-h-screen bg-light-bg flex items-center justify-center">
        <p className="text-ink/50 text-sm">Cargando tu programa…</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-light-bg">
      <nav className="bg-cream/95 backdrop-blur-sm border-b border-bloom/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/portal" className="font-playfair text-xl text-bloom-deep font-semibold">
            ReEmpodérate
          </Link>
          <Link href="/portal" className="text-sm text-ink/60 hover:text-bloom-deep transition">
            ← Volver a mis programas
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-3">
          Portal de Estudiantes
        </p>
        <h1 className="font-playfair text-3xl md:text-4xl text-ink-dark mb-4">
          {program ? program.title : 'Programa'}
        </h1>

        {program ? (
          <>
            <p className="text-ink/70 leading-relaxed max-w-2xl mb-8">
              {program.description}
            </p>

            <div className="bg-white rounded-2xl shadow-md border border-bloom/10 p-8">
              <p className="text-sm text-ink/60 leading-relaxed">
                El contenido de este programa se está preparando y se habilitará aquí para
                ti. Tu acceso ya quedó activo: al publicarse el material, lo encontrarás en
                esta misma página al entrar con tu nombre y clave.
              </p>
              <p className="text-xs text-ink/40 mt-5">
                Sesiones: {program.sessions}
              </p>
            </div>
          </>
        ) : (
          <p className="text-ink/60">Este programa aún no existe. Vuelve a tus programas.</p>
        )}

        <p className="text-center text-xs text-ink/40 mt-12">
          ¿Preguntas? Escríbenos por WhatsApp desde el botón verde del sitio.
        </p>
      </div>
    </main>
  )
}

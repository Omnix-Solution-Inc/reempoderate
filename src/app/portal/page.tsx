'use client'

// Panel principal del Portal de Estudiantes — ReEmpodérate
// Acceso protegido por sesión; muestra los 3 programas de formación

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PORTAL_PROGRAMS } from '@/lib/portal/programs'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

export default function PortalDashboard() {
  const router = useRouter()
  const [name, setName] = useState('')
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
        if (data.ok) {
          setName(data.name)
          setChecking(false)
        } else {
          localStorage.removeItem('ree_portal')
          router.replace('/portal/login')
        }
      })
      .catch(() => setChecking(false))
  }, [router])

  function cerrarSesion() {
    localStorage.removeItem('ree_portal')
    router.push('/')
  }

  if (checking) {
    return (
      <main className="min-h-screen bg-light-bg flex items-center justify-center">
        <p className="text-ink/50 text-sm">Cargando tu espacio…</p>
      </main>
    )
  }

  const firstName = name.split(' ')[0]

  return (
    <main className="min-h-screen bg-light-bg">
      <nav className="bg-cream/95 backdrop-blur-sm border-b border-bloom/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl text-bloom-deep font-semibold">
            ReEmpodérate
          </Link>
          <button
            onClick={cerrarSesion}
            className="text-sm text-ink/60 hover:text-bloom-deep transition"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-3">
            Portal de Estudiantes
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl text-ink-dark mb-3">
            Te damos la bienvenida, {firstName} 🌸
          </h1>
          <p className="text-ink/60 leading-relaxed">
            Este es tu espacio de formación. Aquí encuentras tus tres programas de formación
            de ReEmpodérate, disponibles para ti en todo momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PORTAL_PROGRAMS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portal/programa/${p.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-7 border border-bloom/10"
            >
              <p className="font-playfair text-4xl text-bloom/50 mb-4 group-hover:text-bloom transition">
                {['I', 'II', 'III'][i]}
              </p>
              <h2 className="font-playfair text-xl text-ink-dark mb-3">{p.title}</h2>
              <p className="text-sm text-ink/60 leading-relaxed mb-5">{p.description}</p>
              <p className="text-xs uppercase tracking-wide text-bloom-deep font-medium">
                {p.status === 'disponible' ? 'Entrar al programa →' : 'Ver programa →'}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-ink/40 mt-14">
          Tu cuenta es personal. Las claves se guardan cifradas y nunca se comparten.
        </p>
      </div>
    </main>
  )
}

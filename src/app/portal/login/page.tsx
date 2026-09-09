'use client'

// Acceso al Portal de Estudiantes — ReEmpodérate
// Login con Nombre y Clave

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

export default function PortalLoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API}/portalLogin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.token) {
        localStorage.setItem('ree_portal', JSON.stringify({
          token: data.token,
          name: data.name,
        }))
        router.push('/portal')
      } else {
        setError(data.error || 'No pudimos iniciar sesión')
      }
    } catch {
      setError('Hubo un problema de conexión. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-light-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md mb-6">
        <div className="bg-gold-light border-2 border-gold-deep/50 rounded-2xl p-6 text-center shadow-md">
          <p className="font-playfair text-3xl md:text-4xl text-ink-dark mb-2">
            🚧 En construcción
          </p>
          <p className="text-sm text-ink/60 leading-relaxed">
            Estamos preparando tu espacio de formación. Muy pronto estará listo para ti.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl text-bloom-deep mb-2">ReEmpodérate</h1>
          <p className="text-ink/60 text-sm">Portal de Estudiantes · Acceso</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Nombre</label>
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              required
              placeholder="Tu nombre de usuario"
              className="w-full border border-bloom/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-bloom-deep"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Clave</label>
            <input
              type="password"
              value={form.password}
              onChange={set('password')}
              required
              placeholder="Tu clave"
              className="w-full border border-bloom/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-bloom-deep"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-bloom-deep text-white font-semibold text-sm py-3.5 rounded-full hover:bg-bloom transition disabled:opacity-60"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-ink/60 mt-6">
          ¿Primera vez?{' '}
          <Link href="/portal/registro" className="text-bloom-deep font-medium hover:underline">
            Crea tu cuenta
          </Link>
        </p>

        <Link
          href="/"
          className="block text-center text-xs text-ink/40 mt-4 hover:text-ink/60 transition"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}

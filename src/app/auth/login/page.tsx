'use client'

// Acceso al Panel — ReEmpodérate
// Login con Nombre y Clave (sin dependencia de Google/Facebook/LinkedIn)

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const API = 'https://witmakers-1a5946c3.base44.app/functions'
const MAILTO = 'mailto:hola@reempoderate.com?subject=Solicitud%20de%20Servicio%20T%C3%A9cnico'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', password: '' })
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API}/adminLogin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.token) {
        localStorage.setItem('ree_admin', JSON.stringify({ token: data.token, name: data.name }))
        router.push('/dashboard')
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
    <main className="min-h-screen bg-light-bg flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        <h1 className="font-playfair text-3xl text-primary mb-2">ReEmpodérate</h1>
        <p className="text-gray-500 mb-8 text-sm">Accede a tu panel</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              required
              placeholder="Tu nombre de usuario"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Clave</label>
                          <div className="relative">
              <input
                            type={show ? 'text' : 'password'}
                            value={form.password}
                            onChange={set('password')}
                            required
                            placeholder="Tu clave"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary"
                          />
              <button
                type="button"
                onClick={() => setShow(v => !v)}
                aria-label={show ? 'Ocultar clave' : 'Ver clave'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition"
              >
                {show ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
              </div>
            <div className="text-right mt-1">
              <a
                href={MAILTO}
                className="text-xs text-primary/70 hover:text-primary transition underline underline-offset-2"
              >
                Olvidé mi clave
              </a>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-full hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          ¿Primera vez?{' '}
          <Link
            href="/auth/registro"
            className="text-primary font-medium hover:underline underline-offset-2 transition"
          >
            Crea tu cuenta
          </Link>
        </p>

        <p className="text-xs text-gray-400 mt-6">
          ¿Necesitas ayuda?{' '}
          <a href={MAILTO} className="text-primary/80 hover:text-primary transition underline underline-offset-2">
            Servicio Técnico
          </a>
          {' '}— hola@reempoderate.com
        </p>
      </div>
    </main>
  )
}

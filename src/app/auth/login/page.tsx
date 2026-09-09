'use client'

// Acceso al Panel Administrativo — ReEmpodérate / Bella Wildflower
// Login con Nombre y Clave (sin dependencia de Google/Facebook/LinkedIn)

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

export default function LoginPage() {
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
            <input
              type="password"
              value={form.password}
              onChange={set('password')}
              required
              placeholder="Tu clave"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
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
            className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-full hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          ¿No tienes acceso? Escríbele a Pedro para que te dé tu usuario y clave.
        </p>
      </div>
    </main>
  )
}

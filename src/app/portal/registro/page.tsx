'use client'

// Registro de estudiantes — Portal ReEmpodérate
// Primera vez: Nombre, Correo, Clave y verificación de clave

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

export default function RegistroPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (form.password.length < 6) {
      setError('La clave debe tener al menos 6 caracteres')
      return
    }
    if (form.password !== form.confirm) {
      setError('Las claves no coinciden. Verifica la confirmación.')
      return
    }

    setLoading(true)
    try {
      const reg = await fetch(`${API}/portalRegister`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      })
      const regData = await reg.json()
      if (!reg.ok) {
        setError(regData.error || 'No pudimos completar tu registro')
        return
      }

      // Auto-login tras el registro
      const login = await fetch(`${API}/portalLogin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, password: form.password }),
      })
      const loginData = await login.json()
      if (login.ok && loginData.token) {
        localStorage.setItem('ree_portal', JSON.stringify({
          token: loginData.token,
          name: loginData.name,
        }))
        router.push('/portal')
      } else {
        router.push('/portal/login')
      }
    } catch {
      setError('Hubo un problema de conexión. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-light-bg flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl text-bloom-deep mb-2">ReEmpodérate</h1>
          <p className="text-ink/60 text-sm">Portal de Estudiantes · Crear tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Nombre</label>
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              required
              placeholder="Tu nombre y apellido"
              className="w-full border border-bloom/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-bloom-deep"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Correo electrónico</label>
            <input
              type="email"
              value={form.email}
              onChange={set('email')}
              required
              placeholder="tucorreo@ejemplo.com"
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
              minLength={6}
              placeholder="Mínimo 6 caracteres"
              className="w-full border border-bloom/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-bloom-deep"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Verifica tu clave</label>
            <input
              type="password"
              value={form.confirm}
              onChange={set('confirm')}
              required
              placeholder="Escribe tu clave nuevamente"
              className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none ${
                form.confirm && form.confirm !== form.password
                  ? 'border-red-300'
                  : 'border-bloom/30 focus:border-bloom-deep'
              }`}
            />
            {form.confirm && form.confirm !== form.password && (
              <p className="text-xs text-red-500 mt-1">Las claves no coinciden</p>
            )}
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
            {loading ? 'Creando tu cuenta…' : 'Crear mi cuenta'}
          </button>
        </form>

        <p className="text-center text-sm text-ink/60 mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link href="/portal/login" className="text-bloom-deep font-medium hover:underline">
            Inicia sesión
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

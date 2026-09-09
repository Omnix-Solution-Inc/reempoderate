'use client'
import { useAdminGuard } from '@/lib/auth/useAdminGuard'

export default function BusinessPlanPage() {
  const { status } = useAdminGuard()

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-light-bg flex items-center justify-center">
        <p className="text-gray-400">Cargando...</p>
      </main>
    )
  }

  if (status !== 'authenticated') return null

  return (
    <main className="min-h-screen bg-light-bg p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-playfair text-3xl text-dark mb-2">Plan de Negocio</h1>
        <p className="text-gray-500 text-sm mb-8">
          Construye, edita y comparte tu modelo de negocio. Powered by Witmakers.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="font-playfair text-xl mb-6 text-primary">
            Business Model Canvas
          </h2>
          <p className="text-gray-400 text-sm">
            Módulo en construcción — conecta con Base44 backend para cargar tu canvas.
          </p>
        </div>
      </div>
    </main>
  )
}

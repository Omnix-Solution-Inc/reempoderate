import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/config'
import { redirect } from 'next/navigation'

export default async function BusinessPlanPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth/login')

  return (
    <main className="min-h-screen bg-light-bg p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-playfair text-3xl text-dark mb-2">Plan de Negocio</h1>
        <p className="text-gray-500 text-sm mb-8">
          Construye, edita y comparte tu modelo de negocio. Powered by Witmakers.
        </p>

        {/* Business Model Canvas */}
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

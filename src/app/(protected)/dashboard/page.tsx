'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-light-bg flex items-center justify-center">
        <p className="text-gray-400">Cargando...</p>
      </main>
    )
  }

  if (!session) return null

  const env = process.env.NEXT_PUBLIC_ENVIRONMENT || 'reempoderate'
  const firstName = session.user?.name?.split(' ')[0] || ''

  return (
    <main className="min-h-screen bg-light-bg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl text-dark">
            Bienvenida, {firstName} ✦
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Ambiente activo: <span className="font-medium text-primary">{env}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {env === 'bella-wildflower' ? (
            <>
              <DashCard title="Clientes" href="/clients" icon="👥" />
              <DashCard title="Eventos" href="/events" icon="🌸" />
              <DashCard title="Propuestas" href="/proposals" icon="📋" />
              <DashCard title="Pagos" href="/payments" icon="💳" />
              <DashCard title="Recetas" href="/recipes" icon="🌿" />
              <DashCard title="Calculadora" href="/calculator" icon="🧮" />
            </>
          ) : (
            <>
              <DashCard title="Mis Sesiones" href="/sessions" icon="🧠" />
              <DashCard title="Plan de Negocio" href="/business-plan" icon="📊" />
              <DashCard title="Mi Perfil" href="/profile" icon="✨" />
            </>
          )}
        </div>
      </div>
    </main>
  )
}

function DashCard({ title, href, icon }: { title: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex items-center gap-4"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-semibold text-dark">{title}</p>
      </div>
    </a>
  )
}

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/config'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth/login')

  const env = process.env.NEXT_PUBLIC_ENVIRONMENT || 'reempoderate'

  return (
    <main className="min-h-screen bg-light-bg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl text-dark">
            Bienvenida, {session.user?.name?.split(' ')[0]} ✦
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Ambiente activo: <span className="font-medium text-primary">{env}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {env === 'bella-wildflower' && (
            <>
              <DashCard title="Clientes" href="/clients" icon="👥" count={0} />
              <DashCard title="Eventos" href="/events" icon="🌸" count={0} />
              <DashCard title="Propuestas" href="/proposals" icon="📋" count={0} />
              <DashCard title="Pagos" href="/payments" icon="💳" count={0} />
              <DashCard title="Recetas" href="/recipes" icon="🌿" count={0} />
              <DashCard title="Calculadora" href="/calculator" icon="🧮" count={null} />
            </>
          )}
          {env === 'reempoderate' && (
            <>
              <DashCard title="Mis Sesiones" href="/sessions" icon="🧠" count={0} />
              <DashCard title="Plan de Negocio" href="/business-plan" icon="📊" count={0} />
              <DashCard title="Mi Perfil" href="/profile" icon="✨" count={null} />
            </>
          )}
        </div>
      </div>
    </main>
  )
}

function DashCard({ title, href, icon, count }: {
  title: string, href: string, icon: string, count: number | null
}) {
  return (
    <a
      href={href}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex items-center gap-4"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-semibold text-dark">{title}</p>
        {count !== null && (
          <p className="text-sm text-gray-400">{count} registros</p>
        )}
      </div>
    </a>
  )
}

// Clients management — The Bella Wildflower
// Reads from Base44 TBWClient entity via backend function
'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { base44 } from '@/lib/base44/client'

type Client = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  source: string
  notes: string
}

export default function ClientsPage() {
  const { data: session } = useSession()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    base44.entity('TBWClient').list()
      .then(setClients)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="min-h-screen bg-[#F4EFEB] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-2xl text-[#3D4A3E]">Clientes</h1>
          <button className="bg-[#B88373] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#a57262] transition">
            + Nuevo Cliente
          </button>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">Cargando clientes...</div>
        ) : clients.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-2xl mb-2">🌸</p>
            <p>No hay clientes aún. ¡Agrega tu primera clienta!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {clients.map(c => (
              <div key={c.id} className="bg-white rounded-xl p-5 shadow-sm border border-[#3D4A3E]/10 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#2F2A27]">{c.first_name} {c.last_name}</p>
                  <p className="text-sm text-gray-500">{c.email} · {c.phone}</p>
                </div>
                <span className="text-xs bg-[#B88373]/10 text-[#B88373] px-3 py-1 rounded-full">
                  {c.source || 'Sin fuente'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

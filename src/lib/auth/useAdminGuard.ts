'use client'

// Guard de sesión para el panel administrativo (Nombre + Clave)
// Reemplaza el uso de next-auth/useSession en las páginas protegidas

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

type AdminSession = {
  status: 'loading' | 'authenticated' | 'unauthenticated'
  name: string
}

export function useAdminGuard(): AdminSession {
  const router = useRouter()
  const [state, setState] = useState<AdminSession>({ status: 'loading', name: '' })

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('ree_admin') : null
    if (!raw) {
      setState({ status: 'unauthenticated', name: '' })
      router.replace('/auth/login')
      return
    }
    let token: string
    try {
      token = JSON.parse(raw).token
    } catch {
      localStorage.removeItem('ree_admin')
      setState({ status: 'unauthenticated', name: '' })
      router.replace('/auth/login')
      return
    }

    fetch(`${API}/adminSession`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.ok) {
          setState({ status: 'authenticated', name: data.name })
        } else {
          localStorage.removeItem('ree_admin')
          setState({ status: 'unauthenticated', name: '' })
          router.replace('/auth/login')
        }
      })
      .catch(() => setState({ status: 'unauthenticated', name: '' }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export function adminLogout(router: ReturnType<typeof useRouter>) {
  localStorage.removeItem('ree_admin')
  router.push('/')
}

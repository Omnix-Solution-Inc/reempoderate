// Base44 SDK Client
// Connects the Next.js frontend to Base44 backend functions

const BASE44_API = process.env.NEXT_PUBLIC_BASE44_API_URL || 
  'https://witmakers-1a5946c3.base44.app/functions'

const ENTITIES_MAP: Record<string, string> = {
  // ReEmpoderate entities
  Client:       'tbwsystem',
  CoachSession: 'tbwsystem',
  BusinessPlan: 'tbwsystem',
  LandingPage:  'tbwsystem',
  // Bella Wildflower entities
  TBWClient:    'tbwsystem',
  TBWEvent:     'tbwsystem',
  TBWProposal:  'tbwsystem',
  TBWPayment:   'tbwsystem',
  TBWRecipe:    'tbwsystem',
}

async function request(
  method: string,
  entity: string,
  id?: string,
  body?: object,
  token?: string
) {
  const fn = ENTITIES_MAP[entity] || 'tbwsystem'
  let url = `${BASE44_API}/${fn}?e=${entity}`
  if (id) url += `&id=${id}`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(err.error || `HTTP ${res.status}`)
  }

  return res.json()
}

export const base44 = {
  entity: (name: string) => ({
    list: (token?: string) => request('GET', name, undefined, undefined, token),
    get: (id: string, token?: string) => request('GET', name, id, undefined, token),
    create: (data: object, token?: string) => request('POST', name, undefined, data, token),
    update: (id: string, data: object, token?: string) => request('PUT', name, id, data, token),
    delete: (id: string, token?: string) => request('DELETE', name, id, undefined, token),
  }),
}

export default base44

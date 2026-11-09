import { NextResponse } from 'next/server'

/**
 * /api/track — recibe la visita desde el navegador y le añade la ubicación
 * aproximada que Vercel entrega en las cabeceras de la petición:
 *   x-vercel-ip-city · x-vercel-ip-country-region · x-vercel-ip-postal-code · x-vercel-ip-country
 * Después la reenvía a la función trackVisit de Base44.
 *
 * Guardamos zona aproximada, nunca la dirección IP del visitante.
 */
export const dynamic = 'force-dynamic'
export const revalidate = 0

const limpiar = (v: string | null, max = 120) => (v ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  const API_URL =
    process.env.NEXT_PUBLIC_BASE44_API_URL || 'https://witmakers-1a5946c3.base44.app/functions'

  let cuerpo: Record<string, unknown> = {}
  try {
    cuerpo = await req.json()
  } catch {
    cuerpo = {}
  }

  const h = req.headers
  const decodificar = (v: string | null) => {
    const valor = limpiar(v)
    try {
      return decodeURIComponent(valor)
    } catch {
      return valor
    }
  }

  const muestra = {
    ...cuerpo,
    city: decodificar(h.get('x-vercel-ip-city')),
    region: limpiar(h.get('x-vercel-ip-country-region'), 40),
    postal_code: limpiar(h.get('x-vercel-ip-postal-code'), 16),
    country: limpiar(h.get('x-vercel-ip-country'), 8),
  }

  try {
    await fetch(`${API_URL}/trackVisit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(muestra),
    })
  } catch {
    // El registro de visitas nunca interrumpe la visita
  }

  return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } })
}

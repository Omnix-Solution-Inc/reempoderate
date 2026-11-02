import { NextResponse } from 'next/server'

// Identificador de la versión publicada. Cambia con cada despliegue.
export const dynamic = 'force-dynamic'
export const revalidate = 0

export function GET() {
  const id =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_BUILD_ID ||
    'dev'

  return NextResponse.json(
    { id },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'CDN-Cache-Control': 'no-store',
        'Vercel-CDN-Cache-Control': 'no-store',
      },
    },
  )
}

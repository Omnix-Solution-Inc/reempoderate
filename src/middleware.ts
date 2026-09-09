// Middleware — el panel administrativo ahora se protege del lado del cliente
// con el sistema propio de Nombre + Clave (ver src/lib/auth/useAdminGuard.ts).
// Ya no se usa next-auth aquí porque el login de Google/Facebook/LinkedIn
// requería credenciales OAuth que nunca se configuraron en producción.
import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}

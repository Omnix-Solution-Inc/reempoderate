// Chequeo ligero de sesión admin en el cliente — solo para decidir qué botón mostrar
// en la portada (landing pages). La protección real de las páginas del panel
// vive en src/lib/auth/useAdminGuard.ts, que valida el token contra el backend.
export function hasAdminSessionHint(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem('ree_admin')
    if (!raw) return false
    return !!JSON.parse(raw).token
  } catch {
    return false
  }
}

// Programas de formación disponibles en el Portal de Estudiantes
// Los títulos y descripciones se actualizan al definir el contenido de cada programa
export type PortalProgram = {
  slug: string
  title: string
  description: string
  sessions: string
  status: 'disponible' | 'proximamente'
}

export const PORTAL_PROGRAMS: PortalProgram[] = [
  {
    slug: 'programa-1',
    title: 'Programa de Formación I',
    description:
      'Tu primer paso en el proceso formativo de ReEmpodérate: fundamentos, práctica y acompañamiento.',
    sessions: 'En preparación',
    status: 'proximamente',
  },
  {
    slug: 'programa-2',
    title: 'Programa de Formación II',
    description:
      'Profundiza tu práctica y expande tu mirada con herramientas del proceso formativo.',
    sessions: 'En preparación',
    status: 'proximamente',
  },
  {
    slug: 'programa-3',
    title: 'Programa de Formación III',
    description:
      'La consolidación del proceso: integrar lo aprendido y habitar el resultado.',
    sessions: 'En preparación',
    status: 'proximamente',
  },
]

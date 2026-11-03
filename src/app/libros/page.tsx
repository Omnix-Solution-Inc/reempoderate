import type { Metadata } from 'next'
import LibrosClient from '@/components/libros/LibrosClient'

export const metadata: Metadata = {
  title: 'Libros · ReEmpodérate',
  description:
    'Todos los libros de ReEmpodérate: SINCRONÍA, el diario guiado de 365 preguntas, y las colecciones florales de arte y coaching. Disponibles en Amazon.',
}

export default function LibrosPage() {
  return <LibrosClient />
}

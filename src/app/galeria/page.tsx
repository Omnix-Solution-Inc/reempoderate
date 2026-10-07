import type { Metadata } from 'next'
import GaleriaClient from '@/components/galeria/GaleriaClient'

export const metadata: Metadata = {
  title: 'Galería · ReEmpodérate',
  description:
    'Galería de paletas de colores de los libros de ReEmpodérate: las fotografías de referencia de Peonías Mándalas y Flores.',
}

export default function GaleriaPage() {
  return <GaleriaClient />
}

import type { Metadata } from 'next'
import RuedaClient from '@/components/rueda/RuedaClient'

export const metadata: Metadata = {
  title: 'La Rueda de tu Vida · ReEmpodérate',
  description:
    'Dibuja tu Rueda de la Vida en minutos: califica cada área hoy y tu meta, y descárgala. Herramienta gratuita de coaching ontológico de ReEmpodérate.',
}

export default function RuedaPage() {
  return <RuedaClient />
}

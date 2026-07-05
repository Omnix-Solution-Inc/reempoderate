import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/shared/Providers'

export const metadata: Metadata = {
  title: 'ReEmpoderate · Autotransformación Consciente',
  description: 'Coaching ontológico certificado y talleres de alquimia floral para mujeres que eligen construir una vida con propósito.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/shared/Providers'

export const metadata: Metadata = {
  title: 'ReEmpodérate · Autotransformación Consciente',
  description: 'Coaching ontológico y talleres de alquimia floral para personas que eligen construir una vida con propósito.',
  openGraph: {
    title: 'ReEmpodérate · Autotransformación Consciente',
    description: 'Coaching ontológico y talleres de alquimia floral para personas que eligen construir una vida con propósito.',
    url: 'https://www.reempoderate.com',
    siteName: 'ReEmpodérate',
    images: [
      {
        url: 'https://www.reempoderate.com/logo.png',
        width: 480,
        height: 480,
        alt: 'ReEmpodérate',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReEmpodérate · Autotransformación Consciente',
    description: 'Coaching ontológico y talleres de alquimia floral para personas que eligen construir una vida con propósito.',
    images: ['https://www.reempoderate.com/logo.png'],
  },
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

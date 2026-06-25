import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/shared/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'ReEmpoderate — Transformación Consciente',
  description: 'Plataforma de coaching ontológico, arte y crecimiento personal',
  icons: { icon: '/icons/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-light-bg text-dark antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

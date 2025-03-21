import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundEffects from '@/components/BackgroundEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code4MatesDev',
  description: 'Professional Web Development Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen relative`}>
        <BackgroundEffects />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
} 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forms App',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed h-screen min-h-screen w-full lg:grid-cols-[280px_1fr] bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <main className="flex min-h-screen w-full flex-col items-center justify-center p-8">
          {children}
        </main>
      </body>
    </html>
  )
}

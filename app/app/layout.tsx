import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import '../css/globals.css'
import '../css/euclidCircularA.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hologram Zone',
  description: 'Hologram zone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-gray-900">
      <body className={`font-euclidCircularA ` + inter.className}>{children}</body>
    </html>
  )
}

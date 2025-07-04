import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import '../css/globals.css'
import '../css/euclidCircularA.css'
import Head from 'next/head'

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
      <Head>
        {/* ✅ This enables the native iOS Smart App Banner */}
        <meta name="apple-itunes-app" content="app-id=6474701855, app-argument=https://hologram.zone/" />
      </Head>
      <body className={`font-euclidCircularA ` + inter.className}>{children}</body>
    </html>
  )
}

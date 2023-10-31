import { Inter } from 'next/font/google'

/* Types */
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

/* Styles */
import '@lib/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js + Tailwind Starter | IT Crowd',
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

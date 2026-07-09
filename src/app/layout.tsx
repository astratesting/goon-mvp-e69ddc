import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Goon — Automated Marketing for Realtors',
  description: 'AI-powered marketing agency for real estate brokerages. Generate property blogs, social posts, and email sequences in minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased bg-warm-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
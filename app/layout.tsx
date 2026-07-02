import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redbud Websites | Professional Websites for Local Businesses',
  description: 'We build professional websites for local businesses — done in a week, starting at $1,000. Contractors, restaurants, salons, healthcare, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Bio from './components/BioCard'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Created by Dmitry Boroday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bio />
        {children}
      </body>
    </html>
  )
}

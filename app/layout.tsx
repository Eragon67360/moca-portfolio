import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/[locale]/navigation/navbar'
import ProgressBar from '@/components/ProgressBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOCA Portfolio',
  description: 'Portfolio for MOCA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}

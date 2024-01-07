import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create-next-app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />        
        {children}
      </body>
    </html>
  )
}

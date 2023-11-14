import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { StrictMode } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin E-Commerce Dashboard',
  description: 'Admin Dashboard for E-Commerce Stores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StrictMode>
      <ClerkProvider>
        <html lang="en" className={inter.className}>
          <body>
            <ToastProvider />
            <ModalProvider />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </StrictMode>
  )
}
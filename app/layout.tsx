import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Can You Build',
  description: 'can you build a page with a stopwatch...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OnlyMakeAI',
  description: 'AI-powered application development platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

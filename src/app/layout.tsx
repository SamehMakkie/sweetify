import type { Metadata } from 'next'
import { Alice } from 'next/font/google'
import './globals.css'

const alice = Alice({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Sweetify - Discover Sweet Recipes',
  description: 'Sweetify: Indulge your sweet tooth with a world of delectable dessert recipes. Easy to follow, customizable, and sure to satisfy every craving',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-secondary">
      <body className={alice.className}>{children}</body>
    </html>
  )
}

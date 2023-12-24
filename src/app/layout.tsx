import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Party Jollof - Your Ultimate Guide to African Cinema Reviews and Ratings',
  description: 'Discover Party Jollof, the premier destination for African movies and TV shows reviews. Explore critic and audience insights, latest news, trailers, and ratings. Find comprehensive box office details, browse by genre or platform, and stay updated with trending topics in African cinema. Whether your are seeking popular hits or upcoming gems, Party Jollof is your one-stop source for all things African entertainment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

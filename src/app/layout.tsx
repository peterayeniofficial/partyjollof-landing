import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from './config/siteConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "African Movies",
    "African TV Shows",
    "Nigerian Movies",
    "Movies",
    "Top African Actors",
    "African Cinema Reviews",
    "African Movie Ratings",
    "TV Shows in Africa",
    "Nollywood Movies Insights",
    "African Film Critics",
    "Latest African Movie Trailers",
    "African Box Office Trends",
    "Streaming African TV Series",
    "New African Films",
    "Top African Movies",
    "Watch African Cinema Online",
    "African Entertainment News",
    "Popular African TV Shows",
    "African Movie Platforms",
    "Party Jollof African Reviews",
    "African Film Analysis",
    "Movie Reviews Africa",
    "African Cinema Guide",
    "African Directors and Actors",
    "Best African Films to Watch"
  ],
  authors: [
    {
      name: "peter ayeni",
      url: "https://www.linkedin.com/in/peterayeni/",
    },
  ],
  creator: "peterayeni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@peterayeni",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>{children}</body>
    </html>
  )
}
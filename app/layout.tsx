import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pup Design - AI-Powered Design & Development Agency | Australia',
  description: 'Transform your business with cutting-edge AI-powered design and development. 20 years of experience in UX/UI, web apps, SaaS, and internal tools. Monthly subscriptions and one-off projects available.',
  keywords: 'AI design, web development, UX/UI, SaaS, Australia, design agency, machine learning, no-code',
  authors: [{ name: 'Pup Design' }],
  metadataBase: new URL('https://pupdesign.com.au'),
  openGraph: {
    title: 'Pup Design - AI-Powered Design & Development Agency',
    description: 'Transform your business with cutting-edge AI-powered design and development. 20 years of experience in UX/UI, web apps, SaaS, and internal tools.',
    url: 'https://pupdesign.com.au',
    siteName: 'Pup Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pup Design - AI-Powered Design Agency',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pup Design - AI-Powered Design & Development Agency',
    description: 'Transform your business with cutting-edge AI-powered design and development.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

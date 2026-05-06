import type { Metadata, Viewport } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'

import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'
import { CookieManager } from '@/components/cookie-manager'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://deoya-capital.com'),
  title: 'DEOYA CAPITAL — Conseil stratégique en investissement international',
  description:
    'Cabinet de conseil spécialisé dans l\'accompagnement stratégique et opérationnel de projets d\'investissement internationaux et transfrontaliers',
  openGraph: {
    title: 'DEOYA CAPITAL — Conseil stratégique en investissement international',
    description: 'Cabinet de conseil spécialisé dans l\'accompagnement stratégique et opérationnel de projets d\'investissement internationaux et transfrontaliers',
    url: 'https://deoya-capital.com', 
    siteName: 'Deoya Capital',
    images: [
      {
        url: '/deoya-capital-vert-mini-o.png', 
        width: 1200,
        height: 630,
        alt: 'Deoya Capital',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
    icons: {
      icon: [
        { url: '/deoya-capital-vert-mini-o.png', media: '(prefers-color-scheme: light)', sizes: '32x32' },
        { url: '/deoya-capital-blanc-vert-mini-o.png', media: '(prefers-color-scheme: dark)', sizes: '32x32' },
        { url: '/deoya-capital-vert-mini-o.png', media: '(prefers-color-scheme: light)', sizes: '16x16' },
        { url: '/deoya-capital-blanc-vert-mini-o.png', media: '(prefers-color-scheme: dark)', sizes: '16x16' },
        { url: '/deoya-capital-vert-mini-o.png', media: '(prefers-color-scheme: light)', sizes: '192x192' },
        { url: '/deoya-capital-blanc-vert-mini-o.png', media: '(prefers-color-scheme: dark)', sizes: '192x192' },
      ],
      apple: [
        { url: '/deoya-capital-vert-mini.png', sizes: '180x180' },
      ]
  },
}

export const viewport: Viewport = {
  themeColor: '#081833',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans antialiased">
        <CookieManager>
          {children}
        </CookieManager>
        <CookieBanner />
      </body>
    </html>
  )
}

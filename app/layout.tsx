import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--lc-font-head',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--lc-font-body',
  display: 'swap',
})

const SITE_URL = 'https://la24casino.vercel.app/'

export const metadata: Metadata = {
  title:
    'Ла Казино официальный сайт — играть онлайн, рабочее зеркало и вход в казино',
  description:
    'Ла Казино — официальный сайт и рабочее зеркало для игры онлайн. Быстрая регистрация, щедрые бонусы, слоты и настольные игры. Играть в Ла Казино безопасно и удобно с телефона или компьютера в любое время.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      'Ла Казино официальный сайт — играть онлайн, рабочее зеркало и вход в казино',
    description:
      'Ла Казино — официальный сайт и рабочее зеркало для игры онлайн. Быстрая регистрация, щедрые бонусы, слоты и настольные игры. Играть в Ла Казино безопасно и удобно с телефона или компьютера в любое время.',
    url: SITE_URL,
    siteName: 'Ла Казино',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Ла Казино официальный сайт — играть онлайн, рабочее зеркало и вход в казино',
    description:
      'Ла Казино — официальный сайт и рабочее зеркало для игры онлайн. Быстрая регистрация, щедрые бонусы, слоты и настольные игры.',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a2a1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`lc24-root ${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="yandex-verification" content="6201e940a9ab1804" />
        {/* Дополнительные пользовательские теги можно добавлять сюда */}
      </head>
      <body className="lc24-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

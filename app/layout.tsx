import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import { CONSENT_COOKIE, parseConsent } from '@/lib/cookie-consent'
import { LanguageProvider } from '@/lib/i18n/language-context'
import type { Language } from '@/lib/i18n/translations'
import './globals.css'

const geistSans = Geist({ subsets: ['latin', 'latin-ext'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rafalkamieniarz.pl'),
  title: {
    default: 'Rafał Kamieniarz — Agile Delivery & Coaching',
    template: '%s | Rafał Kamieniarz',
  },
  description:
    'Wsparcie zespołów technologicznych w problemach z delivery, procesach Agile, metrykach przepływu i DORA oraz coaching profesjonalny. Bezpłatny audyt Agile Coaching Growth Wheel.',
  keywords: [
    'Agile Delivery',
    'Agile Coaching',
    'Agile Coaching Growth Wheel',
    'Scrum Master',
    'Engineering Management',
    'Flow Metrics',
    'Metryki przepływu',
    'DORA metrics',
    'Rafał Kamieniarz',
    'Ways of Working',
    'Audyt zwinności',
  ],
  authors: [{ name: 'Rafał Kamieniarz', url: 'https://www.linkedin.com/in/rafal-kamieniarz-warsaw' }],
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Rafał Kamieniarz — Agile Delivery & Coaching',
    description:
      'Wsparcie zespołów technologicznych w problemach z delivery, procesach Agile, metrykach przepływu i DORA oraz coaching profesjonalny.',
    url: 'https://rafalkamieniarz.pl',
    siteName: 'Rafał Kamieniarz — Consulting',
    locale: 'pl_PL',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const consent = parseConsent(cookieStore.get(CONSENT_COOKIE)?.value)
  const initialLang = (cookieStore.get('NEXT_LOCALE')?.value as Language) || 'pl'

  return (
    <html
      lang={initialLang}
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider initialLanguage={initialLang}>
          {children}
          <CookieConsent initialConsent={consent} />
        </LanguageProvider>
      </body>
    </html>
  )
}

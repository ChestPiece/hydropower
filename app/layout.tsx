import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { contact } from '@/lib/contact'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Hydropower Heavy Equipment | Hydraulic & Heavy Equipment Parts, Musaffah M44',
  description: 'Hydropower Heavy Equipment, Musaffah M44, Abu Dhabi. Ask about hydraulic components, pumps, motors, valves, filters, fittings, and heavy-equipment spares by WhatsApp or phone.',
  generator: 'v0.app',
  openGraph: {
    title: 'Hydropower Heavy Equipment',
    description: 'Hydraulic and heavy-equipment parts enquiries from Musaffah, Abu Dhabi.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f1ec',
  viewportFit: 'cover',
  userScalable: true,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hydropower Heavy Equipment',
  description: 'Hydraulic equipment supplier in Musaffah, Abu Dhabi.',
  telephone: '+971502685868',
  address: { '@type': 'PostalAddress', streetAddress: 'Musaffah M44', addressLocality: 'Abu Dhabi', addressCountry: 'AE' },
  geo: { '@type': 'GeoCoordinates', latitude: contact.coords.lat, longitude: contact.coords.lng },
  hasMap: contact.mapsHref,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

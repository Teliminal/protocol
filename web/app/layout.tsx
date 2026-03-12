import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Teliminal — The process is the artifact.',
  description:
    'Science publishes conclusions. Teliminal publishes process — the full arc of how an inquiry was conducted, including the wrong turns, the structural collapses, and the iterative rebuilding.',
  metadataBase: new URL('https://teliminal.com'),
  openGraph: {
    title: 'Teliminal — The process is the artifact.',
    description:
      'MMAD-EI behavioral battery. Mortality salience in transformer-based language models. Open methodology. Adversarial review architecture.',
    url: 'https://teliminal.com',
    siteName: 'Teliminal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teliminal — The process is the artifact.',
    description: 'MMAD-EI behavioral battery. Open methodology for AI mortality salience research.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  )
}

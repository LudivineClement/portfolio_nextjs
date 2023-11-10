
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Kaushan_Script, Poppins } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false;

export const kaushan = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaushan',
})

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Ludivine CLEMENT | Portfolio - développeuse web front-end',
  description: 'Je suis Ludivine CLEMENT, développeuse web front-end freelance passionnée par la création web. Expertise en HTML, CSS, Javascript, React et responsive design.',
  themeColor: 'black',
  icons: {
    icon: 'img/favicon/favicon-32x32.png',
    shortcut: 'img/favicon/favicon-16x16.png',
    apple: [
      { url: 'img/favicon/apple-touch-icon.png' },
      { url: 'img/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://www.ludivine-clement.dev'),
  openGraph: {
    title: 'Ludivine CLEMENT | Portfolio - développeuse web front-end',
    description: 'Je suis Ludivine CLEMENT, développeuse web front-end freelance passionnée par la création web. Expertise en HTML, CSS, Javascript, React et responsive design.',
    url: 'https://www.ludivine-clement.dev/',
    siteName: 'Portfolio Ludivine Clément, développeuse web',
    images: [
      {
        url: '/img/img-main-rs.png',
        width: 800,
        height: 600,
      },
      {
        url: '/img/img-main-rs.png',
        width: 1800,
        height: 1600,
        alt: 'Portfolio Ludivine Clément, développeuse web',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    handle: '@ludev28',
    site: '@ludev28',
    cardType: 'summary_large_image',
    image: {
      url: '/img/img-main-rs.png',
      width: 1200,
      height: 630,
      alt: 'Portfolio Ludivine Clément, développeuse web',
    },
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="fr" className='scroll-smooth'>
      <head>
        <link rel="manifest" href="img/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </head>
      <body className={`${kaushan.variable} ${poppins.variable} font-poppins text-gray-global bg-off-white overflow-x-hidden`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

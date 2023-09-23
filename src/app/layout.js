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
  title: 'Ludivine CLEMENT | Portfolio - développeur web front-end',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className='scroll-smooth'>
      <head>
        <link rel='icon' href='/img/favicon-16x16.png' />
      </head>
      <body className={`${kaushan.variable} ${poppins.variable} font-poppins text-gray-global bg-off-white`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

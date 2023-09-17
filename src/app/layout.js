import Header from '@/components/Header'
import './globals.css'
import { Kaushan_Script, Poppins } from 'next/font/google'
 
export const kaushan = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaushan',
})
 
export const poppins = Poppins({
  weight: ['100', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Ludivine CLEMENT | Portfolio - développeur web front-end freelance',
  description: 'Je suis Ludivine CLEMENT, développeuse web front-end freelance passionnée par la création web. Expertise en HTML, CSS, React et responsive design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel='icon' href='/img/favicon-16x16.png' />
      </head>
      <body className={`${kaushan.variable} ${poppins.variable} font-kaushan font-poppins text-gray-global`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

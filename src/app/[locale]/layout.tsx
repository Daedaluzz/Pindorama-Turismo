import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import MainElement from '@/components/mainElement'
import Nav from '@/components/nav/nav'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pindorama',
  description: 'Pindorama Turismo',
}

export default function LocaleLayout({ children, params: { locale } }: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <Nav />
        <MainElement>
          {children}
        </MainElement>
      </body>
    </html>
  );

};


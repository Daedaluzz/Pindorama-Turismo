import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { useTranslations } from 'next-intl'
import './globals.css'
import MainElement from './components/mainElement'
import Nav from './components/nav/nav'
import LocaleSwitcher from './components/localeSwitch/localeSwitcher'

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
  const t = useTranslations('Nav');
  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <Nav destinations={t('destinations')}
          promotions={t('promotions')}
          packages={t('packages')}
          contact={t('contact')}
          about={t('about')}
          management={t('management')}
        />
        <MainElement locale={locale}> 
          {children}
          
          <LocaleSwitcher/>
        </MainElement>
      </body>
    </html>
  );

};


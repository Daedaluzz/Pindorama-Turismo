import {useLocale, useTranslations} from 'next-intl';
import {locales} from '@/config';
import LocaleSwitcherSelect from './localeSwitchSelect';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
 {locales.map((cur) => (
        <Link href={cur} scroll={false}>
          {t('locale', {locale: cur})}
        </Link>
      ))}

    </LocaleSwitcherSelect>
  
  );
}
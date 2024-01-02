import { locales, Link } from '@/navigation';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import styles from './localeSwitcher.module.css'
import { useLocale } from 'next-intl';


export default function LocaleSwitcher() {
  const langs =locales;

  const locale = useLocale(); // Use useLocale to get the current locale
  

  return (
    <div className={styles.switcher}>
    <LocaleSwitcherSelect langs={langs} lang={locale}/>
    </div>
  );
}
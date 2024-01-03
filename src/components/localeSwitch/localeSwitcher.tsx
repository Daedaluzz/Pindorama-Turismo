import { locales, Link } from '@/navigation';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import styles from './localeSwitcher.module.css'
import { useLocale } from 'next-intl';

type Props = {
  scrolling: boolean;
  lastScrollPosition: number;
};

export default function LocaleSwitcher({
  scrolling,
  lastScrollPosition,

}: Props ) {
  const langs = locales;

  const locale = useLocale(); // Use useLocale to get the current locale


  return (
    <div className={styles.switcher}>
      <LocaleSwitcherSelect
        scrolling={scrolling}
        lastScrollPosition={lastScrollPosition}
        lang={locale} />
    </div>
  );
}
import { locales, Link } from '@/navigation';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import styles from './localeSwitcher.module.css'


export default function LocaleSwitcher() {
  const langs =locales;

  return (
    <div className={styles.switcher}>
    <LocaleSwitcherSelect langs={langs}/>
    </div>
  );
}
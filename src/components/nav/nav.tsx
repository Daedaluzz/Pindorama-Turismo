import styles from './nav.module.css';
import MenuNav from './menuNav';
import Logo from '../logo/logo';

import { useTranslations } from 'next-intl'

export default function Nav() {


  const t = useTranslations('Nav');
  return (
    <nav className={styles.nav} id='#top'>
      <MenuNav
        destinations={t('destinations')}
        promotions={t('promotions')}
        packages={t('packages')}
        contact={t('contact')}
        about={t('about')}
        management={t('management')}>
      </MenuNav>
    </nav>
  );
};

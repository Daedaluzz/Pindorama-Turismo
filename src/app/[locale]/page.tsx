import bh from '@/public/images/noronha.jpg';
import Image from 'next/image';
import styles from './page.module.css'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');


  return (
    <div className={styles.dale}>

      <Image
        className={styles.bh}
        src={bh}
        alt='Belo Horizonte'
        quality={100}
        priority={true}
      />
      <h1>{t('title')}</h1>
      <Image
        className={styles.bh}
        src={bh}
        alt='Belo Horizonte'
        quality={100}
        priority={true}
      />
    </div>
  )
}
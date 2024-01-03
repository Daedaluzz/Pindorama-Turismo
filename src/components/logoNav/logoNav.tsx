
import styles from './logo.module.css'
import Image from 'next/image';
import logoLarge from '@/public/images/logo-large-green-blue.svg';
import logoSmall from '@/public/images/logo-green-blue.svg';
import { useState, useEffect } from 'react';


type Props = {
  lastScrollPosition: number;
}

export default function LogoNav({
  lastScrollPosition,
}: Props) {

  return (

    <div className={styles.logoPai}>

      <Image id="logoLarge"
        data-visible="false"
        className={`${styles.logolarge} ${lastScrollPosition == 0 ?styles.logoWhite:''}`}
        src={logoLarge}
        fill
        alt="Pindorama"
        quality={100}
        priority={true}
        // style={{ filter: lastScrollPosition == 0 ? 'brightness(0) invert(1)' : '' } }
      />
      <Image id="logoSmall"
        data-visible="false"
        className={`${styles.logoSmall} ${lastScrollPosition == 0 ?styles.logoWhite:''}`}
        src={logoSmall}
        fill
        alt="Pindorama"
        quality={100}
        priority={true}
        // style={{ filter: lastScrollPosition == 0 ? 'brightness(0) invert(1)' : '' } }
      />
    </div>
  )

}
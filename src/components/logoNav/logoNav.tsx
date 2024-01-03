
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



  const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return screenSize;
  };
  console.log(useScreenSize())
  return (

    <div className={styles.logoPai}>

      <Image id="logoLarge"
        data-visible="false"
        className={styles.logolarge}
        src={logoLarge}
        fill
        alt="Pindorama"
        quality={100}
        priority={true}
        style={{ filter: lastScrollPosition == 0 ? 'brightness(0) invert(1)' : '' } }
      />
      <Image id="logoSmall"
        data-visible="false"
        className={styles.logoSmall}
        src={logoSmall}
        fill
        alt="Pindorama"
        quality={100}
        priority={true}
        style={{ filter: lastScrollPosition == 0 ? 'brightness(0) invert(1)' : '' }}
      />
    </div>
  )

}
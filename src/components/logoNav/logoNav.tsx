
import styles from './logo.module.css'
import Image from 'next/image';
import logoGrad from '@/public/images/logo-grad.svg';
import logo from '@/public/images/logo-blue-yellow.svg';


type Props = {
  lastScrollPosition: number;
   threshold: number;
}

export default function LogoNav({
  lastScrollPosition,
  threshold,
}:Props) {

    return(
      <div className={styles.logoPai}>
                  <Image id="logo"
              data-visible="false"
              className={styles.logo}
              src={logoGrad}
              fill
              alt="Pindorama"
              quality={100}
              priority={true}
              style={{ filter: lastScrollPosition ==0 ? 'brightness(0) invert(1)' : '' }}
            />
            </div>
)
      
}
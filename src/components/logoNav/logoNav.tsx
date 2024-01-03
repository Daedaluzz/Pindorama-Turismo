
import styles from './logo.module.css'
import Image from 'next/image';
import logoGrad from '@/public/images/logo-grad.svg';


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
              alt="Pindorama"
              quality={100}
              priority={true}
              style={{ filter: lastScrollPosition < threshold ? 'brightness(0) invert(1)' : '' }}
            />
            </div>
)
      
}
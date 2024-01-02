
import styles from './logo.module.css'
import Image from 'next/image';
import logoGrad from '@/public/images/logo-grad.svg';

export default function Logo(){
    
    return(
      <div className={styles.logoPai}>
                  <Image id="logo"
              data-visible="false"
              className={styles.logo}
              src={logoGrad}
              alt="Pindorama"
              quality={100}
              priority={true}
            />
            </div>
)
      
}
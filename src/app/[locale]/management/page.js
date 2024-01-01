
import styles from './admin.module.css'
import bh from '@/public/images/noronha.jpg'
import Image from 'next/image'



export default function Management() {
  return (
    <div className={styles.dale}>
    <Image
      className={styles.bh}
      src={bh}
      alt='Belo Horizonte'
      quality={100}
      priority {...true}


    />
          <Image
      className={styles.bh}
      src={bh}
      alt='Belo Horizonte'
      quality={100}
      priority {...true}


    />
          <Image
      className={styles.bh}
      src={bh}
      alt='Belo Horizonte'
      quality={100}
      priority {...true}


    />
  </div>

)
}

'use client'
import Link from 'next/link'
import styles from './nav.module.css'
import Image from 'next/image'
import logoGrad from '@/public/images/logo-grad.svg'
import { useState, useEffect } from 'react'
import {usePathname} from '@/navigation';




export default function Nav({
  destinations, promotions, packages,
  contact, about, management
}) {

  const pathName = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [scrolling2, setScrolling2] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const threshold = 80 // Adjust this threshold value as needed


  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > threshold) {
      setScrolling(lastScrollPosition < currentScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    }
    setScrolling2((lastScrollPosition > currentScrollPosition) && (currentScrollPosition != 0));
    setLastScrollPosition(currentScrollPosition);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [lastScrollPosition]);

  console.log(destinations, promotions, packages,
    contact, about, management);

  return (
    <nav className={`${styles.nav} ${scrolling2 ? styles.scrolled : ''}`}
      style={{ transform: `translateY(${scrolling ? '-100%' : '0'})` }}>
        
      <menu className={styles.menu}>
        <li>
          <Link href="/" className={`${styles.logoPai} ${scrolling2 ? styles.scrolledLink : ''}`}>
            <Image id='logo' data-visible='false' className={styles.logo}
              src={logoGrad}
              alt='Pindorama'
              quality={100}
              priority {...true}
              style={{ filter: lastScrollPosition < threshold ? 'brightness(0) invert(1)' : '' }}
            />
          </Link>
        </li>
        <li><Link href="/destinations" className={`${styles.link} ${pathName == '/destinations' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{destinations}</Link></li>
        <li><Link href="/promotions" className={`${styles.link} ${pathName == '/promotions' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{promotions}</Link></li>
        <li><Link href="/packages" className={`${styles.link} ${pathName == '/packages' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{packages}</Link></li>
        <li><Link href="/contact" className={`${styles.link} ${pathName == '/contact' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{contact}</Link></li>
        <li><Link href="/about" className={`${styles.link} ${pathName == '/about' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{about}</Link></li>
        <li><Link href="/management" className={`${styles.link} ${pathName == '/management' ? `${scrolling2 ? styles.scrolledActive : styles.active }` : ''} ${scrolling2 ? styles.scrolledLink : ''}`}>{management}</Link></li>
      </menu>
      <div className={styles.lang}><Link locale="pt-BR" href="/">PT</Link></div>
      <div className={styles.lang}><Link locale="en-US" href="/">EN</Link></div>
    </nav>
  )
}

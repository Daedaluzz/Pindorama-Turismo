'use client';
import { useEffect, useState, useTransition } from 'react';
import { useRouter, usePathname, Link } from '@/navigation';
import styles from './localeSwitcher.module.css'
import React from 'react';

type Props = {
  langs: any;
  lang: string
};
export default function LocaleSwitcherSelect({
  langs,
  lang,

}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);


  const handleLinkClick = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };
  const handleScroll = () => {
    const currentScrollPosition: number = window.scrollY;
    setScrolling(
      lastScrollPosition > currentScrollPosition && currentScrollPosition !== 0
    );
    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className={`${scrolling?styles.switcher2:styles.switcher}`}>


      {isPending ? (
        <span className={styles.disabledLink}>'en'</span>
      ) : (
        <Link className={`${styles.option1} ${scrolling?styles.scrolledSwitch:''}`} locale={lang == 'en'?'en':'pt'} href={pathname} scroll={false} onClick={() => handleLinkClick('')}>
          <div aria-current={scrolling ? true : false}>{lang == 'en'?'en':'pt'} </div>
        </Link>
      )}
      {isPending ? (
        <span className={styles.disabledLink}>'pt'</span>
      ) : (
        <Link className={`${styles.option2} ${scrolling?styles.scrolledSwitch:''}`} locale={lang == 'en'?'pt':'en'}  href={pathname} scroll={false} onClick={() => handleLinkClick('')}>
          <div aria-current={scrolling ? true : false}>{lang == 'en'?'pt':'en'}</div>
        </Link>
      )}


    </div>


  );
}

// className={`${styles.switch} ${lang === 'en'
//                   ? styles.switch1 : styles.switch2}
//            ${scrolling
//                     ? styles.scrolledSwitch : ''}`}
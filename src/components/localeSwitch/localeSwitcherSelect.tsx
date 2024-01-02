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
    <div className={`${scrolling? styles.switcher1:styles.switcher2}`}>
      <div  aria-current={scrolling
        ? true : false}
        className={`${styles.switch} ${lang === 'en'
          ? styles.switch1 : styles.switch2}
           ${scrolling
            ? styles.scrolledSwitch : ''}`} >
        {langs.map((cur: any) => (
          <>
            {isPending ? (
              <span className={styles.disabledLink}>{cur}</span>
            ) : (
              <Link locale={cur} href={pathname} scroll={false} onClick={() => handleLinkClick(cur)}>

                {cur}

              </Link>
            )}
          </>
        ))}
      </div>
    </div>

  );
}
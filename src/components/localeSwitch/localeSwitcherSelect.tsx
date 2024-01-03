'use client';
import { useEffect, useState, useTransition } from 'react';
import { useRouter, usePathname, Link } from '@/navigation';
import styles from './localeSwitcher.module.css'
import React from 'react';

type Props = {
  lang: string;
  scrolling: boolean;
  lastScrollPosition: number;
};
export default function LocaleSwitcherSelect({
  lang,
  scrolling,
  lastScrollPosition,

}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();



  const handleLinkClick = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

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

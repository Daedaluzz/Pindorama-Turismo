'use client'
import React, {useState, useEffect, ReactNode } from 'react';
import LocaleSwitcher from '../localeSwitch/localeSwitcher';
import NavLink from "./navLink";
import styles from './nav.module.css';
import LogoNav from '../logoNav/logoNav';


type Props = {
    destinations: string,
    promotions: string;
    packages: string;
    contact: string;
    about: string;
    management: string;
}

export default function MenuNav({
    destinations,
    promotions,
    packages,
    contact,
    about,
    management
}: Props) {
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [scrolling2, setScrolling2] = useState<boolean>(false);
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);
    const threshold: number = 80;
  
    const handleScroll = () => {
      const currentScrollPosition: number = window.scrollY;
      if (currentScrollPosition > threshold) {
        setScrolling(lastScrollPosition < currentScrollPosition);
        setLastScrollPosition(currentScrollPosition);
      }
      setScrolling2(
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
        <menu className={`${styles.menu} ${
            scrolling2 ? styles.scrolled : ''
          }`}
          style={{
            transform: `translateY(${scrolling ? '-100%' : '0'})`,
          }}>
    
            <li><NavLink className={styles.logoPai} href="/"><LogoNav lastScrollPosition={lastScrollPosition} threshold={threshold} /></NavLink></li>
            <li><NavLink href="/destinations">{destinations}</NavLink></li>
            <li><NavLink href="/promotions">{promotions}</NavLink></li>
            <li><NavLink href="/packages">{packages}</NavLink></li>
            <li><NavLink href="/contact">{contact}</NavLink></li>
            <li><NavLink href="/about">{about}</NavLink></li>
            <li><NavLink href='/management'>{management}</NavLink></li>
            <li><LocaleSwitcher /></li>
        </menu>
    )
}

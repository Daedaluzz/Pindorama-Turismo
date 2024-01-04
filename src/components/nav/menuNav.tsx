'use client'
import React, { useState, useEffect, ReactNode } from 'react';
import LocaleSwitcher from '../localeSwitch/localeSwitcher';
import NavLink from "./navLink";
import styles from './nav.module.css';
import LogoNav from '../logoNav/logoNav';
import { AnimatePresence, motion } from 'framer-motion';
import {pathnames } from '@/navigation';


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

  const path = Object.keys(pathnames);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrolling2, setScrolling2] = useState<boolean>(false);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);
  const threshold: number = 80;
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


  const handleScroll = () => {
    if (innerWidth <= 800) {
      setScrolling2(false)
      setScrolling(false)
      setLastScrollPosition(1)
    } else {
      const currentScrollPosition: number = window.scrollY;
      if (currentScrollPosition > threshold) {
        setScrolling(lastScrollPosition < currentScrollPosition);
        setLastScrollPosition(currentScrollPosition);
      }
      setScrolling2(
        lastScrollPosition > currentScrollPosition && currentScrollPosition !== 0
      );
      setLastScrollPosition(currentScrollPosition);
    }
  };
  console.log(path)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <AnimatePresence>
      <motion.menu
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.menu} ${scrolling2 ? styles.scrolled : ''
          }`}
        style={{
          transform: `translateY(${scrolling ? '-100%' : '0'})`
        }}>
        <li><NavLink className={styles.logoPai} href="/"
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}>
          <LogoNav lastScrollPosition={lastScrollPosition} />
        </NavLink></li>

        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href="/destinations">{destinations}</NavLink></li>

        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href="/promotions">{promotions}</NavLink></li>

        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href="/packages">{packages}</NavLink></li>

        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href="/contact">{contact}</NavLink></li>

        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href="/about">{about}</NavLink></li>
        <li><NavLink
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition}
          href='/management'>{management}</NavLink></li>

        <li><LocaleSwitcher
          scrolling={scrolling2}
          lastScrollPosition={lastScrollPosition} />
        </li>
      </motion.menu>
    </AnimatePresence>
  )
}

'use client'
import React, { useState, useEffect, ComponentProps } from 'react';
import { useSelectedLayoutSegment, } from 'next/navigation';
import { Link, AppPathnames } from '@/navigation';
import styles from './nav.module.css';

export default function NavLink<Pathname extends AppPathnames>({
    href,
    ...rest
}: ComponentProps<typeof Link<Pathname>>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;
    const [scrolling2, setScrolling2] = useState<boolean>(false);
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        const currentScrollPosition: number = window.scrollY;
        setScrolling2(
            lastScrollPosition > currentScrollPosition && currentScrollPosition !== 0
        );
        setLastScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log(href)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);
    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={`
    ${styles.link}
    ${ isActive
      ? scrolling2
        ? styles.scrolledActive
        : styles.active
      : ''}
    ${scrolling2 ? styles.scrolledLink : ''}
  `}
            href={href}
            {...rest}
        />
    );
}



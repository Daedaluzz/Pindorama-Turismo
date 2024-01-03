'use client'
import React, { useState, useEffect, ComponentProps } from 'react';
import { useSelectedLayoutSegment, } from 'next/navigation';
import { Link, AppPathnames } from '@/navigation';
import styles from './nav.module.css';

type Props = {
    scrolling: boolean;
    lastScrollPosition: number;
}
export default function NavLink<Pathname extends AppPathnames>({
    href,
    scrolling,
    lastScrollPosition,
    ...rest
}:ComponentProps<typeof Link<Pathname>> & Props) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;


    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={`
    ${styles.link}
    ${ isActive
      ? scrolling
        ? styles.scrolledActive
        : styles.active
      : ''}
    ${scrolling ? styles.scrolledLink : ''}
  `}
            href={href}
            {...rest}
        />
    );
}



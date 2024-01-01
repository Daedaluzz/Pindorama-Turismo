'use client'
import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [i, setI] = useState(0);

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        if (pathname === '/') {
            setI((prevI) => (prevI === 0 ? 1 : 0));
        }else if(pathname !== '/'){
            setI(1)
        }

        console.log(url, i, pathname)
    }, [pathname, searchParams]);

    useEffect(() => {
        console.log(i);
    }, [i]);

    return i;
}
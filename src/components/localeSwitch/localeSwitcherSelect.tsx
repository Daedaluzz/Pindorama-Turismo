'use client';
import { useTransition } from 'react';
import { useRouter, usePathname, Link } from '@/navigation';
import styles from './localeSwitcher.module.css'

type Props = {
  langs: any;
};
export default function LocaleSwitcherSelect({
  langs,

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
    <div>
      {langs.map((cur: any) => (
        <Link
          key={cur}
          locale={cur}
          href={pathname}
          scroll={false}
          onClick={(event) => {
            handleLinkClick(cur);
          }}
          >
          {cur}
        </Link>
      ))}
    </div>
  )
}
import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'pt'] as const;
export const localePrefix = undefined;


// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {

  '/': {
    en: '/',
    pt: '/'
  },
  '/destinations': {
    en: '/destinations',
    pt: '/destinos'
  },
  '/promotions': {
    en: '/promotions',
    pt: encodeURI('/promoções')
  },
  '/packages': {
    en: '/packages',
    pt: '/pacotes'
  },
  '/contact': {
    en: '/contact',
    pt: '/contato'
  },
  '/about': {
    en: '/about',
    pt: '/sobre'
  },
  '/management': {
    en: '/management',
    pt: encodeURI('/gestão')
  },
  '#top': {
    en: '#top',
    pt: '#top'
  },

} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
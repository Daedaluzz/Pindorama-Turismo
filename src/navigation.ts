import {createLocalizedPathnamesNavigation, Pathnames} from 'next-intl/navigation';
 
export const locales = ['en', 'pt'] as const;
export const localePrefix = 'always'; // Default
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {

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


} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
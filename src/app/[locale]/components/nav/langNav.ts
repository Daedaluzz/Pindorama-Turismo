import {useTranslations} from 'next-intl';
export default async function LangNav(){

    const langNav = useTranslations('Nav');

    return (langNav);
}
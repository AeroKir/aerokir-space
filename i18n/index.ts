import type { LocaleObject } from '@nuxtjs/i18n';
import en from './locales/en-US.json';
import uk from './locales/uk-UA.json';

export const messages = {
  en: en,
  ua: uk,
};

export const defaultLocale = 'en';

export const locales: LocaleObject[] = [
  {
    code: 'en',
    iso: 'en-US',
    file: 'en-US.json',
    name: 'English',
  },
  {
    code: 'ua',
    iso: 'uk',
    file: 'uk-UA.json',
    name: 'Українська',
  },
];

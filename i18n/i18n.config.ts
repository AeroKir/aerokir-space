import type { I18nOptions } from 'vue-i18n';
import { defaultLocale, messages } from './index';

export const i18n = {
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
} as I18nOptions;

export default defineI18nConfig(() => i18n);

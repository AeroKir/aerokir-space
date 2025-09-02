import { defaultLocale, locales } from './i18n/index';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/fonts'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'AeroKir space',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never',
      },
    },
  },

  fonts: {
    families: [
      { name: 'Play', provider: 'google', preload: true },
      { name: 'Inter', provider: 'google', preload: true },
    ],
  },

  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    defaultLocale,
    lazy: true,
    locales,
    vueI18n: './i18n/i18n.config.ts',
    customRoutes: 'config',
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },
});

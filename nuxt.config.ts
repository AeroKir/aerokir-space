import svgLoader from 'vite-svg-loader';
import { defaultLocale, locales } from './i18n/index';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    [
      '@nuxtjs/color-mode',
      {
        preference: 'system', // default theme (system | light | dark)
        fallback: 'light', // fallback theme if not available
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode', // key in localStorage
      },
    ],
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      // titleTemplate: '%s · Kirill Shevtsov — Frontend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // {
        //   name: 'description',
        //   content:
        //     'Frontend & Web Developer with 7+ years of experience. Building fast, accessible, and scalable web applications.',
        // },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'AeroKir space',
      gaId: process.env.NUXT_PUBLIC_GA_ID,
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  vite: {
    plugins: [svgLoader()],
  },

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

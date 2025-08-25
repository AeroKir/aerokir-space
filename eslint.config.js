import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

const config = createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      braceStyle: '1tbs',
      arrowParens: 'always',
      quotes: 'single',
      stylistic: true,
    },
    typescript: {
      strict: true,
    },
  },
})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/v-on-event-hyphenation': ['error', 'never'],
      'vue/multi-word-component-names': 0,
    },
  })
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    },
  });

export default config;

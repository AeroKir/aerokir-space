<template>
  <button
    class="px-3 py-2 rounded-lg border transition-colors
           bg-gray-200 dark:bg-gray-800
           text-gray-800 dark:text-gray-200
           hover:bg-gray-300 dark:hover:bg-gray-700"
    @click="toggleLocale"
  >
    <span v-if="locale === 'en'">🇺🇸 EN</span>
    <span v-else>🇺🇦 UA</span>
  </button>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

// toggle between EN and UA
const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'ua' : 'en');
};
</script>

<style scoped>

</style>

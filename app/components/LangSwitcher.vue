<template>
  <div class="flex items-center gap-2 text-sm font-normal">
    <!-- EN -->
    <button
      class="transition-colors text-base font-heading"
      :class="locale === 'en'
        ? 'text-primaryDark dark:text-primaryLight cursor-default'
        : 'text-primaryDarkAlpha50 dark:text-primaryLightAlpha50 hover:text-primaryDarkAlpha25 dark:hover:text-primaryLightAlpha25'"
      @click="setLocale('en')"
    >
      EN
    </button>

    <span class="text-primaryDarkAlpha50 dark:text-primaryLightAlpha50 text-base font-heading">/</span>

    <!-- UA -->
    <button
      class="transition-colors text-base font-heading"
      :class="locale === 'ua'
        ? 'text-primaryDark dark:text-primaryLight cursor-default'
        : 'text-primaryDarkAlpha50 dark:text-primaryLightAlpha50 hover:text-primaryDarkAlpha25 dark:hover:text-primaryLightAlpha25'"
      @click="setLocale('ua')"
    >
      UA
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

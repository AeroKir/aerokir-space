<template>
  <NuxtLink
    :to="localePath(to)"
    class="flex items-center font-heading capitalize text-lg md:text-3xl 2xl:text-5xl text-primaryDark dark:text-primaryLight transition-all duration-500 ease-in-out
                 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 group"
  >
    {{ t(label) }}
    <ArrowRight class="relative z-10 -right-4 md:-right-6 2xl:-right-8 w-10 md:w-[70px] 2xl:w-[90px] h-auto text-primaryDark dark:text-primaryLight transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-primaryDarkAlpha70 dark:group-hover:text-primaryLightAlpha70" />
    <div class="w-10 h-10 md:w-[70px] md:h-[70px] 2xl:w-[82px] 2xl:h-[82px] rounded-full bg-accentColor transition-transform duration-500 group-hover:scale-110" />
  </NuxtLink>
</template>

<script setup lang="ts">
import ArrowRight from '~/assets/icons/arrow-right.svg';

const { t } = useI18n();
const localePath = useLocalePath();

defineProps<{
  to: string;
  label: string;
}>();
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-end items-center md:items-start gap-4 px-4 md:px-20 pt-6 md:pt-20 pb-1 md:pb-12"
    :class="headerClass"
  >
    <NuxtLink
      :to="localePath('/')"
      aria-label="Home"
    >
      <IconLogo class="w-6 h-6 absolute left-4 md:left-[93px] top-6 text-primaryDark dark:text-accentColor hover:text-primaryDark/80 dark:hover:text-accentColor/80 transition-colors" />
    </NuxtLink>
    <AppMenu />
    <div class="flex items-center">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import IconLogo from '../assets/icons/logo.svg';

const localePath = useLocalePath();
type Props = {
  headerClass?: string | object;
};

withDefaults(defineProps<Props>(), {
  headerClass: '',
});
</script>

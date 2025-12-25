<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-end items-center xl:items-start gap-4 px-4 md:px-8 xl:px-20 pt-6 xl:pt-20 pb-1 xl:pb-12
           transition-all duration-500 xl:pointer-events-none"
    :class="[
      headerClass,
      isScrolled && isMobile
        ? 'bg-sepia/70 dark:bg-primaryDark/70 backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <NuxtLink
      :to="localePath('/')"
      aria-label="Home"
      class="absolute left-4 md:left-7 xl:left-[70px] top-7 pointer-events-auto xl:bg-sepia/30 xl:dark:bg-primaryDark/30 xl:backdrop-blur-md xl:rounded-xl xl:p-2"
    >
      <IconLogo
        class="w-6 h-6 text-primaryDark dark:text-accentColor hover:text-primaryDark/80 dark:hover:text-accentColor/80 transition-colors"
      />
    </NuxtLink>

    <AppMenu />

    <div class="flex items-center relative xl:bg-sepia/30 xl:dark:bg-primaryDark/30 xl:backdrop-blur-md xl:rounded-full xl:px-2 xl:py-1 pointer-events-auto">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import IconLogo from '~/assets/icons/logo.svg';

const localePath = useLocalePath();
type Props = { headerClass?: string | object };
withDefaults(defineProps<Props>(), { headerClass: '' });

const isScrolled = ref(false);
const isMobile = ref(false);

const handleScroll = () => {
  if (!isMobile.value) return;
  isScrolled.value = window.scrollY > 10;
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 1280; // Tailwind's 'xl' breakpoint
  if (!isMobile.value) isScrolled.value = false; // reset blur when back to desktop
};

onMounted(() => {
  handleResize(); // initialize
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

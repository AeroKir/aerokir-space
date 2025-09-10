<!-- <template>
  <nav class="flex flex-col gap-4 mr-auto">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.path"
      :to="localePath(link.path)"
      class="relative pl-6 font-heading text-base text-primaryDarkAlpha50 dark:text-primaryLightAlpha50 hover:text-primaryDark dark:hover:text-white transition"
      :class="{ 'font-normal text-primaryDark dark:text-primaryLight active-link': isActive(link.path) }"
    >
      {{ t(link.label) }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const menuLinks = [
//   { path: '/', label: 'navMenu.home' },
  { path: '/', label: 'navMenu.about' },
  { path: '/experience', label: 'navMenu.experience' },
  { path: '/projects', label: 'navMenu.projects' },
  { path: '/education', label: 'navMenu.education' },
  { path: '/contact', label: 'navMenu.contact' },
];

const isActive = (path: string) => {
  return route.path === localePath(path);
};
</script>

<style scoped>
.active-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 1px;
  background-color: currentColor;
  transform: translateY(-50%);
}
</style> -->

<!-- <template>
  <nav class="flex flex-col gap-4 mr-auto">
    <NuxtLink
      v-for="(link, i) in menuLinks"
      :key="link.path"
      :to="localePath(link.path)"
      class="relative font-heading text-base transition-all duration-300 ease-in-out
             text-primaryDarkAlpha50 dark:text-primaryLightAlpha50
             hover:text-primaryDark dark:hover:text-white
             pl-0"
      :class="[
        isHovered === i
          ? 'pl-[55px] text-primaryDark dark:text-white before:opacity-100 before:w-[45px]'
          : isActive(link.path) || (route.path === '/' && i === 0)
            ? 'pl-[55px] text-primaryDark dark:text-white before:opacity-100 before:w-[45px]'
            : 'pl-[10px]',
      ]"
      @mouseenter="isHovered = i"
      @mouseleave="isHovered = null"
    >
      {{ t(link.label) }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const menuLinks = [
  { path: '/', label: 'navMenu.about' },
  { path: '/experience', label: 'navMenu.experience' },
  { path: '/projects', label: 'navMenu.projects' },
  { path: '/education', label: 'navMenu.education' },
  { path: '/contact', label: 'navMenu.contact' },
];

const isHovered = ref<number | null>(null);

const isActive = (path: string) => route.path === localePath(path);
</script>

<style scoped>
nav a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  height: 1px;
  @apply bg-primaryDark dark:bg-white;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  width: 0;
}
</style> -->

<template>
  <nav class="flex flex-col gap-4 mr-auto">
    <NuxtLink
      v-for="(link, i) in menuLinks"
      :key="link.path"
      :to="localePath(link.path)"
      class="relative font-heading text-base transition-all duration-700 ease-in-out
             text-primaryDarkAlpha50 dark:text-primaryLightAlpha50 hover:text-primaryDark dark:hover:text-white
             before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
             before:h-[1px] before:w-0 before:opacity-0 before:bg-primaryDark dark:before:bg-white
             before:transition-all before:duration-700 before:ease-in-out"
      :class="linkDynamicClass(i)"
      @mouseenter="hoverIndex = i"
      @mouseleave="hoverIndex = null"
    >
      {{ t(link.label) }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const hoverIndex = ref<number | null>(null);

const menuLinks = [
  { path: '/', label: 'navMenu.about' },
  { path: '/experience', label: 'navMenu.experience' },
  { path: '/projects', label: 'navMenu.projects' },
  { path: '/education', label: 'navMenu.education' },
  { path: '/contact', label: 'navMenu.contact' },
];

// index of active item (by comparing route.path with localized path)
// if no match and user is on root "/", we treat first item as active; otherwise -1 (no active)
const activeIndex = computed(() => {
  const idx = menuLinks.findIndex((l) => route.path === localePath(l.path));
  if (idx !== -1) return idx;
  // if on root (could be locale-prefixed), check localized root too
  if (route.path === '/' || route.path === localePath('/')) return 0;
  return -1;
});

function linkDynamicClass(i: number) {
  // If hovering a link -> hover wins: it gets full style.
  if (hoverIndex.value === i) {
    return 'pl-[55px] text-primaryDark dark:text-primaryLight before:w-[45px] before:opacity-100';
  }

  // If someone ELSE is hovered -> don't show active styles on any non-hover link.
  if (hoverIndex.value !== null) {
    return 'pl-0';
  }

  // No hover -> show active styles only for activeIndex
  if (activeIndex.value === i) {
    return 'pl-[55px] text-primaryDark dark:text-white before:w-[45px] before:opacity-100';
  }

  // default
  return 'pl-0';
}
</script>

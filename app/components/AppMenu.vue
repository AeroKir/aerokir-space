<template>
  <nav class="flex flex-col gap-4 mr-auto">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.path"
      :to="localePath(link.path)"
      class="relative pl-6 text-primaryDark dark:text-gray-300 hover:text-black dark:hover:text-white transition"
      :class="{ 'font-semibold text-black dark:text-white active-link': isActive(link.path) }"
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

const isActive = (path: string) => route.path === path;
</script>

<style scoped>
.active-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 2px;
  background-color: currentColor;
  transform: translateY(-50%);
}
</style>

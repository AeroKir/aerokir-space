<template>
  <nav class="hidden xl:flex flex-col gap-4 mr-auto">
    <ul>
      <li
        v-for="(link, i) in menuLinks"
        :key="link.path"
        class="mb-4 last:mb-0"
      >
        <NuxtLink
          :to="localePath(link.path)"
          class="relative font-heading text-base transition-all duration-700 ease-in-out
           hover:text-primaryDark dark:hover:text-primaryLight
             before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
             before:h-[1px] before:w-0 before:opacity-0
             before:transition-all before:duration-700 before:ease-in-out"
          :class="linkDynamicClass(i)"
          @mouseenter="hoverIndex = i"
          @mouseleave="hoverIndex = null"
        >
          {{ t(link.label) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- Mobile Menu -->
  <nav class="flex xl:hidden items-center">
    <button
      class="p-2 text-primaryDark dark:text-primaryLight focus:outline-none transition-transform duration-500"
      :aria-expanded="isOpen"
      :aria-label="t('buttons.toggleMenu')"
      @click="isOpen = !isOpen"
    >
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- MOBILE DROPDOWN -->
    <transition
      enterActiveClass="transition-all duration-500 ease-in-out"
      leaveActiveClass="transition-all duration-500 ease-in-out"
      enterFromClass="opacity-0 -translate-y-4"
      leaveToClass="opacity-0 -translate-y-4"
    >
      <ul
        v-if="isOpen"
        class="absolute left-0 top-full mt-0 w-full flex flex-col gap-4 bg-sepia dark:bg-primaryDark border border-primaryDark/10 dark:border-primaryLight/10 shadow-lg p-4 z-[80]"
      >
        <li
          v-for="(link, i) in menuLinks"
          :key="'mobile-' + link.path"
        >
          <NuxtLink
            :to="localePath(link.path)"
            class="font-heading text-base transition-all duration-500 ease-in-out
                 hover:text-primaryDark dark:hover:text-primaryLight"
            :class="[
              activeIndex === i
                ? 'text-primaryDark dark:text-primaryLight font-semibold'
                : 'text-primaryDarkAlpha70 dark:text-primaryLightAlpha70',
            ]"
            @click="closeMenu"
          >
            {{ t(link.label) }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const hoverIndex = ref<number | null>(null);
const isOpen = ref(false);

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
    return 'pl-[55px] text-primaryDark dark:text-primaryLight before:w-[45px] before:opacity-100 before:bg-primaryDark dark:before:bg-primaryLight';
  }

  // If someone ELSE is hovered -> don't show active styles on any non-hover link.
  if (hoverIndex.value !== null) {
    return 'pl-0 text-primaryDarkAlpha50 dark:text-primaryLightAlpha50';
  }

  // No hover -> show active styles only for activeIndex
  if (activeIndex.value === i) {
    return 'pl-[55px] text-primaryDark dark:text-primaryLight before:w-[45px] before:opacity-100 before:bg-primaryDark dark:before:bg-primaryLight';
  }

  // default
  return 'pl-0 text-primaryDarkAlpha50 dark:text-primaryLightAlpha50';
}

function closeMenu() {
  isOpen.value = false;
}
</script>

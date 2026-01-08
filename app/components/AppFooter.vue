<template>
  <footer
    class="relative"
    :class="footerClass"
  >
    <div class="absolute left-1/2 transform -translate-x-1/2 top-28 z-10">
      <slot />
    </div>
    <p class="absolute left-1/2 transform -translate-x-1/2 bottom-12 z-10 font-heading text-base text-center text-primaryDark dark:text-primaryLight">
      &copy; {{ currentYear }} Aerokir Space. All rights reserved.
    </p>
    <PerspectiveGrid
      position="bottom"
      :height="isMobile ? 290 : 490"
      customClass="bg-sepia dark:bg-primaryDark"
    />
  </footer>
</template>

<script setup lang="ts">
type Props = {
  footerClass?: string | object;
};

withDefaults(defineProps<Props>(), {
  footerClass: '',
});

const currentYear = new Date().getFullYear();

const { isMobile } = useIsMobile();
</script>

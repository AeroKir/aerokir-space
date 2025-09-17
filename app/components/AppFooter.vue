<template>
  <footer
    class="relative"
    :class="footerClass"
  >
    <p class="text-center absolute left-1/2 transform -translate-x-1/2 bottom-12 z-10">
      2025 © Aerokir Space. All rights reserved.
    </p>
    <PerspectiveGrid
      position="bottom"
      :height="490"
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
</script>

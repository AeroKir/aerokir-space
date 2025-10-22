<template>
  <h1
    class="flex flex-wrap items-baseline font-heading font-bold text-7xl md:text-[200px]/[300px] text-primaryDark dark:text-accentColor m-0 p-0 relative z-10"
    :class="customClass"
  >
    <span class="inline-flex items-baseline">
      {{ title }}
      <span
        v-if="isDot"
        class="inline-block w-2 h-2 md:w-8 md:h-8 bg-accentColor dark:bg-primaryLight ml-1"
      ></span>
    </span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isDot?: boolean;
  customClass?: string;
}>();
</script>

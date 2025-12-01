<template>
  <h1
    class="w-fit flex flex-wrap items-baseline font-heading font-bold text-7xl md:text-[128px]/[128px] lg:text-[160px]/[160px] xl:text-[164px]/[164px] 2xl:text-[200px]/[300px] text-primaryDark dark:text-accentColor m-0 p-0 relative z-10"
    :class="customClass"
  >
    <span class="inline-flex items-baseline relative z-10">
      {{ title }}
      <span
        v-if="isDot"
        class="inline-block w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 bg-accentColor dark:bg-primaryLight ml-1"
      ></span>
    </span>
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isDot?: boolean;
  customClass?: string;
}>();
</script>

<template>
  <h1
    class="flex flex-wrap items-baseline font-heading font-bold text-[200px] text-primaryDark dark:text-accentColor m-0 p-0 relative z-10"
  >
    <span class="inline-flex items-baseline">
      {{ title }}
      <span
        v-if="isDot"
        class="inline-block w-8 h-8 bg-accentColor dark:bg-primaryLight ml-1"
      ></span>
    </span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isDot?: boolean;
}>();
</script>

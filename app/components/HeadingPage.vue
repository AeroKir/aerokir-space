<template>
  <h1
    class="flex flex-wrap font-heading font-bold text-[200px] text-primaryDark dark:text-accentColor"
  >
    <span class="relative inline-flex items-end">
      {{ title }}
      <span
        v-if="isDot"
        class="w-8 h-8 bg-accentColor dark:bg-primaryLight -translate-y-[75px]"
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

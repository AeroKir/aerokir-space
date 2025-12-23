<template>
  <div class="flex items-center gap-6 px-4">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <span
        :class="[
          'whitespace-nowrap font-heading transition-colors duration-300',
          item.size,
          item.weight,
          item.class,
        ]"
      >
        {{ item.label }}
      </span>

      <component
        :is="divider"
        v-if="divider && item.divider"
        class="text-primaryDark/40 dark:text-primaryLight/40"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    label: string;
    size: string;
    weight: string;
    class: string;
    divider?: boolean;
  }[];
  divider?: any;
}>();
</script>

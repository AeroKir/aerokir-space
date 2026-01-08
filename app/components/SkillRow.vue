<template>
  <div class="flex items-center gap-6 px-4">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <span
        class="leading-[100%]"
        :class="[
          'whitespace-nowrap font-body transition-colors duration-300',
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
        class="text-primaryDark dark:text-primaryLight"
        :class="dividerClass"
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
  dividerClass?: string;
}>();
</script>

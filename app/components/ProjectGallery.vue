<template>
  <section class="w-full mx-auto">
    <div class="grid gap-3 auto-rows-[300px]">
      <!-- Перше зображення — завжди широке -->
      <div class="col-span-full relative overflow-hidden rounded-xl group bg-neutral-100 dark:bg-neutral-800 h-[400px]">
        <img
          :src="screenshots[0].src"
          :alt="screenshots[0].device || 'Main Screenshot'"
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
      </div>

      <!-- Решта зображень -->
      <div
        v-if="screenshots.length > 1"
        class="grid gap-3"
        :class="gridClass"
      >
        <div
          v-for="(shot, index) in screenshots.slice(1)"
          :key="index"
          class="relative overflow-hidden rounded-xl group bg-neutral-100 dark:bg-neutral-800"
        >
          <img
            :src="shot.src"
            :alt="shot.device || `Screenshot ${index + 2}`"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Screenshot {
  src: string;
  device?: string;
}

const props = defineProps<{
  screenshots: Screenshot[];
}>();

// Автоматична розкладка для другого ряду
const gridClass = computed(() => {
  const count = props.screenshots.length - 1;

  if (count === 1) return 'grid-cols-1 h-[300px]';
  if (count === 2) return 'grid-cols-2 h-[300px]';
  if (count === 3) return 'grid-cols-3 h-[300px]';
  if (count === 4) return 'grid-cols-4 h-[300px]';
  if (count >= 5) return 'grid-cols-5 h-[300px]';
  return 'grid-cols-2 h-[300px]';
});
</script>

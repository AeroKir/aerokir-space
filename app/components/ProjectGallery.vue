<template>
  <section class="w-full mx-auto">
    <div class="grid gap-3 auto-rows-[400px]">
      <!-- Main image -->
      <div class="col-span-full relative overflow-hidden group bg-sepiaDarken dark:bg-primaryDarken h-[400px]">
        <img
          :src="screenshots[0].src"
          :alt="screenshots[0].device || 'Main Screenshot'"
          class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
      </div>
      <!-- Other images -->
      <div
        v-if="screenshots.length > 1"
        class="grid gap-3"
        :class="gridClass"
      >
        <div
          v-for="(shot, index) in screenshots.slice(1)"
          :key="index"
          class="relative overflow-hidden group bg-sepiaDarken dark:bg-primaryDarken"
        >
          <img
            :src="shot.src"
            :alt="shot.device || `Screenshot ${index + 2}`"
            class="w-auto h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 mx-auto"
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

<template>
  <section class="w-full mx-auto">
    <div class="grid gap-3 auto-rows-auto">
      <!-- MAIN screenshot -->
      <div
        class="col-span-full overflow-hidden group
               bg-sepiaDarken dark:bg-primaryDarken
               flex items-center justify-center"
        :class="aspectClass(formatted[0].device)"
      >
        <img
          :src="formatted[0].src"
          class="block w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        >
      </div>

      <!-- OTHER screenshots -->
      <div
        v-if="formatted.length > 1"
        class="grid gap-3"
        :class="gridColumns"
      >
        <div
          v-for="(shot, index) in formatted.slice(1)"
          :key="index"
          class="relative overflow-hidden
                 bg-sepiaDarken dark:bg-primaryDarken
                 flex items-center justify-center
                 md:h-72 lg:h-80 xl:h-96"
          :class="mobileAspect(shot.device)"
        >
          <img
            :src="shot.src"
            class="block max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
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

const props = defineProps<{ screenshots: Screenshot[] }>();
const formatted = computed(() => props.screenshots || []);

// Aspect ratio → ONLY on mobile
const mobileAspect = (device?: string) => {
  switch (device) {
    case 'desktop': return 'aspect-[16/9] md:aspect-auto';
    case 'laptop': return 'aspect-[4/3] md:aspect-auto';
    case 'tablet': return 'aspect-[3/4] md:aspect-auto';
    case 'mobile': return 'aspect-[9/16] md:aspect-auto';
    default: return 'aspect-[16/9] md:aspect-auto';
  }
};

// Aspect for the MAIN screenshot (keep original)
const aspectClass = (device?: string) => {
  switch (device) {
    case 'desktop': return 'aspect-[16/9]';
    case 'laptop': return 'aspect-[4/3]';
    case 'tablet': return 'aspect-[3/4]';
    case 'mobile': return 'aspect-[9/16]';
    default: return 'aspect-[16/9]';
  }
};

// Columns
const gridColumns = computed(() => {
  const count = formatted.value.length - 1;

  return [
    'grid-cols-1',
    count === 1 && 'md:grid-cols-1',
    count === 2 && 'md:grid-cols-2',
    count === 3 && 'md:grid-cols-3',
    count === 4 && 'md:grid-cols-4',
    count >= 5 && 'md:grid-cols-5',
  ].filter(Boolean).join(' ');
});
</script>

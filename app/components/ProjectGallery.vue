<template>
  <section class="w-full max-w-6xl mx-auto px-4">
    <div class="grid grid-rows-2 gap-4 h-[600px]">
      <!-- Row 1: Desktop + Laptop -->
      <div class="grid grid-cols-2 gap-4">
        <div class="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src="/projects/umlaut/umlaut-main-page.jpg"
            alt="Desktop view"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src="/projects/umlaut/umlaut-main-page.jpg"
            alt="Laptop view"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Row 2: Tablet + Mobile -->
      <div class="grid grid-cols-3 gap-4">
        <div class="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 col-span-1">
          <img
            src="/projects/umlaut/umlaut-main-page.jpg"
            alt="Tablet view"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src="/projects/umlaut/umlaut-main-page.jpg"
            alt="Mobile view 1"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src="/projects/umlaut/umlaut-main-page.jpg"
            alt="Mobile view 2"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  screenshots: {
    src: string;
    alt?: string;
    device?: string;
  }[];
}>();

// Split screenshots logically
const firstRow = props.screenshots.slice(0, 2); // desktop + laptop
const secondRow = props.screenshots.slice(2, 5); // tablet + 2 mobiles
</script>

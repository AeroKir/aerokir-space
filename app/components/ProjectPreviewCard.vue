<template>
  <article class="w-[1355px] h-auto relative mb-24">
    <h2 class="absolute -top-[128px] left-0 text-[128px] font-heading font-bold text-primaryDark dark:text-primaryLight z-40">
      <!-- {{ props.title }} -->
      <NuxtLink :to="localePath(`/projects/${slug}`)">
        {{ t(props.title) }}
      </NuxtLink>
    </h2>

    <p class="flex items-center absolute top-[7%] right-0 uppercase text-2xl font-body z-40">
      {{ props.yearsOfDevelopment }} <span class="w-3 h-3 inline-block bg-primaryDark dark:bg-primaryLight rounded-full ml-[15px] mr-[10px]" /> {{ t(props.projectType) }}
    </p>
    <div class="relative w-[1120px] h-[550px] bg-sepiaDarken dark:bg-primaryDarken ml-[145px] py-9 px-6 mb-4 flex justify-center items-center">
      <!-- <img
        :src="props.image"
        alt="props.imageAlt"
        class="w-[836px] h-auto object-cover mb-2"
      > -->

      <div class="relative group w-[836px] h-auto">
        <video
          :src="props.previewVideo"
          class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
        />

        <img
          :src="props.image"
          :alt="props.imageAlt"
          class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 relative z-20"
        >

        <div
          aria-hidden="true"
          class="absolute inset-0 bg-sepiaAlpha50 dark:bg-primaryDarkAlpha70 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-30 pointer-events-none"
        />
      </div>

      <p class="absolute left-[60px] bottom-[60px] max-w-[569px] text-2xl font-body text-[#1D1A31] dark:text-primaryLight z-40">
        {{ t(props.excerpt) }}
      </p>
    </div>

    <!-- <NuxtLink
      :to="localePath(`/projects/${slug}`)"
      class="absolute w-[180px] h-[180px] rounded-full bg-primaryDark dark:bg-primaryLight bottom-[30px] right-[1%] text-xl z-40"
    >
      <IconArrowTopRight
        class="absolute w-[90px] h-auto right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 text-accentColor dark:text-primaryDark z-50"
      />
      <span class="absolute bottom-[20%] right-[20%] text-primaryLight dark:text-accentColor text-xl font-body uppercase">More</span>
    </NuxtLink> -->

    <NuxtLink
      :to="localePath(`/projects/${slug}`)"
      class="group absolute w-[180px] h-[180px] rounded-full bg-primaryDark dark:bg-primaryLight
         bottom-[30px] right-[1%] text-xl z-40
         transition-colors duration-300 ease-in-out"
    >
      <!-- Arrow -->
      <IconArrowTopRight
        class="absolute w-[90px] h-auto right-1/2 top-1/2
           translate-x-1/2 -translate-y-1/2
           text-accentColor dark:text-primaryDark z-50
           transition-transform duration-300 ease-in-out
           group-hover:translate-x-[70%] group-hover:-translate-y-[70%] group-hover:scale-110 group-hover:text-primaryLight dark:group-hover:text-accentColor"
      />

      <!-- Label -->
      <span
        class="absolute bottom-[20%] right-[20%]
           text-primaryLight dark:text-accentColor
           text-xl font-body uppercase
           transition-colors duration-300 ease-in-out
           group-hover:text-accentColor dark:group-hover:text-primaryDark"
      >
        More
      </span>
    </NuxtLink>

    <!-- <a
      :href="props.link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accentColor underline"
    >
      Link
    </a> -->
  </article>
</template>

<script setup lang="ts">
import IconArrowTopRight from '../assets/icons/arrow-top-right.svg';

const props = defineProps<{
  slug: string;
  title: string;
  excerpt: string;
  // description: string;
  yearsOfDevelopment: number | string;
  projectType: string;
  link: string;
  image: string;
  imageAlt: string;
  previewVideo?: string;
}>();

const localePath = useLocalePath();
const { t } = useI18n();
</script>

<style scoped>

</style>

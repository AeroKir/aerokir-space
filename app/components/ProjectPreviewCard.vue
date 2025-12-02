<template>
  <article class="w-[95vw] xl:w-[55vw] 2xl:w-[55vw] 3xl:w-[1355px] h-auto relative mb-16 md:mb-24 px-4 lg:px-0">
    <h2 class="absolute -top-8 md:-top-12 xl:-top-16 2xl:-top-[87px] 3xl:-top-[110px] left-2 lg:-left-6 xl:left-10 2xl:left-0 text-4xl md:text-6xl xl:text-[76px]/[76px] 2xl:text-[100px]/[100px] 3xl:text-[128px]/[128px] font-heading font-bold text-primaryDark dark:text-primaryLight z-40">
      <NuxtLink :to="localePath(`/projects/${slug}`)">
        {{ t(props.title) }}
      </NuxtLink>
    </h2>

    <p class="flex items-center absolute top-3 md:top-1 lg:top-[2%] xl:top-[7%] right-2 md:right-6 lg:right-20 xl:-right-[20%] 3xl:right-0 uppercase text-sm md:text-base 2xl:text-2xl font-body z-40 [text-shadow:0_1px_2px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000]">
      {{ props.yearsOfDevelopment }} <span class="w-3 h-3 inline-block bg-primaryDark dark:bg-primaryLight rounded-full ml-[15px] mr-[10px] shadow-[0_1px_2px_#9DA3A4] dark:shadow-[0_2px_3px_#000000]" /> {{ t(props.projectType) }}
    </p>
    <div class="relative w-[88vw] lg:w-[85vw] xl:w-[55vw] 2xl:w-[55vw] 3xl:w-[1120px] 2xl:h-[550px] bg-sepiaDarken dark:bg-primaryDarken xl:ml-20 3xl:ml-[145px] py-9 px-6 mb-10 last:mb-0 flex justify-center items-center">
      <div class="relative group w-full md:w-[70vw] xl:w-[600px] 2xl:w-[44vw] 3xl:w-[836px] h-auto">
        <NuxtLink
          :to="localePath(`/projects/${slug}`)"
        >
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
        </NuxtLink>

        <div
          aria-hidden="true"
          class="absolute inset-0 bg-sepiaAlpha50 dark:bg-primaryDarkAlpha70 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-30 pointer-events-none"
        />
      </div>

      <p class="absolute left-1 lg:left-[60px] bottom-10 md:bottom-[60px] max-w-[70%] lg:max-w-[569px] text-xs md:text-lg 2xl:text-2xl font-body text-primaryDark dark:text-primaryLight z-40 [text-shadow:0_1px_2px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000]">
        {{ t(props.excerpt) }}
      </p>
    </div>

    <NuxtLink
      :to="localePath(`/projects/${slug}`)"
      class="group absolute w-20 h-20 md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full bg-primaryDark dark:bg-primaryLight
         bottom-[30px] right-[1%] md:right-[3%] lg:right-[7%] xl:-right-[20%] 2xl:-right-[20%] 3xl:right-[1%] text-xl z-40
         transition-colors duration-300 ease-in-out"
    >
      <!-- Arrow -->
      <IconArrowTopRight
        class="absolute md:w-[90px] h-auto right-1/2 top-[40%] md:top-1/2
           translate-x-1/2 -translate-y-1/2
           text-accentColor dark:text-primaryDark z-50
           transition-transform duration-300 ease-in-out
           group-hover:translate-x-[70%] group-hover:-translate-y-[70%] group-hover:scale-110 group-hover:text-primaryLight dark:group-hover:text-accentColor"
      />

      <!-- Label -->
      <span
        class="absolute bottom-[20%] right-[20%]
           text-primaryLight dark:text-accentColor
           text-sm md:text-xl font-body uppercase
           transition-colors duration-300 ease-in-out
           group-hover:text-accentColor dark:group-hover:text-primaryDark"
      >
        {{ t('buttons.more') }}
      </span>
    </NuxtLink>
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

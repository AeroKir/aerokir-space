<template>
  <article class="w-[1355px] h-auto relative mb-24">
    <h2 class="absolute -top-[128px] left-0 text-[128px] font-heading font-bold z-10">
      <!-- {{ props.title }} -->
      <NuxtLink :to="localePath(`/projects/${slug}`)">
        {{ props.title }}
      </NuxtLink>
    </h2>
    <div class="relative w-[1120px] h-[550px] bg-coalBlack ml-[145px] py-9 px-6 mb-4 flex justify-center items-center">
      <p class="flex items-baseline absolute top-2 right-2 uppercase text-2xl">
        {{ props.yearsOfDevelopment }} <span class="w-3 h-3 inline-block bg-primaryLight rounded-full ml-[15px] mr-[10px]"></span> {{ props.projectType }}
      </p>
      <img
        :src="props.image"
        alt="props.imageAlt"
        class="w-[836px] h-auto object-cover mb-2"
      >
      <p class="absolute bottom-2 left-2 text-sm">
        {{ props.description }}
      </p>
      <NuxtLink
        :to="localePath(`/projects/${slug}`)"
        class="absolute w-[180px] h-[180px] rounded-full bg-primaryLight bottom-2 right-2 text-xl underline"
      >
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primaryDark">More</span>
      </NuxtLink>
    </div>

    <a
      :href="props.link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-accentColor underline"
    >
      <!-- {{ $t('projects.viewMore') }} -->
      Link
    </a>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  slug: string;
  title: string;
  description: string;
  yearsOfDevelopment: number | string;
  projectType: string;
  link: string;
  image: string;
  imageAlt: string;
}>();

const localePath = useLocalePath();
</script>

<style scoped>

</style>

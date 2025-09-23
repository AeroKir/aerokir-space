<template>
  <article class="w-[400px] p-4 border rounded">
    <!-- <img
        :src="project.image"
        alt=""
        class="w-full h-40 object-cover mb-2"
      > -->
    <h2 class="text-xl font-heading">
      <!-- {{ props.title }} -->
      <NuxtLink :to="localePath(`/projects/${slug}`)">
        {{ props.title }}
      </NuxtLink>
    </h2>
    <p class="text-sm">
      {{ props.description }}
    </p>
    <p class="text-sm italic mt-2">
      {{ props.yearsOfDevelopment }} - {{ props.projectType }}
    </p>
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
}>();

const localePath = useLocalePath();
</script>

<style scoped>

</style>

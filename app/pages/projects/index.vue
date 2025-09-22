<template>
  <Page>
    <AppHeader />
    <main class="h-full w-screen ml-[283px] text-primaryDark dark:text-white relative">
      <HeadingPage
        :title="$t('pages.projects.title')"
        :isDot="true"
      />
      <IconPyramidVertical
        class="w-[343px] h-[343px] absolute -top-[155px] right-1/2 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />

      <ul class="grid gap-6">
        <li
          v-for="project in projects"
          :key="project.id"
          class="w-[400px] p-4 border rounded"
        >
          <!-- <img
            :src="project.image"
            alt=""
            class="w-full h-40 object-cover mb-2"
          > -->
          <h3 class="text-xl font-heading">
            {{ $t(project.name) }}
          </h3>
          <p class="text-sm">
            {{ $t(project.description) }}
          </p>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-accentColor underline"
          >
            <!-- {{ $t('projects.viewMore') }} -->
            Link
          </a>
        </li>
      </ul>
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconPyramidVertical from '../../assets/icons/pyramid-vertical.svg';

const { projects } = useAppConfig() as {
  projects: {
    id: number | string;
    name: string;
    description: string;
    link: string;
    image: string;
    // tags: string[];
  }[];
};
</script>

<style scoped>

</style>

<template>
  <Page>
    <AppHeader />
    <main class="h-full ml-[283px] mr-10 text-primaryDark dark:text-white relative">
      <HeadingPage
        :title="$t('pages.projects.title')"
        :isDot="true"
        customClass="ml-[407px] mb-[100px]"
      />
      <IconPyramidVertical
        class="w-[343px] h-[343px] absolute -top-[155px] right-1/2 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />

      <section>
        <ProjectPreviewCard
          v-for="project in projects"
          :key="project.id"
          :slug="project.slug"
          :title="project.name"
          :excerpt="project.excerpt"
          :yearsOfDevelopment="project.yearsOfDevelopment"
          :projectType="project.projectType"
          :link="project.link"
          :image="project.image"
          :imageAlt="project.name"
          :previewVideo="project.previewVideo"
        />
      </section>

      <!-- <ul class="grid gap-6">
        <li
          v-for="project in projects"
          :key="project.id"
          class="w-[400px] p-4 border rounded"
        >
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
            Link
          </a>
        </li>
      </ul> -->
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconPyramidVertical from '../../assets/icons/pyramid-vertical.svg';

const { projects } = useAppConfig() as {
  projects: {
    id: number | string;
    slug: string;
    name: string;
    excerpt: string;
    // description: string;
    link: string;
    image: string;
    imageAlt: string;
    yearsOfDevelopment: string;
    projectType: string;
    previewVideo?: string;
    // tags: string[];
  }[];
};
</script>

<style scoped>

</style>

<template>
  <Page>
    <AppHeader />
    <main class="h-full ml-[283px] mr-[265px] -top-20 text-primaryDark dark:text-white relative z-50">
      <div class="relative max-w-[1040px] h-auto mx-auto -translate-x-1/2 pb-[70px]">
        <HeadingPage
          :title="$t('pages.projects.title')"
          :isDot="true"
          customClass="ml-[500px] mb-[100px]"
        />
        <IconPyramidVertical
          class="w-[343px] h-[343px] absolute top-[23px] -right-[400px] text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
        />
      </div>

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
  }[];
};
</script>

<style scoped>

</style>

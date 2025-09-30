<!-- <template>
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

</style> -->

<template>
  <Page>
    <AppHeader />
    <main class="h-full ml-[283px] mr-[265px] -top-10 text-primaryDark dark:text-white relative z-50">
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

      <section class="relative flex flex-col gap-12">
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
          class="project-card transition-all duration-500 opacity-40 blur-[2px] scale-95"
        />
      </section>

      <!-- optional top/bottom fade overlay -->
      <!-- <div class="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-black to-transparent" />
      <div class="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-black to-transparent" /> -->
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import IconPyramidVertical from '../../assets/icons/pyramid-vertical.svg';

const { projects } = useAppConfig() as {
  projects: {
    id: number | string;
    slug: string;
    name: string;
    excerpt: string;
    link: string;
    image: string;
    imageAlt: string;
    yearsOfDevelopment: string;
    projectType: string;
    previewVideo?: string;
  }[];
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  // ✅ DOM is available only here
  const cards = document.querySelectorAll<HTMLElement>('.project-card');

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    {
      root: null,
      threshold: 0.4, // Adjust for sensitivity
    },
  );

  cards.forEach((card) => observer!.observe(card));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.project-card.active {
  opacity: 1 !important;
  filter: blur(0px) !important;
  transform: scale(1.05);
  z-index: 10;
}
</style>

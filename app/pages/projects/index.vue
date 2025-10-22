<template>
  <Page>
    <AppHeader />
    <main class="h-full mx-auto 2xl:ml-[283px] 2xl:mr-[265px] -top-10 text-primaryDark dark:text-primaryLight relative lg:z-50 px-2 md:px-0">
      <div class="relative max-w-[1040px] h-auto left-1/2 -translate-x-1/2 pb-[70px]">
        <HeadingPage
          :title="$t('pages.projects.title')"
          :isDot="true"
          customClass="ml-[0] mb-[100px]"
        />
        <IconPyramidVertical
          class="w-[343px] h-[343px] absolute top-[23px] right-24 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
        />
      </div>

      <section class="relative flex flex-col md:gap-12">
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
          class="project-card transition-all duration-500 opacity-40 blur-[2px] scale-95 last:mb-0"
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
.project-card {
  opacity: 0.4;
  filter: blur(6px);
  transform: scale(0.95);
  transition:
    opacity 0.6s ease,
    filter 0.6s ease,
    transform 1.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card.active {
  opacity: 1 !important;
  filter: blur(0) !important;
  transform: scale(1.05);
  z-index: 5;
}
</style>

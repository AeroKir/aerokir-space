<template>
  <Page>
    <AppHeader />
    <main class="h-full mx-auto xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 2xl:mr-[265px] md:-top-10 text-primaryDark dark:text-primaryLight relative xl:z-50 px-2 md:px-8 lg:px-20 xl:px-0">
      <div class="relative max-w-[1040px] h-auto left-1/2 -translate-x-1/2 lg:pb-[70px]">
        <HeadingPage
          :title="$t('pages.projects.title')"
          :isDot="true"
          customClass="ml-[0] md:-ml-[10px] xl:ml-16 2xl:ml-0 mb-4 md:mb-[100px] pt-6 md:mt-12 lg:mt-0 lg:pt-0"
        >
          <IconPyramidVertical
            class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[343px] lg:h-[343px] xl:w-[250px] xl:h-[250px] 2xl:w-[343px] 2xl:h-[343px] absolute top-1 md:top-6 lg:-top-12 xl:-top-1 2xl:top-[23px] -right-[80px] md:-right-[105px] lg:-right-[185px] xl:-right-[120px] 2xl:-right-[185px] text-primaryDarkAlpha25 dark:text-primaryLightAlpha50 z-0"
          />
        </HeadingPage>
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
          class="project-card transition-all duration-500 opacity-40 blur-[2px] scale-95 first:mt-24 last:mb-0"
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

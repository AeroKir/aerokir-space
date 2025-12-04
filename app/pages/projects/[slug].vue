<template>
  <Page contentClass="lg:-pt-[240px] -mb-[240px]">
    <AppHeader />
    <!-- <PerspectiveGrid
      position="top"
      :height="490"
    /> -->
    <main class="max-w-4xl xl:max-w-[800px] 2xl:max-w-4xl mx-auto px-2 md:px-8 lg:px-20 xl:px-0 relative xl:z-50">
      <transition
        name="fade"
        mode="out-in"
      >
        <article
          v-if="project"
          :key="project.slug"
        >
          <div class="relative md:mb-24 lg:mb-14 2xl:mb-36">
            <HeadingPage
              :title="$t('pages.projects.titleSingular')"
              :isDot="false"
              customClass="!absolute ml-[0] md:-ml-[10px] xl:ml-0 3xl:ml-0 mb-4 md:mb-[100px] pt-6 md:mt-12 lg:mt-0 lg:pt-0 top-0 text-primaryDarkAlpha05 dark:text-primaryLightAlpha05"
            >
              <IconOrbit
                class="w-[77px] h-[57px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[95px] xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px] absolute top-2 md:-top-10 lg:-top-6 xl:-top-20 2xl:-top-16 -right-[80px] md:-right-36 lg:-right-[180px] xl:-right-52 2xl:-right-60 text-primaryDarkAlpha10 dark:text-primaryLightAlpha10 z-0"
              />
            </HeadingPage>
            <h2 class="flex items-center relative top-8 md:top-[103px] lg:top-14 xl:top-16 2xl:top-36 text-4xl md:text-[64px]/[64px] pt-6 pb-5 font-heading font-bold text-primaryDark dark:text-accentColor z-10">
              <div class="hidden xl:flex items-center mr-7">
                <div class="w-20 h-[2px] mr-[10px] bg-primaryDarkAlpha25 dark:bg-primaryLightAlpha25" />
                <div class="flex items-center justify-center w-6 h-6 rounded-full bg-primaryDark dark:bg-primaryLight">
                  <div class="relative w-[18px] h-[18px] rounded-full bg-accentColor z-10" />
                </div>
              </div>
              {{ t(project.name) }}
            </h2>
          </div>

          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between mt-6 mb-8 2xl:mb-14 py-2">
            <p class="flex items-center text-sm lg:text-base 2xl:text-xl font-body text-primaryDarkAlpha50 dark:text-primaryLightAlpha50">
              {{ project.yearsOfDevelopment }} <span class="w-3 h-3 inline-block bg-primaryDarkAlpha50 dark:bg-primaryLightAlpha50 rounded-full ml-[15px] mr-[10px]" /> {{ t(project.projectType) }}
            </p>
            <a
              v-if="project.linkGitHub"
              :href="project.linkGitHub"
              target="_blank"
              class="group flex items-center font-body underline text-base 2xl:text-xl text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              <GithubIcon class="relative w-6 h-6 2xl:w-9 2xl:h-9 text-primaryDark dark:text-primaryLight mr-1 2xl:mr-[10px] transition-transform duration-500 group-hover:scale-110 group-hover:text-primaryDarkAlpha70 dark:group-hover:text-primaryLightAlpha70" />
              {{ t('pages.projects.projectSlug.github') }}
              <ArrowRight class="relative z-10 -right-4 w-10 h-auto text-primaryDark dark:text-primaryLight transition-all duration-500 ease-out group-hover:translate-x-2" />
              <div class="w-6 h-6 2xl:w-8 2xl:h-8 rounded-full bg-accentColor transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="group flex items-center font-body underline text-base 2xl:text-xl text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              <ExternalLinkIcon class="relative w-6 h-6 2xl:w-9 2xl:h-9 text-primaryDark dark:text-primaryLight mr-1 2xl:mr-[10px] transition-transform duration-500 group-hover:scale-110 group-hover:text-primaryDarkAlpha70 dark:group-hover:text-primaryLightAlpha70" />
              {{ t('pages.projects.projectSlug.website') }}
              <ArrowRight class="relative z-10 -right-4 w-10 h-auto text-primaryDark dark:text-primaryLight transition-all duration-500 ease-out group-hover:translate-x-2" />
              <div class="w-6 h-6 2xl:w-8 2xl:h-8 rounded-full bg-accentColor transition-transform duration-500 group-hover:scale-110" />
            </a>
          </div>
          <h3 class="font-heading text-lg md:text-2xl text-primaryDarkAlpha50 dark:text-accentColor mb-1">
            {{ t('projects.titleAbout') }}
          </h3>
          <p class="font-body text-base md:text-xl text-primaryDark dark:text-primaryLight mb-10 xl:max-w-[55vw] 2xl:max-w-[42vw] mx-auto">
            {{ t(project.description) }}
          </p>
          <p class="flex flex-wrap items-center gap-2 mb-10 2xl:mb-20 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
            <span class="text-primaryDarkAlpha50 dark:text-accentColor">{{ t('pages.projects.projectSlug.techstack') }}:</span>
            <template
              v-for="(tech, index) in project.technologies"
              :key="tech"
            >
              <span class="">{{ tech }}</span>
              <span
                v-if="index < project.technologies.length - 1"
                class="font-heading text-primaryDark dark:text-primaryLight"
              >
                |
              </span>
            </template>
          </p>

          <div
            v-if="project.screenshots.length"
            class="mb-10 2xl:mb-20"
          >
            <ProjectGallery
              title="Project Screenshots"
              :screenshots="formattedScreenshots"
            />
          </div>
          <div
            class="mb-4"
          >
            <h3
              v-if="project.solvedTasks.length"
              class="font-heading text-lg md:text-2xl text-primaryDarkAlpha50 dark:text-accentColor mb-4"
            >
              {{ t('projects.titlePerformedTasks') }}
            </h3>
            <ul
              v-if="project.solvedTasks.length"
              class="font-body text-base md:text-xl text-primaryDark dark:text-primaryLight 2xl:max-w-[42vw] mx-auto"
            >
              <li
                v-for="task in project.solvedTasks"
                :key="task"
                class="mb-2 last:mb-0"
              >
                • {{ task }}
              </li>
            </ul>
          </div>
        </article>
      </transition>
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconOrbit from '~/assets/icons/orbit.svg';
import GithubIcon from '~/assets/icons/github.svg';
import ExternalLinkIcon from '~/assets/icons/external-link.svg';
import ArrowRight from '~/assets/icons/arrow-right.svg';

const route = useRoute();
const localePath = useLocalePath();
const { t } = useI18n();
const { projects } = useAppConfig();

const project = computed(() => {
  return (projects ?? []).find((p) => p.slug === route.params.slug);
});

const formattedScreenshots = computed(() =>
  ((project.value?.screenshots) ?? []).map((src, index) => ({
    src,
    alt: `${project.value?.name} screenshot ${index + 1}`,
    device:
      index === 0
        ? 'desktop'
        : index === 1
          ? 'laptop'
          : index === 2
            ? 'tablet'
            : 'mobile',
  })),
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

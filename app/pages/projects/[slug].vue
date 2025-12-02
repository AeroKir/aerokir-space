<template>
  <Page>
    <AppHeader />
    <!-- <PerspectiveGrid
      position="top"
      :height="490"
    /> -->
    <main class="max-w-4xl mx-auto px-2 md:px-8 lg:px-20 xl:px-0 relative xl:z-50">
      <transition
        name="fade"
        mode="out-in"
      >
        <article
          v-if="project"
          :key="project.slug"
        >
          <div class="relative">
            <HeadingPage
              :title="$t('pages.projects.titleSingular')"
              :isDot="false"
              customClass="!absolute ml-[0] md:-ml-[10px] xl:ml-16 3xl:ml-0 mb-4 md:mb-[100px] pt-6 md:mt-12 lg:mt-0 lg:pt-0 top-0 text-primaryDarkAlpha05 dark:text-primaryLightAlpha05"
            >
              <IconOrbit
                class="w-[77px] h-[57px] md:w-[150px] md:h-[150px] lg:w-[207px] lg:h-[97px] xl:w-[250px] xl:h-[250px] 2xl:w-[343px] 2xl:h-[343px] absolute top-2 md:-top-16 lg:-top-12 xl:-top-1 2xl:top-[23px] -right-[80px] md:-right-48 lg:-right-[185px] xl:-right-[120px] 2xl:-right-[185px] text-primaryDarkAlpha10 dark:text-primaryLightAlpha10 z-0"
              />
            </HeadingPage>
            <h2 class="relative top-8 md:top-16 text-4xl md:text-6xl xl:text-[76px]/[76px] 3xl:text-[64px]/[64px] pt-6 pb-5 font-heading font-bold text-primaryDark dark:text-accentColor z-10">
              {{ t(project.name) }}
            </h2>
          </div>

          <div class="flex flex-col items-start gap-4 justify-between my-6 py-2">
            <p class="flex items-center text-sm md:text-base 2xl:text-2xl font-body text-primaryDarkAlpha50 dark:text-primaryLightAlpha50">
              {{ project.yearsOfDevelopment }} <span class="w-3 h-3 inline-block bg-primaryDarkAlpha50 dark:bg-primaryLightAlpha50 rounded-full ml-[15px] mr-[10px]" /> {{ t(project.projectType) }}
            </p>
            <a
              v-if="project.linkGitHub"
              :href="project.linkGitHub"
              target="_blank"
              class="group flex items-center font-body underline text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              {{ t('pages.projects.projectSlug.github') }}
              <GithubIcon class="relative w-9 h-9 text-primaryDark dark:text-accentColor ml-1 transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="group flex items-center font-body underline text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              {{ t('pages.projects.projectSlug.website') }}
              <ArrowRight class="relative z-10 -right-4 w-10 h-auto text-primaryDark dark:text-primaryLight transition-all duration-500 ease-out group-hover:translate-x-2" />
              <div class="w-8 h-8 rounded-full bg-accentColor transition-transform duration-500 group-hover:scale-110" />
            </a>
          </div>
          <h3 class="font-heading text-lg md:text-2xl text-primaryDarkAlpha50 dark:text-accentColor mb-1">
            {{ t('projects.titleAbout') }}
          </h3>
          <p class="font-body text-base md:text-2xl text-primaryDark dark:text-primaryLight mb-6">
            {{ t(project.description) }}
          </p>
          <p class="flex flex-wrap items-center gap-2 mb-4 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
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

          <div v-if="project.screenshots.length > 0">
            <ProjectGallery
              title="Project Screenshots"
              :screenshots="formattedScreenshots"
            />
          </div>

          <!-- <ProjectGallery
            title="Project Screenshots"
            :screenshots="[
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Desktop' },
              { src: '/projects/umlaut/umlaut-tablet.jpg', device: 'Tablet' },
              { src: '/projects/umlaut/umlaut-mobile.jpg', device: 'Mobile' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Laptop' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Laptop' },
            ]"
          /> -->
          <div
            class="mb-4"
          >
            <h3 class="font-heading text-lg md:text-2xl text-primaryDarkAlpha50 dark:text-accentColor mb-4">
              <p>{{ t('projects.titlePerformedTasks') }}</p>
            </h3>
            <ul class="text-lg text-primaryDark dark:text-primaryLight mb-2">
              <li
                v-for="task in project.solvedTasks"
                :key="task"
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
import ArrowRight from '~/assets/icons/arrow-right.svg';

const route = useRoute();
const localePath = useLocalePath();
const { t } = useI18n();
const { projects } = useAppConfig();

const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug),
);

const formattedScreenshots = computed(() =>
  (project.value?.screenshots || []).map((src, index) => ({
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

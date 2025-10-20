<template>
  <Page>
    <AppHeader />
    <!-- <PerspectiveGrid
      position="top"
      :height="490"
    /> -->
    <main class="max-w-4xl mx-auto px-6 relative z-50 -mt-10">
      <NuxtLink
        :to="localePath('/projects')"
        class="text-accentColor underline mb-6 inline-block"
      >
        ← Back to projects
      </NuxtLink>

      <transition
        name="fade"
        mode="out-in"
      >
        <article
          v-if="project"
          :key="project.slug"
        >
          <h1 class="text-[128px]/[128px] font-heading font-bold text-primaryDark dark:text-accentColor">
            {{ t(project.name) }}
          </h1>
          <div class="flex items-center gap-4 justify-between mt-6 border-t border-b border-primaryDarkAlpha25 dark:border-primaryLightAlpha25 py-4 mb-6">
            <p class="uppercase font-body font-bold text-primaryDark dark:text-primaryLight">
              {{ t(project.projectType) }}
            </p>
            <p class="uppercase font-body font-bold text-primaryDark dark:text-primaryLight">
              {{ project.yearsOfDevelopment }}
            </p>
            <a
              v-if="project.linkGitHub"
              :href="project.linkGitHub"
              target="_blank"
              class="group flex items-center uppercase font-body font-bold text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              {{ t('pages.projects.projectSlug.github') }}
              <GithubIcon class="relative w-9 h-9 text-primaryDark dark:text-accentColor ml-1 transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="group flex items-center uppercase font-body font-bold text-primaryDark dark:text-primaryLight transition-colors duration-300 hover:text-primaryDarkAlpha70 dark:hover:text-primaryLightAlpha70 cursor-pointer"
            >
              {{ t('pages.projects.projectSlug.website') }}
              <ArrowRight class="relative z-10 -right-4 w-10 h-auto text-primaryDark dark:text-primaryLight transition-all duration-500 ease-out group-hover:translate-x-2" />
              <div class="w-8 h-8 rounded-full bg-accentColor transition-transform duration-500 group-hover:scale-110" />
            </a>
          </div>
          <p class="font-body text-lg text-primaryDark dark:text-primaryLight mb-6">
            {{ t(project.description) }}
          </p>
          <p class="flex flex-wrap items-center gap-2 mb-4 font-body text-primaryDark dark:text-primaryLight">
            <strong class="dark:text-accentColor">{{ t('pages.projects.projectSlug.techstack') }}:</strong>
            <template
              v-for="(tech, index) in project.technologies"
              :key="tech"
            >
              <span>{{ tech }}</span>
              <span
                v-if="index < project.technologies.length - 1"
                class="text-primaryDarkAlpha25 dark:text-primaryLightAlpha25"
              >
                |
              </span>
            </template>
          </p>
          <!-- <img
            :src="project.image"
            :alt="project.name"
            class="w-full rounded-lg shadow mb-8"
          > -->

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
            <h2 class="text-2xl font-heading font-bold text-primaryDark dark:text-primaryLight mb-2">
              Solved Tasks and Results
            </h2>
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

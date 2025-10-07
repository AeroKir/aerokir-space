<template>
  <Page>
    <AppHeader />
    <!-- <PerspectiveGrid
      position="top"
      :height="490"
    /> -->
    <main class="max-w-3xl mx-auto px-6">
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
          <h1 class="text-[128px] font-heading font-bold text-primaryDark dark:text-accentColor">
            {{ t(project.name) }}
          </h1>
          <div class="flex gap-4 justify-between mt-6 border-t border-b border-primaryDarkAlpha25 dark:border-primaryLightAlpha25 py-4 mb-6">
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
              class="text-accentColor underline"
            >View on GitHub</a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-accentColor underline"
            >Visit site</a>
          </div>
          <p class="font-body text-lg text-primaryDark dark:text-primaryLight mb-6">
            {{ t(project.description) }}
          </p>
          <p class="flex flex-wrap items-center gap-2 mb-4 font-body text-primaryDark dark:text-primaryLight">
            <!-- <strong>Techstack:</strong> {{ project.technologies.join(' | ') }} -->
            <strong class="dark:text-accentColor">Techstack:</strong>
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
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full rounded-lg shadow mb-8"
          >

          <ProjectGallery
            title="Project Screenshots"
            :screenshots="[
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Desktop' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Tablet' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Mobile' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Laptop' },
              { src: '/projects/umlaut/umlaut-main-page.jpg', device: 'Laptop' },
            ]"
          />
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
  }))
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

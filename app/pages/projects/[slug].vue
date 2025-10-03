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
          <h1 class="text-[128px] font-heading font-bold text-primaryDark dark:text-primaryLight">
            {{ t(project.name) }}
          </h1>
          <div class="flex gap-4 justify-between mt-6 border-t border-b border-primaryDark dark:border-primaryLight py-4 mb-6">
            <p class="">
              <strong>Type:</strong> {{ t(project.projectType) }}
            </p>
            <p class="">
              <strong>Years:</strong> {{ project.yearsOfDevelopment }}
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
          <p class="text-lg text-primaryDark dark:text-primaryLight mb-6">
            {{ t(project.description) }}
          </p>
          <p class="mb-4">
            <strong>Techstack:</strong> {{ project.technologies.join(', ') }}
          </p>
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full rounded-lg shadow mb-8"
          >
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

<template>
  <Page>
    <AppHeader />
    <main class="max-w-3xl mx-auto py-16 px-6">
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
          <h1 class="text-4xl font-heading mb-4">
            {{ project.name }}
          </h1>
          <p class="text-lg text-primaryDark dark:text-primaryLight mb-6">
            {{ project.description }}
          </p>

          <img
            :src="project.image"
            :alt="project.name"
            class="w-full rounded-lg shadow mb-8"
          >

          <p class="mb-4">
            <strong>Years:</strong> {{ project.yearsOfDevelopment }}
          </p>
          <p class="mb-4">
            <strong>Type:</strong> {{ project.projectType }}
          </p>
          <p class="mb-4">
            <strong>Technologies:</strong> {{ project.technologies.join(', ') }}
          </p>

          <div class="flex gap-4 mt-6">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-accentColor underline"
            >Visit site</a>
            <a
              v-if="project.linkGitHub"
              :href="project.linkGitHub"
              target="_blank"
              class="text-accentColor underline"
            >View on GitHub</a>
          </div>
        </article>
      </transition>
    </main>
  </Page>
</template>

<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
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

<template>
  <article class="flex flex-col experience-item-card p-6 hover:shadow-lg transition-shadow duration-300">
    <span>{{ t(props.workplaceType) }}</span>
    <span>{{ props.period }}</span>
    <h2 class="text-xl font-semibold mb-2">
      {{ props.company }} &ndash; {{ props.position }}
    </h2>
    <p class="text-base text-primaryDark dark:text-primaryLight">
      Brief description of the experience goes here. Highlight key responsibilities and achievements.
    </p>
    <p class="text-base text-primaryDark dark:text-primaryLight">
      Brief description of the experience goes here. Highlight key responsibilities and achievements.
    </p>
    <p class="text-base text-primaryDark dark:text-primaryLight">
      Brief description of the experience goes here. Highlight key responsibilities and achievements.
    </p>
    <p class="text-base text-primaryDark dark:text-primaryLight">
      Brief description of the experience goes here. Highlight key responsibilities and achievements.
    </p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  workplaceType: string;
  company: string;
  position: string;
  period: number | string;
  projectDescription: string;
  solvedTasks: string[];
  toolsUsed: string[];
  technologies: string[];
}>();

const { t } = useI18n();
</script>

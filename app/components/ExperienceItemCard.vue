<template>
  <article class="flex flex-col experience-item-card p-1 border-t-2 border-primaryDark dark:border-primaryLight">
    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-sepia dark:bg-primaryDark relative -top-6 -left-2">
      <div class="flex items-center justify-center w-6 h-6 rounded-full bg-primaryDark dark:bg-primaryLight">
        <div
          class="relative w-[18px] h-[18px] rounded-full z-10"
          :class="props.isActive ? 'bg-accentColor' : 'bg-sepia dark:bg-primaryDark'"
        />
      </div>
    </div>
    <span class="font-heading font-normal text-sm text-primaryDark dark:text-primaryLight mb-3">{{ t(props.workplaceType) }}</span>
    <span class="font-heading font-normal text-4xl xl:text-[64px] text-primaryDark dark:text-primaryLight mb-10">{{ props.period }}</span>
    <h2 class="font-heading font-bold text-xl xl:text-3xl mb-2">
      {{ props.company }} &ndash; {{ props.position }}
    </h2>
    <p class="flex flex-wrap items-center gap-2 mb-10 2xl:mb-20 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
      <span class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor">Project:</span>
      <template
        v-for="(description, index) in projectDescription"
        :key="description"
      >
        <span class="text-xs">{{ description }}</span>
        <span
          v-if="index < projectDescription.length - 1"
          class="font-heading font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight"
        >
          &VerticalLine;
        </span>
      </template>
    </p>

    <div
      class="mb-4"
    >
      <h3
        v-if="solvedTasks.length"
        class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor mb-2"
      >
        {{ t('projects.titlePerformedTasks') }}
      </h3>
      <ul
        v-if="solvedTasks.length"
        class="font-body font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight xl:max-w-[55vw] 2xl:max-w-[42vw] mx-auto"
      >
        <li
          v-for="task in solvedTasks"
          :key="task"
          class="mb-2 last:mb-0"
        >
          • {{ task }}
        </li>
      </ul>
    </div>

    <p class="flex flex-wrap items-center gap-2 mb-10 2xl:mb-20 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
      <span class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor">tools Used:</span>
      <template
        v-for="(tool, index) in toolsUsed"
        :key="tool"
      >
        <span class="text-xs">{{ tool }}</span>
        <span
          v-if="index < toolsUsed.length - 1"
          class="font-heading font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight"
        >
          &VerticalLine;
        </span>
      </template>
    </p>

    <p class="flex flex-wrap items-center gap-2 mb-10 2xl:mb-20 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
      <span class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor">{{ t('pages.projects.projectSlug.techstack') }}:</span>
      <template
        v-for="(tech, index) in technologies"
        :key="tech"
      >
        <span class="text-xs">{{ tech }}</span>
        <span
          v-if="index < technologies.length - 1"
          class="font-heading font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight"
        >
          &VerticalLine;
        </span>
      </template>
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
  isActive: boolean;
}>();

const { t } = useI18n();
</script>

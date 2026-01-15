<template>
  <article
    class="flex flex-col experience-item-card p-1 border-t-2 border-primaryDark dark:border-primaryLight"
    :class="[
      isPointerDown && isMouse ? 'cursor-grabbing' : 'cursor-grab',
    ]"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @pointerleave="onPointerUp"
  >
    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-sepia dark:bg-primaryDark relative -top-6 -left-2">
      <div class="flex items-center justify-center w-6 h-6 rounded-full bg-primaryDark dark:bg-primaryLight">
        <div
          class="relative w-[18px] h-[18px] rounded-full z-10"
          :class="props.isActive ? 'bg-accentColor' : 'bg-sepia dark:bg-primaryDark'"
        />
      </div>
    </div>
    <span class="font-heading font-normal text-sm text-primaryDark dark:text-primaryLight mb-4">{{ t(props.workplaceType) }}</span>
    <span class="font-heading font-normal text-3xl md:text-4xl xl:text-[64px] text-primaryDark dark:text-primaryLight mb-5 lg:mb-10">{{ props.period }}</span>
    <h2 class="font-heading font-bold text-xl xl:text-3xl mb-5">
      {{ t(props.company) }} &ndash; {{ t(props.position) }}
    </h2>
    <div class="mb-5 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight">
      <h3 class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor">
        {{ t('experience.commonSubHeadings.project') }}:
      </h3>
      <div
        v-for="(description, index) in projectDescription"
        :key="description"
        class="inline-flex items-center"
      >
        <span class="font-body text-xs md:text-xl">{{ t(description) }}</span>
        <span
          v-if="index < projectDescription.length - 1"
          class="font-body font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight mx-2"
        >
          &VerticalLine;
        </span>
      </div>
    </div>

    <div
      class="mb-4 pr-6 lg:pr-16 xl:pr-24 2xl:pr-48"
    >
      <h3
        v-if="solvedTasks.length"
        class="font-heading font-normal text-sm md:text-xl text-primaryDarkAlpha50 dark:text-accentColor mb-2"
      >
        {{ t('experience.commonSubHeadings.performedTasks') }}
      </h3>
      <ul
        v-if="solvedTasks.length"
        class="font-body font-normal text-xs md:text-base text-primaryDark dark:text-primaryLight mb-4"
      >
        <li
          v-for="task in solvedTasks"
          :key="task"
          class="mb-2 last:mb-0"
        >
          • {{ t(task) }}
        </li>
      </ul>
    </div>

    <div class="mt-auto">
      <p class="flex flex-wrap items-center gap-2 mb-6 2xl:mb-6 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight pr-6 lg:pr-16 xl:pr-20 2xl:pr-48">
        <span class="font-heading font-normal text-sm md:text-base text-primaryDarkAlpha50 dark:text-accentColor">{{ t('experience.commonSubHeadings.techstack') }}:</span>
        <template
          v-for="(tech, index) in technologies"
          :key="tech"
        >
          <span class="text-xs md:text-base">{{ tech }}</span>
          <span
            v-if="index < technologies.length - 1"
            class="font-heading font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight"
          >
            &VerticalLine;
          </span>
        </template>
      </p>

      <p class="flex flex-wrap items-center gap-2 mb-6 2xl:mb-6 font-heading text-lg md:text-2xl text-primaryDark dark:text-primaryLight pr-6 lg:pr-16 xl:pr-20 2xl:pr-48">
        <span class="font-heading font-normal text-sm md:text-base text-primaryDarkAlpha50 dark:text-accentColor">{{ t('experience.commonSubHeadings.tools') }}:</span>
        <template
          v-for="(tool, index) in toolsUsed"
          :key="tool"
        >
          <span class="text-xs md:text-base">{{ tool }}</span>
          <span
            v-if="index < toolsUsed.length - 1"
            class="font-heading font-normal text-xs md:text-xl text-primaryDark dark:text-primaryLight"
          >
            &VerticalLine;
          </span>
        </template>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  workplaceType: string;
  company: string;
  position: string;
  period: number | string;
  projectDescription: string[];
  solvedTasks: string[];
  toolsUsed: string[];
  technologies: string[];
  isActive: boolean;
}>();

const { t } = useI18n();

const isPointerDown = ref(false);
const isMouse = ref(false);

const onPointerDown = (e: PointerEvent) => {
  isPointerDown.value = true;
  isMouse.value = e.pointerType === 'mouse';
};

const onPointerUp = () => {
  isPointerDown.value = false;
};
</script>

<template>
  <section class="relative overflow-hidden py-16 bg-sepia dark:bg-primaryDark">
    <div class="space-y-6">
      <!-- ROW 1 -->
      <div class="marquee marquee-left">
        <div class="marquee__inner">
          <SkillRow
            :items="row1"
            :divider="SkillRowDividerInk"
          />
          <SkillRow
            :items="row1"
            :divider="SkillRowDividerInk"
          />
        </div>
      </div>

      <!-- ROW 2 -->
      <div class="marquee marquee-right">
        <div class="marquee__inner">
          <SkillRow
            :items="row2"
            :divider="SkillRowDividerSkewedCylinder"
          />
          <SkillRow
            :items="row2"
            :divider="SkillRowDividerSkewedCylinder"
          />
        </div>
      </div>

      <!-- ROW 3 -->
      <div class="marquee marquee-left slow">
        <div class="marquee__inner">
          <SkillRow :items="row3" />
          <SkillRow :items="row3" />
        </div>
      </div>

      <!-- ROW 4 -->
      <div class="marquee marquee-right slow">
        <div class="marquee__inner">
          <SkillRow
            :items="row4"
            :divider="SkillRowDividerStar"
          />
          <SkillRow
            :items="row4"
            :divider="SkillRowDividerStar"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillRow from './SkillRow.vue';
import SkillRowDividerInk from './SkillRowDividerInk.vue';
import SkillRowDividerSkewedCylinder from './SkillRowDividerSkewedCylinder.vue';
import SkillRowDividerStar from './SkillRowDividerStar.vue';

const baseLight = 'text-primaryDark';
const baseDark = 'dark:text-primaryLight';

const row1 = [
  {
    label: 'HTML5',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    // divider: true,
  },
  {
    label: 'CSS3',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'SCSS',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'JavaScript',
    size: 'text-2xl',
    weight: 'font-bold',
    class: 'text-primaryDark/90 dark:text-primaryLight/90',
    // divider: true,
  },
  {
    label: 'Vue.js',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    divider: true,
  },
  {
    label: 'Nuxt.js',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'Vuex',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
];

const row2 = [
  {
    label: 'Pinia',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    divider: true,
  },
  {
    label: 'React',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'Redux',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'Vuetify',
    size: 'text-2xl',
    weight: 'font-bold',
    class: 'text-primaryDark/90 dark:text-primaryLight/90',
    // divider: true,
  },
  {
    label: 'Tailwind CSS',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    // divider: true,
  },
  {
    label: 'i18n',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'Webpack',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'Vite',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'NPM',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
];

// const row2 = [
//   { label: 'Nuxt.js', size: 'text-2xl', weight: 'font-bold', color: `${baseLight}/90 ${baseDark}/90` },
//   { label: 'Pinia', size: 'text-lg', weight: 'font-medium', color: `${baseLight}/60 ${baseDark}/60` },
//   { label: 'Vuex', size: 'text-base', weight: 'font-normal', color: `${baseLight}/50 ${baseDark}/50` },
//   { label: 'React', size: 'text-xl', weight: 'font-semibold', color: `${baseLight}/80 ${baseDark}/80` },
// ];

const row3 = [
  { label: 'Tailwind CSS', size: 'text-2xl', weight: 'font-bold', color: `${baseLight}/90 ${baseDark}/90` },
  { label: 'Vuetify', size: 'text-lg', weight: 'font-medium', color: `${baseLight}/60 ${baseDark}/60` },
  { label: 'i18n', size: 'text-base', weight: 'font-normal', color: `${baseLight}/50 ${baseDark}/50` },
];

// const row4 = [
//   { label: 'Node.js', size: 'text-xl', weight: 'font-semibold', color: `${baseLight}/80 ${baseDark}/80` },
//   { label: 'Express.js', size: 'text-lg', weight: 'font-medium', color: `${baseLight}/60 ${baseDark}/60` },
//   { label: 'Jest', size: 'text-base', weight: 'font-normal', color: `${baseLight}/50 ${baseDark}/50` },
//   { label: 'Accessibility (WCAG)', size: 'text-xl', weight: 'font-semibold', color: `${baseLight}/80 ${baseDark}/80` },
// ];

const row4 = [
  {
    label: 'VS Code',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'Figma',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'Postman',
    size: 'text-lg',
    weight: 'font-medium',
    class: 'text-primaryDark/60 dark:text-primaryLight/60',
  },
  {
    label: 'Jira',
    size: 'text-2xl',
    weight: 'font-bold',
    class: 'text-primaryDark/90 dark:text-primaryLight/90',
    divider: true,
  },
  {
    label: 'Bitbucket',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    // divider: true,
  },
  {
    label: 'Cross-browser Compatibility',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
  {
    label: 'Accessibility (WCAG)',
    size: 'text-xl',
    weight: 'font-semibold',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
  },
];
</script>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  width: 80%;
}

.marquee__inner {
  display: flex;
  width: max-content;
  animation: marquee-left 30s linear infinite;
}

.marquee-right .marquee__inner {
  animation-name: marquee-right;
}

.marquee.slow .marquee__inner {
  animation-duration: 45s;
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

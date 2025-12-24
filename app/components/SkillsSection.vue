<template>
  <section class="relative overflow-hidden py-16 bg-sepia dark:bg-primaryDark">
    <div class="space-y-6">
      <!-- ROW 1 -->
      <div class="relative overflow-hidden w-full marquee-left">
        <div class="marquee__inner">
          <SkillRow
            :items="row1"
            :divider="SkillRowDividerInk"
          />
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
      <div class="relative overflow-hidden w-full marquee-right">
        <div class="marquee__inner">
          <SkillRow
            :items="row2"
            :divider="SkillRowDividerSkewedCylinder"
          />
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
      <div class="relative overflow-hidden w-full marquee-left slow">
        <div class="marquee__inner">
          <SkillRow :items="row3" />
          <SkillRow :items="row3" />
          <SkillRow :items="row3" />
        </div>
      </div>

      <!-- ROW 4 -->
      <div class="relative overflow-hidden w-full marquee-right slow">
        <div class="marquee__inner">
          <SkillRow
            :items="row4"
            :divider="SkillRowDividerStar"
            :dividerClass="'text-primaryDark dark:!text-accentColor'"
          />
          <SkillRow
            :items="row4"
            :divider="SkillRowDividerStar"
            :dividerClass="'text-primaryDark dark:!text-accentColor'"
          />
          <SkillRow
            :items="row4"
            :divider="SkillRowDividerStar"
            :dividerClass="'text-primaryDark dark:!text-accentColor'"
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

const row1 = [
  {
    label: 'HTML5',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-sepiaAlpha46',
  },
  {
    label: 'CSS3',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'SCSS',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-primaryLightAlpha46',
  },
  {
    label: 'JavaScript',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Vue.js',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
    divider: true,
  },
  {
    label: 'Nuxt.js',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Vuex',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha50 dark:text-primaryLightAlpha50',
  },
];

const row2 = [
  {
    label: 'Pinia',
    size: 'text-[40px]',
    weight: 'font-normal',
    class: 'text-primaryDark/80 dark:text-primaryLight/80',
    // divider: true,
  },
  {
    label: 'React',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Redux',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Vuetify',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha50 dark:text-sepiaAlpha50',
  },
  {
    label: 'Tailwind CSS',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-primaryLightAlpha46',
  },
  {
    label: 'i18n',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Webpack',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Vite',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'NPM',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-primaryLightAlpha46',
    divider: true,
  },
];

const row3 = [
  {
    label: 'Node.js',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Express.js',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'RESTful API',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-sepiaAlpha46',
  },
  {
    label: 'Redis',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Jest',
    size: 'text-[64px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Testing Library',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Git',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Linux CLI',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
];

const row4 = [
  {
    label: 'VS Code',
    size: 'text-xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Figma',
    size: 'text-4xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Postman',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Jira',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha50 dark:text-primaryLightAlpha50',
  },
  {
    label: 'Bitbucket',
    size: 'text-[32px]',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-primaryLightAlpha46',
    divider: true,
  },
  {
    label: 'Cross-browser Compatibility',
    size: 'text-2xl',
    weight: 'font-normal',
    class: 'text-primaryDark dark:text-sepia',
  },
  {
    label: 'Accessibility (WCAG)',
    size: 'text-5xl',
    weight: 'font-normal',
    class: 'text-primaryDarkAlpha46 dark:text-primaryLightAlpha46',
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

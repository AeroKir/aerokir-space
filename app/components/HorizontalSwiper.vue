<template>
  <Swiper
    :modules="[FreeMode, Mousewheel]"
    :slidesPerView="'auto'"
    :spaceBetween="16"
    :mousewheel="true"
    :freeMode="{
      enabled: true,
      momentumBounce: true,
      momentumRatio: 0.8,
    }"
    direction="horizontal"
    class="horizontal-swiper w-screen overflow-visible"
  >
    <SwiperSlide
      v-for="exp in experience"
      :key="exp.id"
      class="slide-item !w-[698px] h-auto flex items-center justify-center text-5xl font-bold"
    >
      <ExperienceItemCard
        :workplaceType="exp.workplaceType"
        :company="exp.company"
        :position="exp.position"
        :period="exp.period"
        :projectDescription="exp.projectDescription"
        :solvedTasks="exp.solvedTasks"
        :toolsUsed="exp.toolsUsed"
        :technologies="exp.technologies"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const { experience } = useAppConfig() as {
  experience: {
    id: number | string;
    workplaceType: string;
    company: string;
    position: string;
    period: number | string;
    projectDescription: string;
    solvedTasks: string[];
    toolsUsed: string[];
    technologies: string[];
  }[];
};
</script>

<style scoped>
.horizontal-swiper {
  /* дозволяє вертикальний скрол сторінки */
  touch-action: pan-y;
}

.slide-item {
  /* SwiperSlide генерує display:flex → override не потрібний */
}
</style>

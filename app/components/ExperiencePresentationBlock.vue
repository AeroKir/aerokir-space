<template>
  <div class="relative w-full mx-auto">
    <div class="left-panel xl:block hidden fixed top-0 left-0 w-[240px] h-screen z-10 xl:bg-sepia/30 xl:dark:bg-primaryDark/30 xl:backdrop-blur-md" />

    <!-- Swiper -->
    <div class="swiper-shift-wrapper relative">
      <MouseIcon class="hidden xl:block absolute top-40 left-1/2 translate-x-1/2 w-[120px] h-[120px] fill-none stroke-primaryDark dark:stroke-primaryLight" />
      <Swiper
        :modules="[FreeMode, Mousewheel]"
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :mousewheel="{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 0.6,
        }"
        :freeMode="{
          enabled: true,
          sticky: false,
          momentum: true,
          momentumBounce: false,
        }"
        direction="horizontal"
        class="horizontal-swiper"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(exp, index) in experience"
          :key="exp.id"
          class=""
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
            :isActive="activeIndex === index"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import MouseIcon from '~/assets/icons/mouse.svg';

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

const activeIndex = ref(0);
const swiperRef = ref<any>(null);

const onSwiperInit = (swiper: any) => {
  swiperRef.value = swiper;

  requestAnimationFrame(() => {
    swiper.update();
  });
};

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped>
.horizontal-swiper {
  width: 100vw;
  overflow: visible;
  padding-right: calc(100vw - 698px);
  touch-action: pan-y;
}

@media (max-width: 1440px) {
  .horizontal-swiper { padding-right: calc(100vw - 560px); }
}
@media (max-width: 1024px) {
  .horizontal-swiper { padding-right: calc(100vw - 500px); }
}
@media (max-width: 768px) {
  .horizontal-swiper { padding-right: calc(100vw - 400px); }
}
@media (max-width: 480px) {
  .horizontal-swiper { padding-right: calc(100vw - 280px); }
}

.swiper-shift-wrapper {
  width: 100%;
  position: relative;
  z-index: 1;
}
@media (min-width: 1280px) {
  .swiper-shift-wrapper {
    margin-left: 70px;
  }
}

/* Slide card */
.swiper-slide {
  width: 300px;
}

@media (min-width: 480px) {
  .swiper-slide { width: 320px; }
}
@media (min-width: 768px) {
  .swiper-slide { width: 550px; }
}
@media (min-width: 1024px) {
  .swiper-slide { width: 700px; }
}
@media (min-width: 1280px) {
  .swiper-slide { width: 800px; }
}
@media (min-width: 1536px) {
  .swiper-slide { width: 900px; }
}
</style>

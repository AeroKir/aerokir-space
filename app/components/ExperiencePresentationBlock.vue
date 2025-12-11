<template>
  <div class="relative w-full mx-auto">
    <!-- <div class="hidden xl:block w-[25%] h-[2px] bg-primaryDarkAlpha30 absolute -left-[25%] z-20"></div> -->
    <div class="left-panel xl:block hidden fixed top-0 left-0 w-[240px] h-screen z-10 xl:bg-sepia/30 xl:dark:bg-primaryDark/30 xl:backdrop-blur-md"></div>

    <!-- Swiper -->
    <div class="swiper-shift-wrapper">
      <Swiper
        :modules="[FreeMode, Mousewheel]"
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :mousewheel="true"
        :freeMode="{
          enabled: true,
          sticky: false,
          momentum: true,
          momentumBounce: false,
        }"
        centeredSlides="true"
        direction="horizontal"
        class="horizontal-swiper"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(exp, index) in experience"
          :key="exp.id"
          class="slide-item"
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
};

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped>
/* ---------------- Timeline ---------------- */

.timeline-container {
  position: relative;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;
}

.timeline-line {
  height: 2px;
  width: 100%;
  background: #ddd;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
}

.timeline-dots {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #bbb;
  cursor: pointer;
  transition: 0.25s ease;
}

.dot.active {
  background: orange;
  transform: scale(1.25);
}

/* ---------------- Swiper Fixes ---------------- */

.horizontal-swiper {
  width: 100vw;
  overflow: visible;
  /* найважливіше — щоб останній слайд був повністю видимим */
  padding-right: calc(100vw - 698px);
}

/* адаптація під брейкпоінти */
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
    margin-left: 70px; /* ← змістити на ширину твого меню */
  }
}

/* важливо для правильного горизонтального скролу */
.horizontal-swiper .swiper-wrapper {
  width: auto !important;
  display: inline-flex !important;
  transform: translate3d(0, 0, 0) !important;
}

.swiper-slide {
  flex-shrink: 0 !important;
}

/* сайд-картка */
.slide-item {
  width: 280px;
}

@media (min-width: 480px) {
  .slide-item { width: 320px; }
}
@media (min-width: 768px) {
  .slide-item { width: 420px; }
}
@media (min-width: 1024px) {
  .slide-item { width: 560px; }
}
@media (min-width: 1280px) {
  .slide-item { width: 698px; }
}

/* щоб вертикальний скрол працював */
.horizontal-swiper {
  touch-action: pan-y;
}
</style>

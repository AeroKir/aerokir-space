<template>
  <div class="relative w-full mx-auto pb-6">
    <!-- TIMELINE -->
    <div class="timeline">
      <div class="timeline-line" />

      <div class="timeline-dots">
        <div
          v-for="(item, index) in experience"
          :key="item.id"
          class="dot"
          :class="{ active: activeIndex === index }"
          @click="goTo(index)"
        />
      </div>
    </div>

    <!-- SWIPER -->
    <Swiper
      :modules="[FreeMode, Mousewheel]"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      :mousewheel="true"
      :freeMode="{
        enabled: true,
        momentumBounce: true,
        momentumRatio: 0.8,
      }"
      direction="horizontal"
      class="horizontal-swiper w-screen overflow-visible"
      @swiper="onSwiperInit"
      @setTranslate="onMove"
      @touchMove="onMove"
      @scroll="onMove"
    >
      <SwiperSlide
        v-for="exp in experience"
        :key="exp.id"
        class="slide-item !w-[280px] sm:!w-[320px] md:!w-[420px] lg:!w-[560px] xl:!w-[698px]"
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
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const { experience } = useAppConfig();

const activeIndex = ref(0);
const swiperRef = ref<any>(null);

const onSwiperInit = (swiper: any) => {
  swiperRef.value = swiper;
};

const onMove = () => {
  const swiper = swiperRef.value;
  if (!swiper) return;

  const translate = Math.abs(swiper.translate); // поточний скрол
  const slides = swiper.slides; // всі слайди
  const viewportCenter = window.innerWidth / 2; // центр екрану

  let closestIndex = 0;
  let closestDistance = Infinity;

  slides.forEach((slide: HTMLElement, index: number) => {
    const slideWidth = slide.offsetWidth;
    const slideStart = slide.offsetLeft; // ✔ стабільно працює
    const slideCenter = slideStart + slideWidth / 2;

    const distance = Math.abs(slideCenter - translate - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  activeIndex.value = closestIndex;
};

const goTo = (index: number) => {
  swiperRef.value?.slideTo(index, 400);
};
</script>

<style scoped>
.horizontal-swiper {
  touch-action: pan-y;
}

.timeline {
  position: relative;
  width: 100%;
  padding: 10px 0 25px;
}

.timeline-line {
  height: 2px;
  width: 100%;
  background: #ddd;
  position: absolute;
  top: 50%;
  left: 0;
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
  transition: 0.25s;
}

.dot.active {
  background: orange;
  transform: scale(1.25);
}
</style>

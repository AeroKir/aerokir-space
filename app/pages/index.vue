<script setup lang="ts">
// import AppHeader from '~/components/AppHeader.vue';
// import PerspectiveGrid from '~/components/PerspectiveGrid.vue';

const runtimeConfig = useRuntimeConfig();
const colors = ['#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185'];
const color = useState('color', () => colors[Math.floor(Math.random() * colors.length)]);
const { t } = useI18n();
</script>

<template>
  <div class="h-screen w-screen bg-sepia dark:bg-primaryDark text-primaryDark dark:text-white relative overflow-x-hidden pt-[312px]">
    <AppHeader />
    <!-- <NuxtLink
      to="https://aerokir.github.io/portfolio/"
      external
    >Prev portfolio</NuxtLink> -->

    <!-- <div class="relative w-full h-screen overflow-hidden">
      <div class="perspective-grid" />
    </div> -->
    <!-- <PerspectiveGrid /> -->
    <PerspectiveGrid
      position="top"
      :height="490"
    />
    <h1
      class="centered text-primaryDark dark:text-accentColor font-heading font-bold text-[200px]"
    >
      {{ runtimeConfig.public.helloText }}
    </h1>
    <!-- <p class="h-[500px] bg-sepia dark:bg-primaryDark text-primaryDark dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt obcaecati minus magnam autem fugit natus rem ut rerum quasi repellendus distinctio voluptatum dolores quisquam dignissimos, praesentium veritatis, mollitia beatae! Saepe.</p> -->
    <p
      class="w-1/2 m-auto text-center"
    >
      {{ t('introduce.para1') }}
      {{ t('introduce.para2') }}
    </p>
    <!-- <PerspectiveGrid
      position="bottom"
      :height="200"
      customClass="bg-sepia dark:bg-primaryDark"
    /> -->
    <SkillsSection />
    <AppFooter />
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 50%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}
h1 {
  font-size: 32px;
}
@media (min-width: 768px) {
  h1 {
    font-size: 64px;
  }
}
a {
  color: #888;
  text-decoration: none;
  font-size: 18px;
}
a:hover {
  text-decoration: underline;
}

.perspective-grid {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(to right, rgba(0,0,0,0.5) 0 1px, transparent 1px 100px),
    repeating-linear-gradient(to bottom, rgba(0,0,0,0.5) 0 1px, transparent 1px 100px);
  transform: perspective(600px) rotateX(60deg);
  animation: moveGrid 3s linear infinite;
}

@keyframes moveGrid {
  from {
    background-position: 0 0, 0 0;
  }
  to {
    background-position: 0 100px, 0 100px;
  }
}
</style>

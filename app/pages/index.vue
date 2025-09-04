<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const colors = ['#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185'];
const color = useState('color', () => colors[Math.floor(Math.random() * colors.length)]);
const { t } = useI18n();
</script>

<template>
  <div class="h-screen bg-sepia dark:bg-primaryDark text-primaryDark dark:text-white">
    <ThemeSwitcher />
    <LangSwitcher />
    <!-- <NuxtLink
      to="https://aerokir.github.io/portfolio/"
      external
    >Prev portfolio</NuxtLink> -->
    <h1
      class="centered text-primaryDark dark:text-accentColor font-heading font-bold font-size-[200px]"
    >
      {{ runtimeConfig.public.helloText }}
    </h1>
    <div
      class="centered"
      style="top: 65%; transform: translate(-50%, -50%)"
    >
      {{ t('introduce.para1') }}
      {{ t('introduce.para2') }}
    </div>
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
</style>

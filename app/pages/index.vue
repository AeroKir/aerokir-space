<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const colors = ['#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185'];
const color = useState('color', () => colors[Math.floor(Math.random() * colors.length)]);
const { t } = useI18n();
</script>

<template>
  <div class="h-screen bg-primaryDark">
    <h1
      class="centered text-accentColor font-heading font-bold font-size-[200px]"
    >
      {{ runtimeConfig.public.helloText }}
    </h1>
    <div
      class="centered"
      style="top: 65%; transform: translate(-50%, -50%)"
    >
      Frontend Developer with over 6 years of experience creating web applications and websites of different complexities. Skilled in building cross-browser, responsive, and accessible interfaces using modern JavaScript frameworks.

      Familiar with UI/UX best practices, performance optimization, and maintaining clean, scalable code. Comfortable working independently or as part of a distributed team, with a practical approach to solving problems. Looking for a long-term, full-time remote role to contribute to meaningful projects and continue growing professionally.
    </div>
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 100%;
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

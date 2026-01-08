<template>
  <svg
    class="signature w-[60px] 2xl:w-[200px] h-auto text-primaryDark dark:text-accentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 25"
    aria-label="Kyrylo signature logo"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
    >
      <path
        class="signature-path"
        d="M18.502244 1026.91s-15.4423189 5.0325-15.2653448 12.2042c.1886062 7.6426 12.1356638 14.7036 15.0037758 8.7661 2.734847-5.6616-18.720595-6.5133.462827-14.2248"
        transform="matrix(1.02302 0 0 .95112 -.7122262 -975.269035)"
      />
      <path
        class="signature-path"
        d="M2.1465742 1027.0045v23.1989"
        transform="matrix(1.02302 0 0 .95112 -.7122262 -975.269035)"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
onMounted(() => {
  document.body.classList.add('loaded');
});
</script>

<style scoped>
.signature {
  /* width: 280px;
  height: auto;
  color: currentColor; */
}

.signature-path {
  stroke-width: 3;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-signature 33.2s ease-out forwards;
  animation-play-state: paused;
}

.signature-path:nth-child(2) {
  animation-delay: 0.3s;
}

body.loaded .signature-path {
  animation-play-state: running;
}

@keyframes draw-signature {
  to {
    stroke-dashoffset: 0;
  }
}
</style>

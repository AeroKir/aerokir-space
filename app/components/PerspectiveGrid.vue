<template>
  <div class="fixed inset-0 z-[-999] bg-sepia dark:bg-primaryDark">
    <canvas
      ref="canvas"
      class="w-full h-full"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext('2d')!;
  let width = (canvas.value.width = window.innerWidth);
  let height = (canvas.value.height = window.innerHeight);

  const horizon = height * 0.4; // вище середини
  const vanishingX = width / 2;

  let frame = 0;
  let animationFrame: number;

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
    ctx.lineWidth = 1;

    // Горизонтальні лінії (перспектива)
    for (let i = 1; i < 200; i++) {
      const depth = i + (frame * 0.05) % 1; // рух вперед
      const scale = 1 / depth; // перспектива
      const y = horizon + (height - horizon) * scale;

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Вертикальні лінії
    for (let i = -20; i <= 20; i++) {
      const spacing = 200; // базовий відступ
      ctx.beginPath();
      ctx.moveTo(vanishingX + i * spacing, horizon);

      // нижня точка з урахуванням перспективи
      ctx.lineTo(
        width / 2 + i * spacing * 3, // розширення вниз
        height,
      );
      ctx.stroke();
    }
  }

  function animate() {
    frame++;
    drawGrid();
    animationFrame = requestAnimationFrame(animate);
  }

  animate();

  const handleResize = () => {
    width = canvas.value!.width = window.innerWidth;
    height = canvas.value!.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', handleResize);
  });
});
</script>

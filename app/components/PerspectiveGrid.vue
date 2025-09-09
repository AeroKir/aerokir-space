<template>
  <div
    class="relative w-full overflow-hidden"
    :style="{ height: `${height}px` }"
    :class="customClass"
  >
    <canvas
      ref="canvas"
      class="w-full h-full"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, watch } from 'vue';

const props = defineProps<{
  height?: number;
  position?: 'top' | 'bottom';
  colorLight?: string;
  colorDark?: string;
  customClass?: string;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
const colorMode = useColorMode();
const currentColor = ref(props.colorLight || 'rgba(0,0,0,0.4)');

function updateColor() {
  currentColor.value
    = colorMode.value === 'dark'
      ? props.colorDark || 'rgba(255, 255, 255, 0.25)'
      : props.colorLight || 'rgba(34, 38, 75, 0.25)';
}

onMounted(() => {
  if (!import.meta.client || !canvas.value) return;

  updateColor();

  const ctx = canvas.value.getContext('2d')!;
  let width = (canvas.value.width = window.innerWidth);
  let height = (canvas.value.height = props.height || 490);

  const vanishingX = () => width / 2;
  const horizon = () =>
    props.position === 'top' ? height * 0.85 : height * 0.15;

  let frame = 0;
  let animationFrame: number;

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = currentColor.value;
    ctx.lineWidth = 1;

    // horizontal lines
    for (let i = 1; i < 20; i++) {
      const depth = i + (frame * 0.015) % 1;
      const scale = 1 / depth;
      let y;

      if (props.position === 'bottom') {
        y = height * 0.1 + (height - horizon()) * scale;
      } else {
        y = height * 0.9 - height * scale;
      }

      if (y > 0 && y < height) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    // vertical lines
    const spacing = Math.max(width / 20, 50);
    for (let i = -20; i <= 20; i++) {
      ctx.beginPath();
      ctx.moveTo(vanishingX() + i * spacing, horizon());

      if (props.position === 'bottom') {
        ctx.lineTo(width / 2 + i * spacing * 3, height);
      } else {
        ctx.lineTo(width / 2 + i * spacing * 3, 0);
      }
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
    height = canvas.value!.height = props.height || 490;
  };
  window.addEventListener('resize', handleResize);

  // watch for theme changes
  watch(
    () => colorMode.value,
    () => updateColor(),
  );

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', handleResize);
  });
});
</script>

export function useIsMobile(breakpoint = 1280) {
  const isMobile = ref(false);

  const check = () => {
    isMobile.value = window.innerWidth < breakpoint;
  };

  onMounted(() => {
    check();
    window.addEventListener('resize', check, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', check);
  });

  return {
    isMobile,
  };
}

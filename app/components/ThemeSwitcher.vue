<template>
  <button
    class="w-8 h-8 mr-1 relative"
    @click="toggleTheme"
  >
    <IconSun
      v-if="colorMode.value === 'dark'"
      class="w-6 h-6 text-accentColor"
    />
    <IconCrescent
      v-else
      class="w-8 h-8 text-primaryDark pt-2 pl-2"
    />
  </button>
</template>

<script setup lang="ts">
import IconCrescent from '../assets/icons/crescent-moon.svg';
import IconSun from '../assets/icons/sun.svg';
// import IconSun from '../assets/icons/coffee-cup.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>

</style>

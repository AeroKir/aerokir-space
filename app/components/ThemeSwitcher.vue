<template>
  <button
    class=""
    @click="toggleTheme"
  >
    <IconCrescent
      v-if="colorMode.value === 'dark'"
      class="w-8 h-8 text-primaryLight"
    />
    <IconSun
      v-else
      class="w-8 h-8 text-accentColor"
    />
  </button>
</template>

<script setup lang="ts">
import IconCrescent from '../assets/icons/crescent-moon.svg';
import IconSun from '../assets/icons/sun.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>

</style>

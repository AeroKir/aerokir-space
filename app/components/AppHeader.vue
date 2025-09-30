<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-end items-start gap-4 px-20 pt-20 pb-12"
    :class="headerClass"
  >
    <AppMenu />
    <div class="flex items-center">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
type Props = {
  headerClass?: string | object;
};

withDefaults(defineProps<Props>(), {
  headerClass: '',
});
</script>

<template>
  <div
    class="bg-sepia dark:bg-primaryDark flex min-h-screen flex-col overflow-x-hidden h-full flex-1 pt-[312px]"
    :class="contentClass"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
type Props = {
  contentClass?: string | object;
  title?: string;
};

withDefaults(defineProps<Props>(), {
  contentClass: '',
});
</script>

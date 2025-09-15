<template>
  <Page>
    <AppHeader />
    <main class="h-screen w-screen text-primaryDark dark:text-white relative">
      <HeadingPage
        :title="$t('pages.projects.title')"
        :isDot="true"
      />
      <IconPyramidVertical
        class="w-[343px] h-[343px] absolute top-8 right-8 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconPyramidVertical from '../../assets/icons/pyramid-vertical.svg';
</script>

<style scoped>

</style>

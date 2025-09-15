<template>
  <Page>
    <AppHeader />
    <main class="h-screen w-screen text-primaryDark dark:text-white relative">
      <HeadingPage
        :title="$t('pages.education.title')"
        :isDot="true"
      />
      <IconAtom
        class="w-[486px] h-[486px] absolute top-8 right-8 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconAtom from '../../assets/icons/atom.svg';
</script>

<style scoped>

</style>

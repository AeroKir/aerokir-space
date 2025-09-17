<template>
  <Page>
    <AppHeader />
    <main class="h-screen w-screen ml-[407px] text-primaryDark dark:text-white relative">
      <HeadingPage
        :title="$t('pages.experience.title')"
        :isDot="true"
      />
      <IconSunrise
        class="w-[417px] h-[417px] absolute -top-[155px] right-1/2 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconSunrise from '../../assets/icons/sunrise.svg';
</script>

<style scoped>

</style>

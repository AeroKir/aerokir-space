<template>
  <Page>
    <AppHeader />
    <main class="h-full mx-auto xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 2xl:mr-[265px] md:-top-10 text-primaryDark dark:text-primaryLight relative xl:z-0 px-2 md:px-8 lg:px-20 xl:px-0">
      <div class="relative max-w-[1040px] h-auto left-1/2 -translate-x-1/2 lg:pb-[70px]">
        <HeadingPage
          :title="$t('pages.experience.title')"
          :isDot="true"
          customClass="ml-[0] md:-ml-[10px] xl:ml-0 3xl:ml-0 mb-4 md:mb-[100px] pt-6 md:mt-12 lg:mt-0 lg:pt-0"
        >
          <IconSunrise
            class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[343px] lg:h-[343px] xl:w-[250px] xl:h-[250px] 2xl:w-[343px] 2xl:h-[343px] absolute top-1 md:top-6 lg:-top-12 xl:-top-1 2xl:top-[23px] -right-[80px] md:-right-[105px] lg:-right-[185px] xl:-right-[120px] 2xl:-right-[185px] text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
          />
        </HeadingPage>
      </div>

      <!-- <div class="relative w-screen overflow-hidden flex flex-nowrap gap-4 justify-center md:justify-start mb-20">
        <div class="w-[698px] h-auto py-96 bg-slate-500">1</div>
        <div class="w-[698px] h-auto py-96 bg-slate-500">2</div>
        <div class="w-[698px] h-auto py-96 bg-slate-500">3</div>
        <div class="w-[698px] h-auto py-96 bg-slate-500">4</div>
        <div class="w-[698px] h-auto py-96 bg-slate-500">5</div>
      </div> -->

      <HorizontalSwiper />
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconSunrise from '../../assets/icons/sunrise.svg';
</script>

<style scoped>

</style>

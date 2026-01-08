<template>
  <Page contentClass="xl:!pt-0">
    <AppHeader />
    <PerspectiveGrid
      position="top"
      :height="isMobile ? 290 : 490"
    />
    <main class="h-screen mx-auto xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 2xl:mr-[265px] -top-[300px] xl:-top-[520px] text-primaryDark dark:text-primaryLight relative xl:z-0 px-2 md:px-8 lg:px-20 xl:px-0 mb-28 xl:mb-0">
      <HeadingPage
        :title="runtimeConfig.public.helloText"
        customClass="ml-[0] md:-ml-[10px] xl:ml-[60px] 3xl:ml-0 mb-12 md:mb-[150px] pt-6 md:mt-12 lg:mt-0 lg:pt-0 text-center"
      />
      <div class="relative">
        <div class="relative w-fit">
          <IconTriangles class="absolute z-10 -top-6 -right-6 2xl:-top-9 2xl:-right-12 w-[60px] h-[60px] 2xl:w-[120px] 2xl:h-[120px] text-primaryDark dark:text-accentColor" />
          <AvatarImage />
          <IconPyramid class="absolute z-10 -bottom-70 right-1/2 translate-x-1/2 w-[250px] h-[250px] text-primaryDark dark:text-primaryLight" />
        </div>

        <div class="signature-wrap absolute z-10 top-[35vh] right-2 2xl:top-4 2xl:right-80 -rotate-[9deg]">
          <Signature />
        </div>

        <div class="relative z-20 max-w-[780px] ml-auto 2xl:-mt-96 font-body text-lg md:text-xl lg:text-2xl font-normal">
          <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">{{ t('pages.about.heroText.term1') }}</p>
          <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">{{ t('pages.about.heroText.term2') }}</p>
          <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000]">{{ t('pages.about.heroText.term3') }}</p>
        </div>
      </div>
    </main>

    <SkillsSection />
    <AppFooter>
      <AppFooterInternalLink
        :to="'/experience'"
        :label="$t('footerLinks.toExperience')"
      />
    </AppFooter>
  </Page>
</template>

<script setup lang="ts">
import IconTriangles from '~/assets/icons/triangles.svg';
import IconPyramid from '~/assets/icons/pyramid-3d.svg';

const runtimeConfig = useRuntimeConfig();

const { t } = useI18n();
const { isMobile } = useIsMobile();
</script>

<style scoped>
.signature-wrap {
  /* width: 160px;
  display: inline-block;
  margin-bottom: 24px;
  opacity: 0;
  animation: fade-in 0.6s ease forwards;
  animation-delay: 0.1s; */
}

@keyframes fade-in {
  /* to {
    opacity: 1;
  } */
}
</style>

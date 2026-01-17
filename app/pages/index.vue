<template>
  <Page contentClass="lg:!pt-24 xl:!pt-50 2xl:!pt-16 3xl:!pt-0">
    <AppHeader />
    <PerspectiveGrid
      position="top"
      :height="isMobile ? 290 : 490"
      customClass="!absolute top-0 left-0"
    />
    <main class="">
      <section class="mx-auto xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 2xl:mr-[225px] 3xl:mr-[265px] xl:-top-[20px] 2xl:-top-0 text-primaryDark dark:text-primaryLight relative xl:z-0 px-2 md:px-8 lg:px-20 xl:px-0 mb-6 2xl:mb-20">
        <HeadingPage
          :title="t('pages.about.title')"
          customClass="w-full justify-center ml-[0] md:-ml-[10px] xl:ml-[60px] 3xl:ml-0 mb-12 md:mb-16 xl:mb-32 3xl:mb-16 pt-6 md:pt-0 md:mt-0 lg:mt-0 lg:pt-0 !text-center !text-6xl md:!text-8xl xl:!text-[106px] 2xl:!text-[132px] 3xl:!text-[180px]/[300px] !mx-auto"
        />
        <div class="relative">
          <div class="relative w-fit mx-auto mr-3 md:mr-0 md:!mx-auto xl:!mx-0 xl:!ml-20 2xl:mx-0 2xl:!ml-0">
            <IconTriangles class="absolute z-10 -top-6 -right-6 md:-top-7 md:-right-7 lg:-top-10 lg:-right-9 xl:-top-7 xl:-right-10 2xl:-top-9 2xl:-right-12 w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[120px] 2xl:h-[120px] text-primaryDark dark:text-accentColor" />
            <AvatarImage />
            <IconPyramid class="absolute z-10 -bottom-70 right-1/2 translate-x-1/2 w-[250px] h-[250px] text-primaryDarkAlpha25 dark:text-primaryLightAlpha25 2xl:text-primaryDark dark:2xl:text-primaryLight" />
          </div>

          <div class="signature-wrap hidden xl:block absolute z-10 top-[35vh] right-2 xl:right-12 xl:top-[10vh] 2xl:right-[100px] 2xl:top-4 3xl:right-80 -rotate-[9deg]">
            <Signature />
          </div>

          <div class="relative z-20 w-full lg:max-w-[80vw] xl:max-w-[50vw] 2xl:max-w-[39vw] 3xl:max-w-[780px] ml-auto xl:-mt-60 2xl:-mt-[374px] 3xl:-mt-96 font-body text-lg md:text-xl lg:text-2xl font-normal">
            <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">
              {{ t('pages.about.heroText.term1') }}
            </p>
            <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">
              {{ t('pages.about.heroText.term2') }}
            </p>
            <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000]">
              {{ t('pages.about.heroText.term3') }}
            </p>
          </div>
        </div>
      </section>
      <SkillsSection />
    </main>

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

const { t, locale } = useI18n();
const { isMobile } = useIsMobile();

useOgMeta({
  title: t('pages.about.metadata.title'),
  description: t('pages.about.metadata.description'),
  image: `/og/og-img-home-${locale.value}.png`,
});
</script>

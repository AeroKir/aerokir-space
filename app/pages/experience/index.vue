<template>
  <Page>
    <AppHeader />
    <main class="h-full mx-auto xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 2xl:mr-[265px] md:-top-10 text-primaryDark dark:text-primaryLight relative xl:z-0 px-2 md:px-8 lg:px-20 xl:px-0">
      <div class="relative max-w-[1040px] h-auto left-1/2 -translate-x-1/2 lg:pb-[20px]">
        <HeadingPage
          :title="$t('pages.experience.title')"
          :isDot="true"
          customClass="ml-[0] md:-ml-[10px] xl:ml-[60px] 3xl:ml-0 mb-12 md:mb-[80px] pt-6 md:mt-12 lg:mt-0 lg:pt-0"
        >
          <IconSunrise
            class="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[343px] lg:h-[343px] xl:w-[343px] xl:h-[343px] 2xl:w-[417px] 2xl:h-[417px] absolute -top-8 md:-top-14 lg:-top-32 xl:-top-32 2xl:-top-[118px] -right-6 md:-right-14 lg:-right-20 xl:-right-20 2xl:-right-24 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
          />
        </HeadingPage>
      </div>
      <ExperiencePresentationBlock />
    </main>
    <AppFooter>
      <AppFooterInternalLink
        :to="'/projects'"
        :label="$t('footerLinks.toProjects')"
      />
    </AppFooter>
  </Page>
</template>

<script setup lang="ts">
import IconSunrise from '~/assets/icons/sunrise.svg';

const { t, locale } = useI18n();

useOgMeta({
  title: t('pages.experience.metadata.title'),
  description: t('pages.experience.metadata.description'),
  image: `/og/og-img-experience-${locale.value}.png`,
});
</script>

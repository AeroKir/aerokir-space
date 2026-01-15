<template>
  <Page contentClass="lg:!pt-24 xl:!pt-50 2xl:!pt-16 3xl:!pt-0">
    <AppHeader />
    <main class="h-full mx-auto max-w-[652px] xl:ml-[230px] xl:mr-[230px] 2xl:ml-[283px] 3xl:ml-[407px] 2xl:mr-[265px] text-primaryDark dark:text-primaryLight relative xl:z-0 px-2 md:px-8 lg:px-20 xl:px-0 pt-5 md:pt-20">
      <div class="relative max-w-[1040px] h-auto left-1/2 -translate-x-1/2 lg:pb-[20px]">
        <HeadingPage
          :title="$t('pages.contact.title')"
          :isDot="true"
          customClass="ml-[0] md:-ml-[10px] xl:ml-0 3xl:ml-0 mb-12 md:mb-[80px] pt-6 md:mt-12 lg:mt-0 lg:pt-0"
        >
          <IconSmile
            class="w-[100px] h-[100px] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px] 2xl:w-[300px] 2xl:h-[300px] absolute -top-7 md:-top-[105px] lg:-top-[132px] xl:-top-34 2xl:-top-[110px] -right-6 md:-right-20 lg:-right-16 xl:-right-22 2xl:-right-20 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
          />
        </HeadingPage>
      </div>

      <div class="font-bold font-body text-lg md:text-xl mb-10">
        <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">
          {{ t('pages.contact.contactText.term1') }}
        </p>
        <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000] mb-4">
          {{ t('pages.contact.contactText.term2') }}
        </p>
        <p class="[text-shadow:0_1px_1px_#9DA3A4] dark:[text-shadow:0_2px_3px_#000000]">
          {{ t('pages.contact.contactText.term3') }}
        </p>
      </div>

      <ul>
        <li
          v-for="social in socials"
          :key="social.label"
          class="font-heading text-2xl mb-2 flex items-center gap-2"
        >
          <component
            :is="icons[social.icon]"
            class="w-6 h-6 text-primaryDark dark:text-primaryLight"
          />
          <a
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline text-primaryDark dark:text-primaryLight transition-colors duration-100"
          >
            {{ social.display }}
          </a>
        </li>
      </ul>
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconSmile from '~/assets/icons/smile.svg';

import EmailIcon from '~/assets/icons/email.svg';
import TelegramIcon from '~/assets/icons/telegram.svg';
import WhatsAppIcon from '~/assets/icons/whatsapp.svg';
import PhoneIcon from '~/assets/icons/phone.svg';
import GithubIcon from '~/assets/icons/github.svg';
import LinkedinIcon from '~/assets/icons/linkedin.svg';

const { socials } = useAppConfig() as {
  profile: { phone: string; email: string };
  socials: {
    label: string;
    href: string;
    icon: string;
    display: string;
  }[];
};

const icons: Record<string, any> = {
  email: EmailIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
  phone: PhoneIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const { t } = useI18n();

useOgMeta({
  titleKey: 'pages.contact.metadata.title',
  descriptionKey: 'pages.contact.metadata.description',
});
</script>

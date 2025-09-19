<template>
  <Page contentClass="!pt-0">
    <AppHeader />
    <main class="h-auto w-[652px] ml-[407px] text-primaryDark dark:text-accentColor relative -bottom-[315px] z-10">
      <IconSmile
        class="w-[243px] h-[243px] absolute -top-[75px] right-32 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
      <HeadingPage
        :title="$t('pages.contact.title')"
        :isDot="true"
      />
      <p class="font-body font-bold text-xl text-primaryDark dark:text-primaryLight mb-10">
        Are you interested in me as a person, or do you want to do a project? Let's stay in touch.
      </p>

      <ul>
        <li
          v-for="social in socials"
          :key="social.label"
          class="font-heading text-xl mb-2 flex items-center gap-2"
        >
          <component
            :is="icons[social.icon]"
            class="w-6 h-6 text-primaryDark dark:text-primaryLight"
          />
          <a
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline text-primaryDark dark:text-primaryLight"
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
import IconSmile from '../../assets/icons/smile.svg';

import EmailIcon from '~/assets/icons/email.svg';
import TelegramIcon from '~/assets/icons/telegram.svg';
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
  phone: PhoneIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};
</script>

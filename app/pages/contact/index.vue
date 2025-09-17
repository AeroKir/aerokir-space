<template>
  <Page contentClass="!pt-0">
    <AppHeader />
    <main class="h-auto w-[652px] ml-[407px] text-primaryDark dark:text-accentColor relative -bottom-[275px] z-10">
      <IconSmile
        class="w-[243px] h-[243px] absolute -top-[65px] right-32 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
      <HeadingPage
        :title="$t('pages.contact.title')"
        :isDot="true"
      />
      <p class="font-body font-bold text-xl text-primaryDark dark:text-primaryLight mb-10">
        Are you interested in me as a person, or do you want to do a project? Let's stay in touch.
      </p>
      <ul>
        <li class="font-heading text-xl mb-1">
          Email: <a href="mailto:shev.kv.1982@gmail.com">shev.kv.1982@gmail.com</a>
        </li>
        <li class="font-heading text-xl mb-1">
          Telegram: <a
            :href="socials.telegram"
            target="_blank"
            rel="noopener noreferrer"
          >@Kirill_Shevtsov</a>
        </li>
        <li class="font-heading text-xl mb-1">
          Phone: <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a>
        </li>
        <li class="font-heading text-xl mb-1">
          GitHub: <a
            :href="socials.github"
            target="_blank"
            rel="noopener noreferrer"
          >github.com/AeroKir</a>
        </li>
        <li class="font-heading text-xl">
          Linkedin: <a
            :href="socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >linkedin.com/in/aerokir-space/</a>
        </li>
      </ul>
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconSmile from '../../assets/icons/smile.svg';

interface Profile {
  phone: string;
  email: string;
}

interface Socials {
  telegram: string;
  github: string;
  linkedin: string;
}

const { profile, socials } = useAppConfig() as unknown as { profile: Profile; socials: Socials };
</script>

<template>
  <Page>
    <AppHeader />
    <main class="h-screen w-screen text-primaryDark dark:text-accentColor relative">
      <IconSmile
        class="w-[243px] h-[243px] absolute top-8 right-8 text-primaryDarkAlpha25 dark:text-primaryLightAlpha50"
      />
      <HeadingPage
        :title="$t('pages.contact.title')"
        :isDot="true"
      />
      <p>Are you interested in me as a person, or do you want to do a project? Let's stay in touch.</p>
      <ul>
        <li>Email: <a href="mailto:shev.kv.1982@gmail.com">shev.kv.1982@gmail.com</a></li>
        <!-- <li>
          Telegram: <a
            href="https://t.me/aerokir"
            target="_blank"
            rel="noopener"
          >@aerokir</a>
        </li> -->
      </ul>
    </main>
    <AppFooter />
  </Page>
</template>

<script setup lang="ts">
import IconSmile from '../../assets/icons/smile.svg';
</script>

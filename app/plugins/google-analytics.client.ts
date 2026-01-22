export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gaId = config.public.gaId;

  if (!gaId) {
    console.warn('[GA] No GA ID provided');
    return;
  }

  // 1️⃣ Load gtag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // 2️⃣ Init dataLayer
  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  // 3️⃣ Init GA
  gtag('js', new Date());
  gtag('config', gaId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  // 4️⃣ SPA page_view tracking
  nuxtApp.hook('page:finish', () => {
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
    });
  });

  // 5️⃣ Debug
  if (import.meta.dev) {
    console.info('[GA] Initialized', gaId);
  }
});

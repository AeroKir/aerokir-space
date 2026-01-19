export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const gaId = config.public.gaId;

  if (!gaId) {
    console.warn('[GA] No GA ID provided');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Init dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];

  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }

  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', gaId, {
    anonymize_ip: true,
  });
});

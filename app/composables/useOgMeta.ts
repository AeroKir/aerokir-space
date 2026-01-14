export function useOgMeta({
  titleKey,
  descriptionKey,
  image,
  url,
}: {
  titleKey: string;
  descriptionKey: string;
  image?: string;
  url?: string;
}) {
  const { locale, t } = useI18n();
  const route = useRoute();

  const baseUrl = 'https://aerokir.space';

  const title = t(titleKey);
  const description = t(descriptionKey);

  useSeoMeta({
    title,
    description,

    ogTitle: title,
    ogDescription: description,

    ogImage:
      image
      ?? (locale.value === 'ua'
        ? `${baseUrl}/og/og-img-home-ua.png`
        : `${baseUrl}/og/og-img-home-en.png`),

    ogUrl: url ?? `${baseUrl}${route.fullPath}`,

    twitterCard: 'summary_large_image',
  });
}

type OgMetaOptions = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export function useOgMeta({
  title,
  description,
  image,
  url,
}: OgMetaOptions) {
  const route = useRoute();
  const { locale } = useI18n();

  const baseUrl = 'https://aerokir.space';

  useSeoMeta({
    title,
    description,

    ogTitle: title,
    ogDescription: description,

    ogImage: image
      ? image.startsWith('http')
        ? image
        : `${baseUrl}${image}`
      : `${baseUrl}/og/og-home-${locale.value}.png`,

    ogUrl: url ?? `${baseUrl}${route.fullPath}`,

    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image
      ? image.startsWith('http')
        ? image
        : `${baseUrl}${image}`
      : undefined,
  });
}

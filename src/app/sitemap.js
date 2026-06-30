export default function sitemap() {
  const baseUrl = 'https://eecmep.com';
  const locales = ['en', 'sr', 'de'];

  // Sve glavne rute tvog sajta koje želiš da Gugl indeksira
  const routes = ['', '/o-nama', '/usluge', '/projekti', '/ljudi', '/karijere', '/kontakt'];

  const sitemapEntries = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8, // Početna strana ima najveći prioritet
    }))
  );

  return sitemapEntries;
}
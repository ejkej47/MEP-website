import 'server-only'

const dictionaries = {
  sr: () => import('./sr.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  // Ako se desi greška ili nepoznat jezik, fallback je uvek srpski
  return dictionaries[locale]?.() ?? dictionaries.en()
}
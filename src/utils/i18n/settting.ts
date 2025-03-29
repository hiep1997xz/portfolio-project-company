export const fallbackLng = 'vi';
export const languages = [fallbackLng, 'ja', 'ko', 'en'] as const;
export const defaultNS = 'translation';
export const cookieName = 'i18next';

// Hàm lấy ngôn ngữ từ localStorage hoặc cookie
export function getSavedLanguage() {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem(cookieName) || document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1];

    if (savedLang && languages.includes(savedLang as any)) {
      return savedLang;
    }
  }
  return fallbackLng;
}

export function getOptions(lng = getSavedLanguage(), ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}

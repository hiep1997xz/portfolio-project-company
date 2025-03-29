'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg
} from 'react-i18next';
import { cookieName, getOptions, getSavedLanguage, languages } from './settting';

const runsOnServerSide = typeof window === 'undefined';

// Khởi tạo i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // Let i18next detect language
    detection: {
      order: ['cookie', 'localStorage', 'navigator']
    },
    preload: runsOnServerSide ? languages : []
  });

export function useTranslation(ns?: string, options?: UseTranslationOptions<undefined>) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns ?? 'common', options);
  const { i18n } = ret;
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    const savedLang = getSavedLanguage();
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (activeLng === i18n.language) return;
    setActiveLng(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (cookies.i18next === lng) return;
    setCookie(cookieName, lng, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60 // 1 year
    });
    localStorage.setItem(cookieName, lng);
  };

  return { ...ret, changeLanguage };
}

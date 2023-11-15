import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';

export function initI18n(lang:string) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        ru: {translation: ruTranslation},
        en: {translation: enTranslation}
      },
      lng: lang,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    });
}



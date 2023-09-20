import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import itTranslation from '../src/i18n/it.json';
import enTranslation from '../src/i18n/en.json';

const resources = {
  en: {
    translation: enTranslation
  },
  it: {
    translation: itTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enUSTrans from "./assets/locales/en-US/translation.json";
import zhCNTrans from "./assets/locales/zh-CN/translation.json";
import { initReactI18next } from 'react-i18next';

const resources = {
    enUS: {
        translation: enUSTrans,
    },
    zhCN: {
        translation: zhCNTrans,
    }
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'zhCN',
    resources,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;



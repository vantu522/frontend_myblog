import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      welcome: "Chào mừng bạn đến với website!",
      language: "Ngôn ngữ",
      about: "About"
    },
  },
  en: {
    translation: {
      welcome: "Welcome to the website!",
      language: "Language",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi", // Mặc định là tiếng Việt
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

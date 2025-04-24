import { useTranslation as useI18nTranslation } from "react-i18next";

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // set html lang attribute
    document.documentElement.lang = lng;
    // set html dir attribute
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const currentLanguage = i18n.language;

  return {
    t,
    changeLanguage,
    currentLanguage,
    isRTL: currentLanguage === "ar",
  };
};

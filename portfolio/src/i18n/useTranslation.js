import { useContext } from "react";
import { I18nContext } from "./context";

// hook usado pelos componentes:
//   const { t, tList, language, setLanguage } = useTranslation();
//   t("contact.clickToCopy")
//   t("projects.prints", { count: 3 })   -> interpola {{count}}
//   tList("contact.heading")             -> retorna arrays do arquivo de traducao
export const useTranslation = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation precisa estar dentro de <I18nProvider>");
  }

  return context;
};

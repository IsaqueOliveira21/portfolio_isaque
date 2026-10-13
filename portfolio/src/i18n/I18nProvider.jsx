import { useCallback, useEffect, useMemo, useState } from "react";
import { I18nContext } from "./context";
import {
  DEFAULT_LANGUAGE,
  STORAGE_KEY,
  detectLanguage,
  resources,
} from "./config";

// le "a.b.c" dentro do dicionario
const resolve = (dict, key) =>
  key
    .split(".")
    .reduce((acc, part) => (acc == null ? undefined : acc[part]), dict);

// troca {{variavel}} pelo valor passado em t("chave", { variavel: ... })
const interpolate = (text, vars) =>
  vars
    ? text.replace(/\{\{(\w+)\}\}/g, (match, name) =>
        vars[name] === undefined ? match : String(vars[name]),
      )
    : text;

const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(detectLanguage);

  // guarda a escolha e mantem <html lang> e o title da aba em sincronia
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // sem localStorage o idioma apenas nao persiste entre visitas
    }

    const meta = resources[language]?.meta;
    if (meta) {
      document.documentElement.lang = meta.htmlLang;
      document.title = meta.title;
    }
  }, [language]);

  const changeLanguage = useCallback((code) => {
    if (resources[code]) setLanguage(code);
  }, []);

  const value = useMemo(() => {
    const dict = resources[language] ?? resources[DEFAULT_LANGUAGE];
    const fallback = resources[DEFAULT_LANGUAGE];

    const lookup = (key) => {
      const found = resolve(dict, key);
      return found === undefined ? resolve(fallback, key) : found;
    };

    // string traduzida; se a chave nao existir devolve a propria chave,
    // o que deixa o texto faltando obvio na tela
    const t = (key, vars) => {
      const found = lookup(key);
      if (typeof found === "string") return interpolate(found, vars);
      if (found === undefined) return key;
      return found;
    };

    // arrays do arquivo de traducao (linhas de texto, listas de comandos, etc)
    const tList = (key) => {
      const found = lookup(key);
      return Array.isArray(found) ? found : [];
    };

    return {
      language,
      setLanguage: changeLanguage,
      t,
      tList,
      // locale pra formatacao de datas e numeros
      locale: dict.meta.dateLocale,
    };
  }, [language, changeLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default I18nProvider;

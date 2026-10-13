import en from "./locales/en";
import es from "./locales/es";
import ptBR from "./locales/pt-BR";
import { FlagBR, FlagES, FlagUS } from "./flags.jsx";

// idioma usado como fallback: toda chave que faltar nos outros idiomas vem daqui
export const DEFAULT_LANGUAGE = "pt-BR";

// chave do localStorage onde a escolha do visitante fica salva
export const STORAGE_KEY = "portfolio:language";

// dicionarios, indexados pelo codigo do idioma
export const resources = {
  "pt-BR": ptBR,
  en,
  es,
};

// ordem em que as bandeiras aparecem no seletor do header.
// pra adicionar um idioma: cria o arquivo em locales/, registra em `resources`
// e adiciona a linha aqui com a bandeira correspondente.
export const languages = [
  { code: "pt-BR", name: "Português (Brasil)", short: "PT", Flag: FlagBR },
  { code: "en", name: "English", short: "EN", Flag: FlagUS },
  { code: "es", name: "Español", short: "ES", Flag: FlagES },
];

// descobre o idioma inicial: o que ja foi escolhido antes > idioma do navegador > padrao
export const detectLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && resources[saved]) return saved;
  } catch {
    // localStorage bloqueado (modo privado, por exemplo): segue pro navegador
  }

  const preferred = Array.isArray(navigator?.languages)
    ? navigator.languages
    : [navigator?.language];

  for (const tag of preferred) {
    if (!tag) continue;
    if (resources[tag]) return tag;
    const base = tag.split("-")[0].toLowerCase();
    const match = Object.keys(resources).find(
      (code) => code.split("-")[0].toLowerCase() === base,
    );
    if (match) return match;
  }

  return DEFAULT_LANGUAGE;
};

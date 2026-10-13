import { createContext } from "react";

// fica num arquivo proprio pra nao misturar componente e valor exportado
// no mesmo modulo (requisito do fast refresh do vite)
export const I18nContext = createContext(null);

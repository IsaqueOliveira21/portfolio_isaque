// ajuste nomes, stack, links e prints pros seus projetos reais.
// a descricao de cada projeto fica nas traducoes, em
// projects.items.<id>.description (src/i18n/locales/*)

// os prints precisam ser importados: o vite so processa assets em import
// (string crua no src do <img> viraria 404, pois o browser resolve pela url da pagina)

// ---------- 3i Esportes imgs ---------- //
import i3i1 from "../assets/images/3iesportes/3i_1.png";
import i3i2 from "../assets/images/3iesportes/3i_2.png";
import i3i3 from "../assets/images/3iesportes/3i_3.jpeg";

// ---------- Fiduz imgs ---------- //
import fiduz1 from "../assets/images/fiduz/fiduz1.png";
import fiduz2 from "../assets/images/fiduz/fiduz2.png";
import fiduz3 from "../assets/images/fiduz/fiduz3.png";
import fiduz4 from "../assets/images/fiduz/fiduz4.png";
import fiduz5 from "../assets/images/fiduz/fiduz5.png";
import fiduz6 from "../assets/images/fiduz/fiduz6.png";

// ---------- Lumenz imgs ---------- //
import lmz1 from "../assets/images/lumenz/lmz1.png";
import lmz2 from "../assets/images/lumenz/lmz2.png";
import lmz3 from "../assets/images/lumenz/lmz3.png";
import lmz4 from "../assets/images/lumenz/lmz4.png";
import lmz5 from "../assets/images/lumenz/lmz5.png";
import lmz6 from "../assets/images/lumenz/lmz6.png";
import lmz7 from "../assets/images/lumenz/lmz7.png";

export const projects = [
  {
    id: "3i-esportes",
    ext: ".web",
    name: "3i Esportes",
    stack: [
      "Laravel",
      "TailwindCSS",
      "MySQL",
      "Monolithic System",
      "Gemini Integration",
    ],
    links: { github: "", demo: "https://www.3iesportes.com.br/" },
    images: [i3i1, i3i2, i3i3],
  },
  {
    id: "fiduz",
    ext: ".web",
    name: "Fiduz",
    stack: ["React", "TailwindCSS", "Laravel", "RESTful API", "PostgreSQL"],
    links: { github: "", demo: "http://138.197.31.213/" },
    images: [fiduz1, fiduz2, fiduz3, fiduz4, fiduz5, fiduz6],
  },
  {
    id: "lumenz",
    ext: ".web",
    name: "Lumenz",
    stack: ["React", "TailwindCSS", "Laravel", "RESTful API", "PostgreSQL"],
    links: { github: "", demo: "https://uselumenz.com/" },
    images: [lmz1, lmz2, lmz3, lmz4, lmz5, lmz6, lmz7],
  },
];

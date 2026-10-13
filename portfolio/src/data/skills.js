// Aqui ficam apenas os dados estruturais das habilidades.
// O titulo de cada categoria e o nome de cada nivel sao traduzidos:
//   categoria -> skills.categories.<id>   em src/i18n/locales/*
//   nivel     -> skills.levels.<level>    em src/i18n/locales/*
// Niveis validos: "main" | "secondary" | "learning"
const categories = [
  {
    id: "backend",
    items: [
      { name: "PHP", level: "main" },
      { name: "Laravel", level: "main" },
      { name: "NodeJS", level: "secondary" },
      { name: "Python", level: "secondary" },
    ],
  },
  {
    id: "frontend",
    items: [
      { name: "React", level: "main" },
      { name: "React Native", level: "secondary" },
      { name: "TypeScript", level: "secondary" },
      { name: "TailwindCSS", level: "main" },
    ],
  },
  {
    id: "database",
    items: [
      { name: "MySQL", level: "main" },
      { name: "MongoDB", level: "secondary" },
      { name: "PostgreSQL", level: "main" },
      { name: "SQLite", level: "secondary" },
    ],
  },
  {
    id: "devops",
    items: [
      { name: "CI/CD", level: "main" },
      { name: "Docker", level: "main" },
      { name: "Git & Github", level: "main" },
    ],
  },
  {
    id: "learning",
    items: [
      { name: "Next.js", level: "learning" },
      { name: "Agentes de IA / automacao", level: "learning" },
    ],
  },
  {
    id: "ai",
    items: [
      { name: "Claude", level: "main" },
      { name: "Perplexity", level: "main" },
      { name: "ChatGPT", level: "secondary" },
      { name: "Gemini", level: "secondary" },
      { name: "Grok", level: "secondary" },
    ],
  },
];

export default categories;

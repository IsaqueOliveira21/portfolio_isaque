import { contact } from "./contact";
import { projects } from "./projects";
import socials from "./socials";
import categories from "./skills";
import Lines from "./TerminalLines.jsx";

const accent = (text) => ({ text, className: "text-sky-400" });
const dim = (text) => ({ text, className: "text-white/50" });

// alinha uma coluna pelo maior texto da lista
const column = (values, extra = 2) =>
  Math.max(...values.map((value) => value.length)) + extra;

// monta os arquivos e comandos do terminal no idioma atual.
// os textos vem das traducoes (chave terminal.* em src/i18n/locales/*),
// os dados vem dos arquivos aqui em src/data/.
export const buildTerminal = ({ t, tList }) => {
  const status = t("terminal.status", { status: t("contact.availability") });

  // skills.txt: alinha a coluna de nivel pelo nome mais longo de cada categoria
  const skillsLines = categories.flatMap((category) => {
    const items = category.items.map((item) => ({
      name: item.name,
      level: t(`skills.levels.${item.level}`),
    }));
    const width = column(items.map((item) => item.name));

    return [
      accent(t(`skills.categories.${category.id}`)),
      ...items.map((item) => `  ${item.name.padEnd(width)}${item.level}`),
      "",
    ];
  });

  // projects.txt: alinha os rotulos de link entre si
  const linkLabels = [
    t("terminal.files.projects.github"),
    t("terminal.files.projects.preview"),
  ];
  const linkWidth = column(linkLabels, 1);

  const projectsLines = projects.flatMap((project, i) => [
    accent(`${String(i + 1).padStart(2, "0")}  ${project.name} ${project.ext}`),
    `    ${t(`projects.items.${project.id}.description`)}`,
    dim(
      `    ${t("terminal.files.projects.stack", {
        list: project.stack.join(", "),
      })}`,
    ),
    ...(project.links?.github
      ? [`    ${linkLabels[0].padEnd(linkWidth)}${project.links.github}`]
      : []),
    ...(project.links?.demo
      ? [`    ${linkLabels[1].padEnd(linkWidth)}${project.links.demo}`]
      : []),
    "",
  ]);

  const githubHref =
    socials.find((s) => s.id === "github")?.href ||
    "https://github.com/IsaqueOliveira21";

  const file_content = {
    "skills.txt": (
      <Lines
        lines={[...skillsLines, dim(t("terminal.files.skills.legend"))]}
      />
    ),

    "projects.txt": <Lines lines={projectsLines} />,

    "github_activity.txt": (
      <Lines
        lines={[
          accent(t("terminal.files.github.title")),
          "",
          `  ${t("terminal.files.github.profile").padEnd(8)}${githubHref}`,
          "",
          ...tList("terminal.files.github.note").map(dim),
        ]}
      />
    ),

    "social.txt": (
      <Lines
        lines={[
          accent(t("terminal.files.social.title")),
          "",
          ...socials.map(
            (s) => `  ${s.name.toLowerCase().padEnd(11)}${s.href}`,
          ),
        ]}
      />
    ),

    "contact.txt": (
      <Lines
        lines={[
          accent(t("terminal.files.contact.title")),
          "",
          `  ${t("terminal.files.contact.email").padEnd(10)}${contact.email}`,
          ...(contact.whatsapp
            ? [dim(`  ${t("terminal.files.contact.whatsapp")}`)]
            : []),
          "",
          dim(status),
        ]}
      />
    ),
  };

  // help: alinha a coluna de descricao pelo comando mais longo
  const commands = tList("terminal.help.commands");
  const commandWidth = column(
    commands.map((command) => command.cmd),
    4,
  );

  const terminalRes = {
    help: (
      <Lines
        lines={[
          t("terminal.help.title"),
          "",
          ...commands.map(
            (command) => `  ${command.cmd.padEnd(commandWidth)}${command.desc}`,
          ),
          "",
          dim(t("terminal.help.hint")),
        ]}
      />
    ),

    // a lista sai dos proprios arquivos, entao nunca fica fora de sincronia
    ls: <Lines lines={Object.keys(file_content).map(accent)} />,

    whoami: (
      <Lines
        lines={[
          accent(t("terminal.whoami.name")),
          t("terminal.whoami.tagline"),
          "",
          ...tList("terminal.whoami.bio"),
          "",
          t("terminal.whoami.learning"),
          "",
          dim(status),
        ]}
      />
    ),
  };

  return { file_content, terminalRes };
};

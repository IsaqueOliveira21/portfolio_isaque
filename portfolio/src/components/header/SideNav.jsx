import { useTranslation } from "../../i18n/useTranslation";

// o label vem da traducao (nav.*), o href aponta pro id da secao
const tabs = [
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "github", href: "#github" },
  { key: "social", href: "#social" },
  { key: "contact", href: "#contact" },
];

const SideNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-6 font-mono text-xs tracking-widest text-white/50">
      {tabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          className="group flex items-center gap-3 justify-end hover:text-white transition-colors"
        >
          <span className="h-px w-4 bg-white/30 group-hover:w-8 group-hover:bg-white/80 transition-all duration-300" />
          <span>{t(`nav.${tab.key}`)}</span>
        </a>
      ))}
    </nav>
  );
};

export default SideNav;

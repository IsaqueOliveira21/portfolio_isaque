import categories from "../../data/skills";
import { useTranslation } from "../../i18n/useTranslation";

const SkillCategory = ({ id, items }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90">
      {/* barra de titulo, mesma linguagem visual do terminal do header */}
      <div className="px-4 py-2 bg-neutral-900 border-b border-white/10 font-mono text-xs text-white/60">
        {t(`skills.categories.${id}`)}
      </div>

      <ul className="px-4 py-4 space-y-2 font-mono text-sm">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-white/80">
              <span className="text-white/30 mr-2">&gt;</span>
              {item.name}
            </span>
            <span className="text-white/40 text-xs">
              {t(`skills.levels.${item.level}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="relative w-full bg-black text-white py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      {/* grid de fundo, mesma textura discreta do header, sem a luz interativa */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:pr-64 xl:pr-80">
        <h2 className="font-header font-extrabold text-5xl sm:text-6xl md:text-7xl mb-12 md:mb-16">
          {t("skills.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <SkillCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

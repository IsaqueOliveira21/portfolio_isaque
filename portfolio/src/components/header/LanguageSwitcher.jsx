import { languages } from "../../i18n/config";
import { useTranslation } from "../../i18n/useTranslation";

// navbar de idiomas: so as bandeiras, a ativa fica acesa e as outras apagadas
const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <nav
      aria-label={t("language.label")}
      className="absolute top-6 left-4 sm:left-6 md:left-10 z-30 flex items-center gap-1 rounded-lg border border-white/10 bg-neutral-950/90 backdrop-blur-sm p-1 shadow-2xl"
    >
      {languages.map(({ code, name, short, Flag }) => {
        const isActive = code === language;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            aria-label={t("language.switchTo", { language: name })}
            title={name}
            className={`group relative flex items-center justify-center rounded-md p-1.5 transition-colors ${
              isActive ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <Flag
              className={`w-6 h-[17px] rounded-[2px] border transition-all duration-300 ${
                isActive
                  ? "border-white/40 opacity-100"
                  : "border-white/10 opacity-45 grayscale group-hover:opacity-90 group-hover:grayscale-0"
              }`}
            />
            {/* so pra leitor de tela / quando as imagens nao carregam */}
            <span className="sr-only">{short}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default LanguageSwitcher;

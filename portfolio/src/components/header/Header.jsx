import { useRef, useState } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import SideNav from "./SideNav";
import Terminal from "./Terminal";

const Header = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--mx", `${x}px`);
    sectionRef.current.style.setProperty("--my", `${y}px`);
    if (!active) setActive(true);
  };

  const handleMouseLeave = () => setActive(false);

  return (
    <header
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-between"
    >
      {/* grid base, sempre visivel e bem discreto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* grid "aceso": mesma malha, porem mais clara, revelada so perto do cursor via mask */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
        }}
      />

      {/* brilho suave extra, tipo reflexo metalico (screen soma luz, funciona sobre preto) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.25), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* seletor de idioma, canto superior esquerdo */}
      <LanguageSwitcher />

      {/* menu lateral com as abas do portfolio (fica oculto em telas pequenas) */}
      <SideNav />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* linha superior: nome a esquerda, espaco reservado pra sidebar a direita,
            terminal centralizado no vao real que sobra entre os dois */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 pt-20 sm:pt-24 md:pt-28 lg:pr-64 xl:pr-80">
          <div className="ml-4 sm:ml-6 md:ml-10 font-header font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl space-y-3 sm:space-y-6 md:space-y-10 lg:space-y-14">
            <h1>ISAQUE</h1>
            <h1>OLIVEIRA</h1>
          </div>

          <div className="flex justify-center px-4 sm:px-6 lg:flex-1 lg:px-0">
            <Terminal />
          </div>
        </div>

        {/* rodape do header: cargo/localizacao a esquerda, indicador de scroll a direita */}
        <div className="flex items-end justify-between pb-8 sm:pb-10 md:pb-12 pl-4 sm:pl-6 md:pl-10 pr-6 sm:pr-10 md:pr-14">
          <p className="font-mono text-xs sm:text-sm text-white/50 leading-relaxed">
            {t("header.role")}
            <br />
            {t("header.location")}
          </p>

          <div className="hidden sm:flex flex-col items-center gap-2 text-white/40">
            <span className="font-mono text-[10px] tracking-widest [writing-mode:vertical-rl]">
              {t("header.scroll")}
            </span>
            <span className="w-px h-10 bg-white/30" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

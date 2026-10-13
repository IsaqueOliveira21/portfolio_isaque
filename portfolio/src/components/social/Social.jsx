import socials from "../../data/socials";
import { useTranslation } from "../../i18n/useTranslation";

const ArrowGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const SocialRow = ({ social, index }) => (
  <a
    href={social.href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center justify-between gap-6 border-t border-white/10 last:border-b py-6 sm:py-8 px-2 sm:px-4 transition-colors duration-300 hover:bg-white/[0.03]"
  >
    <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
      <span className="font-mono text-xs sm:text-sm text-white/30 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* camada vazada (sempre visivel) + camada solida que "varre" no hover */}
      <span className="relative inline-block font-header font-extrabold leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl transition-transform duration-500 group-hover:translate-x-2">
        <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.55)]">
          {social.name}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 text-white [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-500 ease-out"
        >
          {social.name}
        </span>
      </span>
    </div>

    <div className="flex items-center gap-4 shrink-0">
      <span className="hidden md:block font-mono text-sm text-white/40 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        {social.handle}
      </span>
      <ArrowGlyph className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
    </div>
  </a>
);

const Social = () => {
  const { t } = useTranslation();

  return (
    <section
      id="social"
      className="relative w-full bg-black text-white py-20 sm:py-24 md:py-28 overflow-hidden"
    >
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
          {t("social.title")}
        </h2>

        <div>
          {socials.map((social, index) => (
            <SocialRow key={social.id} social={social} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;

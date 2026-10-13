import { useEffect, useRef, useState } from "react";
import { contact } from "../../data/contact.js";
import { useTranslation } from "../../i18n/useTranslation";

const CopyGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

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

const Contact = () => {
  const { t, tList } = useTranslation();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // se o navegador bloquear o clipboard, abre o app de e-mail como alternativa
      console.error(err);
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        t("contact.whatsappMessage"),
      )}`
    : "";

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-white pt-20 sm:pt-24 md:pt-28 overflow-hidden"
    >
      {/* animacao do letreiro; respeita quem prefere menos movimento */}
      <style>{`
        @keyframes contact-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .contact-marquee-track { animation: contact-marquee 25s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .contact-marquee-track { animation: none; }
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:pr-64 xl:pr-80">
        {/* indicador de disponibilidade */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-white/50 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t("contact.availability")}
        </div>

        {/* titulo grande: cada item de contact.heading e uma linha */}
        <h2 className="font-header font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] mb-12 md:mb-16">
          {tList("contact.heading").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* e-mail como botao: no hover o texto "rola" pra revelar a acao */}
        <button
          onClick={handleCopy}
          aria-label={t("contact.copyAria", { email: contact.email })}
          className="group w-full max-w-3xl flex items-center justify-between gap-4 text-left rounded-lg border border-white/15 hover:border-white/40 bg-neutral-950/70 px-5 sm:px-8 py-5 sm:py-6 transition-colors"
        >
          <span className="block h-9 sm:h-12 overflow-hidden min-w-0 flex-1">
            <span
              className={`block transition-transform duration-500 ease-out ${
                copied ? "-translate-y-1/2" : "group-hover:-translate-y-1/2"
              }`}
            >
              <span className="flex items-center h-9 sm:h-12 font-header font-extrabold text-lg sm:text-3xl md:text-4xl truncate">
                {contact.email}
              </span>
              <span
                className={`flex items-center h-9 sm:h-12 font-mono text-sm sm:text-xl ${
                  copied ? "text-emerald-400" : "text-white/60"
                }`}
              >
                {copied ? t("contact.copied") : t("contact.clickToCopy")}
              </span>
            </span>
          </span>

          {copied ? (
            <CheckGlyph className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-emerald-400" />
          ) : (
            <CopyGlyph className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-white/40 group-hover:text-white transition-colors" />
          )}
        </button>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-6">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors"
          >
            {t("contact.mailApp")}
          </a>

          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm rounded-full border border-white/30 px-5 py-2 text-white/80 hover:bg-white hover:text-black hover:border-white transition-colors"
            >
              {t("contact.whatsapp")}
              <ArrowGlyph className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>

      {/* letreiro em loop, largura total */}
      <div className="relative z-10 mt-20 sm:mt-24 border-y border-white/10 bg-black overflow-hidden py-3">
        <div className="contact-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="flex items-center font-mono text-xs sm:text-sm tracking-widest text-white/40"
                >
                  <span className="px-6">{t("contact.marquee")}</span>
                  <span className="text-white/20">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

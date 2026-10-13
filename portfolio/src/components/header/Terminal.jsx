import { useEffect, useMemo, useRef, useState, Fragment } from "react";
import { buildTerminal } from "../../data/terminalRes.jsx";
import { useTranslation } from "../../i18n/useTranslation";

const TerminalGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m7 9 3 3-3 3" />
    <path d="M13 15h4" />
  </svg>
);

const CloseGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Terminal = () => {
  const { t, tList } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");
  // guarda so os comandos digitados; a resposta e montada na renderizacao,
  // assim o historico tambem troca de idioma junto com o site
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const { terminalRes, file_content } = useMemo(
    () => buildTerminal({ t, tList }),
    [t, tList],
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // resolve a resposta de um comando no idioma atual
  const resolveCommand = (command) => {
    const [name, arg] = command.split(" ");

    if (name === "cat" && arg) {
      return Object.hasOwn(file_content, arg)
        ? file_content[arg]
        : t("terminal.fileNotFound");
    }

    return Object.hasOwn(terminalRes, command)
      ? terminalRes[command]
      : t("terminal.commandNotFound");
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (value === "clear") {
        setHistory([]);
      } else {
        setHistory((prev) => [...prev, value]);
      }
      setValue("");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label={t("terminal.open")}
        className="fixed top-6 right-6 z-30 flex items-center justify-center w-10 h-10 rounded-md bg-neutral-500/30 border border-white/10 text-white/80 hover:bg-neutral-500/50 transition-colors"
      >
        <TerminalGlyph className="w-[18px] h-[18px]" />
      </button>
    );
  }

  return (
    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-3xl rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90 backdrop-blur-sm shadow-2xl">
      {/* barra de titulo, estilo linux: sem bolinhas coloridas, so um botao de fechar */}
      <div className="flex items-center justify-between px-3 py-2 lg:px-4 lg:py-3 bg-neutral-900 border-b border-white/10">
        <div className="flex items-center gap-2 text-white/60 text-xs lg:text-sm font-mono">
          <TerminalGlyph className="w-[14px] h-[14px] lg:w-4 lg:h-4" />
          <span>{t("terminal.titleBar")}</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label={t("terminal.close")}
          className="text-white/50 hover:text-white transition-colors"
        >
          <CloseGlyph className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>

      {/* corpo do terminal: ja aceita digitacao, mas nenhum comando processa ainda */}
      <div
        ref={bodyRef}
        className="px-4 py-4 lg:px-6 lg:py-6 font-mono text-sm lg:text-base text-white/80 space-y-2 lg:space-y-3 h-[220px] lg:h-[300px] xl:h-[340px] overflow-y-auto
        [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20"
        onClick={() => inputRef.current?.focus()}
      >
        <p className="text-white/50">{t("terminal.welcome")}</p>
        {history.map((cmd, index) => (
          <Fragment key={index}>
            <p className="text-white">[guest@isaque]$ {cmd}</p>
            <p className="text-white">{resolveCommand(cmd)}</p>
          </Fragment>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">guest@isaque</span>
          <span className="text-white/40">:</span>
          <span className="text-sky-400">~</span>
          <span className="text-white/40">$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            spellCheck="false"
            autoComplete="off"
            onKeyDown={handleSubmit}
            className="flex-1 bg-transparent outline-none border-none text-white caret-white font-mono text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;

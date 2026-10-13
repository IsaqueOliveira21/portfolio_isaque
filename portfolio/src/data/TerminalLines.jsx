// Renderiza cada linha do terminal como um bloco que preserva espacos
// (pra manter o alinhamento das colunas) e quebra sozinho quando nao cabe
// na largura do terminal.
// Uma linha pode ser uma string ou { text, className } pra dar cor.
const TerminalLines = ({ lines }) => (
  <>
    {lines.map((line, i) => {
      const { text, className = "" } =
        typeof line === "string" ? { text: line } : line;
      return (
        <span key={i} className={`block whitespace-pre-wrap ${className}`}>
          {text || " "}
        </span>
      );
    })}
  </>
);

export default TerminalLines;

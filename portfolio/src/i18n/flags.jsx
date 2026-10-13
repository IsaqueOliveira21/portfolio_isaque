// Bandeiras em SVG inline (nao usa emoji, que nao renderiza igual em todo sistema).
// Sao versoes simplificadas, desenhadas pra ficarem legiveis em ~20px.

export const FlagBR = ({ className }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
    <rect width="28" height="20" fill="#009b3a" />
    <polygon points="14,2.2 25.6,10 14,17.8 2.4,10" fill="#ffdf00" />
    <circle cx="14" cy="10" r="4.3" fill="#002776" />
    <clipPath id="flag-br-globe">
      <circle cx="14" cy="10" r="4.3" />
    </clipPath>
    <path
      d="M9.3 9.5C11.6 13.2 16.4 13.2 18.7 9.5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      clipPath="url(#flag-br-globe)"
    />
  </svg>
);

export const FlagUS = ({ className }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
    <rect width="28" height="20" fill="#ffffff" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect
        key={i}
        y={i * 3.08}
        width="28"
        height="1.54"
        fill="#b22234"
      />
    ))}
    <rect width="12.4" height="10.77" fill="#3c3b6e" />
    {[1.6, 4.4, 7.2, 10].map((x) =>
      [1.5, 4.2, 6.9, 9.6].map((y) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.62" fill="#ffffff" />
      )),
    )}
  </svg>
);

export const FlagES = ({ className }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
    <rect width="28" height="20" fill="#aa151b" />
    <rect y="5" width="28" height="10" fill="#f1bf00" />
  </svg>
);

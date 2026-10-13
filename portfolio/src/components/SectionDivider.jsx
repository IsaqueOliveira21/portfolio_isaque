const SectionDivider = ({ index, label }) => {
  const number = String(index).padStart(2, "0");

  return (
    <div className="relative w-full bg-black py-10 md:py-14">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-white/10" />

      <div className="relative flex justify-center">
        <span className="bg-black px-4 font-mono text-xs tracking-widest text-white/30">
          {`// ${number} — ${label}`}
        </span>
      </div>
    </div>
  );
};

export default SectionDivider;

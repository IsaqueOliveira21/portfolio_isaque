import { useState } from "react";
import { projects } from "../../data/projects";
import { useTranslation } from "../../i18n/useTranslation";

const LinkGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 17H7a5 5 0 0 1 0-10h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const ExternalGlyph = ({ className }) => (
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

const ImageGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const ChevronDownGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronLeftGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightGlyph = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ProjectRow = ({ project, index }) => {
  const { t } = useTranslation();
  const [showImages, setShowImages] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hasGithub = Boolean(project.links.github);
  const hasDemo = Boolean(project.links.demo);
  const hasImages = project.images.length > 0;

  const prevImage = () =>
    setImageIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const nextImage = () =>
    setImageIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <div className="border-b border-white/10 last:border-b-0 px-4 sm:px-6 py-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3 font-mono">
            <span className="text-white/30 text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-white/90 text-base">{project.name}</span>
            <span className="text-sky-400 text-sm">{project.ext}</span>
          </div>

          <p className="mt-2 text-sm text-white/60 max-w-3xl">
            {t(`projects.items.${project.id}.description`)}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-white/50 border border-white/10 rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* botoes condicionais: so aparece o que o projeto realmente tiver */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/40 rounded px-3 py-1.5 transition-colors"
            >
              <LinkGlyph className="w-3.5 h-3.5" />
              {t("projects.github")}
            </a>
          )}
          {hasDemo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/40 rounded px-3 py-1.5 transition-colors"
            >
              <ExternalGlyph className="w-3.5 h-3.5" />
              {t("projects.preview")}
            </a>
          )}
          {hasImages && (
            <button
              onClick={() => setShowImages((v) => !v)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/40 rounded px-3 py-1.5 transition-colors"
            >
              <ImageGlyph className="w-3.5 h-3.5" />
              {t("projects.prints", { count: project.images.length })}
              <ChevronDownGlyph
                className={`w-3 h-3 transition-transform duration-300 ${
                  showImages ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* dropdown com slide de imagens, so existe se o projeto tiver prints */}
      {hasImages && (
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: showImages ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            {/* frame de tamanho fixo: a print se ajusta dentro dele sem cortar nem esticar */}
            <div className="relative mt-4 w-full max-w-4xl h-64 sm:h-[22rem] md:h-[28rem] rounded-lg overflow-hidden border border-white/10 bg-neutral-950/60 p-2 sm:p-3">
              <img
                src={project.images[imageIndex]}
                alt={t("projects.printAlt", {
                  index: imageIndex + 1,
                  name: project.name,
                })}
                className="w-full h-full object-contain rounded"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label={t("projects.prevImage")}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  >
                    <ChevronLeftGlyph className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label={t("projects.nextImage")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  >
                    <ChevronRightGlyph className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-3 right-4 font-mono text-xs text-white/70 bg-black/70 backdrop-blur-sm border border-white/10 rounded px-2 py-0.5">
                    {imageIndex + 1}/{project.images.length}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
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
          {t("projects.title")}
        </h2>

        <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90">
          <div className="px-4 sm:px-6 py-2 bg-neutral-900 border-b border-white/10 font-mono text-xs text-white/60">
            {t("projects.path")}
          </div>

          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

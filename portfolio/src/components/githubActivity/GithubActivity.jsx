import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTranslation } from "../../i18n/useTranslation";

const GITHUB_USERNAME = "IsaqueOliveira21";

// cada tipo de evento do GitHub aponta pra uma chave de traducao
// (github.events.* em src/i18n/locales/*)
const EVENT_KEYS = {
  PushEvent: (payload) => {
    const count = payload.commits?.length || 0;
    return count === 1
      ? { key: "pushOne" }
      : { key: "pushOther", vars: { count } };
  },
  CreateEvent: (payload) => {
    if (payload.ref_type === "repository") return { key: "createRepository" };
    if (payload.ref_type === "branch") return { key: "createBranch" };
    return { key: "createTag" };
  },
  PullRequestEvent: (payload) => {
    if (payload.action === "opened") return { key: "pullRequestOpened" };
    if (payload.action === "closed") return { key: "pullRequestClosed" };
    return { key: "pullRequestOther", vars: { action: payload.action } };
  },
  IssuesEvent: (payload) => {
    if (payload.action === "opened") return { key: "issueOpened" };
    if (payload.action === "closed") return { key: "issueClosed" };
    return { key: "issueOther", vars: { action: payload.action } };
  },
  IssueCommentEvent: () => ({ key: "issueComment" }),
  WatchEvent: () => ({ key: "watch" }),
  ForkEvent: () => ({ key: "fork" }),
  DeleteEvent: (payload) =>
    payload.ref_type === "branch"
      ? { key: "deleteBranch" }
      : { key: "deleteTag" },
};

const describeEvent = (event, t) => {
  const handler = EVENT_KEYS[event.type];
  const { key, vars } = handler
    ? handler(event.payload)
    : { key: "fallback" };
  const repoName = event.repo?.name?.split("/")[1] || event.repo?.name;
  return { action: t(`github.events.${key}`, vars), repoName };
};

// ajuste essas cores se quiser combinar diferente com o resto do site
const calendarTheme = {
  light: ["#0a0a0a", "#0d2b3d", "#0f4c65", "#1a7fa0", "#38bdf8"],
  dark: ["#0a0a0a", "#0d2b3d", "#0f4c65", "#1a7fa0", "#38bdf8"],
};

const GithubActivity = () => {
  const { t, locale } = useTranslation();
  const [events, setEvents] = useState([]);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  // data curta no formato do idioma ativo
  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(locale, {
      day: "2-digit",
      month: "short",
    });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [eventsRes, reposRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
          ),
        ]);

        if (!eventsRes.ok || !reposRes.ok) {
          throw new Error("Falha ao consultar a API do GitHub");
        }

        const eventsData = await eventsRes.json();
        const reposData = await reposRes.json();

        if (cancelled) return;

        setEvents(eventsData.slice(0, 6));
        setRepos(
          [...reposData]
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4),
        );
        setStatus("ready");
      } catch (err) {
        if (!cancelled) setStatus("error");
        console.log(err);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="github"
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
          {t("github.title")}
        </h2>

        {/* heatmap de contribuicoes, via react-github-calendar */}
        <div className="rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90 p-4 sm:p-6 mb-8 overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme="dark"
            theme={calendarTheme}
            fontSize={12}
            blockSize={11}
            blockMargin={4}
          />
        </div>

        {status === "error" && (
          <p className="font-mono text-sm text-white/40">
            {t("github.error")}
          </p>
        )}

        {status !== "error" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* atividade recente */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90">
              <div className="px-4 sm:px-6 py-2 bg-neutral-900 border-b border-white/10 font-mono text-xs text-white/60">
                {t("github.recentPath")}
              </div>

              <div className="px-4 sm:px-6 py-4">
                {status === "loading" && (
                  <p className="font-mono text-xs text-white/40">
                    {t("common.loading")}
                  </p>
                )}

                {status === "ready" && events.length === 0 && (
                  <p className="font-mono text-xs text-white/40">
                    {t("github.empty")}
                  </p>
                )}

                <ul className="space-y-3">
                  {events.map((event) => {
                    const { action, repoName } = describeEvent(event, t);
                    return (
                      <li
                        key={event.id}
                        className="flex items-baseline justify-between gap-4 font-mono text-sm border-b border-white/5 last:border-b-0 pb-3 last:pb-0"
                      >
                        <span className="text-white/70 min-w-0">
                          {action}{" "}
                          <span className="text-sky-400">{repoName}</span>
                        </span>
                        <span className="text-white/30 text-xs shrink-0">
                          {formatDate(event.created_at)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* repositorios em destaque, ordenados por estrelas */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-neutral-950/90">
              <div className="px-4 sm:px-6 py-2 bg-neutral-900 border-b border-white/10 font-mono text-xs text-white/60">
                {t("github.reposPath")}
              </div>

              <div className="px-4 sm:px-6 py-4">
                {status === "loading" && (
                  <p className="font-mono text-xs text-white/40">
                    {t("common.loading")}
                  </p>
                )}

                <ul className="space-y-4">
                  {repos.map((repo) => (
                    <li
                      key={repo.id}
                      className="border-b border-white/5 last:border-b-0 pb-4 last:pb-0"
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm text-white/90 hover:text-sky-400 transition-colors"
                      >
                        {repo.name}
                      </a>
                      {repo.description && (
                        <p className="text-sm text-white/50 mt-1">
                          {repo.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-2 font-mono text-xs text-white/40">
                        {repo.language && <span>{repo.language}</span>}
                        <span>★ {repo.stargazers_count}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubActivity;

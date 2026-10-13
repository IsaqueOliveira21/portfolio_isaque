import Contact from "./components/contacts/Contact";
import GithubActivity from "./components/githubActivity/GithubActivity";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/skills/Skills";
import Social from "./components/social/Social";
import { useTranslation } from "./i18n/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Header />
      <SectionDivider index={1} label={t("dividers.skills")} />
      <Skills />
      <SectionDivider index={2} label={t("dividers.projects")} />
      <Projects />
      <SectionDivider index={3} label={t("dividers.github")} />
      <GithubActivity />
      <SectionDivider index={4} label={t("dividers.social")} />
      <Social />
      <SectionDivider index={5} label={t("dividers.contact")} />
      <Contact />
    </div>
  );
};

export default Home;

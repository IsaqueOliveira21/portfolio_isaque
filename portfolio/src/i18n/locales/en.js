// English. Keep the same key structure as pt-BR.js.
// Missing keys fall back to pt-BR automatically.
const en = {
  meta: {
    htmlLang: "en",
    dateLocale: "en-US",
    title: "Isaque Oliveira · Full Stack Developer",
  },

  language: {
    label: "Language",
    name: "English",
    switchTo: "Switch to {{language}}",
  },

  common: {
    loading: "loading...",
  },

  header: {
    role: "Full Stack Developer",
    location: "Natal, RN, Brazil",
    scroll: "scroll",
  },

  nav: {
    skills: "Skills",
    projects: "Projects",
    github: "GitHub Activity",
    social: "Social",
    contact: "Contact",
  },

  dividers: {
    skills: "skills",
    projects: "projects",
    github: "github-activity",
    social: "social",
    contact: "contact",
  },

  terminal: {
    titleBar: "guest@isaque: ~",
    open: "Open terminal",
    close: "Close terminal",
    welcome: "Welcome. Type 'help' to see the list of available commands.",
    commandNotFound: "Command not found",
    fileNotFound: "File not found",
    status: "status: {{status}}",
    help: {
      title: "available commands:",
      commands: [
        { cmd: "help", desc: "show this list" },
        { cmd: "ls", desc: "list the files" },
        { cmd: "cat <file>", desc: "show the content of a file" },
        { cmd: "clear", desc: "clear the terminal" },
        { cmd: "whoami", desc: "who is the dev behind this portfolio" },
      ],
      hint: "tip: try  cat skills.txt",
    },
    whoami: {
      name: "Isaque Oliveira",
      tagline: "Full Stack Developer · Natal, RN, Brazil",
      bio: [
        "I work with PHP, Laravel, React and relational",
        "databases, building web applications end to end.",
      ],
      learning: "Currently studying: Next.js, AI agents and Python.",
    },
    files: {
      skills: {
        legend: "levels: primary | secondary | learning",
      },
      projects: {
        stack: "stack: {{list}}",
        github: "github:",
        preview: "preview:",
      },
      github: {
        title: "public activity on github",
        profile: "profile",
        note: [
          "heatmap, recent activity and featured repositories",
          "are in the GITHUB ACTIVITY section, scroll down.",
        ],
      },
      social: {
        title: "social",
      },
      contact: {
        title: "contact",
        email: "email",
        whatsapp: "whatsapp  via the button in the CONTACT section",
      },
    },
  },

  skills: {
    title: "SKILLS",
    levels: {
      main: "primary",
      secondary: "secondary",
      learning: "learning",
    },
    categories: {
      backend: "~/skills/backend",
      frontend: "~/skills/frontend",
      database: "~/skills/database",
      devops: "~/skills/devops-tools",
      learning: "~/skills/learning-now",
      ai: "~/skills/most-used-ai",
    },
  },

  projects: {
    title: "PROJECTS",
    path: "~/projects",
    github: "github",
    preview: "preview",
    prints: "screenshots ({{count}})",
    printAlt: "Screenshot {{index}} of {{name}}",
    prevImage: "Previous image",
    nextImage: "Next image",
    items: {
      "3i-esportes": {
        description: `
          A management system for sports schools that centralizes administrative and educational processes on a single platform, 
          connecting school administrators, teachers, and parents or guardians. It enables student progress tracking, attendance recording, 
          performance assessments, class and sports program management, report access, and financial management.
          `,
      },
      fiduz: {
        description: `
          CRM system developed for a financial and accounting consulting firm specializing in FIDCs (Credit Rights Investment Funds). 
          The platform centralizes client management and sales process tracking through Kanban-style pipelines, 
          while also providing tools for visit reports, client follow-ups, document organization, management of operated VOPs, 
          and event scheduling through an integrated calendar.
          `,
      },
      lumenz: {
        description: `
          Lumenz is a sales and financial management system designed for small businesses. The platform allows users to manage products and customers, 
          handle sales and customizable service orders, generate sales reports and PDF receipts, and share receipts through links. 
          It also provides cash flow tracking, an overview of received and outstanding payments, and charts to analyze income and expenses.
          `,
      },
    },
  },

  github: {
    title: "GITHUB ACTIVITY",
    recentPath: "~/github/recent-activity",
    reposPath: "~/github/repositories",
    error:
      "Could not load GitHub data right now. Try reloading the page in a few minutes (the public API has an hourly rate limit).",
    empty: "no recent public activity.",
    events: {
      pushOne: "pushed (1 commit)",
      pushOther: "pushed ({{count}} commits)",
      createRepository: "created the repository",
      createBranch: "created a branch",
      createTag: "created a tag",
      pullRequestOpened: "opened a pull request",
      pullRequestClosed: "closed a pull request",
      pullRequestOther: "{{action}} a pull request",
      issueOpened: "opened an issue",
      issueClosed: "closed an issue",
      issueOther: "{{action}} an issue",
      issueComment: "commented on an issue",
      watch: "starred the repository",
      fork: "forked the repository",
      deleteBranch: "deleted a branch",
      deleteTag: "deleted a tag",
      fallback: "had activity",
    },
  },

  social: {
    title: "SOCIAL",
  },

  contact: {
    title: "CONTACT",
    heading: ["LET'S", "TALK?"],
    availability: "available for new projects",
    copyAria: "Copy e-mail {{email}}",
    clickToCopy: "click to copy",
    copied: "copied ✓",
    mailApp: "or open in your e-mail app",
    whatsapp: "message on whatsapp",
    whatsappMessage: "Hi Isaque, I saw your portfolio and would like to talk!",
    marquee: "AVAILABLE FOR NEW PROJECTS",
  },
};

export default en;

// Portugues do Brasil. Este e o idioma padrao do site:
// qualquer chave que faltar em en.js ou es.js cai de volta pra ca.
//
// Pra adicionar um texto novo: cria a chave aqui e replica em en.js e es.js.
// Pra usar no componente: const { t } = useTranslation(); t("caminho.da.chave")
// Listas (arrays) sao lidas com tList("caminho.da.chave").
const ptBR = {
  meta: {
    htmlLang: "pt-BR",
    // usado em toLocaleDateString, pra formatar datas no padrao do idioma
    dateLocale: "pt-BR",
    title: "Isaque Oliveira · Desenvolvedor Full Stack",
  },

  language: {
    label: "Idioma",
    name: "Português (Brasil)",
    switchTo: "Mudar para {{language}}",
  },

  common: {
    loading: "carregando...",
  },

  header: {
    role: "Desenvolvedor Full Stack",
    location: "Natal, RN, Brasil",
    scroll: "rolar",
  },

  // menu lateral do header
  nav: {
    skills: "Habilidades",
    projects: "Projetos",
    github: "Atividade GitHub",
    social: "Redes",
    contact: "Contato",
  },

  // texto dos divisores entre secoes: // 01 — habilidades
  dividers: {
    skills: "habilidades",
    projects: "projetos",
    github: "atividade-github",
    social: "redes",
    contact: "contato",
  },

  terminal: {
    titleBar: "guest@isaque: ~",
    open: "Abrir terminal",
    close: "Fechar terminal",
    welcome:
      "Bem-vindo. Digite 'help' para ver a lista de comandos disponíveis.",
    commandNotFound: "Comando não encontrado",
    fileNotFound: "Arquivo não encontrado",
    status: "status: {{status}}",
    help: {
      title: "comandos disponíveis:",
      // o alinhamento da coluna da direita e calculado no codigo,
      // nao precisa contar espacos aqui
      commands: [
        { cmd: "help", desc: "exibe esta lista" },
        { cmd: "ls", desc: "lista os arquivos" },
        { cmd: "cat <arquivo>", desc: "mostra o conteúdo de um arquivo" },
        { cmd: "clear", desc: "limpa o terminal" },
        { cmd: "whoami", desc: "quem é o dev deste portfólio" },
      ],
      hint: "dica: tente  cat skills.txt",
    },
    whoami: {
      name: "Isaque Oliveira",
      tagline: "Desenvolvedor Full Stack · Natal, RN, Brasil",
      bio: [
        "Trabalho com PHP, Laravel, React e bancos de dados",
        "relacionais, construindo aplicações web de ponta a ponta.",
      ],
      learning: "Agora estudando: Next.js, agentes de IA e Python.",
    },
    files: {
      skills: {
        legend: "níveis: principal | secundário | aprendendo",
      },
      projects: {
        stack: "stack: {{list}}",
        github: "github:",
        preview: "preview:",
      },
      github: {
        title: "atividade pública no github",
        profile: "perfil",
        note: [
          "heatmap, atividade recente e repositórios em destaque",
          "estão na seção ATIVIDADE GITHUB, role a página.",
        ],
      },
      social: {
        title: "redes",
      },
      contact: {
        title: "contato",
        email: "email",
        whatsapp: "whatsapp  pelo botão na seção CONTATO",
      },
    },
  },

  skills: {
    title: "HABILIDADES",
    // os niveis vem de data/skills.js (main | secondary | learning)
    levels: {
      main: "principal",
      secondary: "secundário",
      learning: "aprendendo",
    },
    // o id de cada categoria vem de data/skills.js
    categories: {
      backend: "~/habilidades/backend",
      frontend: "~/habilidades/frontend",
      database: "~/habilidades/banco-de-dados",
      devops: "~/habilidades/devops-ferramentas",
      learning: "~/habilidades/aprendendo-agora",
      ai: "~/habilidades/ias-mais-usadas",
    },
  },

  projects: {
    title: "PROJETOS",
    path: "~/projetos",
    github: "github",
    preview: "preview",
    prints: "prints ({{count}})",
    printAlt: "Print {{index}} de {{name}}",
    prevImage: "Imagem anterior",
    nextImage: "Próxima imagem",
    // a descricao de cada projeto, pelo id definido em data/projects.js
    items: {
      "3i-esportes": {
        description: `
          Sistema de gestão para escolas esportivas que centraliza os processos administrativos e educacionais em uma única plataforma, 
          conectando gestores, professores e responsáveis. Permite acompanhar o desenvolvimento dos alunos, 
          registrar frequências, realizar avaliações de desempenho, gerenciar turmas e modalidades esportivas, 
          consultar relatórios e controlar informações financeiras.
          `,
      },
      fiduz: {
        description: `
          CRM desenvolvido para uma empresa de consultoria financeira e contábil especializada em FIDCs. 
          A plataforma centraliza a gestão de clientes e o acompanhamento de processos comerciais por meio de pipelines em formato Kanban, 
          além de oferecer recursos para registro de visitas, acompanhamento de clientes, organização de documentos, 
          gestão de VOPs operados e controle de eventos por meio de uma agenda integrada.
          `,
      },
      lumenz: {
        description: `
          Lumenz é um sistema de gestão comercial e financeira desenvolvido para pequenos negócios. 
          A plataforma permite cadastrar produtos e clientes, gerenciar vendas e ordens de serviço personalizáveis, 
          gerar relatórios e recibos em PDF e compartilhar recibos por meio de links. Também reúne o controle do fluxo financeiro, 
          o acompanhamento de valores recebidos e pendentes e gráficos para análise de entradas e saídas.
          `,
      },
    },
  },

  github: {
    title: "ATIVIDADE GITHUB",
    recentPath: "~/github/atividade-recente",
    reposPath: "~/github/repositórios",
    error:
      "Não foi possível carregar os dados do GitHub agora. Tenta recarregar a página em alguns minutos (a API pública tem limite de requisições por hora).",
    empty: "nenhuma atividade pública recente.",
    // frases de cada tipo de evento do GitHub
    events: {
      pushOne: "fez push (1 commit)",
      pushOther: "fez push ({{count}} commits)",
      createRepository: "criou o repositório",
      createBranch: "criou uma branch",
      createTag: "criou uma tag",
      pullRequestOpened: "abriu um pull request",
      pullRequestClosed: "fechou um pull request",
      pullRequestOther: "{{action}} um pull request",
      issueOpened: "abriu uma issue",
      issueClosed: "fechou uma issue",
      issueOther: "{{action}} uma issue",
      issueComment: "comentou em uma issue",
      watch: "deu estrela no repositório",
      fork: "fez fork do repositório",
      deleteBranch: "removeu uma branch",
      deleteTag: "removeu uma tag",
      fallback: "teve atividade",
    },
  },

  social: {
    title: "REDES",
  },

  contact: {
    title: "CONTATO",
    // cada item do array e uma linha do titulo grande
    heading: ["VAMOS", "CONVERSAR?"],
    availability: "disponível para novos projetos",
    copyAria: "Copiar e-mail {{email}}",
    clickToCopy: "clique para copiar",
    copied: "copiado ✓",
    mailApp: "ou abrir no app de e-mail",
    whatsapp: "chamar no whatsapp",
    whatsappMessage: "Olá Isaque, vi seu portfólio e queria conversar!",
    marquee: "DISPONÍVEL PARA NOVOS PROJETOS",
  },
};

export default ptBR;

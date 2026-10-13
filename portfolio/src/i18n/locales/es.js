// Espanol. Manter a mesma estrutura de chaves de pt-BR.js.
// Chaves que faltarem caem automaticamente pro pt-BR.
const es = {
  meta: {
    htmlLang: "es",
    dateLocale: "es-ES",
    title: "Isaque Oliveira · Desarrollador Full Stack",
  },

  language: {
    label: "Idioma",
    name: "Español",
    switchTo: "Cambiar a {{language}}",
  },

  common: {
    loading: "cargando...",
  },

  header: {
    role: "Desarrollador Full Stack",
    location: "Natal, RN, Brasil",
    scroll: "desplazar",
  },

  nav: {
    skills: "Habilidades",
    projects: "Proyectos",
    github: "Actividad GitHub",
    social: "Redes",
    contact: "Contacto",
  },

  dividers: {
    skills: "habilidades",
    projects: "proyectos",
    github: "actividad-github",
    social: "redes",
    contact: "contacto",
  },

  terminal: {
    titleBar: "guest@isaque: ~",
    open: "Abrir terminal",
    close: "Cerrar terminal",
    welcome:
      "Bienvenido. Escribe 'help' para ver la lista de comandos disponibles.",
    commandNotFound: "Comando no encontrado",
    fileNotFound: "Archivo no encontrado",
    status: "estado: {{status}}",
    help: {
      title: "comandos disponibles:",
      commands: [
        { cmd: "help", desc: "muestra esta lista" },
        { cmd: "ls", desc: "lista los archivos" },
        { cmd: "cat <archivo>", desc: "muestra el contenido de un archivo" },
        { cmd: "clear", desc: "limpia la terminal" },
        { cmd: "whoami", desc: "quién es el dev de este portafolio" },
      ],
      hint: "consejo: prueba  cat skills.txt",
    },
    whoami: {
      name: "Isaque Oliveira",
      tagline: "Desarrollador Full Stack · Natal, RN, Brasil",
      bio: [
        "Trabajo con PHP, Laravel, React y bases de datos",
        "relacionales, construyendo aplicaciones web de punta a punta.",
      ],
      learning: "Ahora estudiando: Next.js, agentes de IA y Python.",
    },
    files: {
      skills: {
        legend: "niveles: principal | secundario | aprendiendo",
      },
      projects: {
        stack: "stack: {{list}}",
        github: "github:",
        preview: "preview:",
      },
      github: {
        title: "actividad pública en github",
        profile: "perfil",
        note: [
          "el heatmap, la actividad reciente y los repositorios destacados",
          "están en la sección ACTIVIDAD GITHUB, desplaza la página.",
        ],
      },
      social: {
        title: "redes",
      },
      contact: {
        title: "contacto",
        email: "email",
        whatsapp: "whatsapp  con el botón de la sección CONTACTO",
      },
    },
  },

  skills: {
    title: "HABILIDADES",
    levels: {
      main: "principal",
      secondary: "secundario",
      learning: "aprendiendo",
    },
    categories: {
      backend: "~/habilidades/backend",
      frontend: "~/habilidades/frontend",
      database: "~/habilidades/base-de-datos",
      devops: "~/habilidades/devops-herramientas",
      learning: "~/habilidades/aprendiendo-ahora",
      ai: "~/habilidades/ias-mas-usadas",
    },
  },

  projects: {
    title: "PROYECTOS",
    path: "~/proyectos",
    github: "github",
    preview: "preview",
    prints: "capturas ({{count}})",
    printAlt: "Captura {{index}} de {{name}}",
    prevImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    items: {
      "3i-esportes": {
        description: `
          Sistema de gestión para escuelas deportivas que centraliza los procesos administrativos y educativos en una sola plataforma, 
          conectando a los gestores, profesores y tutores. Permite realizar un seguimiento del desarrollo de los alumnos, registrar la asistencia, 
          evaluar el rendimiento, gestionar grupos y disciplinas deportivas, consultar informes y administrar la información financiera.
          `,
      },
      fiduz: {
        description: `
          CRM desarrollado para una empresa de consultoría financiera y contable especializada en FIDCs (Fondos de Inversión en Derechos de Crédito). 
          La plataforma centraliza la gestión de clientes y el seguimiento de los procesos comerciales mediante pipelines en formato Kanban. 
          También ofrece funcionalidades para registrar visitas, realizar el seguimiento de clientes, organizar documentos, 
          gestionar VOPs operados y controlar eventos mediante una agenda integrada.
          `,
      },
      lumenz: {
        description: `
          Lumenz es un sistema de gestión comercial y financiera diseñado para pequeños negocios. La plataforma permite registrar productos y clientes, 
          gestionar ventas y órdenes de servicio personalizables, generar informes de ventas y recibos en PDF, y compartirlos mediante enlaces. 
          También ofrece control del flujo de caja, seguimiento de los pagos recibidos y pendientes, y gráficos para analizar los ingresos y gastos.
          `,
      },
    },
  },

  github: {
    title: "ACTIVIDAD GITHUB",
    recentPath: "~/github/actividad-reciente",
    reposPath: "~/github/repositorios",
    error:
      "No se pudieron cargar los datos de GitHub ahora. Prueba a recargar la página en unos minutos (la API pública tiene un límite de peticiones por hora).",
    empty: "sin actividad pública reciente.",
    events: {
      pushOne: "hizo push (1 commit)",
      pushOther: "hizo push ({{count}} commits)",
      createRepository: "creó el repositorio",
      createBranch: "creó una rama",
      createTag: "creó una etiqueta",
      pullRequestOpened: "abrió un pull request",
      pullRequestClosed: "cerró un pull request",
      pullRequestOther: "{{action}} un pull request",
      issueOpened: "abrió una issue",
      issueClosed: "cerró una issue",
      issueOther: "{{action}} una issue",
      issueComment: "comentó en una issue",
      watch: "dio una estrella al repositorio",
      fork: "hizo fork del repositorio",
      deleteBranch: "eliminó una rama",
      deleteTag: "eliminó una etiqueta",
      fallback: "tuvo actividad",
    },
  },

  social: {
    title: "REDES",
  },

  contact: {
    title: "CONTACTO",
    heading: ["¿HABLAMOS", "AHORA?"],
    availability: "disponible para nuevos proyectos",
    copyAria: "Copiar e-mail {{email}}",
    clickToCopy: "clic para copiar",
    copied: "copiado ✓",
    mailApp: "o abrir en la app de e-mail",
    whatsapp: "escribir por whatsapp",
    whatsappMessage: "¡Hola Isaque, vi tu portafolio y me gustaría hablar!",
    marquee: "DISPONIBLE PARA NUEVOS PROYECTOS",
  },
};

export default es;

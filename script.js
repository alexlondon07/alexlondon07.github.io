const resumeData = {
  es: {
    actions: { pdf: "Imprimir CV" },
    hero: { eyebrow: "Senior software engineer | 2026" },
    profile: {
      name: "Alexander Andres Londono Espejo",
      role: "Senior Java Developer | Software Engineer",
      status: "Globant | British Airways | Disney Parks & Resorts",
    },
    summary: {
      body: "Ingeniero de software senior con mas de 12 anos construyendo plataformas backend, microservicios y soluciones cloud para productos internacionales. Especializado en Java, Spring Boot, WebFlux, AWS y arquitecturas orientadas a eventos, con experiencia reciente en automatizacion, desarrollo guiado por especificaciones y herramientas de IA como Kiro, GitHub Copilot y Claude.",
    },
    sections: {
      skills: "Habilidades tecnicas",
      education: "Educacion y certificaciones",
      languages: "Idiomas",
      experience: "Experiencia laboral",
      projects: "Proyectos destacados",
    },
    labels: {
      location: "Ubicacion",
      email: "Email",
      linkedin: "LinkedIn",
      phone: "Telefono",
      github: "GitHub",
      web: "Web",
      stack: "Stack",
      architecture: "Arquitectura",
      view: "Ver enlace",
    },
    stats: [
      ["12+", "anos de experiencia"],
      ["8+", "companias y clientes"],
      ["3+", "proyectos internacionales"],
    ],
    contacts: [
      ["phone", "+57 312 219 5522", "tel:+573122195522"],
      ["location", "Medellin, Colombia", ""],
      ["email", "alexlondon07@gmail.com", "mailto:alexlondon07@gmail.com"],
      ["linkedin", "linkedin.com/in/alexanderlondono1", "https://www.linkedin.com/in/alexanderlondono1/"],
      ["github", "github.com/alexlondon07", "https://github.com/alexlondon07"],
      ["web", "alexlondon07.com", "https://alexlondon07.com"],
    ],
    skills: [
      ["Backend", ["Java 8/11/17", "Spring Boot", "Spring WebFlux", "Spring Cloud", "REST APIs", "Microservicios", "Clean Architecture", "JPA"]],
      ["Frontend", ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"]],
      ["AWS & Cloud", ["AWS", "Lambda", "ECS", "EKS", "API Gateway", "EventBridge", "SQS", "SNS", "S3", "RDS", "DynamoDB", "CloudWatch", "IAM"]],
      ["Delivery & Automation", ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Argo CD", "CI/CD", "Serverless", "Automation", "Scrum"]],
      ["Ingenieria asistida por IA", ["Kiro", "GitHub Copilot", "Amazon Q", "Claude Code", "Claude", "Hooks", "Spec-driven development", "Code review", "Test automation"]],
      ["DB & Observability", ["PostgreSQL", "MySQL", "MongoDB", "Datadog", "Splunk", "Grafana", "New Relic"]],
    ],
    education: [
      ["Ingeniero de Sistemas", "Instituto Tecnologico Metropolitano ITM, 2012 - 2014 | Semillero de computacion en la nube"],
      ["Tecnologo en Sistemas de Informacion", "Instituto Tecnologico Metropolitano ITM, 2008 - 2013"],
      ["SI Architect Certification Program", "MongoDB, Aug 2024"],
      ["B1 Intermediate", "English Services, Sep 2024"],
      ["Apache Kafka con Java, Spring Framework y AWS", "Udemy, Apr 2024"],
      ["AWS Technical Essentials", "Amazon Web Services, Jan 2024"],
      ["MicSI Associate Certification Program", "MongoDB, May 2023"],
      ["MongoDB CRUD Operations: Replace and Delete Documents", "MongoDB"],
      ["Microservices with Spring Cloud", "In process"],
      ["Build Reactive Microservices with Spring WebFlux", "Udemy, Feb 2023"],
      ["Reactive Programming with Spring Boot 2 and Spring WebFlux", "Udemy, Oct 2022"],
      ["Microservices with Spring Cloud and Angular Full-stack", "Udemy, Aug 2022"],
      ["SOLID, Clean Code and Software Design Patterns", "Udemy, Aug 2022"],
      ["Spring Boot for Software Engineers", "Udemy, Aug 2022"],
      ["Docker for Java Developers", "Udemy, Aug 2022"],
      ["Microservices: Designing Highly Scalable Systems", "Udemy, Apr 2022"],
      ["Microservices with Spring Boot and Spring Cloud Netflix Eureka", "Udemy, Mar 2022"],
      ["Java Streams API Developer Guide", "Udemy, Feb 2022"],
      ["Business English: Easy English for Meetings", "Udemy, Feb 2022"],
      ["REST Systems in Java and Quality Code & Refactoring", "Acamica, Aug 2021"],
      ["Secure Development Workshop", "Netec, Jul 2021"],
      ["Diploma in Multiplatform Mobile Development with React Native", "Cedesistemas, Aug 2018"],
      ["Development for Android Mobile Devices - Advanced Level", "Cedesistemas, Sep 2017"],
    ],
    languages: [
      ["Espanol", "Nativo"],
      ["Ingles", "Competencia profesional"],
    ],
    experience: [
      {
        title: "Java Developer Ssr Adv",
        company: "Globant / British Airways",
        period: "Ago 2021 - Actual",
        achievements: [
          "Diseno y evolucion de microservicios reactivos de alto rendimiento con Java, Spring Boot, WebFlux y Clean Architecture.",
          "Diseno de sistemas event-driven con AWS SQS y SNS, integrando servicios desacoplados y comunicacion asincrona.",
          "Implementacion de pipelines CI/CD automatizados con GitHub Actions y Argo CD para despliegues en Kubernetes.",
          "Construccion de dashboards en Splunk y Grafana, monitoreo con Datadog y AWS CloudWatch, y respuesta a incidentes con analisis de causa raiz.",
          "Aplicacion de spec-driven development y herramientas de IA como Kiro, GitHub Copilot y Claude para acelerar analisis, implementacion y revisiones.",
          "Entrega de funcionalidades para British Airways, Disney Parks & Resorts, Disney Cruise Line y BetterMe4Glb.",
        ],
        stack: "Java 8/11, Spring Boot, WebFlux, AWS, Lambda, SQS, SNS, Docker, JUnit, Mockito, Maven, Gradle",
      },
      {
        title: "Consultant",
        company: "Axity",
        period: "Mar 2021 - Jul 2021",
        achievements: [
          "Diseno y construccion de soluciones end-to-end para una plataforma de Identity Governance and Administration (IGA).",
          "Desarrollo de microservicios backend con Java y Spring Boot y componentes frontend con Angular.",
          "Implementacion de pruebas unitarias y pipelines CI/CD en Azure DevOps para elevar la calidad y confiabilidad de las entregas.",
        ],
        stack: "Java, Spring Boot, Angular, JUnit, Mockito, Jest, AWS, Azure DevOps, SQL",
      },
      {
        title: "Application Development Analyst",
        company: "Accenture",
        period: "Oct 2019 - Feb 2021",
        achievements: [
          "Diseno, desarrollo y configuracion de aplicaciones empresariales con Angular 7/8/9 y Spring Boot.",
          "Transformacion de requerimientos de negocio en soluciones mantenibles, probables y listas para evolucionar.",
          "Colaboracion con equipos distribuidos mediante Azure DevOps, AWS y practicas de entrega iterativa.",
        ],
        stack: "Spring Boot, Angular 7/8/9, Azure DevOps, AWS",
      },
      {
        title: "Backlog Developer Analyst",
        company: "Konecta Colombia",
        period: "Mar 2019 - Oct 2019",
        achievements: [
          "Implementacion de soluciones empresariales con Java, Spring, PHP Laravel y Angular.",
          "Integracion de sistemas mediante servicios web RESTful y APIs REST.",
          "Analisis, diseno y documentacion de requerimientos e integraciones orientadas al cliente.",
        ],
        stack: "Java, Spring, Laravel, Angular, REST APIs",
      },
      {
        title: "Junior Analyst Developer",
        company: "Grupo Reditos",
        period: "Abr 2017 - Mar 2019",
        achievements: [
          "Desarrollo y soporte de soluciones empresariales con Java, JavaScript y Oracle Database.",
          "Construccion de aplicaciones moviles con Android Studio y atencion integral de requerimientos de software.",
        ],
        stack: "Java, JavaScript, Oracle, Android Studio",
      },
      {
        title: "Freelancer",
        company: "Independent projects",
        period: "Feb 2017 - Feb 2019",
        achievements: [
          "Entrega de soluciones de software a la medida para necesidades web y procesos de negocio.",
          "Desarrollo full-stack con Java, PHP, JavaScript, Laravel, Node.js, Angular y Spring Boot.",
        ],
        stack: "Java, PHP, JavaScript, Laravel, Node.js, Angular, Spring Boot",
      },
      {
        title: "Software Web Developer",
        company: "granada.io",
        period: "Dic 2016 - Feb 2017",
        achievements: [
          "Desarrollo de aplicaciones web con JavaScript, Angular 2 y TypeScript, enfocadas en una experiencia de usuario consistente.",
        ],
        stack: "JavaScript, Angular 2, TypeScript",
      },
      {
        title: "Back-end Developer",
        company: "Secuencia 24 S.A.S.",
        period: "Sep 2013 - Dic 2016",
        achievements: [
          "Desarrollo de CMS y soluciones web para clientes, participando en analisis, desarrollo, pruebas, implementacion y capacitacion.",
          "Diseno y desarrollo de componentes backend con PHP y frameworks web, cuidando mantenibilidad y calidad del producto.",
          "Analisis y especificacion de necesidades tecnicas, coordinacion de entregas y mejora continua de proyectos.",
        ],
        stack: "PHP, HTML5, CSS3, jQuery, Ajax, Laravel, Yii, Bootstrap, AngularJS",
      },
    ],
    projects: [
      {
        title: "British Airways Cloud Services",
        description: "Microservicios Java en AWS para flujos operativos, mensajeria y observabilidad de plataforma.",
        architecture: "Spring Boot, AWS, SQS, SNS, DynamoDB, RDS, Argo CD",
        link: "https://www.britishairways.com",
      },
      {
        title: "Disney Parks Mobile Ordering",
        description: "Servicios backend para experiencias de food & beverage y ordenes moviles en alto volumen.",
        architecture: "Java, Spring Boot, REST APIs, CI/CD, observability",
        link: "https://disneyworld.disney.go.com/guest-services/mobile-food-orders/",
      },
      {
        title: "Legacy POS & Business Systems",
        description: "Modernizacion de aplicaciones PHP/MySQL, automatizaciones, reportes financieros y herramientas operativas.",
        architecture: "PHP, MySQL, JavaScript, integrations, reporting",
        link: "https://github.com/alexlondon07",
      },
    ],
  },
  en: {
    actions: { pdf: "Print resume" },
    hero: { eyebrow: "Senior software engineer | 2026" },
    profile: {
      name: "Alexander Andres Londono Espejo",
      role: "Senior Java Developer | Software Engineer",
      status: "Globant | British Airways | Disney Parks & Resorts",
    },
    summary: {
      body: "Senior software engineer with 12+ years building backend platforms, microservices, and cloud solutions for international products. Specialized in Java, Spring Boot, WebFlux, AWS, and event-driven architectures, with recent focus on automation, spec-driven development, and AI tools including Kiro, GitHub Copilot, and Claude.",
    },
    sections: {
      skills: "Technical skills",
      education: "Education & certifications",
      languages: "Languages",
      experience: "Work experience",
      projects: "Featured projects",
    },
    labels: {
      location: "Location",
      email: "Email",
      linkedin: "LinkedIn",
      phone: "Phone",
      github: "GitHub",
      web: "Web",
      stack: "Stack",
      architecture: "Architecture",
      view: "View link",
    },
    stats: [
      ["12+", "years of experience"],
      ["8+", "companies and clients"],
      ["3+", "international projects"],
    ],
    contacts: [
      ["phone", "+57 312 219 5522", "tel:+573122195522"],
      ["location", "Medellin, Colombia", ""],
      ["email", "alexlondon07@gmail.com", "mailto:alexlondon07@gmail.com"],
      ["linkedin", "linkedin.com/in/alexanderlondono1", "https://www.linkedin.com/in/alexanderlondono1/"],
      ["github", "github.com/alexlondon07", "https://github.com/alexlondon07"],
      ["web", "alexlondon07.com", "https://alexlondon07.com"],
    ],
    skills: [
      ["Backend", ["Java 8/11/17", "Spring Boot", "Spring WebFlux", "Spring Cloud", "REST APIs", "Microservices", "Clean Architecture", "JPA"]],
      ["Frontend", ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"]],
      ["AWS & Cloud", ["AWS", "Lambda", "ECS", "EKS", "API Gateway", "EventBridge", "SQS", "SNS", "S3", "RDS", "DynamoDB", "CloudWatch", "IAM"]],
      ["Delivery & Automation", ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Argo CD", "CI/CD", "Serverless", "Automation", "Scrum"]],
      ["AI-assisted engineering", ["Kiro", "GitHub Copilot", "Amazon Q", "Claude Code", "Claude", "Hooks", "Spec-driven development", "Code review", "Test automation"]],
      ["DB & Observability", ["PostgreSQL", "MySQL", "MongoDB", "Datadog", "Splunk", "Grafana", "New Relic"]],
    ],
    education: [
      ["Systems Engineer", "Metropolitan Technological Institute ITM, 2012 - 2014 | Cloud computing group"],
      ["Information Systems Technologist", "Metropolitan Technological Institute ITM, 2008 - 2013"],
      ["SI Architect Certification Program", "MongoDB, Aug 2024"],
      ["B1 Intermediate", "English Services, Sep 2024"],
      ["Apache Kafka with Java, Spring Framework and AWS", "Udemy, Apr 2024"],
      ["AWS Technical Essentials", "Amazon Web Services, Jan 2024"],
      ["MicSI Associate Certification Program", "MongoDB, May 2023"],
      ["MongoDB CRUD Operations: Replace and Delete Documents", "MongoDB"],
      ["Microservices with Spring Cloud", "In process"],
      ["Build Reactive Microservices with Spring WebFlux", "Udemy, Feb 2023"],
      ["Reactive Programming with Spring Boot 2 and Spring WebFlux", "Udemy, Oct 2022"],
      ["Microservices with Spring Cloud and Angular Full-stack", "Udemy, Aug 2022"],
      ["SOLID, Clean Code and Software Design Patterns", "Udemy, Aug 2022"],
      ["Spring Boot for Software Engineers", "Udemy, Aug 2022"],
      ["Docker for Java Developers", "Udemy, Aug 2022"],
      ["Microservices: Designing Highly Scalable Systems", "Udemy, Apr 2022"],
      ["Microservices with Spring Boot and Spring Cloud Netflix Eureka", "Udemy, Mar 2022"],
      ["Java Streams API Developer Guide", "Udemy, Feb 2022"],
      ["Business English: Easy English for Meetings", "Udemy, Feb 2022"],
      ["REST Systems in Java and Quality Code & Refactoring", "Acamica, Aug 2021"],
      ["Secure Development Workshop", "Netec, Jul 2021"],
      ["Diploma in Multiplatform Mobile Development with React Native", "Cedesistemas, Aug 2018"],
      ["Development for Android Mobile Devices - Advanced Level", "Cedesistemas, Sep 2017"],
    ],
    languages: [
      ["Spanish", "Native"],
      ["English", "Professional working proficiency"],
    ],
    experience: [
      {
        title: "Java Developer Ssr Adv",
        company: "Globant / British Airways",
        period: "Aug 2021 - Present",
        achievements: [
          "Design and evolve high-performance reactive microservices with Java, Spring Boot, WebFlux, and Clean Architecture.",
          "Design event-driven systems with AWS SQS and SNS, integrating decoupled services and asynchronous communication.",
          "Implement automated CI/CD pipelines with GitHub Actions and Argo CD for Kubernetes deployments.",
          "Build Splunk and Grafana dashboards, monitor with Datadog and AWS CloudWatch, and lead incident response and root cause analysis.",
          "Apply spec-driven development and AI tools including Kiro, GitHub Copilot, and Claude across analysis, implementation, and review.",
          "Deliver features for British Airways, Disney Parks & Resorts, Disney Cruise Line, and BetterMe4Glb.",
        ],
        stack: "Java 8/11, Spring Boot, WebFlux, AWS, Lambda, SQS, SNS, Docker, JUnit, Mockito, Maven, Gradle",
      },
      {
        title: "Consultant",
        company: "Axity",
        period: "Mar 2021 - Jul 2021",
        achievements: [
          "Designed and built end-to-end solutions for an Identity Governance and Administration (IGA) platform.",
          "Developed Java and Spring Boot backend microservices and Angular frontend components.",
          "Implemented unit testing and Azure DevOps CI/CD pipelines to improve delivery quality and reliability.",
        ],
        stack: "Java, Spring Boot, Angular, JUnit, Mockito, Jest, AWS, Azure DevOps, SQL",
      },
      {
        title: "Application Development Analyst",
        company: "Accenture",
        period: "Oct 2019 - Feb 2021",
        achievements: [
          "Designed, developed, and configured enterprise applications with Angular 7/8/9 and Spring Boot.",
          "Translated business requirements into maintainable solutions ready to evolve with changing needs.",
          "Collaborated with distributed teams using Azure DevOps, AWS, and iterative delivery practices.",
        ],
        stack: "Spring Boot, Angular 7/8/9, Azure DevOps, AWS",
      },
      {
        title: "Backlog Developer Analyst",
        company: "Konecta Colombia",
        period: "Mar 2019 - Oct 2019",
        achievements: [
          "Implemented enterprise solutions with Java, Spring, PHP Laravel, and Angular.",
          "Integrated systems through RESTful web services and REST APIs.",
          "Analyzed, designed, and documented client requirements and integration services.",
        ],
        stack: "Java, Spring, Laravel, Angular, REST APIs",
      },
      {
        title: "Junior Analyst Developer",
        company: "Grupo Reditos",
        period: "Apr 2017 - Mar 2019",
        achievements: [
          "Developed and supported enterprise solutions with Java, JavaScript, and Oracle Database.",
          "Built Android mobile applications and managed software requirements through delivery and support.",
        ],
        stack: "Java, JavaScript, Oracle, Android Studio",
      },
      {
        title: "Freelancer",
        company: "Independent projects",
        period: "Feb 2017 - Feb 2019",
        achievements: [
          "Delivered custom software solutions for web products and business processes.",
          "Developed full-stack solutions with Java, PHP, JavaScript, Laravel, Node.js, Angular, and Spring Boot.",
        ],
        stack: "Java, PHP, JavaScript, Laravel, Node.js, Angular, Spring Boot",
      },
      {
        title: "Software Web Developer",
        company: "granada.io",
        period: "Dec 2016 - Feb 2017",
        achievements: [
          "Developed web applications with JavaScript, Angular 2, and TypeScript, with focus on a consistent user experience.",
        ],
        stack: "JavaScript, Angular 2, TypeScript",
      },
      {
        title: "Back-end Developer",
        company: "Secuencia 24 S.A.S.",
        period: "Sep 2013 - Dec 2016",
        achievements: [
          "Developed CMS and web solutions for clients across analysis, development, testing, implementation, and training.",
          "Designed and developed backend components with PHP and web frameworks, focusing on maintainability and quality.",
          "Analyzed and specified technical needs, coordinated deliveries, and contributed to continuous project improvement.",
        ],
        stack: "PHP, HTML5, CSS3, jQuery, Ajax, Laravel, Yii, Bootstrap, AngularJS",
      },
    ],
    projects: [
      {
        title: "British Airways Cloud Services",
        description: "Java microservices on AWS for operational flows, messaging, and platform observability.",
        architecture: "Spring Boot, AWS, SQS, SNS, DynamoDB, RDS, Argo CD",
        link: "https://www.britishairways.com",
      },
      {
        title: "Disney Parks Mobile Ordering",
        description: "Backend services for high-volume food and beverage mobile ordering experiences.",
        architecture: "Java, Spring Boot, REST APIs, CI/CD, observability",
        link: "https://disneyworld.disney.go.com/guest-services/mobile-food-orders/",
      },
      {
        title: "Legacy POS & Business Systems",
        description: "Modernization of PHP/MySQL apps, automations, financial reporting, and operational tools.",
        architecture: "PHP, MySQL, JavaScript, integrations, reporting",
        link: "https://github.com/alexlondon07",
      },
    ],
  },
};

const storage = {
  get(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Private browsing and restrictive browser policies may block storage.
    }
  },
};

const state = {
  lang: ["es", "en"].includes(storage.get("resume:lang", "es")) ? storage.get("resume:lang", "es") : "es",
  theme: storage.get("resume:theme", getSystemTheme()),
};

function getSystemTheme() {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source) ?? "";
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  storage.set("resume:theme", theme);

  const icon = document.querySelector("[data-theme-icon]");
  const button = document.querySelector("[data-theme-toggle]");
  if (icon) icon.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  if (button) button.setAttribute("aria-label", theme === "dark" ? "Activar modo claro" : "Activar modo oscuro");
  refreshIcons();
}

function setLanguage(lang) {
  state.lang = lang;
  storage.set("resume:lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const active = button.dataset.langOption === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  render();
}

function renderStaticText(data) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = getPath(data, node.dataset.i18n);
  });
  document.title = `${data.profile.name} | ${data.profile.role}`;
}

function renderStats(data) {
  const target = document.querySelector('[data-render="stats"]');
  target.innerHTML = data.stats
    .map(([value, label]) => `<div><dt>${value}</dt><dd>${label}</dd></div>`)
    .join("");
}

function renderContacts(data) {
  const target = document.querySelector('[data-render="contacts"]');
  const icons = { phone: "phone", location: "map-pin", email: "mail", linkedin: "linkedin", github: "github", web: "globe-2" };
  target.innerHTML = data.contacts
    .map(([key, value, href]) => {
      const valueNode = href
        ? `<a class="contact-value" href="${href}" target="${href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${value}</a>`
        : `<span class="contact-value">${value}</span>`;
      return `<article class="contact-item"><span class="contact-label"><i data-lucide="${icons[key]}" aria-hidden="true"></i>${data.labels[key]}</span>${valueNode}</article>`;
    })
    .join("");
  refreshIcons();
}

function renderSkills(data) {
  const target = document.querySelector('[data-render="skills"]');
  const skillLogos = {
    Java: "java",
    "Spring Boot": "spring",
    "Spring WebFlux": "spring",
    "Spring Cloud": "spring",
    React: "react",
    "Next.js": "nextdotjs",
    Angular: "angular",
    TypeScript: "typescript",
    JavaScript: "javascript",
    HTML5: "html5",
    Docker: "docker",
    Kubernetes: "kubernetes",
    "GitHub Actions": "githubactions",
    Jenkins: "jenkins",
    "Argo CD": "argo",
    PostgreSQL: "postgresql",
    MySQL: "mysql",
    MongoDB: "mongodb",
    Datadog: "datadog",
    Splunk: "splunk",
    Grafana: "grafana",
    "New Relic": "newrelic",
    "GitHub Copilot": "githubcopilot",
    "Claude Code": "anthropic",
    Claude: "anthropic",
  };
  const skillLucideIcons = {
    CSS3: "code-2",
    AWS: "cloud",
    Lambda: "function-square",
    ECS: "box",
    EKS: "boxes",
    "API Gateway": "route",
    EventBridge: "zap",
    SQS: "mail",
    SNS: "send",
    S3: "database",
    RDS: "database",
    DynamoDB: "table-2",
    CloudWatch: "activity",
    IAM: "shield-check",
    Kiro: "bot",
    "Amazon Q": "sparkles",
    Hooks: "git-branch",
    "Spec-driven development": "file-code-2",
    "Code review": "git-pull-request",
    "Test automation": "test-tube",
  };
  target.innerHTML = data.skills
    .map(([group, skills]) => `
      <article class="skill-group">
        <h3>${group}</h3>
        <div class="pill-list">${skills.map((skill) => {
          const logo = skillLogos[skill];
          const fallbackIcon = skillLucideIcons[skill];
          const logoNode = logo
            ? `<img src="https://cdn.simpleicons.org/${logo}" alt="" aria-hidden="true" onload="this.parentElement.querySelector('.skill-fallback')?.setAttribute('hidden', '')" onerror="this.hidden=true">`
            : "";
          const fallbackNode = fallbackIcon ? `<i class="skill-fallback" data-lucide="${fallbackIcon}" aria-hidden="true"></i>` : "";
          return `<span class="pill">${logoNode}${fallbackNode}<span>${skill}</span></span>`;
        }).join("")}</div>
      </article>
    `)
    .join("");
}

function renderEducation(data) {
  const target = document.querySelector('[data-render="education"]');
  target.innerHTML = data.education
    .map(([title, detail]) => `<article class="compact-card"><h3>${title}</h3><p>${detail}</p></article>`)
    .join("");
}

function renderLanguages(data) {
  const target = document.querySelector('[data-render="languages"]');
  target.innerHTML = data.languages
    .map(([name, level]) => `<article class="language-card"><strong>${name}</strong><p>${level}</p></article>`)
    .join("");
}

function getCompanyBrand(company) {
  const brands = [
    { match: "Globant", initials: "GL" },
    { match: "Grupo Reditos", initials: "GR" },
    { match: "Axity", initials: "AX" },
    { match: "Accenture", logos: ["accenture"], initials: "AC" },
    { match: "Konecta", initials: "KO" },
    { match: "Freelancer", initials: "FR" },
  ];
  return brands.find((brand) => company.includes(brand.match)) || { logos: [], initials: company.slice(0, 2).toUpperCase() };
}

function renderCompanyBrand(company) {
  const brand = getCompanyBrand(company);
  const sources = brand.urls || (brand.logos || []).map((logo) => `https://cdn.simpleicons.org/${logo}`);
  const wideLogo = sources.some((source) => source.includes("gruporeditos") || source.includes("globant-logo") || source.includes("axity-logo"));
  const logos = sources
    .map((source) => `<img src="${source}" alt="" loading="lazy" onload="this.parentElement.querySelector('.logo-fallback').hidden=true" onerror="this.hidden=true">`)
    .join("");
  return `<span class="company-logo${wideLogo ? " company-logo-wide" : ""}" aria-hidden="true">${logos}<span class="logo-fallback">${brand.initials}</span></span>`;
}

function renderExperience(data) {
  const target = document.querySelector('[data-render="experience"]');
  target.innerHTML = data.experience
    .map((job) => `
      <article class="timeline-item">
        <div class="timeline-top">
          <div>
            <h3>${job.title}</h3>
            <p class="company"><span class="company-identity">${renderCompanyBrand(job.company)}<span>${job.company}</span></span></p>
          </div>
          <p class="meta">${job.period}</p>
        </div>
        <ul class="achievement-list">${job.achievements.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="stack-line">${data.labels.stack}: ${job.stack}</p>
      </article>
    `)
    .join("");
}

function renderProjects(data) {
  const target = document.querySelector('[data-render="projects"]');
  target.innerHTML = data.projects
    .map((project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="stack-line">${data.labels.architecture}: ${project.architecture}</p>
        <a href="${project.link}" target="_blank" rel="noreferrer">${data.labels.view}</a>
      </article>
    `)
    .join("");
}

function render() {
  const data = resumeData[state.lang];
  renderStaticText(data);
  renderStats(data);
  renderContacts(data);
  renderSkills(data);
  renderEducation(data);
  renderLanguages(data);
  renderExperience(data);
  renderProjects(data);
  refreshIcons();
}

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langOption));
});

document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

document.querySelector("[data-print]").addEventListener("click", () => window.print());

setTheme(state.theme);
setLanguage(state.lang);

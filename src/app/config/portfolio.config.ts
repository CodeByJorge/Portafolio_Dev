export type SectionId = 'hero' | 'experience' | 'projects' | 'about' | 'contact';
export type Language = 'en' | 'fr';
export type ResumeLanguage = 'en' | 'fr' | 'es';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  mutedTextColor: string;
  fontFamily: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface HeroConfig {
  name: string;
  role: string;
  location: string;
  availability: string;
  avatarUrl: string;
  resumeUrl?: string;
  resumes?: ResumeLink[];
  summary: string;
}

export interface ResumeLink {
  label: string;
  url: string;
  language: ResumeLanguage;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  technologies: Technology[];
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  repository?: string;
  technologies: Technology[];
}

export interface ContactConfig {
  email: string;
  github?: string;
  linkedin?: string;
  location?: string;
}

export interface AboutConfig {
  title: string;
  body: string;
}

export interface NavigationItem {
  section: SectionId;
  label: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
}

export interface SectionsConfig {
  order: SectionId[];
}

export interface LocaleContent {
  hero: HeroConfig;
  about: AboutConfig;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: ContactConfig;
  socials: SocialLink[];
  navigation: NavigationConfig;
}

export interface LocaleCopy {
  experienceTitle: string;
  projectsTitle: string;
  contactTitle: string;
  contactEmailLabel: string;
  contactLocationLabel: string;
  contactSocialsLabel: string;
  viewProject: string;
  viewCode: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  languageButtonLabel: string;
  languageButtonAria: string;
  downloadCvLabel: string;
  resumeDropdownLabel: string;
}

export interface PortfolioConfig {
  defaultLanguage: Language;
  siteTitle: Record<Language, string>;
  locales: Record<Language, LocaleContent>;
  copy: Record<Language, LocaleCopy>;
  sections: SectionsConfig;
  theme: ThemeConfig;
}

const sharedTechnologies = [
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Symfony', icon: '/icons/symfony.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgres.svg' },
  { name: 'Git / GitHub', icon: '/icons/github_light.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
];

const englishExperience: ExperienceItem[] = [
  {
    company: 'CodeArts Solution S.L.',
    role: 'Fullstack Developer',
    startDate: 'Feb 2025',
    endDate: 'Present',
    location: 'Remote (Huelva, Spain)',
    description: `
      Development and deployment of B2B web applications: an event management platform (sports & arts) and a
      billing system for administrative companies.
      Design and implementation of RESTful APIs, reducing load times and optimizing frontend-backend communication for restaurant and event clients.
      Creation of reusable and performant UI components with Angular, improving user experience across
      multiple client portals.
      Modeling and management of relational databases (PostgreSQL), optimizing complex queries for large-scale data processing.
      Version control and team collaboration with Git/GitHub in an Agile/Scrum environment.
    `,
    technologies: sharedTechnologies,
  },
  {
    company: 'Freelance',
    role: 'Freelance Developer',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    description: `
      Development of a complete e-commerce solution with client interface and secure admin dashboard for stock and order management.
      Implementation of backend business logic with Spring Boot and Hibernate, ensuring secure transactions and robust API endpoints (tested via Postman).
      Application containerization with Docker and UI/UX design on Figma.
    `,
    technologies: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Spring Boot', icon: '/icons/springboot.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Hibernate', icon: '/icons/hibernate.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
    ],
  },
];

const frenchExperience: ExperienceItem[] = [
  {
    company: 'CodeArts Solution S.L.',
    role: 'Développeur Fullstack',
    startDate: 'Fév 2025',
    endDate: 'Présent',
    location: 'Télétravail (Huelva, Espagne)',
    description: `
      Développement et déploiement d'applications web B2B : une plateforme de gestion d'événements (sports & arts) et un
      système de facturation pour des sociétés administratives.
      Conception et implémentation d'APIs RESTful, réduisant les temps de chargement et optimisant la communication frontend-backend pour des clients restauration et événementiel.
      Création de composants UI réutilisables et performants avec Angular, améliorant l'expérience utilisateur sur
      plusieurs portails clients.
      Modélisation et gestion de bases de données relationnelles (PostgreSQL), optimisation de requêtes complexes pour le
      traitement de données à grande échelle.
      Gestion de versions et collaboration en équipe avec Git/GitHub en environnement Agile/Scrum.
    `,
    technologies: sharedTechnologies,
  },
  {
    company: 'Freelance',
    role: 'Développeur Freelance',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    description: `
      Développement d'une solution e-commerce complète avec interface client et tableau de bord administrateur sécurisé pour la
      gestion des stocks et des commandes.
      Implémentation de la logique métier backend avec Spring Boot et Hibernate, garantissant des transactions sécurisées et des
      endpoints API robustes (testés via Postman).
      Conteneurisation de l'application avec Docker et conception UI/UX sur Figma.
    `,
    technologies: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Spring Boot', icon: '/icons/springboot.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Hibernate', icon: '/icons/hibernate.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
    ],
  },
];

export const portfolioConfig: PortfolioConfig = {
  defaultLanguage: 'en',
  siteTitle: {
    en: 'Jorge Yariel García Caraballoso · Fullstack Web Developer',
    fr: 'Jorge Yariel García Caraballoso · Développeur Web Fullstack',
  },
  sections: {
    order: ['hero', 'experience', 'projects', 'about', 'contact'],
  },
  theme: {
    primaryColor: '#22d3ee',
    secondaryColor: '#facc15',
    backgroundColor: '#020617',
    surfaceColor: '#0f172a',
    textColor: '#e5e7eb',
    mutedTextColor: '#94a3b8',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  locales: {
    en: {
      hero: {
        name: 'Jorge Yariel García Caraballoso',
        role: 'Fullstack Web Developer',
        location: 'Lausanne, Switzerland',
        availability: 'Available for new opportunities',
        avatarUrl: '/profile.webp',
        resumeUrl: '/resume-en.pdf',
        resumes: [
          { label: 'CV English', url: '/resume-en.pdf', language: 'en' },
          { label: 'CV Français', url: '/resume-fr.pdf', language: 'fr' },
          { label: 'CV Español', url: '/resume-es.pdf', language: 'es' },
        ],
        summary: `
            Fullstack developer with production experience designing scalable web applications for events,
            hospitality, and enterprise management. Skilled in modern frontend frameworks (Angular, React)
            and resilient backend ecosystems (Spring Boot, Symfony). I design efficient REST APIs,
            optimize relational databases, and reduce load times through advanced performance techniques.
            I care deeply about delivering maintainable, user-centric, high-quality solutions.
          `,
      },
      about: {
        title: 'About me',
        body: `
          I’m a web developer passionate about using technology to build meaningful experiences.
          My focus is on full-stack development with modern frameworks and solid engineering practices.
        `,
      },
      experience: englishExperience,
      projects: [
        {
          name: 'Portfolio demo',
          description:
            'An example landing page to showcase experience, projects, and contact details.',
          link: 'https://example.com',
          technologies: sharedTechnologies,
        },
        {
          name: 'Sample project',
          description:
            'Replace this entry with one of your own projects by updating the description, link, and tech stack.',
          technologies: [
            { name: 'Technology 1' },
            { name: 'Technology 2' },
          ],
        },
      ],
      contact: {
        email: 'gjorgeyariel@gmail.com',
        github: 'https://github.com/CodeByJorge',
        linkedin: 'https://www.linkedin.com/in/jorge-it-developpeur/',
        location: 'Lausanne, Switzerland',
      },
      socials: [
        { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorge-it-developpeur/' },
        { id: 'github', label: 'GitHub', url: 'https://github.com/CodeByJorge' },
        { id: 'email', label: 'Email', url: 'mailto:gjorgeyariel@gmail.com' },
      ],
      navigation: {
        items: [
          { section: 'experience', label: 'Experience' },
          { section: 'projects', label: 'Projects' },
          { section: 'about', label: 'About' },
          { section: 'contact', label: 'Contact' },
        ],
      },
    },
    fr: {
      hero: {
        name: 'Jorge Yariel García Caraballoso',
        role: 'Développeur Web Fullstack',
        location: 'Lausanne, Switzerland',
        availability: 'Ouvert aux nouvelles opportunités',
        avatarUrl: '/profile.webp',
        resumeUrl: '/resume-fr.pdf',
        resumes: [
          { label: 'CV Français', url: '/resume-fr.pdf', language: 'fr' },
          { label: 'CV English', url: '/resume-en.pdf', language: 'en' },
          { label: 'CV Español', url: '/resume-es.pdf', language: 'es' },
        ],
        summary: `
            Développeur full-stack ayant travaillé en production sur des applications web scalables
            pour l’événementiel, l’hôtellerie et la gestion d’entreprise.
            Maîtrise des frameworks modernes (Angular, React) et des environnements backend solides (Spring Boot, Symfony).
            Je conçois des APIs REST efficaces, optimise les bases de données relationnelles et accélère les temps de chargement.
            Je m’attache à livrer des solutions maintenables et centrées utilisateur.
          `,
      },
      about: {
        title: 'À propos de moi',
        body: `
          Je suis un développeur web passionné par la création de solutions significatives.
          Mon quotidien tourne autour du full-stack et des bonnes pratiques d’ingénierie logicielle.
        `,
      },
      experience: frenchExperience,
      projects: [
        {
          name: 'Démo portfolio',
          description:
            'Une page d’accueil exemple pour présenter l’expérience, les projets et les moyens de contact.',
          link: 'https://example.com',
          technologies: sharedTechnologies,
        },
        {
          name: 'Projet exemple',
          description:
            'Remplacez cette fiche par l’un de vos propres projets en ajustant la description, le lien et le stack technique.',
          technologies: [
            { name: 'Technologie 1' },
            { name: 'Technologie 2' },
          ],
        },
      ],
      contact: {
        email: 'gjorgeyariel@gmail.com',
        github: 'https://github.com/CodeByJorge',
        linkedin: 'https://www.linkedin.com/in/jorge-it-developpeur/',
        location: 'Lausanne, Suisse',
      },
      socials: [
        { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorge-it-developpeur/' },
        { id: 'github', label: 'GitHub', url: 'https://github.com/CodeByJorge' },
        { id: 'email', label: 'Email', url: 'mailto:gjorgeyariel@gmail.com' },
      ],
      navigation: {
        items: [
          { section: 'experience', label: 'Expérience' },
          { section: 'projects', label: 'Projets' },
          { section: 'about', label: 'À propos' },
          { section: 'contact', label: 'Contact' },
        ],
      },
    },
  },
  copy: {
    en: {
      experienceTitle: 'Experience',
      projectsTitle: 'Projects',
      contactTitle: 'Contact',
      contactEmailLabel: 'Email',
      contactLocationLabel: 'Location',
      contactSocialsLabel: 'Socials',
      viewProject: 'View project',
      viewCode: 'Code',
      menuOpenLabel: 'Open navigation menu',
      menuCloseLabel: 'Close navigation menu',
      languageButtonLabel: 'Français',
      languageButtonAria: 'Translate the page to French',
      downloadCvLabel: 'Download CV',
      resumeDropdownLabel: 'Other CVs',
    },
    fr: {
      experienceTitle: 'Expérience',
      projectsTitle: 'Projets',
      contactTitle: 'Contact',
      contactEmailLabel: 'Email',
      contactLocationLabel: 'Localisation',
      contactSocialsLabel: 'Réseaux',
      viewProject: 'Voir le projet',
      viewCode: 'Code',
      menuOpenLabel: 'Ouvrir le menu de navigation',
      menuCloseLabel: 'Fermer le menu de navigation',
      languageButtonLabel: 'English',
      languageButtonAria: 'Traduire la page en anglais',
      downloadCvLabel: 'Télécharger le CV',
      resumeDropdownLabel: 'Autres CV',
    },
  },
};

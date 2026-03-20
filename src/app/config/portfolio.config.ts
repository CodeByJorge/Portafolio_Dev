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
  status?: 'development' | 'production';
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
  projectStatusLabel: string;
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
    en: 'JGdev — Portfolio',
    fr: 'JGdev — Portfolio',
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
        name: 'Jorge García',
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
            Fullstack developer with experience building complete web applications, from robust APIs to polished user-facing interfaces.
            Focused on writing maintainable code, optimizing performance, and delivering solutions that actually work in production.
          `,
      },
      about: {
        title: 'About me',
        body: `
          I'm a fullstack developer who combines technical rigor with a keen eye for detail. Passionate about clean architecture and scalable solutions, I thrive in agile environments where continuous learning is part of the job. Highly adaptable and proactive, I take ownership of my work end-to-end — from backend APIs to polished user interfaces.
        `,
      },
      experience: englishExperience,
      projects: [
        {
          name: 'EcommerceStore',
          description:
            'Full e-commerce platform for fashion products with admin dashboard, shopping cart, wishlist, real-time search, and JWT-based authentication with user/admin roles.',
          repository: 'https://github.com/CodeByJorge/TFG',
          status: 'development',
          technologies: [
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Spring Boot', icon: '/icons/springboot.svg' },
            { name: 'MySQL', icon: '/icons/mysql.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
            { name: 'JWT', icon: '/icons/typescript.svg' },
            { name: 'Vite', icon: '/icons/typescript.svg' },
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
        name: 'Jorge García',
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
            Développeur full-stack ayant de l'expérience dans le développement d'applications web complètes, des APIs robustes aux interfaces utilisateur soignées.
            Focalisé sur l'écriture de code maintenable, l'optimisation des performances et la livraison de solutions qui fonctionnent réellement en production.
          `,
      },
      about: {
        title: 'À propos de moi',
        body: `
          Je suis un développeur fullstack qui combine rigueur technique et attention au détail. Passionné par l'architecture propre et les solutions scalables, je m'épanouis dans des environnements agiles où l'apprentissage continu fait partie du travail. Très adaptable et proactif, je prends en charge mes projets de bout en bout — des APIs backend aux interfaces utilisateur soignées.
        `,
      },
      experience: frenchExperience,
      projects: [
        {
          name: 'EcommerceStore',
          description:
            'Plateforme e-commerce complète pour la mode avec tableau de bord admin, panier, liste de favoris, recherche en temps réel et authentification JWT avec rôles utilisateur/admin.',
          repository: 'https://github.com/CodeByJorge/TFG',
          status: 'development',
          technologies: [
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Spring Boot', icon: '/icons/springboot.svg' },
            { name: 'MySQL', icon: '/icons/mysql.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
            { name: 'JWT', icon: '/icons/typescript.svg' },
            { name: 'Vite', icon: '/icons/typescript.svg' },
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
      projectStatusLabel: 'In development',
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
      projectStatusLabel: 'En développement',
      menuOpenLabel: 'Ouvrir le menu de navigation',
      menuCloseLabel: 'Fermer le menu de navigation',
      languageButtonLabel: 'English',
      languageButtonAria: 'Traduire la page en anglais',
      downloadCvLabel: 'Télécharger le CV',
      resumeDropdownLabel: 'Autres CV',
    },
  },
};

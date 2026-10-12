export type SectionId =
  | 'hero'
  | 'services'
  | 'projects'
  | 'process'
  | 'testimonials'
  | 'about'
  | 'experience'
  | 'hiring'
  | 'contact';
export type Language = 'fr' | 'en' | 'es';
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

export interface CtaLink {
  label: string;
  target: string;
}

export interface HeroConfig {
  brand: string;
  ownerName: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  avatarUrl: string;
  summary: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  resumes?: ResumeLink[];
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

/**
 * Only list services that can be delivered today. Anything still being learned
 * belongs in the contact form's interest checkboxes, not here: advertising a
 * service as "coming soon" costs more credibility than the lead is worth.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  /** Leave undefined to show the "on request" label instead of a figure. */
  priceFrom?: string;
  timeline?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  companyUrl?: string;
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
  subtitle?: string;
  description: string;
  /** The business problem the client had before the project existed. */
  challenge?: string;
  /** What shipped, and what it changed for them. */
  outcome?: string;
  coverImage?: string;
  link?: string;
  repository?: string;
  technologies: Technology[];
  status?: 'development' | 'production';
}

export interface ServiceInterest {
  id: string;
  label: string;
}

export interface ContactConfig {
  email: string;
  /**
   * Destination for the contact form only. Never rendered: the number is not
   * shown anywhere on the page, and `phone` is the number visitors are given.
   */
  whatsapp?: string;
  /** The number shown on the page and dialled by the tel: link. */
  phone?: string;
  github?: string;
  linkedin?: string;
  location?: string;
  /**
   * POST endpoint for the contact form (Web3Forms, Formspree, etc.).
   * While this is empty the form falls back to opening a prefilled email.
   */
  formEndpoint?: string;
  serviceInterests: ServiceInterest[];
}

/**
 * The site sells to clients, but Jorge is also open to employment.
 * This block states that plainly instead of leaving a recruiter to guess.
 */
export interface HiringConfig {
  title: string;
  body: string;
  resumeLabel: string;
  linkedinLabel: string;
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

export interface FooterConfig {
  resumeLabel: string;
  rights: string;
}

export interface LocaleContent {
  hero: HeroConfig;
  services: ServiceItem[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  about: AboutConfig;
  hiring: HiringConfig;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: ContactConfig;
  socials: SocialLink[];
  navigation: NavigationConfig;
  footer: FooterConfig;
}

export interface LocaleCopy {
  /** Short call to action for the sticky header, where space is tight. */
  headerCtaLabel: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDeliverablesLabel: string;
  servicesPriceFromLabel: string;
  servicesOnRequestLabel: string;
  servicesTimelineLabel: string;
  processTitle: string;
  processSubtitle: string;
  testimonialsTitle: string;
  experienceTitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectChallengeLabel: string;
  projectOutcomeLabel: string;
  contactTitle: string;
  contactSubtitle: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactLocationLabel: string;
  contactSocialsLabel: string;
  formNameLabel: string;
  formEmailLabel: string;
  formCompanyLabel: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formInterestsLabel: string;
  formSubmitLabel: string;
  formSendingLabel: string;
  formSuccessMessage: string;
  /** The WhatsApp path only drafts the message; the visitor still has to send it. */
  formWhatsappHandoffMessage: string;
  formErrorMessage: string;
  formRequiredHint: string;
  viewProject: string;
  viewCode: string;
  viewDetails: string;
  projectStatusLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  languageSwitcherAria: string;
  downloadCvLabel: string;
  resumeDropdownLabel: string;
}

export interface PortfolioConfig {
  defaultLanguage: Language;
  languages: Language[];
  languageLabels: Record<Language, string>;
  siteTitle: Record<Language, string>;
  locales: Record<Language, LocaleContent>;
  copy: Record<Language, LocaleCopy>;
  sections: SectionsConfig;
  theme: ThemeConfig;
}

const CONTACT_EMAIL = 'gjorgeyariel@gmail.com';
const GITHUB_URL = 'https://github.com/CodeByJorge';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jorge-garc%C3%ADa-826474217/';

/** Form submissions open WhatsApp on this number. It is never displayed. */
const WHATSAPP_NUMBER = '34634221314';

/** The number published on the site for people who want to call. */
const PHONE_NUMBER = '+41 76 447 91 50';

/** TODO: paste the Web3Forms / Formspree endpoint here to activate the form. */
const FORM_ENDPOINT = '';

const sharedTechnologies: Technology[] = [
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Symfony', icon: '/icons/symfony.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgres.svg' },
  { name: 'Git / GitHub', icon: '/icons/github_light.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
];

const independentTechnologies: Technology[] = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Spring Boot', icon: '/icons/springboot.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Hibernate', icon: '/icons/hibernate.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Postman', icon: '/icons/postman.svg' },
];

const studioTechnologies: Technology[] = [
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg' },
];

const karenTechnologies: Technology[] = [
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg' },
];

const ecommerceTechnologies: Technology[] = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Spring Boot', icon: '/icons/springboot.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'JWT', icon: '/icons/typescript.svg' },
  { name: 'Vite', icon: '/icons/typescript.svg' },
];

const frenchExperience: ExperienceItem[] = [
  {
    company: 'JGdev Studio',
    role: 'Développeur web indépendant',
    startDate: 'Fév 2026',
    endDate: 'Présent',
    description: `
      Conception et développement de sites web et d'applications pour des PME en Suisse et en Europe,
      de la prise de besoin à la mise en ligne.
      Livraison du site vitrine de Karen Toilettage à Lausanne : landing page bilingue FR/ES avec
      catalogue de services, galerie photo et réservation directe par WhatsApp.
      Devis à prix fixe, démonstrations hebdomadaires et formation du client à la prise en main.
      Hébergement, nom de domaine, certificats et maintenance assurés après la livraison.
    `,
    technologies: studioTechnologies,
  },
  {
    company: 'CodeArts Solution S.L.',
    role: 'Développeur Fullstack',
    startDate: 'Fév 2025',
    endDate: 'Fév 2026',
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
    company: 'Indépendant',
    role: 'Développeur fullstack',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    description: `
      Développement d'une solution e-commerce complète avec interface client et tableau de bord administrateur sécurisé pour la
      gestion des stocks et des commandes.
      Implémentation de la logique métier backend avec Spring Boot et Hibernate, garantissant des transactions sécurisées et des
      endpoints API robustes (testés via Postman).
      Conteneurisation de l'application avec Docker et conception UI/UX sur Figma.
    `,
    technologies: independentTechnologies,
  },
];

const englishExperience: ExperienceItem[] = [
  {
    company: 'JGdev Studio',
    role: 'Independent web developer',
    startDate: 'Feb 2026',
    endDate: 'Present',
    description: `
      Design and development of websites and applications for small and medium businesses in
      Switzerland and Europe, from the first conversation to going live.
      Delivered the Karen Toilettage site in Lausanne: a bilingual FR/ES landing page with a
      service catalogue, photo gallery and direct WhatsApp booking.
      Fixed-price quotes, weekly demos and hands-on training for the client.
      Hosting, domain names, certificates and maintenance handled after delivery.
    `,
    technologies: studioTechnologies,
  },
  {
    company: 'CodeArts Solution S.L.',
    role: 'Fullstack Developer',
    startDate: 'Feb 2025',
    endDate: 'Feb 2026',
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
    company: 'Independent',
    role: 'Fullstack developer',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    description: `
      Development of a complete e-commerce solution with client interface and secure admin dashboard for stock and order management.
      Implementation of backend business logic with Spring Boot and Hibernate, ensuring secure transactions and robust API endpoints (tested via Postman).
      Application containerization with Docker and UI/UX design on Figma.
    `,
    technologies: independentTechnologies,
  },
];

const spanishExperience: ExperienceItem[] = [
  {
    company: 'JGdev Studio',
    role: 'Desarrollador web independiente',
    startDate: 'Feb 2026',
    endDate: 'Actualidad',
    description: `
      Diseño y desarrollo de webs y aplicaciones para pequeñas y medianas empresas en Suiza y
      Europa, desde la toma de requisitos hasta la puesta en marcha.
      Entrega de la web de Karen Toilettage en Lausana: landing page bilingüe FR/ES con catálogo
      de servicios, galería de fotos y reserva directa por WhatsApp.
      Presupuestos cerrados, demos semanales y formación al cliente para que lo maneje solo.
      Hosting, dominio, certificados y mantenimiento tras la entrega.
    `,
    technologies: studioTechnologies,
  },
  {
    company: 'CodeArts Solution S.L.',
    role: 'Desarrollador Fullstack',
    startDate: 'Feb 2025',
    endDate: 'Feb 2026',
    location: 'Remoto (Huelva, España)',
    description: `
      Desarrollo y despliegue de aplicaciones web B2B: una plataforma de gestión de eventos (deporte y artes) y un
      sistema de facturación para empresas administrativas.
      Diseño e implementación de APIs RESTful, reduciendo tiempos de carga y optimizando la comunicación frontend-backend para clientes de restauración y eventos.
      Creación de componentes UI reutilizables y eficientes con Angular, mejorando la experiencia de usuario en
      varios portales de cliente.
      Modelado y gestión de bases de datos relacionales (PostgreSQL), optimizando consultas complejas para el procesamiento de grandes volúmenes de datos.
      Control de versiones y colaboración en equipo con Git/GitHub en entorno Agile/Scrum.
    `,
    technologies: sharedTechnologies,
  },
  {
    company: 'Independiente',
    role: 'Desarrollador fullstack',
    startDate: 'Sep 2024',
    endDate: 'Ene 2025',
    description: `
      Desarrollo de una solución e-commerce completa con interfaz de cliente y panel de administración seguro para la
      gestión de stock y pedidos.
      Implementación de la lógica de negocio backend con Spring Boot e Hibernate, garantizando transacciones seguras y
      endpoints de API robustos (probados con Postman).
      Contenedorización de la aplicación con Docker y diseño UI/UX en Figma.
    `,
    technologies: independentTechnologies,
  },
];

const frenchServices: ServiceItem[] = [
  {
    id: 'site-vitrine',
    title: 'Site vitrine & landing page',
    description:
      "Un site qui présente votre activité, inspire confiance et transforme les visiteurs en demandes de devis. Pensé pour être trouvé sur Google et utilisé depuis un téléphone.",
    deliverables: [
      'Design sur mesure, adapté mobile et tablette',
      'Référencement technique de base et vitesse de chargement',
      'Formulaire de contact ou réservation WhatsApp',
      'Version multilingue (FR / DE / EN / ES)',
    ],
    timeline: '2 à 4 semaines',
  },
  {
    id: 'ecommerce',
    title: 'Boutique en ligne',
    description:
      "Vendez vos produits directement, sans commission de plateforme. Catalogue, panier, paiement sécurisé et un espace d'administration que vous gérez vous-même.",
    deliverables: [
      'Catalogue produits et gestion des stocks',
      'Panier, commandes et paiement sécurisé',
      'Tableau de bord administrateur',
      'Formation à la prise en main',
    ],
    timeline: '4 à 8 semaines',
  },
  {
    id: 'application',
    title: 'Application métier & tableau de bord',
    description:
      "Vos devis sur Excel, vos réservations sur WhatsApp, vos stocks sur papier ? Je remplace ces processus par un outil unique, conçu autour de votre façon de travailler.",
    deliverables: [
      'Analyse de vos processus actuels',
      'Application web sur mesure et sécurisée',
      'Comptes utilisateurs et niveaux d\'accès',
      'Intégration avec vos outils existants',
    ],
    timeline: '6 à 12 semaines',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & évolution',
    description:
      "Votre site existe déjà mais personne ne s'en occupe. Je le maintiens à jour, corrige ce qui casse et le fais évoluer au rythme de votre activité.",
    deliverables: [
      'Mises à jour techniques et de sécurité',
      'Corrections et petites évolutions',
      'Sauvegardes et surveillance',
      'Suivi mensuel',
    ],
    timeline: 'Engagement mensuel',
  },
];

const englishServices: ServiceItem[] = [
  {
    id: 'site-vitrine',
    title: 'Business website & landing page',
    description:
      'A site that presents your business, earns trust and turns visitors into enquiries. Built to be found on Google and used from a phone.',
    deliverables: [
      'Custom design, mobile and tablet ready',
      'Technical SEO foundations and fast loading',
      'Contact form or WhatsApp booking',
      'Multilingual version (FR / DE / EN / ES)',
    ],
    timeline: '2 to 4 weeks',
  },
  {
    id: 'ecommerce',
    title: 'Online shop',
    description:
      'Sell your products directly, without marketplace commissions. Catalogue, cart, secure checkout and an admin area you run yourself.',
    deliverables: [
      'Product catalogue and stock management',
      'Cart, orders and secure payment',
      'Administrator dashboard',
      'Hands-on training',
    ],
    timeline: '4 to 8 weeks',
  },
  {
    id: 'application',
    title: 'Business app & dashboard',
    description:
      'Quotes in Excel, bookings over WhatsApp, stock on paper? I replace those processes with a single tool, designed around the way you already work.',
    deliverables: [
      'Review of your current processes',
      'Custom, secure web application',
      'User accounts and access levels',
      'Integration with your existing tools',
    ],
    timeline: '6 to 12 weeks',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & evolution',
    description:
      'Your site already exists but nobody looks after it. I keep it updated, fix what breaks and grow it at the pace of your business.',
    deliverables: [
      'Technical and security updates',
      'Fixes and small improvements',
      'Backups and monitoring',
      'Monthly reporting',
    ],
    timeline: 'Monthly retainer',
  },
];

const spanishServices: ServiceItem[] = [
  {
    id: 'site-vitrine',
    title: 'Web corporativa y landing page',
    description:
      'Una web que presenta tu negocio, genera confianza y convierte visitas en solicitudes de presupuesto. Pensada para que te encuentren en Google y para usarse desde el móvil.',
    deliverables: [
      'Diseño a medida, adaptado a móvil y tablet',
      'SEO técnico de base y velocidad de carga',
      'Formulario de contacto o reserva por WhatsApp',
      'Versión multiidioma (ES / FR / EN / DE)',
    ],
    timeline: '2 a 4 semanas',
  },
  {
    id: 'ecommerce',
    title: 'Tienda online',
    description:
      'Vende tus productos directamente, sin comisiones de plataforma. Catálogo, carrito, pago seguro y un panel de administración que gestionas tú.',
    deliverables: [
      'Catálogo de productos y gestión de stock',
      'Carrito, pedidos y pago seguro',
      'Panel de administración',
      'Formación para que lo manejes solo',
    ],
    timeline: '4 a 8 semanas',
  },
  {
    id: 'application',
    title: 'Aplicación de gestión y paneles',
    description:
      '¿Presupuestos en Excel, reservas por WhatsApp, stock en papel? Sustituyo esos procesos por una única herramienta, diseñada en torno a cómo ya trabajas.',
    deliverables: [
      'Análisis de tus procesos actuales',
      'Aplicación web a medida y segura',
      'Cuentas de usuario y niveles de acceso',
      'Integración con tus herramientas actuales',
    ],
    timeline: '6 a 12 semanas',
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento y evolución',
    description:
      'Tu web ya existe pero nadie se ocupa de ella. La mantengo actualizada, arreglo lo que se rompe y la hago crecer al ritmo de tu negocio.',
    deliverables: [
      'Actualizaciones técnicas y de seguridad',
      'Correcciones y pequeñas mejoras',
      'Copias de seguridad y monitorización',
      'Seguimiento mensual',
    ],
    timeline: 'Cuota mensual',
  },
];

const frenchProcess: ProcessStep[] = [
  {
    title: 'Appel découverte',
    description:
      "30 minutes, sans engagement. Vous me racontez votre activité et ce qui vous bloque aujourd'hui. Si je ne suis pas la bonne personne, je vous le dis tout de suite.",
  },
  {
    title: 'Devis fixe',
    description:
      'Vous recevez une proposition écrite : périmètre, délai et prix ferme. Pas de facturation à l\'heure, pas de surprise en fin de projet.',
  },
  {
    title: 'Développement',
    description:
      'Je construis par étapes et vous montrez une démo chaque semaine. Vous corrigez le tir en cours de route, pas à la livraison.',
  },
  {
    title: 'Mise en ligne',
    description:
      'Je m\'occupe de l\'hébergement, du nom de domaine et des certificats. Vous repartez avec une démonstration et une documentation simple.',
  },
  {
    title: 'Suivi',
    description:
      'Un mois de corrections inclus après la livraison. Ensuite, maintenance mensuelle si vous le souhaitez — jamais imposée.',
  },
];

const englishProcess: ProcessStep[] = [
  {
    title: 'Discovery call',
    description:
      '30 minutes, no commitment. You tell me about your business and what is blocking you today. If I am not the right person, I say so straight away.',
  },
  {
    title: 'Fixed quote',
    description:
      'You get a written proposal: scope, timeline and a firm price. No hourly billing, no surprises at the end of the project.',
  },
  {
    title: 'Development',
    description:
      'I build in stages and show you a demo every week. You course-correct along the way, not at delivery.',
  },
  {
    title: 'Go live',
    description:
      'I handle hosting, domain name and certificates. You walk away with a walkthrough and plain-language documentation.',
  },
  {
    title: 'Follow-up',
    description:
      'One month of fixes included after delivery. After that, monthly maintenance if you want it — never imposed.',
  },
];

const spanishProcess: ProcessStep[] = [
  {
    title: 'Llamada inicial',
    description:
      '30 minutos, sin compromiso. Me cuentas tu negocio y qué te está frenando hoy. Si no soy la persona adecuada, te lo digo en el momento.',
  },
  {
    title: 'Presupuesto cerrado',
    description:
      'Recibes una propuesta por escrito: alcance, plazo y precio fijo. Sin facturación por horas y sin sorpresas al final del proyecto.',
  },
  {
    title: 'Desarrollo',
    description:
      'Construyo por etapas y te enseño una demo cada semana. Corriges el rumbo sobre la marcha, no en la entrega.',
  },
  {
    title: 'Puesta en marcha',
    description:
      'Me encargo del hosting, el dominio y los certificados. Te quedas con una demostración y documentación en lenguaje claro.',
  },
  {
    title: 'Seguimiento',
    description:
      'Un mes de correcciones incluido tras la entrega. Después, mantenimiento mensual si lo quieres — nunca impuesto.',
  },
];

/**
 * Social proof carries more weight than anything else on this page.
 * Add Karen's testimonial as soon as she sends it; the section hides while empty.
 */
const frenchTestimonials: Testimonial[] = [];
const englishTestimonials: Testimonial[] = [];
const spanishTestimonials: Testimonial[] = [];

const serviceInterestsFr: ServiceInterest[] = [
  { id: 'website', label: 'Site vitrine' },
  { id: 'ecommerce', label: 'Boutique en ligne' },
  { id: 'landing', label: 'Landing page' },
  { id: 'app', label: 'Application métier' },
  { id: 'dashboard', label: 'Tableau de bord' },
  { id: 'chatbot', label: 'Chatbot IA' },
  { id: 'whatsapp-bot', label: 'Bot WhatsApp' },
  { id: 'ads', label: 'Google Ads' },
  { id: 'automation', label: 'Automatisation' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'other', label: 'Autre' },
];

const serviceInterestsEn: ServiceInterest[] = [
  { id: 'website', label: 'Business website' },
  { id: 'ecommerce', label: 'Online shop' },
  { id: 'landing', label: 'Landing page' },
  { id: 'app', label: 'Business app' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'chatbot', label: 'AI chatbot' },
  { id: 'whatsapp-bot', label: 'WhatsApp bot' },
  { id: 'ads', label: 'Google Ads' },
  { id: 'automation', label: 'Automation' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'other', label: 'Other' },
];

const serviceInterestsEs: ServiceInterest[] = [
  { id: 'website', label: 'Web corporativa' },
  { id: 'ecommerce', label: 'Tienda online' },
  { id: 'landing', label: 'Landing page' },
  { id: 'app', label: 'Aplicación de gestión' },
  { id: 'dashboard', label: 'Panel de control' },
  { id: 'chatbot', label: 'Chatbot IA' },
  { id: 'whatsapp-bot', label: 'Bot de WhatsApp' },
  { id: 'ads', label: 'Google Ads' },
  { id: 'automation', label: 'Automatización' },
  { id: 'maintenance', label: 'Mantenimiento' },
  { id: 'other', label: 'Otro' },
];

const socialsFor = (emailLabel: string): SocialLink[] => [
  { id: 'linkedin', label: 'LinkedIn', url: LINKEDIN_URL },
  { id: 'github', label: 'GitHub', url: GITHUB_URL },
  { id: 'email', label: emailLabel, url: `mailto:${CONTACT_EMAIL}` },
];

const resumesFr: ResumeLink[] = [
  { label: 'CV Français', url: '/CV_Jorge_Garcia_FR.pdf', language: 'fr' },
  { label: 'CV English', url: '/CV_Jorge_Garcia_EN.pdf', language: 'en' },
  { label: 'CV Español', url: '/CV_Desarrollador_ES.pdf', language: 'es' },
];

const resumesEn: ResumeLink[] = [
  { label: 'CV English', url: '/CV_Jorge_Garcia_EN.pdf', language: 'en' },
  { label: 'CV Français', url: '/CV_Jorge_Garcia_FR.pdf', language: 'fr' },
  { label: 'CV Español', url: '/CV_Desarrollador_ES.pdf', language: 'es' },
];

const resumesEs: ResumeLink[] = [
  { label: 'CV Español', url: '/CV_Desarrollador_ES.pdf', language: 'es' },
  { label: 'CV Français', url: '/CV_Jorge_Garcia_FR.pdf', language: 'fr' },
  { label: 'CV English', url: '/CV_Jorge_Garcia_EN.pdf', language: 'en' },
];

export const portfolioConfig: PortfolioConfig = {
  defaultLanguage: 'fr',
  languages: ['fr', 'en', 'es'],
  languageLabels: {
    fr: 'FR',
    en: 'EN',
    es: 'ES',
  },
  siteTitle: {
    fr: 'JGdev Studio — Sites web et applications pour PME',
    en: 'JGdev Studio — Websites and apps for small businesses',
    es: 'JGdev Studio — Webs y aplicaciones para pymes',
  },
  sections: {
    order: [
      'hero',
      'services',
      'projects',
      'process',
      'testimonials',
      'about',
      'experience',
      'hiring',
      'contact',
    ],
  },
  theme: {
    primaryColor: '#38bdf8',
    secondaryColor: '#fbbf24',
    backgroundColor: '#0b1120',
    surfaceColor: '#111c32',
    textColor: '#e8edf5',
    mutedTextColor: '#94a3b8',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  locales: {
    fr: {
      hero: {
        brand: 'JGdev Studio',
        ownerName: 'Jorge García',
        role: 'Développeur web indépendant',
        headline: 'Des sites web et des applications qui font travailler votre entreprise.',
        location: 'Lausanne, Suisse',
        availability: 'Disponible pour de nouveaux projets',
        avatarUrl: '/profile.webp',
        summary: `
          J'accompagne les petites et moyennes entreprises en Suisse, en Espagne et en Europe :
          du site vitrine qui attire des clients à l'application sur mesure qui remplace vos tableurs.
          Devis fixe, délai annoncé, un seul interlocuteur du début à la fin.
        `,
        primaryCta: { label: 'Parlons de votre projet', target: '#contact' },
        secondaryCta: { label: 'Voir mes réalisations', target: '#projects' },
        resumes: resumesFr,
      },
      services: frenchServices,
      process: frenchProcess,
      testimonials: frenchTestimonials,
      about: {
        title: 'Qui suis-je',
        body: `
          Je m'appelle Jorge García, je suis développeur fullstack et je vis à Lausanne.
          Le jour, je construis des applications web B2B pour des clients de la restauration et de l'événementiel.
          Le reste du temps, je mets ce même niveau d'exigence au service d'entreprises plus petites,
          qui méritent mieux qu'un modèle générique acheté en ligne.
          Je parle français, espagnol et anglais, j'explique les choses sans jargon,
          et je préfère vous dire non plutôt que de vendre ce dont vous n'avez pas besoin.
        `,
      },
      experience: frenchExperience,
      projects: [
        {
          name: 'Karen Toilettage',
          subtitle: 'Toilettage canin à domicile, Lausanne',
          description:
            "Site vitrine bilingue FR/ES avec catalogue de services, galerie photo, témoignages clients et réservation directe par WhatsApp.",
          challenge:
            "Une activité de toilettage à domicile sans aucune présence en ligne : les clients arrivaient uniquement par le bouche-à-oreille, et chaque demande passait par un échange téléphonique.",
          outcome:
            "Une page que Karen peut envoyer en un lien, qui répond aux questions de tarif et de zone d'intervention avant même le premier contact, et qui ouvre la réservation directement dans WhatsApp.",
          coverImage: '/karen-toilettage-cover.webp',
          link: 'https://karen-toilettage.vercel.app',
          status: 'production',
          technologies: karenTechnologies,
        },
        {
          name: 'EcommerceStore',
          subtitle: 'Boutique de mode en ligne',
          description:
            "Plateforme e-commerce complète avec tableau de bord admin, panier, liste de favoris, recherche en temps réel et authentification JWT avec rôles utilisateur/admin.",
          outcome:
            "Démonstration technique d'une boutique de bout en bout : gestion du catalogue, du stock et des commandes depuis une interface d'administration sécurisée.",
          coverImage: '/ecommercestore-cover.png',
          link: 'https://tfg-tienda-frontend.vercel.app/login',
          repository: 'https://github.com/CodeByJorge/TFG',
          status: 'production',
          technologies: ecommerceTechnologies,
        },
      ],
      contact: {
        email: CONTACT_EMAIL,
        whatsapp: WHATSAPP_NUMBER,
        phone: PHONE_NUMBER,
        github: GITHUB_URL,
        linkedin: LINKEDIN_URL,
        location: 'Lausanne, Suisse',
        formEndpoint: FORM_ENDPOINT,
        serviceInterests: serviceInterestsFr,
      },
      socials: socialsFor('Email'),
      navigation: {
        items: [
          { section: 'services', label: 'Services' },
          { section: 'projects', label: 'Réalisations' },
          { section: 'process', label: 'Méthode' },
          { section: 'about', label: 'À propos' },
          { section: 'contact', label: 'Contact' },
        ],
      },
      hiring: {
        title: 'Vous recrutez ?',
        body: `
          En parallèle de mes projets clients, je reste ouvert à un poste de développeur
          fullstack en Suisse. Si vous cherchez quelqu'un qui livre en production et qui
          travaille en français, en espagnol et en anglais, voici de quoi en savoir plus.
        `,
        resumeLabel: 'Mon CV',
        linkedinLabel: 'Mon profil LinkedIn',
      },
      footer: {
        resumeLabel: 'Vous recrutez ? Mon CV',
        rights: 'Tous droits réservés.',
      },
    },
    en: {
      hero: {
        brand: 'JGdev Studio',
        ownerName: 'Jorge García',
        role: 'Independent web developer',
        headline: 'Websites and applications that put your business to work.',
        location: 'Lausanne, Switzerland',
        availability: 'Available for new projects',
        avatarUrl: '/profile.webp',
        summary: `
          I work with small and medium businesses across Switzerland, Spain and Europe:
          from the website that brings you customers to the custom application that replaces your spreadsheets.
          Fixed quote, stated deadline, one person from start to finish.
        `,
        primaryCta: { label: 'Let us talk about your project', target: '#contact' },
        secondaryCta: { label: 'See my work', target: '#projects' },
        resumes: resumesEn,
      },
      services: englishServices,
      process: englishProcess,
      testimonials: englishTestimonials,
      about: {
        title: 'Who I am',
        body: `
          My name is Jorge García, I am a fullstack developer and I live in Lausanne.
          By day I build B2B web applications for clients in hospitality and events.
          The rest of the time I bring that same standard to smaller businesses,
          who deserve better than a generic template bought online.
          I speak French, Spanish and English, I explain things without jargon,
          and I would rather tell you no than sell you something you do not need.
        `,
      },
      experience: englishExperience,
      projects: [
        {
          name: 'Karen Toilettage',
          subtitle: 'Home dog grooming, Lausanne',
          description:
            'Bilingual FR/ES showcase site with a service catalogue, photo gallery, client testimonials and direct WhatsApp booking.',
          challenge:
            'A home grooming business with no online presence at all: clients only arrived by word of mouth, and every enquiry meant a phone call.',
          outcome:
            'A page Karen can send as a single link, which answers questions about pricing and coverage area before the first contact, and opens booking straight into WhatsApp.',
          coverImage: '/karen-toilettage-cover.webp',
          link: 'https://karen-toilettage.vercel.app',
          status: 'production',
          technologies: karenTechnologies,
        },
        {
          name: 'EcommerceStore',
          subtitle: 'Online fashion store',
          description:
            'Full e-commerce platform with admin dashboard, shopping cart, wishlist, real-time search and JWT authentication with user/admin roles.',
          outcome:
            'An end-to-end technical demonstration of an online shop: catalogue, stock and order management from a secure administration interface.',
          coverImage: '/ecommercestore-cover.png',
          link: 'https://tfg-tienda-frontend.vercel.app/login',
          repository: 'https://github.com/CodeByJorge/TFG',
          status: 'production',
          technologies: ecommerceTechnologies,
        },
      ],
      contact: {
        email: CONTACT_EMAIL,
        whatsapp: WHATSAPP_NUMBER,
        phone: PHONE_NUMBER,
        github: GITHUB_URL,
        linkedin: LINKEDIN_URL,
        location: 'Lausanne, Switzerland',
        formEndpoint: FORM_ENDPOINT,
        serviceInterests: serviceInterestsEn,
      },
      socials: socialsFor('Email'),
      navigation: {
        items: [
          { section: 'services', label: 'Services' },
          { section: 'projects', label: 'Work' },
          { section: 'process', label: 'Method' },
          { section: 'about', label: 'About' },
          { section: 'contact', label: 'Contact' },
        ],
      },
      hiring: {
        title: 'Hiring?',
        body: `
          Alongside my client work I remain open to a fullstack developer position in
          Switzerland. If you are looking for someone who ships to production and works
          in French, Spanish and English, here is where to find out more.
        `,
        resumeLabel: 'My CV',
        linkedinLabel: 'My LinkedIn profile',
      },
      footer: {
        resumeLabel: 'Hiring? My CV',
        rights: 'All rights reserved.',
      },
    },
    es: {
      hero: {
        brand: 'JGdev Studio',
        ownerName: 'Jorge García',
        role: 'Desarrollador web independiente',
        headline: 'Webs y aplicaciones que ponen tu negocio a trabajar.',
        location: 'Lausana, Suiza',
        availability: 'Disponible para nuevos proyectos',
        avatarUrl: '/profile.webp',
        summary: `
          Trabajo con pequeñas y medianas empresas de Suiza, España y Europa:
          desde la web que te trae clientes hasta la aplicación a medida que sustituye tus hojas de cálculo.
          Presupuesto cerrado, plazo anunciado y un único interlocutor de principio a fin.
        `,
        primaryCta: { label: 'Hablemos de tu proyecto', target: '#contact' },
        secondaryCta: { label: 'Ver mis trabajos', target: '#projects' },
        resumes: resumesEs,
      },
      services: spanishServices,
      process: spanishProcess,
      testimonials: spanishTestimonials,
      about: {
        title: 'Quién soy',
        body: `
          Me llamo Jorge García, soy desarrollador fullstack y vivo en Lausana.
          De día construyo aplicaciones web B2B para clientes de restauración y eventos.
          El resto del tiempo pongo ese mismo nivel de exigencia al servicio de empresas más pequeñas,
          que merecen algo mejor que una plantilla genérica comprada por internet.
          Hablo español, francés e inglés, explico las cosas sin tecnicismos
          y prefiero decirte que no antes que venderte algo que no necesitas.
        `,
      },
      experience: spanishExperience,
      projects: [
        {
          name: 'Karen Toilettage',
          subtitle: 'Peluquería canina a domicilio, Lausana',
          description:
            'Web bilingüe FR/ES con catálogo de servicios, galería de fotos, testimonios de clientes y reserva directa por WhatsApp.',
          challenge:
            'Un servicio de peluquería canina a domicilio sin ninguna presencia online: los clientes llegaban solo por el boca a boca y cada consulta pasaba por una llamada.',
          outcome:
            'Una página que Karen envía como un único enlace, que responde a las dudas de precio y zona de cobertura antes del primer contacto y que abre la reserva directamente en WhatsApp.',
          coverImage: '/karen-toilettage-cover.webp',
          link: 'https://karen-toilettage.vercel.app',
          status: 'production',
          technologies: karenTechnologies,
        },
        {
          name: 'EcommerceStore',
          subtitle: 'Tienda de moda online',
          description:
            'Plataforma de e-commerce completa con panel de administración, carrito, lista de deseos, búsqueda en tiempo real y autenticación JWT con roles de usuario y administrador.',
          outcome:
            'Demostración técnica de una tienda de principio a fin: gestión de catálogo, stock y pedidos desde una interfaz de administración segura.',
          coverImage: '/ecommercestore-cover.png',
          link: 'https://tfg-tienda-frontend.vercel.app/login',
          repository: 'https://github.com/CodeByJorge/TFG',
          status: 'production',
          technologies: ecommerceTechnologies,
        },
      ],
      contact: {
        email: CONTACT_EMAIL,
        whatsapp: WHATSAPP_NUMBER,
        phone: PHONE_NUMBER,
        github: GITHUB_URL,
        linkedin: LINKEDIN_URL,
        location: 'Lausana, Suiza',
        formEndpoint: FORM_ENDPOINT,
        serviceInterests: serviceInterestsEs,
      },
      socials: socialsFor('Email'),
      navigation: {
        items: [
          { section: 'services', label: 'Servicios' },
          { section: 'projects', label: 'Trabajos' },
          { section: 'process', label: 'Método' },
          { section: 'about', label: 'Sobre mí' },
          { section: 'contact', label: 'Contacto' },
        ],
      },
      hiring: {
        title: '¿Buscas contratar?',
        body: `
          Además de mis proyectos con clientes, sigo abierto a un puesto de desarrollador
          fullstack en Suiza. Si buscas a alguien que entregue en producción y que trabaje
          en francés, español e inglés, aquí tienes por dónde empezar.
        `,
        resumeLabel: 'Mi CV',
        linkedinLabel: 'Mi perfil de LinkedIn',
      },
      footer: {
        resumeLabel: '¿Buscas contratar? Mi CV',
        rights: 'Todos los derechos reservados.',
      },
    },
  },
  copy: {
    fr: {
      headerCtaLabel: 'Devis gratuit',
      servicesTitle: 'Ce que je fais',
      servicesSubtitle:
        "Quatre prestations, clairement définies. Si votre besoin n'entre dans aucune, dites-le-moi quand même.",
      servicesDeliverablesLabel: 'Inclus',
      servicesPriceFromLabel: 'À partir de',
      servicesOnRequestLabel: 'Sur devis',
      servicesTimelineLabel: 'Délai',
      processTitle: 'Comment on travaille ensemble',
      processSubtitle: 'Cinq étapes, aucune surprise.',
      testimonialsTitle: 'Ce qu\'en disent mes clients',
      experienceTitle: 'Parcours professionnel',
      projectsTitle: 'Réalisations',
      projectsSubtitle: 'Des projets livrés, en ligne, que vous pouvez visiter.',
      projectChallengeLabel: 'Le problème',
      projectOutcomeLabel: 'Le résultat',
      contactTitle: 'Parlons de votre projet',
      contactSubtitle:
        'Décrivez-moi votre besoin en quelques lignes. Je réponds sous 24 heures, et le premier échange ne vous engage à rien.',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Téléphone',
      contactLocationLabel: 'Localisation',
      contactSocialsLabel: 'Réseaux',
      formNameLabel: 'Votre nom',
      formEmailLabel: 'Votre email',
      formCompanyLabel: 'Entreprise (facultatif)',
      formMessageLabel: 'Votre projet',
      formMessagePlaceholder:
        'Par exemple : je suis fleuriste à Lausanne et je voudrais que mes clients puissent commander en ligne.',
      formInterestsLabel: 'Qu\'est-ce qui vous intéresse ?',
      formSubmitLabel: 'Envoyer via WhatsApp',
      formSendingLabel: 'Envoi en cours…',
      formSuccessMessage: 'Message reçu. Je vous réponds sous 24 heures.',
      formWhatsappHandoffMessage:
        "WhatsApp s'ouvre avec votre message prêt. Il ne reste qu'à l'envoyer.",
      formErrorMessage:
        "L'envoi a échoué. Écrivez-moi directement à " + CONTACT_EMAIL + '.',
      formRequiredHint: 'Champ obligatoire',
      viewProject: 'Visiter le site',
      viewCode: 'Code',
      viewDetails: 'Détails',
      projectStatusLabel: 'En développement',
      menuOpenLabel: 'Ouvrir le menu de navigation',
      menuCloseLabel: 'Fermer le menu de navigation',
      languageSwitcherAria: 'Choisir la langue',
      downloadCvLabel: 'Télécharger le CV',
      resumeDropdownLabel: 'Autres CV',
    },
    en: {
      headerCtaLabel: 'Free quote',
      servicesTitle: 'What I do',
      servicesSubtitle:
        'Four clearly defined services. If your need fits none of them, tell me anyway.',
      servicesDeliverablesLabel: 'Included',
      servicesPriceFromLabel: 'From',
      servicesOnRequestLabel: 'On request',
      servicesTimelineLabel: 'Timeline',
      processTitle: 'How we work together',
      processSubtitle: 'Five steps, no surprises.',
      testimonialsTitle: 'What my clients say',
      experienceTitle: 'Professional background',
      projectsTitle: 'Selected work',
      projectsSubtitle: 'Delivered projects, live, that you can visit.',
      projectChallengeLabel: 'The problem',
      projectOutcomeLabel: 'The outcome',
      contactTitle: 'Let us talk about your project',
      contactSubtitle:
        'Describe what you need in a few lines. I reply within 24 hours, and the first conversation commits you to nothing.',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Phone',
      contactLocationLabel: 'Location',
      contactSocialsLabel: 'Socials',
      formNameLabel: 'Your name',
      formEmailLabel: 'Your email',
      formCompanyLabel: 'Company (optional)',
      formMessageLabel: 'Your project',
      formMessagePlaceholder:
        'For example: I run a flower shop in Lausanne and I would like my customers to order online.',
      formInterestsLabel: 'What are you interested in?',
      formSubmitLabel: 'Send via WhatsApp',
      formSendingLabel: 'Sending…',
      formSuccessMessage: 'Message received. I will reply within 24 hours.',
      formWhatsappHandoffMessage:
        'WhatsApp has opened with your message ready. All that is left is to send it.',
      formErrorMessage: 'Sending failed. Write to me directly at ' + CONTACT_EMAIL + '.',
      formRequiredHint: 'Required field',
      viewProject: 'Visit the site',
      viewCode: 'Code',
      viewDetails: 'Details',
      projectStatusLabel: 'In development',
      menuOpenLabel: 'Open navigation menu',
      menuCloseLabel: 'Close navigation menu',
      languageSwitcherAria: 'Choose language',
      downloadCvLabel: 'Download CV',
      resumeDropdownLabel: 'Other CVs',
    },
    es: {
      headerCtaLabel: 'Presupuesto gratis',
      servicesTitle: 'Lo que hago',
      servicesSubtitle:
        'Cuatro servicios bien definidos. Si lo tuyo no encaja en ninguno, cuéntamelo igualmente.',
      servicesDeliverablesLabel: 'Incluye',
      servicesPriceFromLabel: 'Desde',
      servicesOnRequestLabel: 'Presupuesto a medida',
      servicesTimelineLabel: 'Plazo',
      processTitle: 'Cómo trabajamos juntos',
      processSubtitle: 'Cinco pasos, ninguna sorpresa.',
      testimonialsTitle: 'Lo que dicen mis clientes',
      experienceTitle: 'Trayectoria profesional',
      projectsTitle: 'Trabajos',
      projectsSubtitle: 'Proyectos entregados, en línea, que puedes visitar.',
      projectChallengeLabel: 'El problema',
      projectOutcomeLabel: 'El resultado',
      contactTitle: 'Hablemos de tu proyecto',
      contactSubtitle:
        'Cuéntame qué necesitas en unas líneas. Respondo en menos de 24 horas y la primera conversación no te compromete a nada.',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Teléfono',
      contactLocationLabel: 'Ubicación',
      contactSocialsLabel: 'Redes',
      formNameLabel: 'Tu nombre',
      formEmailLabel: 'Tu email',
      formCompanyLabel: 'Empresa (opcional)',
      formMessageLabel: 'Tu proyecto',
      formMessagePlaceholder:
        'Por ejemplo: tengo una floristería en Lausana y me gustaría que mis clientes pudieran pedir online.',
      formInterestsLabel: '¿Qué te interesa?',
      formSubmitLabel: 'Enviar por WhatsApp',
      formSendingLabel: 'Enviando…',
      formSuccessMessage: 'Mensaje recibido. Te respondo en menos de 24 horas.',
      formWhatsappHandoffMessage:
        'WhatsApp se ha abierto con tu mensaje listo. Solo falta que lo envíes.',
      formErrorMessage: 'El envío ha fallado. Escríbeme directamente a ' + CONTACT_EMAIL + '.',
      formRequiredHint: 'Campo obligatorio',
      viewProject: 'Visitar la web',
      viewCode: 'Código',
      viewDetails: 'Detalles',
      projectStatusLabel: 'En desarrollo',
      menuOpenLabel: 'Abrir el menú de navegación',
      menuCloseLabel: 'Cerrar el menú de navegación',
      languageSwitcherAria: 'Elegir idioma',
      downloadCvLabel: 'Descargar CV',
      resumeDropdownLabel: 'Otros CV',
    },
  },
};

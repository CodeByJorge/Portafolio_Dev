import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HiringComponent } from './components/hiring/hiring.component';
import { ProcessComponent } from './components/process/process.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import {
  Language,
  LocaleCopy,
  LocaleContent,
  PortfolioConfig,
  portfolioConfig,
} from './config/portfolio.config';

const LANGUAGE_STORAGE_KEY = 'jgdev.language';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
    TestimonialsComponent,
    AboutComponent,
    ExperienceComponent,
    HiringComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly config: PortfolioConfig = portfolioConfig;

  protected currentLanguage: Language = this.config.defaultLanguage;

  protected readonly sections = this.config.sections.order;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.currentLanguage = this.resolveInitialLanguage();
    this.updateTitle();
  }

  protected get themeStyle(): { [key: string]: string } {
    const theme = this.config.theme;
    return {
      '--primary-color': theme.primaryColor,
      '--secondary-color': theme.secondaryColor,
      '--background-color': theme.backgroundColor,
      '--surface-color': theme.surfaceColor,
      '--text-color': theme.textColor,
      '--muted-text-color': theme.mutedTextColor,
      '--font-family': theme.fontFamily,
    };
  }

  protected get localeContent(): LocaleContent {
    return this.config.locales[this.currentLanguage];
  }

  protected get localeCopy(): LocaleCopy {
    return this.config.copy[this.currentLanguage];
  }

  /** Sections with no content are skipped so the page never shows an empty heading. */
  protected isSectionVisible(section: string): boolean {
    if (section === 'testimonials') {
      return this.localeContent.testimonials.length > 0;
    }
    return true;
  }

  protected setLanguage(language: Language): void {
    this.currentLanguage = language;
    this.updateTitle();

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Private browsing or blocked storage: the choice simply lasts this visit.
    }
  }

  private resolveInitialLanguage(): Language {
    const stored = this.readStoredLanguage();
    if (stored) {
      return stored;
    }

    const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
    const supported = this.config.languages.find((lang) => lang === browserLanguage);

    return supported ?? this.config.defaultLanguage;
  }

  private readStoredLanguage(): Language | null {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return this.config.languages.find((lang) => lang === stored) ?? null;
    } catch {
      return null;
    }
  }

  private updateTitle(): void {
    this.title.setTitle(this.config.siteTitle[this.currentLanguage]);
  }
}

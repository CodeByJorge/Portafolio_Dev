import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {
  Language,
  LocaleCopy,
  LocaleContent,
  PortfolioConfig,
  portfolioConfig,
} from './config/portfolio.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
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

  protected toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.updateTitle();
  }

  private updateTitle(): void {
    this.title.setTitle(this.config.siteTitle[this.currentLanguage]);
  }
}

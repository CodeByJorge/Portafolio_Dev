import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroConfig, Language, NavigationItem } from '../../config/portfolio.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() hero!: HeroConfig;
  @Input() navigationItems: NavigationItem[] = [];
  @Input() menuOpenLabel = 'Open navigation menu';
  @Input() menuCloseLabel = 'Close navigation menu';
  @Input() languages: Language[] = [];
  @Input() languageLabels: Record<Language, string> = { fr: 'FR', en: 'EN', es: 'ES' };
  @Input() currentLanguage: Language = 'fr';
  @Input() languageSwitcherAria = 'Choose language';
  @Input() contactCtaTarget = '#contact';
  @Input() contactCtaLabel = '';
  @Output() languageChange = new EventEmitter<Language>();

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  selectLanguage(language: Language): void {
    if (language !== this.currentLanguage) {
      this.languageChange.emit(language);
    }
  }
}

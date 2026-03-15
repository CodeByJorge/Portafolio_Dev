import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  HeroConfig,
  NavigationItem,
} from '../../config/portfolio.config';

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
  @Input() languageButtonLabel = '';
  @Input() languageButtonAria = '';
  @Output() languageChange = new EventEmitter<void>();

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  triggerLanguageChange(): void {
    this.languageChange.emit();
  }
}

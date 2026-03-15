import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroConfig, ResumeLanguage, ResumeLink, SocialLink } from '../../config/portfolio.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() hero!: HeroConfig;
  @Input() socials: SocialLink[] = [];
  @Input() downloadLabel = 'Download CV';
  @Input() resumes: ResumeLink[] = [];
  @Input() resumeDropdownLabel = 'Available formats';

  protected isResumeMenuOpen = false;

  toggleResumeMenu(): void {
    this.isResumeMenuOpen = !this.isResumeMenuOpen;
  }

  closeResumeMenu(): void {
    this.isResumeMenuOpen = false;
  }

  protected get availableResumes(): ResumeLink[] {
    const list = [...this.resumes];
    if (
      this.hero &&
      this.hero.resumeUrl &&
      !list.some((resume) => resume.url === this.hero.resumeUrl)
    ) {
      list.unshift({
        label: this.downloadLabel,
        url: this.hero.resumeUrl,
        language: 'en' as ResumeLanguage,
      });
    }
    return list;
  }

  getSocialIcon(id: string): string | null {
    switch (id) {
      case 'github':
        return '/icons/github_light.svg';
      case 'linkedin':
        return '/icons/linkedin.svg';
      case 'email':
        return '/icons/gmail.svg';
      default:
        return null;
    }
  }
}

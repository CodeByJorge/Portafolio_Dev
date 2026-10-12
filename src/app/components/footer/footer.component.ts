import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterConfig, ResumeLink, SocialLink } from '../../config/portfolio.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() brand = '';
  @Input() footer!: FooterConfig;
  @Input() socials: SocialLink[] = [];
  /**
   * The CVs live here rather than in the hero: a prospective client is not
   * looking for a résumé, but a recruiter who lands on the site still finds one.
   */
  @Input() resumes: ResumeLink[] = [];

  protected readonly currentYear = new Date().getFullYear();

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

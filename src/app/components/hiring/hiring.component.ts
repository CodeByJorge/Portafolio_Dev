import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HiringConfig, ResumeLink } from '../../config/portfolio.config';

@Component({
  selector: 'app-hiring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css',
})
export class HiringComponent {
  @Input() hiring!: HiringConfig;
  @Input() resumes: ResumeLink[] = [];
  @Input() linkedinUrl?: string;
}

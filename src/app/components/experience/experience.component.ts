import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../config/portfolio.config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  @Input() items: ExperienceItem[] = [];
  @Input() title = 'Experience';
}

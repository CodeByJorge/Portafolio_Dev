import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../config/portfolio.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() items: ProjectItem[] = [];
  @Input() title = 'Projects';
  @Input() subtitle = '';
  @Input() viewProjectLabel = 'View project';
  @Input() viewCodeLabel = 'Code';
  @Input() viewDetailsLabel = 'Details';
  @Input() projectStatusLabel = 'In development';
  @Input() challengeLabel = 'The problem';
  @Input() outcomeLabel = 'The outcome';
}

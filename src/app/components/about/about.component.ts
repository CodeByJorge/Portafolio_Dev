import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AboutConfig } from '../../config/portfolio.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Input() about!: AboutConfig;
}


import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProcessStep } from '../../config/portfolio.config';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
})
export class ProcessComponent {
  @Input() steps: ProcessStep[] = [];
  @Input() title = 'Process';
  @Input() subtitle = '';
}

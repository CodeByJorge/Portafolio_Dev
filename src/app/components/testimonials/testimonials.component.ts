import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Testimonial } from '../../config/portfolio.config';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  @Input() items: Testimonial[] = [];
  @Input() title = 'Testimonials';
}

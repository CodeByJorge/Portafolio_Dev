import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../config/portfolio.config';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input() items: ServiceItem[] = [];
  @Input() title = 'Services';
  @Input() subtitle = '';
  @Input() deliverablesLabel = 'Included';
  @Input() priceFromLabel = 'From';
  @Input() onRequestLabel = 'On request';
  @Input() timelineLabel = 'Timeline';
  @Input() ctaLabel = '';
  @Input() ctaTarget = '#contact';
}

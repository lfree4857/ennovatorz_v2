import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TESTIMONIALS, Testimonial } from '../../shared/constants/testimonials.constant';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @Input() embedded = false;

  reviews: Testimonial[] = TESTIMONIALS;

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(img.alt || 'user')}`;
  }
}

import { Component } from '@angular/core';
import { TECH_CATEGORIES } from '../../shared/constants/tech-stack.constant';

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  techCategories = TECH_CATEGORIES;
}

import { Component } from '@angular/core';
import { PROJECTS, Project, PROJECT_CATEGORIES } from '../../shared/constants/projects.constant';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  categories = PROJECT_CATEGORIES;
  activeCategory = 'All';
  projects: Project[] = PROJECTS;

  get filteredProjects() {
    if (this.activeCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
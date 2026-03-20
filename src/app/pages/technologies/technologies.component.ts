import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  techCategories = [
    {
      name: 'Frontend',
      description: 'Building responsive, accessible, and performant user interfaces.',
      items: [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'Tailwind CSS', icon: '🌊' },
        { name: 'Framer Motion', icon: '⚡' }
      ]
    },
    {
      name: 'Backend',
      description: 'Developing scalable, secure, and robust server-side architectures.',
      items: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Express', icon: '🚂' },
        { name: 'NestJS', icon: '🐱' },
        { name: 'Go', icon: '🐹' },
        { name: 'Python', icon: '🐍' }
      ]
    },
    {
      name: 'Databases',
      description: 'Designing optimized schemas and managing high-volume data storage.',
      items: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Elasticsearch', icon: '🔍' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Automating deployments and managing highly available infrastructure.',
      items: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' },
        { name: 'GitHub Actions', icon: '🐙' },
        { name: 'Terraform', icon: '🏗️' },
        { name: 'Vercel', icon: '▲' }
      ]
    }
  ];
}

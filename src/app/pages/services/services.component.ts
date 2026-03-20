import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Application Development',
      description: 'Custom, responsive, and highly interactive web applications tailored to your business needs.',
      benefits: ['High performance', 'Responsive design', 'SEO optimized', 'Accessible'],
      techStack: ['React', 'Angular', 'Next.js', 'Tailwind'],
      icon: '💻'
    },
    {
      title: 'SaaS Development',
      description: 'End-to-end development of Software as a Service products with scalable multi-tenant architectures.',
      benefits: ['Subscription billing', 'Multi-tenant architecture', 'Scalable infrastructure', 'Admin dashboards'],
      techStack: ['Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      icon: '☁️'
    },
    {
      title: 'Frontend Engineering',
      description: 'Pixel-perfect UI development with complex state management and smooth animations.',
      benefits: ['Component libraries', 'Micro-frontends', 'State management', 'Web Vitals optimization'],
      techStack: ['TypeScript', 'Framer Motion', 'RxJS', 'NgRx'],
      icon: '✨'
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side logic, database design, and high-throughput data processing.',
      benefits: ['High throughput', 'Data integrity', 'Secure authentication', 'Event-driven architecture'],
      techStack: ['Spring Boot', 'Express', 'MongoDB', 'Go'],
      icon: '⚙️'
    },
    {
      title: 'API Development',
      description: 'Secure, documented, and versioned REST and GraphQL APIs for seamless integration.',
      benefits: ['RESTful design', 'GraphQL', 'Rate limiting', 'Auto-generated docs'],
      techStack: ['GraphQL', 'Swagger', 'Node.js', 'FastAPI'],
      icon: '🔌'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Automated CI/CD pipelines, containerization, and cloud infrastructure management.',
      benefits: ['Automated deployments', 'Horizontal scaling', 'Infrastructure as Code', 'Monitoring'],
      techStack: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      icon: '🏗️'
    },
    {
      title: 'Performance Optimization',
      description: 'Identifying bottlenecks and tuning your applications for maximum speed and efficiency.',
      benefits: ['Sub-second loads', 'Query optimization', 'Caching strategies', 'Bundle size reduction'],
      techStack: ['Lighthouse', 'Redis', 'CDN', 'WebPack/Vite'],
      icon: '⚡'
    },
    {
      title: 'Maintenance & Scaling',
      description: 'Ongoing support, security patching, and scaling your infrastructure as your user base grows.',
      benefits: ['24/7 Monitoring', 'Security updates', 'SLA guarantees', 'Code refactoring'],
      techStack: ['Datadog', 'Sentry', 'New Relic', 'Jira'],
      icon: '🛠️'
    }
  ];
}

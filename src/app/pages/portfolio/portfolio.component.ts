import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  categories = ['All', 'SaaS', 'Web Apps', 'Mobile', 'Enterprise'];
  activeCategory = 'All';

  projects = [
    {
      title: 'FinTrack Pro',
      category: 'SaaS',
      shortDesc: 'A financial analytics platform processing 2M+ transactions daily.',
      challenge: 'The client needed a highly scalable architecture to ingest real-time financial data without slowing down analytics queries.',
      solution: 'Implemented a distributed event-driven architecture with Apache Kafka and TimescaleDB, supported by a React frontend.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kafka'],
      impact: '300% increase in data processing speed with 99.99% uptime.',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'HealthBridge',
      category: 'Web Apps',
      shortDesc: 'Telemedicine platform connecting 50K+ patients with healthcare providers.',
      challenge: 'Required HIPAA-compliant data storage, real-time video streaming, and complex scheduling logic.',
      solution: 'Built with Next.js and Spring Boot. Integrated WebRTC for secure, peer-to-peer video sessions and implemented strict RBAC.',
      techStack: ['Next.js', 'Spring Boot', 'MongoDB', 'WebRTC'],
      impact: 'Scaled to 150K+ monthly active users within 6 months.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'LogiFlow',
      category: 'Enterprise',
      shortDesc: 'Supply chain management system automating logistics for Fortune 500 companies.',
      challenge: 'Legacy systems were causing data silos, and the client needed a unified dashboard for global operations.',
      solution: 'Migrated monolithic legacy app to microservices using Kubernetes. Developed a fast Angular portal for real-time tracking.',
      techStack: ['Angular', 'Java', 'Redis', 'Kubernetes'],
      impact: '40% reduction in operational costs; 2x faster order processing.',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      title: 'FitTracker App',
      category: 'Mobile',
      shortDesc: 'Cross-platform mobile application for personalized workout and diet plans.',
      challenge: 'Native-like performance was required for complex animations on mid-range devices.',
      solution: 'Used React Native with Reanimated for smooth 60fps animations. Backend powered by scalable Serverless functions.',
      techStack: ['React Native', 'Serverless', 'Firebase', 'GraphQL'],
      impact: '4.8 star rating across App Store and Google Play; 500K+ downloads.',
      gradient: 'from-pink-500 to-rose-600',
    }
  ];

  get filteredProjects() {
    if (this.activeCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}

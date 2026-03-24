import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { TextRevealDirective } from '../../shared/directives/text-reveal.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { SERVICES } from '../../shared/constants/services.constant';
import { PROJECTS } from '../../shared/constants/projects.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, MagneticDirective, TextRevealDirective, SpotlightDirective, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = SERVICES;
  caseStudies = PROJECTS;

  reasons = [
    { icon: '👨‍💻', title: 'Experienced Developer Team', description: 'Senior engineers with 10+ years of experience across diverse tech stacks.' },
    { icon: '🏗️', title: 'Clean & Scalable Architecture', description: 'Code that grows with your business — modular, tested, and documented.' },
    { icon: '🔄', title: 'Agile Delivery', description: 'Sprint-based development with continuous delivery and transparent progress tracking.' },
    { icon: '💬', title: 'Transparent Communication', description: 'Daily standups, weekly demos, and real-time project dashboards.' },
    { icon: '🎯', title: 'High Performance Solutions', description: 'Sub-second load times, 99.9% uptime, and optimized infrastructure.' },
  ];

  processSteps = [
    { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements through in-depth consultations.' },
    { step: '02', title: 'Planning', description: 'Creating detailed roadmaps, wireframes, and technical architecture blueprints.' },
    { step: '03', title: 'Design', description: 'Crafting intuitive UI/UX that delights users and drives conversions.' },
    { step: '04', title: 'Development', description: 'Building robust, scalable code with continuous integration and testing.' },
    { step: '05', title: 'Testing', description: 'Rigorous QA with automated tests, security audits, and performance benchmarks.' },
    { step: '06', title: 'Launch', description: 'Deploying to production with monitoring, support, and iteration cycles.' },
  ];

  techStack = {
    frontend: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    backend: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Spring Boot', color: '#6DB33F' },
      { name: 'Express', color: '#ffffff' },
      { name: 'NestJS', color: '#E0234E' },
    ],
    databases: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Redis', color: '#DC382D' },
    ],
    devops: [
      { name: 'Docker', color: '#2496ED' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'CI/CD', color: '#40BE46' },
      { name: 'Kubernetes', color: '#326CE5' },
    ],
  };

  clientLogos = ['TechCorp', 'StartupX', 'DataFlow', 'CloudBase', 'InnoVentures', 'ScaleUp'];
}

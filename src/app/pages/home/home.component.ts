import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { TextRevealDirective } from '../../shared/directives/text-reveal.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { SERVICES } from '../../shared/constants/services.constant';
import { PROJECTS } from '../../shared/constants/projects.constant';
import { CONTACT_INFO } from '../../shared/constants/contact-info.constant';
import { TECH_CATEGORIES } from '../../shared/constants/tech-stack.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, MagneticDirective, TextRevealDirective, SpotlightDirective, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly contactInfo = CONTACT_INFO;
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

  techStack = TECH_CATEGORIES;

  clientLogos = ['TechCorp', 'StartupX', 'DataFlow', 'CloudBase', 'InnoVentures', 'ScaleUp'];
}

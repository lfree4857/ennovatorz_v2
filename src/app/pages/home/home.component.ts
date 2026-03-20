import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { TextRevealDirective } from '../../shared/directives/text-reveal.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, MagneticDirective, TextRevealDirective, SpotlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { icon: '🌐', title: 'Custom Web Development', description: 'Bespoke web applications built with modern frameworks and best practices for scalability.' },
    { icon: '🚀', title: 'SaaS Development', description: 'End-to-end SaaS products with multi-tenancy, billing, and enterprise-grade architecture.' },
    { icon: '🔗', title: 'API Development', description: 'RESTful & GraphQL APIs designed for performance, security, and seamless integration.' },
    { icon: '📱', title: 'Mobile App Development', description: 'Cross-platform and native mobile apps that deliver exceptional user experiences.' },
    { icon: '🎨', title: 'UI/UX Engineering', description: 'Pixel-perfect interfaces with smooth animations and accessible design patterns.' },
    { icon: '⚡', title: 'Performance Optimization', description: 'Speed audits, code splitting, caching strategies, and infrastructure tuning.' },
  ];

  reasons = [
    { icon: '👨‍💻', title: 'Experienced Developer Team', description: 'Senior engineers with 10+ years of experience across diverse tech stacks.' },
    { icon: '🏗️', title: 'Clean & Scalable Architecture', description: 'Code that grows with your business — modular, tested, and documented.' },
    { icon: '🔄', title: 'Agile Delivery', description: 'Sprint-based development with continuous delivery and transparent progress tracking.' },
    { icon: '💬', title: 'Transparent Communication', description: 'Daily standups, weekly demos, and real-time project dashboards.' },
    { icon: '🎯', title: 'High Performance Solutions', description: 'Sub-second load times, 99.9% uptime, and optimized infrastructure.' },
  ];

  caseStudies = [
    {
      title: 'FinTrack Pro',
      category: 'SaaS',
      description: 'A financial analytics platform processing 2M+ transactions daily for enterprise clients.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      impact: '300% increase in data processing speed',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'HealthBridge',
      category: 'Web App',
      description: 'Telemedicine platform connecting 50K+ patients with healthcare providers.',
      techStack: ['Next.js', 'Spring Boot', 'MongoDB', 'Docker'],
      impact: '150K+ monthly active users',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'LogiFlow',
      category: 'Enterprise',
      description: 'Supply chain management system automating logistics for Fortune 500 companies.',
      techStack: ['Angular', 'Java', 'Redis', 'Kubernetes'],
      impact: '40% reduction in operational costs',
      gradient: 'from-orange-500/20 to-amber-500/20',
    },
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

  testimonials = [
    {
      quote: 'Innovators transformed our idea into a production-ready SaaS product in just 4 months. Their technical expertise is unmatched.',
      author: 'Sarah Chen',
      role: 'CEO, FinTrack Pro',
      rating: 5,
    },
    {
      quote: 'Working with Innovators felt like having a CTO on demand. They architected our entire platform from scratch and it scaled beautifully.',
      author: 'James Murphy',
      role: 'Founder, HealthBridge',
      rating: 5,
    },
    {
      quote: 'The team delivered enterprise-grade quality on startup timelines. Highly recommend for any serious software project.',
      author: 'Priya Sharma',
      role: 'VP Engineering, LogiFlow',
      rating: 5,
    },
  ];

  clientLogos = ['TechCorp', 'StartupX', 'DataFlow', 'CloudBase', 'InnoVentures', 'ScaleUp'];
}

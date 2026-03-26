import { Routes } from '@angular/router';
import { adminAuthGuard } from './pages/admin/admin-auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { title: 'Innovators — Bespoke Software Development', description: 'Transforming ideas into scalable digital products. Innovators is a premier software agency specializing in web and mobile applications.' }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { title: 'About Innovators | Our Team & Vision', description: 'Learn about Innovators, our world-class engineering team, and our commitment to delivering exceptional software solutions.' }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: { title: 'Our Services | Custom Software, SaaS & Mobile Apps', description: 'We offer full-cycle software development services, from initial product design to high-performance SaaS platforms and robust mobile applications.' }
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    data: { title: 'Our Portfolio | Success Stories & Case Studies', description: 'Explore our portfolio of successful software projects. See how we have helped startups and enterprises achieve their digital goals.' }
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list.component').then(m => m.BlogListComponent),
    data: { title: 'Tech Blog & Insights | Innovators', description: 'Read our latest articles on software engineering, best practices, modern frameworks, and tech industry trends.' }
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-detail.component').then(m => m.BlogDetailComponent),
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies.component').then(m => m.TechnologiesComponent),
    data: { title: 'Technologies We Use | Angular, NestJS, Node & More', description: 'Discover the modern tech stack we use to build secure, scalable, and high-performance software, including Angular, React, Node.js, and Cloud services.' }
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
    data: { title: 'Client Testimonials | What People Say About Us', description: 'Read reviews and testimonials from clients who have partnered with Innovators to build their digital products.' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { title: 'Contact Innovators | Start Your Project', description: 'Get in touch with our team of experts. Let us discuss how we can help you build your next great software product.' }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    data: { title: 'Pricing & Engagement Models | Innovators', description: 'Transparent pricing and flexible engagement models tailored to startups, scale-ups, and large enterprise requirements.' }
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
    data: { title: 'Careers | Join The Innovators Team', description: 'We are hiring! Explore open positions and join a team of passionate software engineers building the future of tech.' }
  },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/admin/login/admin-login.component').then(m => m.AdminLoginComponent),
        data: { title: 'Admin Login | Innovators' }
      },
      {
        path: '',
        loadComponent: () => import('./pages/admin/layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        canActivate: [adminAuthGuard],
        children: [
          { path: '', redirectTo: 'blog', pathMatch: 'full' },
          {
            path: 'blog',
            loadComponent: () => import('./pages/admin/blog-list/admin-blog-list.component').then(m => m.AdminBlogListComponent),
            data: { title: 'Admin - Manage Blogs' }
          },
          {
            path: 'blog/create',
            loadComponent: () => import('./pages/admin/blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
            data: { title: 'Admin - Create Blog' }
          },
          {
            path: 'blog/edit/:id',
            loadComponent: () => import('./pages/admin/blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
            data: { title: 'Admin - Edit Blog' }
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

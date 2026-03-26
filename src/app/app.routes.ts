import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { title: 'Ennovatorz — Bespoke Software Development', description: 'Transforming ideas into scalable digital products. Ennovatorz is a premier software agency specializing in web and mobile applications.' }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { title: 'About Ennovatorz | Our Team & Vision', description: 'Learn about Ennovatorz, our world-class engineering team, and our commitment to delivering exceptional software solutions.' }
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
    data: { title: 'Tech Blog & Insights | Ennovatorz', description: 'Read our latest articles on software engineering, best practices, modern frameworks, and tech industry trends.' }
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
    data: { title: 'Client Testimonials | What People Say About Us', description: 'Read reviews and testimonials from clients who have partnered with Ennovatorz to build their digital products.' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { title: 'Contact Ennovatorz | Start Your Project', description: 'Get in touch with our team of experts. Let us discuss how we can help you build your next great software product.' }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    data: { title: 'Pricing & Engagement Models | Ennovatorz', description: 'Transparent pricing and flexible engagement models tailored to startups, scale-ups, and large enterprise requirements.' }
  },
  // {
  //   path: 'careers',
  //   loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
  //   data: { title: 'Careers | Join The Ennovatorz Team', description: 'We are hiring! Explore open positions and join a team of passionate software engineers building the future of tech.' }
  // },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

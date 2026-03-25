import { Routes } from '@angular/router';
import { adminAuthGuard } from './pages/admin/admin-auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list.component').then(m => m.BlogListComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-detail.component').then(m => m.BlogDetailComponent),
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies.component').then(m => m.TechnologiesComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
  },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/admin/login/admin-login.component').then(m => m.AdminLoginComponent),
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
          },
          {
            path: 'blog/create',
            loadComponent: () => import('./pages/admin/blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
          },
          {
            path: 'blog/edit/:id',
            loadComponent: () => import('./pages/admin/blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
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

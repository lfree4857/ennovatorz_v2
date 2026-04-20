import { Routes } from '@angular/router';
import { adminAuthGuard } from './admin-auth.guard';

export const adminRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/admin-login.component').then(m => m.AdminLoginComponent),
    data: { title: 'Admin Login | Ennovatorz', noindex: true }
  },
  {
    path: '',
    loadComponent: () => import('./layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [adminAuthGuard],
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      {
        path: 'blog',
        loadComponent: () => import('./blog-list/admin-blog-list.component').then(m => m.AdminBlogListComponent),
        data: { title: 'Admin - Manage Blogs', noindex: true }
      },
      {
        path: 'blog/create',
        loadComponent: () => import('./blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
        data: { title: 'Admin - Create Blog', noindex: true }
      },
      {
        path: 'blog/edit/:id',
        loadComponent: () => import('./blog-form/admin-blog-form.component').then(m => m.AdminBlogFormComponent),
        data: { title: 'Admin - Edit Blog', noindex: true }
      },
    ]
  },
];

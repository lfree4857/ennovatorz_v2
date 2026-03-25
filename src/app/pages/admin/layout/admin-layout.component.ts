import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-dark-950 flex flex-col">

      <!-- Header -->
      <header class="bg-dark-900 border-b border-dark-700/50 px-6 py-0 flex items-center justify-between h-16 flex-shrink-0">
        <!-- Brand -->
        <div class="flex items-center gap-8">
          <a routerLink="/admin/blog" class="text-lg font-bold text-white tracking-tight">
            Ennovatorz <span class="text-primary-400 font-medium">Admin</span>
          </a>
          <!-- Nav Links -->
          <nav class="hidden sm:flex items-center gap-1">
            <a
              routerLink="/admin/blog"
              routerLinkActive="bg-primary-500/10 text-primary-400 border-primary-500/30"
              [routerLinkActiveOptions]="{ exact: false }"
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-dark-300 hover:text-white hover:bg-dark-800 border border-transparent transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Blog Posts
            </a>
          </nav>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <a
            routerLink="/admin/blog/create"
            class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/30 hover:bg-primary-500/20 transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            New Post
          </a>
          <div class="w-px h-6 bg-dark-700"></div>
          <a href="/" target="_blank" class="text-dark-400 hover:text-dark-200 text-sm transition-colors hidden sm:block">
            View Site
          </a>
          <button
            (click)="logout()"
            class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-dark-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            Logout
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto">
        <router-outlet />
      </main>

    </div>
  `,
})
export class AdminLayoutComponent {
  constructor(private auth: AdminAuthService) {}
  logout() { this.auth.logout(); }
}

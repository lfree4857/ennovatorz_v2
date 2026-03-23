import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-dark-950">
      <nav class="border-b border-dark-800 px-8 py-4 flex items-center justify-between">
        <span class="text-white font-bold tracking-wide">Ennovatorz <span class="text-primary-400 text-sm font-medium">Admin</span></span>
        <a href="/" class="text-dark-400 hover:text-white text-sm transition-colors">← Back to site</a>
      </nav>
      <router-outlet />
    </div>
  `,
})
export class AdminLayoutComponent {}

import { Injectable, effect, signal } from '@angular/core';

const STORAGE_KEY = 'ennovatorz-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(this.getInitialTheme());

  constructor() {
    effect(() => {
      this.applyTheme(this.isDark());
    });
  }

  toggleTheme() {
    this.isDark.update(isDark => {
      const next = !isDark;
      this.saveTheme(next);
      return next;
    });
  }

  private getInitialTheme(): boolean {
    if (typeof localStorage === 'undefined') return false;
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) return savedTheme === 'dark';

    if (typeof matchMedia === 'undefined') return false;
    return matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private saveTheme(isDark: boolean) {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean) {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('theme-dark', isDark);
    document.documentElement.classList.toggle('theme-light', !isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin@123';
const SESSION_KEY = 'admin_authenticated';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(SESSION_KEY);
    this.router.navigate(['/admin/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }
}

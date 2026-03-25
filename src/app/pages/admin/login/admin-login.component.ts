import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AdminAuthService);
  private router = inject(Router);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  error = '';
  showPassword = false;

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { username, password } = this.form.value;
    const success = this.auth.login(username!, password!);
    if (success) {
      this.router.navigate(['/admin/blog']);
    } else {
      this.error = 'Invalid username or password.';
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isSubmitting = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private loaderService: LoaderService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: [''],
      budget: ['', Validators.required],
      service: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.isSubmitted = false;
      this.loaderService.show();

      this.http.post('http://localhost:3001/inquiry', this.contactForm.value).subscribe({
        next: () => {
          this.loaderService.hide();
          this.isSubmitting = false;
          this.isSubmitted = true;
          this.contactForm.reset();
          this.contactForm.patchValue({ budget: '', service: '' });
          setTimeout(() => {
            this.isSubmitted = false;
          }, 5000);
        },
        error: (err) => {
          console.error('Submission error:', err);
          this.loaderService.hide();
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

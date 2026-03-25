import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APP_MESSAGES } from '../../shared/constants/messages.constant';
import { HttpService } from '../../services/http.service';
import { LoaderService } from '../../services/loader.service';
import { ToasterService } from '../../services/toaster.service';
import { SocialLinksComponent } from "../../shared/components/social-links/social-links.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, SocialLinksComponent],
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
    private http: HttpService,
    private loaderService: LoaderService,
    private toasterService: ToasterService
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

      this.http.post('/inquiry', this.contactForm.value).subscribe({
        next: () => {
          this.loaderService.hide();
          this.isSubmitting = false;
          this.isSubmitted = true;
          this.toasterService.success(APP_MESSAGES.SUCCESS.INQUIRY_SUBMITTED);
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
          this.toasterService.error(APP_MESSAGES.ERROR.INQUIRY_FAILED);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

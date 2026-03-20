import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Simple form state for demonstration
  isSubmitted = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
      // In a real app, form fields would be cleared here
    }, 5000);
  }
}

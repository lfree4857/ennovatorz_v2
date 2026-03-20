import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamValues = [
    { title: 'Engineering Excellence', description: 'We write clean, testable, and maintainable code. No cutting corners, just solid architecture.' },
    { title: 'Developer-First Culture', description: 'Our team thrives in an environment that prioritizes continuous learning, open source contribution, and deep technical discussions.' },
    { title: 'Extreme Ownership', description: 'We take full responsibility for the products we build. From the first line of code to production deployment and beyond.' },
    { title: 'Transparent Communication', description: 'We believe in radical transparency with our clients and within our team. No hidden surprises.' }
  ];
}

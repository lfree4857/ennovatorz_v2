import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Web Development', path: '/services' },
      { label: 'SaaS Development', path: '/services' },
      { label: 'API Development', path: '/services' },
      { label: 'Mobile Apps', path: '/services' },
    ],
    resources: [
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Technologies', path: '/technologies' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Testimonials', path: '/testimonials' },
    ],
  };


}

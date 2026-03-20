import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  reviews = [
    {
      quote: 'Innovators transformed our idea into a production-ready SaaS product in just 4 months. Their technical expertise is unmatched, and their communication was stellar throughout the process.',
      author: 'Sarah Chen',
      role: 'CEO, FinTrack Pro',
      company: 'FinTrack Inc.',
      rating: 5,
      avatar: '👩🏻'
    },
    {
      quote: 'Working with Innovators felt like having a CTO on demand. They architected our entire platform from scratch and it scaled beautifully from 1,000 to 150,000 users without a hitch.',
      author: 'James Murphy',
      role: 'Founder, HealthBridge',
      company: 'HealthBridge LLC',
      rating: 5,
      avatar: '👨🏼'
    },
    {
      quote: 'The team delivered enterprise-grade quality on startup timelines. Highly recommend for any serious software project that requires deep backend knowledge.',
      author: 'Priya Sharma',
      role: 'VP Engineering, LogiFlow',
      company: 'Global Logistics',
      rating: 5,
      avatar: '👩🏽'
    },
    {
      quote: 'We had performance bottlenecks that stalled our growth. Innovators swooped in, audited our infrastructure, and reduced load times by 70%. Literal lifesavers.',
      author: 'Alex Rivera',
      role: 'CTO, DataSync',
      company: 'DataSync Cloud',
      rating: 5,
      avatar: '👨🏽'
    },
    {
      quote: 'The difference between our old vendor and Innovators is night and day. The code quality, the automated testing, and the deployment pipelines are perfectly engineered.',
      author: 'Michael O\'Connor',
      role: 'Product Director',
      company: 'RetailNow',
      rating: 4.5,
      avatar: '👨🏻'
    },
    {
      quote: 'Responsive, brilliant, and completely dedicated to our success. We consider them an extension of our internal team rather than an agency.',
      author: 'Linda Wang',
      role: 'Co-founder',
      company: 'Eventbrite Scale',
      rating: 5,
      avatar: '👩🏻'
    }
  ];
}

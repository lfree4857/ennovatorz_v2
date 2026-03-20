import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for early-stage startups needing a solid foundation.',
      price: '$10k - $25k',
      duration: '4-8 weeks',
      features: [
        'MVP Development',
        'UI/UX Design Mockups',
        'Basic Server Setup',
        '1 Month Tech Support',
        'Weekly Syncs'
      ],
      ctaText: 'Start Building',
      popular: false
    },
    {
      name: 'Growth',
      description: 'Ideal for scaling businesses requiring robust, scalable architecture.',
      price: '$50k - $100k',
      duration: '3-6 months',
      features: [
        'Full-Stack Custom SaaS',
        'Microservices Architecture',
        'Advanced CI/CD Pipelines',
        'Performance Audits',
        '3 Months Tech Support',
        'Daily Standups'
      ],
      ctaText: 'Scale Your Product',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Dedicated agile teams for complex, high-throughput systems.',
      price: 'Custom',
      duration: 'Ongoing',
      features: [
        'Dedicated Engineering Team',
        'Legacy System Migration',
        'Enterprise Security & Compliance',
        '24/7 SLA Support',
        'Custom SLA Contracts',
        'On-Premise or Cloud'
      ],
      ctaText: 'Contact Sales',
      popular: false
    }
  ];
}

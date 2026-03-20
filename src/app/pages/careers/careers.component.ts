import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  roles = [
    {
      title: 'Senior Frontend Engineer',
      type: 'Full-time',
      location: 'Remote (Global)',
      department: 'Engineering',
      description: 'Looking for a React/Angular expert with a deep understanding of performance optimization, accessibility, and modern CSS architecture.'
    },
    {
      title: 'Backend Node.js Developer',
      type: 'Full-time',
      location: 'Remote (US/EU Timezones)',
      department: 'Engineering',
      description: 'Seeking a strong backend engineer experienced in microservices, PostgreSQL, Redis, and building high-throughput REST/GraphQL APIs.'
    },
    {
      title: 'DevOps / Site Reliability Engineer',
      type: 'Contract',
      location: 'Remote',
      department: 'Infrastructure',
      description: 'Help us automate all the things. Kubernetes, Terraform, AWS, and CI/CD pipeline mastery required.'
    },
    {
      title: 'UI/UX Product Designer',
      type: 'Full-time',
      location: 'San Francisco / Remote',
      department: 'Design',
      description: 'Design beautiful, conversion-focused B2B SaaS applications. Strong portfolio in Figma and interactive prototyping required.'
    }
  ];

  perks = [
    { icon: '🌍', title: 'Work From Anywhere', desc: '100% remote team spread across 15+ countries.' },
    { icon: '💻', title: 'Home Office Stipend', desc: '$2,500 to set up your ideal workspace.' },
    { icon: '📚', title: 'Learning & Development', desc: 'Unlimited books and course reimbursements.' },
    { icon: '🏥', title: 'Premium Health Insurance', desc: 'Top-tier medical, dental, and vision coverage.' },
    { icon: '🏖️', title: 'Unlimited PTO', desc: 'Mandatory minimum of 4 weeks off per year.' },
    { icon: '🎉', title: 'Annual Retreats', desc: 'Fully paid global team meetups once a year.' }
  ];
}

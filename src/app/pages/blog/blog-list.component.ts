import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  categories = ['All', 'Engineering', 'Company', 'Design', 'Culture'];
  activeCategory = 'All';

  posts = [
    {
      slug: 'building-scalable-saas-architecture',
      title: 'Building Scalable SaaS Architecture in 2026',
      excerpt: 'A deep dive into how we architect multi-tenant SaaS applications to handle millions of requests without breaking a sweat.',
      category: 'Engineering',
      author: 'James Murphy',
      readTime: '8 min read',
      date: 'Mar 10, 2026',
      imageGradient: 'from-blue-600 to-indigo-600'
    },
    {
      slug: 'react-vs-angular-performance',
      title: 'Performance Showdown: React 19 vs Angular 21',
      excerpt: 'We benchmarked the latest versions of the two most popular frontend frameworks. The results might surprise you.',
      category: 'Engineering',
      author: 'Sarah Chen',
      readTime: '12 min read',
      date: 'Feb 28, 2026',
      imageGradient: 'from-red-500 to-orange-500'
    },
    {
      slug: 'api-security-best-practices',
      title: '10 API Security Best Practices Every Developer Should Know',
      excerpt: 'Stop getting hacked. Implement these 10 security measures to protect your endpoints from automated attacks.',
      category: 'Engineering',
      author: 'Alex Rivera',
      readTime: '6 min read',
      date: 'Feb 15, 2026',
      imageGradient: 'from-emerald-500 to-teal-600'
    },
    {
      slug: 'design-systems-that-scale',
      title: 'Creating Design Systems That Actually Scale',
      excerpt: 'How to build a UI component library that developers love using and designers love maintaining.',
      category: 'Design',
      author: 'Priya Sharma',
      readTime: '10 min read',
      date: 'Feb 02, 2026',
      imageGradient: 'from-pink-500 to-rose-600'
    },
    {
      slug: 'remote-first-culture',
      title: 'Why We Are a 100% Remote-First Company',
      excerpt: 'The benefits, challenges, and tools we use to maintain a cohesive engineering culture across 15 time zones.',
      category: 'Culture',
      author: 'Michael O\'Connor',
      readTime: '5 min read',
      date: 'Jan 20, 2026',
      imageGradient: 'from-purple-500 to-fuchsia-600'
    }
  ];

  get filteredPosts() {
    if (this.activeCategory === 'All') return this.posts;
    return this.posts.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}

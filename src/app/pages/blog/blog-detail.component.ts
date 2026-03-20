import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  slug: string | null = null;
  post: any = null; // Mock post logic for demonstration

  posts = [
    {
      slug: 'building-scalable-saas-architecture',
      title: 'Building Scalable SaaS Architecture in 2026',
      excerpt: 'A deep dive into how we architect multi-tenant SaaS applications to handle millions of requests without breaking a sweat.',
      category: 'Engineering',
      author: 'James Murphy',
      readTime: '8 min read',
      date: 'Mar 10, 2026',
      imageGradient: 'from-blue-600 to-indigo-600',
      content: `
        <p>In modern SaaS development, architecture is everything. Building an application that works perfectly for a hundred users is one thing; building a platform that scales elegantly to serve thousands of organizations, each with thousands of users, is an entirely different engineering challenge.</p>
        
        <p>In this post, we'll outline the exact architecture patterns we use at Innovators to deploy high-throughput, horizontally scalable B2B applications.</p>
        
        <h3>1. The Move from Monolith to Modulith</h3>
        <p>While microservices are often touted as the panacea for scalability, we've found that for early-to-mid-stage SaaS products, a modular monolith (or "modulith") offers the perfect balance of deployment simplicity and architectural cleanliness.</p>
        <ul>
          <li><strong>Domain-Driven Design:</strong> Strict boundaries between domains within the same codebase.</li>
          <li><strong>Database Isolation:</strong> Ensuring modules communicate via APIs rather than direct SQL joins.</li>
          <li><strong>Event Sourcing:</strong> Using message brokers internally for eventual consistency without network overhead.</li>
        </ul>

        <h3>2. Multi-Tenancy Patterns</h3>
        <p>Data isolation is paramount when dealing with B2B clients. A data leak across tenants is disastrous. We typically utilize the "Pool Model" with strict Row-Level Security (RLS) in PostgreSQL, rather than the more expensive "Silo Model" (a separate database per tenant), unless required by specific enterprise compliance standards like HIPAA.</p>

        <h3>3. Real-Time Capabilities via WebSockets</h3>
        <p>Modern users expect UI to update immediately. By utilizing tools like Socket.io or natively integrating Redis Pub/Sub directly into our API layer, we can push updates to the frontend globally in milliseconds.</p>

        <p>Stay tuned for Part 2, where we'll discuss CI/CD pipelines for zero-downtime monolithic deployments on Kubernetes.</p>
      `
    }
  ];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      // In a real app, you'd fetch the post by slug here.
      // For now we'll just show the mock post or a fallback.
      this.post = this.posts.find(p => p.slug === this.slug) || this.posts[0];
    });
  }
}

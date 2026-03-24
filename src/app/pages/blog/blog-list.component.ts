import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogService = inject(BlogService);

  categories: string[] = ['All'];
  activeCategory = 'All';
  posts: Blog[] = [];
  loading = true;

  ngOnInit() {
    this.blogService.getAll().subscribe({
      next: (data: any) => {
        const blogs = Array.isArray(data) ? data : (data?.data ?? []);
        this.posts = blogs;
        const topics = [...new Set<string>(blogs.map((p: any) => p.topic).filter(Boolean))];
        this.categories = ['All', ...topics];
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get filteredPosts() {
    if (this.activeCategory === 'All') return this.posts;
    return this.posts.filter(p => p.topic === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}

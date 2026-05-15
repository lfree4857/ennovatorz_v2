import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../services/blog.service';
import { environment } from '../../../environments/environment';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogService = inject(BlogService);
  loaderService = inject(LoaderService);

  categories: string[] = ['All'];
  activeCategory = 'All';
  posts: Blog[] = [];
  loading = true;

  ngOnInit() {
    this.loaderService.show();
    this.blogService.getAll().subscribe({
      next: (data: any) => {
        const blogs = Array.isArray(data) ? data : (data?.data ?? []);
        this.posts = blogs;
        const topics = [...new Set<string>(blogs.map((p: any) => p.topic).filter(Boolean))];
        this.categories = ['All', ...topics];
        this.loading = false;
        this.loaderService.hide();
      },
      error: () => {
        this.loading = false;
        this.loaderService.hide();
      }
    });
  }

  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) {
      try { imageUrl = new URL(imageUrl).pathname; } catch { return imageUrl; }
    }
    return `${environment.uploadsUrl}${imageUrl}`;
  }

  get filteredPosts() {
    if (this.activeCategory === 'All') return this.posts;
    return this.posts.filter(p => p.topic === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}

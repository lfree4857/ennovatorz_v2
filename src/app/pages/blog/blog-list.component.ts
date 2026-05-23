import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService, Blog } from '../../services/blog.service';
import { environment } from '../../../environments/environment';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule],
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
  searchTerm = '';

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
    const query = this.searchTerm.trim().toLowerCase();
    return this.posts.filter(post => {
      const matchesCategory = this.activeCategory === 'All' || post.topic === this.activeCategory;
      if (!query) return matchesCategory;

      const tags = this.getTags(post).join(' ');
      const searchable = `${post.title} ${post.shortDescription} ${post.topic} ${tags}`.toLowerCase();
      return matchesCategory && searchable.includes(query);
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  getCategoryCount(cat: string): number {
    if (cat === 'All') return this.posts.length;
    return this.posts.filter(post => post.topic === cat).length;
  }

  getTags(post: Blog): string[] {
    if (!post.tags) return [];
    if (Array.isArray(post.tags)) return post.tags.filter(Boolean);
    return String(post.tags).split(',').map(tag => tag.trim()).filter(Boolean);
  }
}

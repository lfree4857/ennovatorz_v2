import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BlogService, Blog } from '../../services/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);

  categories: string[] = ['All'];
  activeCategory = 'All';
  posts: Blog[] = [];
  loading = true;

  getImageUrl(imageUrl?: string): SafeUrl {
    if (!imageUrl) return '';
    const url = imageUrl.startsWith('http') ? imageUrl : `${environment.apiUrl}${imageUrl}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.blogService.getAll().subscribe({
      next: (data) => {
        this.posts = data;
        const topics = [...new Set(data.map(p => p.topic).filter(Boolean))];
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

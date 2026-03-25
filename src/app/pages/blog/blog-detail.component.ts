import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../services/blog.service';
import { environment } from '../../../environments/environment';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, SocialLinksComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  post: Blog | null = null;
  loading = true;

  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) {
      try { imageUrl = new URL(imageUrl).pathname; } catch { return imageUrl; }
    }
    return `${environment.uploadsUrl}${imageUrl}`;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('slug');
      if (!id) { this.loading = false; return; }
      this.blogService.getById(id).subscribe({
        next: (data: any) => { this.post = data?._id ? data : (data?.data ?? null); this.loading = false; },
        error: () => { this.post = null; this.loading = false; }
      });
    });
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService, Blog } from '../../services/blog.service';
import { SeoService } from '../../core/services/seo.service';
import { environment } from '../../../environments/environment';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private sanitizer = inject(DomSanitizer);

  post: Blog | null = null;
  relatedPosts: Blog[] = [];
  loading = true;
  loaderService = inject(LoaderService);
  carouselIndex = 0;
  sanitizedContent: SafeHtml = '';

  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) {
      try { imageUrl = new URL(imageUrl).pathname; } catch { return imageUrl; }
    }
    return `${environment.uploadsUrl}${imageUrl}`;
  }

  /** Returns cover image URL, falling back to first image in images[] if imageUrl is missing */
  getCoverImage(blog: Blog): string {
    return this.getImageUrl(blog.imageUrl || blog.images?.[0]);
  }

  /** Strip only color/background-color properties from inline style attributes, preserve others */
  private cleanEditorHtml(html: string): string {
    return html.replace(/style="([^"]*)"/gi, (_match, styles: string) => {
      const cleaned = styles
        .split(';')
        .filter(prop => !/^\s*(color|background(-color)?|background-color)\s*:/i.test(prop))
        .join(';')
        .trim()
        .replace(/;+$/, '');
      return cleaned ? `style="${cleaned}"` : '';
    });
  }

  ngOnInit() {
    this.loaderService.show();
    this.route.paramMap.subscribe(params => {
      const id = params.get('slug');
      if (!id) { this.loading = false; this.loaderService.hide(); return; }
      this.blogService.getById(id).subscribe({
        next: (data: any) => {
          this.post = data?._id ? data : (data?.data ?? null);
          this.loading = false;
          this.loaderService.hide();
          if (this.post) {
            this.seoService.setPostSeo(this.post);
            const cleaned = this.cleanEditorHtml(this.post.content || '');
            this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(cleaned);
            this.blogService.getAll().subscribe({
              next: (res: any) => {
                const all: Blog[] = Array.isArray(res) ? res : (res?.data ?? []);
                this.relatedPosts = all.filter(b => b._id !== this.post!._id).slice(0, 5);
              }
            });
          }
        },
        error: () => { this.post = null; this.loading = false; this.loaderService.hide(); }
      });
    });
  }
}

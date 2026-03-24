import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../services/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, DatePipe],
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
    return imageUrl.startsWith('http') ? imageUrl : `${environment.apiUrl}${imageUrl}`;
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

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../../services/blog.service';
import { ToasterService } from '../../../services/toaster.service';
import { APP_MESSAGES } from '../../../shared/constants/messages.constant';

@Component({
  selector: 'app-admin-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './admin-blog-list.component.html',
})
export class AdminBlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  private toaster = inject(ToasterService);

  blogs: Blog[] = [];
  loading = true;
  error = '';
  confirmDeleteId: string | null = null;

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.loading = true;
    this.blogService.getAll().subscribe({
      next: (data: any) => { this.blogs = Array.isArray(data) ? data : (data?.data ?? []); this.loading = false; },
      error: () => { this.error = 'Failed to load blogs.'; this.loading = false; }
    });
  }

  confirmDelete(id: string) {
    this.confirmDeleteId = id;
  }

  cancelDelete() {
    this.confirmDeleteId = null;
  }

  delete() {
    if (!this.confirmDeleteId) return;
    const id = this.confirmDeleteId;
    this.confirmDeleteId = null;
    this.blogService.delete(id).subscribe({
      next: () => {
        this.blogs = this.blogs.filter(b => b._id !== id);
        this.toaster.success(APP_MESSAGES.SUCCESS.BLOG_DELETED);
      },
      error: () => this.toaster.error(APP_MESSAGES.ERROR.BLOG_DELETE_FAILED)
    });
  }
}

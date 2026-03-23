import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, Blog } from '../../../services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './admin-blog-list.component.html',
})
export class AdminBlogListComponent implements OnInit {
  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  loading = true;
  error = '';

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.loading = true;
    this.blogService.getAll().subscribe({
      next: (data) => { this.blogs = data; this.loading = false; },
      error: () => { this.error = 'Failed to load blogs.'; this.loading = false; }
    });
  }

  async delete(id: string) {
    const result = await Swal.fire({
      title: 'Delete Post?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
      background: '#1e293b',
      color: '#f8fafc',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#334155',
    });
    if (!result.isConfirmed) return;
    this.blogService.delete(id).subscribe({
      next: () => {
        this.blogs = this.blogs.filter(b => b._id !== id);
        Swal.fire({ title: 'Deleted!', icon: 'success', background: '#1e293b', color: '#f8fafc', confirmButtonColor: '#6366f1', timer: 1500, showConfirmButton: false });
      },
      error: () => Swal.fire({ title: 'Error', text: 'Failed to delete blog.', icon: 'error', background: '#1e293b', color: '#f8fafc', confirmButtonColor: '#6366f1' })
    });
  }
}

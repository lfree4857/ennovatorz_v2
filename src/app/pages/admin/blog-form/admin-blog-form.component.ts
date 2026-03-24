import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { ToasterService } from '../../../services/toaster.service';
import { APP_MESSAGES } from '../../../shared/constants/messages.constant';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-blog-form.component.html',
  styleUrls: ['./admin-blog-form.component.scss'],
})
export class AdminBlogFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private blogService = inject(BlogService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toaster = inject(ToasterService);

  editId: string | null = null;
  isEditMode = false;
  submitting = false;
  error = '';
  imagePreview: string | null = null;
  selectedFile: File | null = null;

  topics = ['Engineering', 'Design', 'Culture', 'Company', 'Technology'];

  form = this.fb.group({
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    content: ['', Validators.required],
    topic: ['', Validators.required],
    authorName: ['', Validators.required],
    readTime: ['', Validators.required],
  });

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.editId;

    if (this.isEditMode && this.editId) {
      this.blogService.getById(this.editId).subscribe({
        next: (blog) => {
          this.form.patchValue(blog as any);
          if (blog.imageUrl) {
            let url = blog.imageUrl;
            if (url.startsWith('http')) {
              try { url = new URL(url).pathname; } catch {}
            }
            this.imagePreview = `${environment.uploadsUrl}${url}`;
          }
        },
        error: () => this.error = 'Failed to load blog data.'
      });
    }
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => this.imagePreview = reader.result as string;
    reader.readAsDataURL(file);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const v = this.form.value;
    const formData = new FormData();
    formData.append('title', v.title!);
    formData.append('content', v.content!);
    formData.append('shortDescription', v.shortDescription!);
    formData.append('topic', v.topic!);
    formData.append('authorName', v.authorName!);
    formData.append('readTime', v.readTime!);
    if (this.selectedFile) formData.append('image', this.selectedFile);

    this.submitting = true;
    this.error = '';

    const request$ = this.isEditMode && this.editId
      ? this.blogService.update(this.editId, formData)
      : this.blogService.create(formData);

    request$.subscribe({
      next: () => {
        this.toaster.success(this.isEditMode ? APP_MESSAGES.SUCCESS.BLOG_UPDATED : APP_MESSAGES.SUCCESS.BLOG_CREATED);
        this.router.navigate(['/admin/blog']);
      },
      error: () => { this.error = 'Failed to save blog. Please try again.'; this.submitting = false; }
    });
  }
}

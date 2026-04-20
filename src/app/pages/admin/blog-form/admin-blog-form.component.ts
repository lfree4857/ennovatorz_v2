import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { BlogService } from '../../../services/blog.service';
import { ToasterService } from '../../../services/toaster.service';
import { APP_MESSAGES } from '../../../shared/constants/messages.constant';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, QuillModule],
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
  imagePreviews: string[] = [];   // all previews (existing URLs + new blob URLs)
  existingImagePaths: string[] = []; // relative paths of existing saved images
  selectedFiles: File[] = [];        // newly picked files

  topics = ['Engineering', 'Design', 'Culture', 'Company', 'Technology'];

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  };

  tags: string[] = [];
  tagInput = '';

  form = this.fb.group({
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    content: ['', Validators.required],
    topic: ['', Validators.required],
    authorName: ['', Validators.required],
    readTime: ['', Validators.required],
    // SEO fields
    metaTitle: [''],
    metaDescription: [''],
    keywords: [''],
  });

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.editId;

    if (this.isEditMode && this.editId) {
      this.blogService.getById(this.editId).subscribe({
        next: (res: any) => {
          const blog = res?._id ? res : (res?.data ?? res);
          this.form.patchValue({
            title: blog.title,
            shortDescription: blog.shortDescription,
            content: blog.content || '',
            topic: blog.topic,
            authorName: blog.authorName,
            readTime: blog.readTime,
            metaTitle: blog.metaTitle || '',
            metaDescription: blog.metaDescription || '',
            keywords: blog.keywords || '',
          });
          this.tags = Array.isArray(blog.tags) ? [...blog.tags] : [];
          // Load existing images
          const rawImages: string[] = blog.images?.length
            ? blog.images
            : blog.imageUrl ? [blog.imageUrl] : [];

          this.existingImagePaths = rawImages.map(url => {
            if (url.startsWith('http')) { try { return new URL(url).pathname; } catch {} }
            return url;
          });
          this.imagePreviews = this.existingImagePaths.map(p => `${environment.uploadsUrl}${p}`);
        },
        error: () => this.error = 'Failed to load blog data.'
      });
    }
  }

  addTag(value: string) {
    const tag = value.trim();
    if (tag && !this.tags.includes(tag)) this.tags.push(tag);
    this.tagInput = '';
  }

  onTagKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.addTag(this.tagInput);
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }

  onFileChange(event: Event) {
    const files = Array.from((event.target as HTMLInputElement).files || []);
    if (!files.length) return;
    this.selectedFiles = [...this.selectedFiles, ...files];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => this.imagePreviews.push(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

  removeImage(index: number) {
    // If removing an existing image, also remove from existingImagePaths
    if (index < this.existingImagePaths.length) {
      this.existingImagePaths.splice(index, 1);
    } else {
      // It's a newly added file; offset by existing count
      this.selectedFiles.splice(index - this.existingImagePaths.length, 1);
    }
    this.imagePreviews.splice(index, 1);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const v = this.form.value;
    const formData = new FormData();
    formData.append('title', v.title!);
    formData.append('content', v.content || '');
    formData.append('shortDescription', v.shortDescription!);
    formData.append('topic', v.topic!);
    formData.append('authorName', v.authorName!);
    formData.append('readTime', v.readTime!);
    if (v.metaTitle) formData.append('metaTitle', v.metaTitle);
    if (v.metaDescription) formData.append('metaDescription', v.metaDescription);
    if (v.keywords) formData.append('keywords', v.keywords);
    if (this.tags.length) formData.append('tags', JSON.stringify(this.tags));
    this.selectedFiles.forEach(file => formData.append('images', file));
    if (this.isEditMode) {
      formData.append('keepImages', JSON.stringify(this.existingImagePaths));
    }

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

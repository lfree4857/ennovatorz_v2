import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;
}

export interface Blog {
  _id: string;
  id?: string;
  title: string;
  content: string;
  shortDescription: string;
  topic: string;
  authorName: string;
  readTime: string;
  imageUrl?: string;
  slug?: string;
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private http = inject(HttpService);

  resolveImageUrl(imageUrl?: string): string | undefined {
    if (!imageUrl) return undefined;
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${environment.apiUrl}${imageUrl}`;
  }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>('blog');
  }

  getById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`blog/${id}`);
  }

  create(formData: FormData): Observable<ApiResponse<Blog>> {
    return this.http.post<ApiResponse<Blog>>('blog', formData);
  }

  update(id: string, formData: FormData): Observable<ApiResponse<Blog>> {
    return this.http.patch<ApiResponse<Blog>>(`blog/${id}`, formData);
  }

  delete(id: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`blog/${id}`);
  }
}

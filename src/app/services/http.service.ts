import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient);

  /**
   * Perform a GET request.
   */
  get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }

  /**
   * Perform a POST request.
   */
  post<T>(url: string, body: any | null, options?: HttpOptions): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  /**
   * Perform a PUT request.
   */
  put<T>(url: string, body: any | null, options?: HttpOptions): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  /**
   * Perform a PATCH request.
   */
  patch<T>(url: string, body: any | null, options?: HttpOptions): Observable<T> {
    return this.http.patch<T>(url, body, options);
  }

  /**
   * Perform a DELETE request.
   */
  delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}

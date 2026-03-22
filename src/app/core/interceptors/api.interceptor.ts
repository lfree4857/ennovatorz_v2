import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl;

  // Prepend base URL if it's not an absolute URL
  const isAbsoluteUrl = req.url.startsWith('http://') || req.url.startsWith('https://');
  const apiReq = isAbsoluteUrl ? req : req.clone({
    url: `${baseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`
  });

  return next(apiReq).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMsg = `Network Error: ${error.error.message}`;
      } else {
        // Backend returned an unsuccessful response code
        errorMsg = `Backend Error (Code ${error.status}): ${error.message}`;
      }
      
      console.error('API Interceptor caught an error:', errorMsg);
      
      // Pass the error back to the caller
      return throwError(() => new Error(errorMsg));
    })
  );
};

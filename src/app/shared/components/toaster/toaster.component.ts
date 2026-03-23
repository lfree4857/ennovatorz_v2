import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-24 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
      @for (toast of toasterService.toasts(); track toast.id) {
        <div 
          class="pointer-events-auto flex items-center p-4 w-full max-w-xs text-gray-900 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 transition-all duration-300 transform scale-100 opacity-100"
          role="alert"
        >
          <div 
            class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full"
            [ngClass]="{
              'bg-green-100 text-green-500': toast.type === 'success',
              'bg-red-100 text-red-500': toast.type === 'error',
              'bg-blue-100 text-blue-500': toast.type === 'info',
              'bg-orange-100 text-orange-500': toast.type === 'warning'
            }"
          >
            @if (toast.type === 'success') {
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            } @else if (toast.type === 'error') {
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            } @else if (toast.type === 'info') {
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 8.25h.008v.008H12V8.25Z" />
              </svg>
            } @else if (toast.type === 'warning') {
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
              </svg>
            }
          </div>
          <div class="ms-4 text-sm font-medium pr-4 text-gray-800">{{ toast.message }}</div>
          <button 
            type="button" 
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center w-8 h-8 transition-colors"
            (click)="toasterService.remove(toast.id)"
          >
            <span class="sr-only">Close</span>
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      }
    </div>
  `
})
export class ToasterComponent {
  toasterService = inject(ToasterService);
}

import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { NgIf } from '@angular/common'; // Fallback if @if isn't perfectly supported in context

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
}

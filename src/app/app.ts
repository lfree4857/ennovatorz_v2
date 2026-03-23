import { Component, signal, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomCursorComponent } from './shared/components/custom-cursor.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { filter } from 'rxjs/operators';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CustomCursorComponent, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Innovators');
  private router = inject(Router);
  isAdminRoute = false;

  ngOnInit() {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 50 });
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.isAdminRoute = e.urlAfterRedirects.startsWith('/admin');
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Blog } from '../../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private document = inject(DOCUMENT);

  init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['skipSeoInit']) return; // component handles SEO via setPostSeo()

      const title = data['title'] || 'Ennovatorz — Elite Software Development Agency';
      const description = data['description'] || 'Elite software development agency building scalable solutions for startups and enterprises.';
      const keywords = data['keywords'] || 'software development, web development, SaaS, API, mobile apps';

      if (data['noindex']) {
        this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
      } else {
        this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      }

      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ name: 'keywords', content: keywords });

      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ property: 'og:image', content: 'https://dev.ennovatorz.com/logo/innovators.webp' });

      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ name: 'twitter:image', content: 'https://dev.ennovatorz.com/logo/innovators.webp' });

      this.updateCanonicalUrl();
    });
  }

  setPostSeo(post: Blog) {
    const title = post.title;
    const metaTitle = post.metaTitle || post.title;
    const description = post.metaDescription || post.shortDescription;
    const keywords = post.keywords || post.tags?.join(', ') || '';
    const baseUrl = 'https://dev.ennovatorz.com';
    const canonical = post.canonicalUrl || `${baseUrl}/blog/${post._id}`;
    const ogImage = post.ogImage || post.imageUrl || '';

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    if (keywords) this.metaService.updateTag({ name: 'keywords', content: keywords });

    this.metaService.updateTag({ property: 'og:title', content: metaTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:url', content: canonical });
    if (ogImage) this.metaService.updateTag({ property: 'og:image', content: ogImage });

    this.metaService.updateTag({ name: 'twitter:title', content: metaTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    if (ogImage) this.metaService.updateTag({ name: 'twitter:image', content: ogImage });

    this.updateCanonicalUrl(canonical);
  }

  private updateCanonicalUrl(overrideUrl?: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.document.querySelector(`link[rel='canonical']`);
    if (!element) {
      element = this.document.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }

    const baseUrl = 'https://dev.ennovatorz.com';
    const url = overrideUrl ?? (this.document.defaultView ? this.document.defaultView.location.href : baseUrl + this.router.url);
    const canonical = url.split('?')[0];
    element.setAttribute('href', canonical);
    this.metaService.updateTag({ property: 'og:url', content: canonical });
  }
}

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { SOCIAL_LINKS, SocialLink } from '../../constants/social-links.constant';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [NgClass],
  templateUrl: './social-links.component.html',
})
export class SocialLinksComponent {
  @Input() shareMode = false;
  @Input() shareTitle = '';
  @Input() size: 'sm' | 'md' = 'md';

  readonly allLinks: SocialLink[] = SOCIAL_LINKS;

  get links(): SocialLink[] {
    return this.shareMode ? this.allLinks.filter(s => s.shareKey) : this.allLinks;
  }

  get btnSize(): string {
    return this.size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  }

  get iconSize(): string {
    return this.size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5';
  }

  getHref(link: SocialLink): string {
    if (!this.shareMode || !link.shareKey) return link.url;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.shareTitle);
    const map: Record<string, string> = {
      x: `https://x.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    return map[link.shareKey];
  }
}

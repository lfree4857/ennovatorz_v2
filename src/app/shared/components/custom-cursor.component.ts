import { Component, HostListener, OnInit, OnDestroy, Renderer2, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [NgStyle],
  template: `
    @if (!isMobile) {
      <div class="cursor-dot" [ngStyle]="{'left.px': dotX, 'top.px': dotY}"></div>
      <div class="cursor-outline" [ngStyle]="{'left.px': outlineX, 'top.px': outlineY}"></div>
    }
  `,
  styles: [`
    .cursor-dot {
      width: 8px;
      height: 8px;
      background-color: #6366f1;
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s, background-color 0.3s;
    }
    .cursor-outline {
      width: 40px;
      height: 40px;
      border: 2px solid #6366f1;
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s, border-color 0.3s, transform 0.15s ease-out;
    }
    :host-context(a:hover) ~ .cursor-outline,
    :host-context(button:hover) ~ .cursor-outline {
        width: 60px;
        height: 60px;
        background-color: rgba(99, 102, 241, 0.1);
        border-color: transparent;
    }
    @media (prefers-reduced-motion: reduce) {
      .cursor-dot, .cursor-outline {
        display: none;
      }
    }
    @media (max-width: 768px), (pointer: coarse) {
      .cursor-dot, .cursor-outline {
        display: none;
      }
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  dotX = 0;
  dotY = 0;
  outlineX = 0;
  outlineY = 0;
  isMobile = false;

  private resizeListener: (() => void) | null = null;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      this.resizeListener = this.renderer.listen('window', 'resize', () => this.checkMobile());
    }
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  private checkMobile() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    this.isMobile = isTouchDevice || isSmallScreen;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMobile) return;

    this.dotX = event.clientX;
    this.dotY = event.clientY;

    setTimeout(() => {
      this.outlineX = event.clientX;
      this.outlineY = event.clientY;
      this.cdr.detectChanges();
    }, 50);
  }
}

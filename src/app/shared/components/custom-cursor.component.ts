import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="cursor-dot" [ngStyle]="{'left.px': dotX, 'top.px': dotY}"></div>
    <div class="cursor-outline" [ngStyle]="{'left.px': outlineX, 'top.px': outlineY}"></div>
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
  `]
})
export class CustomCursorComponent implements OnInit {
  dotX = 0;
  dotY = 0;
  outlineX = 0;
  outlineY = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.dotX = event.clientX;
    this.dotY = event.clientY;
    
    // Smooth follow for outline
    setTimeout(() => {
        this.outlineX = event.clientX;
        this.outlineY = event.clientY;
    }, 50);
  }
}

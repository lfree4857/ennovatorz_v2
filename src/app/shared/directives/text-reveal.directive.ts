import { Directive, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTextReveal]',
  standalone: true
})
export class TextRevealDirective implements AfterViewInit {
  @Input() delay = 0;
  @Input() stagger = 0.03;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = '';
    this.el.nativeElement.style.opacity = '1';

    const characters = text.split('');
    characters.forEach((char: string, i: number) => {
      const span = this.renderer.createElement('span');
      const textNode = this.renderer.createText(char === ' ' ? '\u00A0' : char);
      
      this.renderer.appendChild(span, textNode);
      this.renderer.setStyle(span, 'display', 'inline-block');
      this.renderer.setStyle(span, 'opacity', '0');
      this.renderer.setStyle(span, 'transform', 'translateY(20px)');
      this.renderer.setStyle(span, 'transition', `all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`);
      this.renderer.setStyle(span, 'transition-delay', `${this.delay + (i * this.stagger)}s`);
      
      this.renderer.appendChild(this.el.nativeElement, span);

      // Trigger animation in next frame
      setTimeout(() => {
        this.renderer.setStyle(span, 'opacity', '1');
        this.renderer.setStyle(span, 'transform', 'translateY(0)');
      }, 50);
    });
  }
}

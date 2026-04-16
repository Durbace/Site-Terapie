import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() delay = 0;
  @Input() distance = 24;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', `translateY(${this.distance}px)`);
    this.renderer.setStyle(element, 'transition',
      `opacity 0.8s ease, transform 0.8s ease`);
    this.renderer.setStyle(element, 'transitionDelay', `${this.delay}ms`);
    this.renderer.setStyle(element, 'willChange', 'opacity, transform');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(element, 'opacity', '1');
            this.renderer.setStyle(element, 'transform', 'translateY(0)');
            this.observer?.unobserve(element);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
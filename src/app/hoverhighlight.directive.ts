import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighLightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

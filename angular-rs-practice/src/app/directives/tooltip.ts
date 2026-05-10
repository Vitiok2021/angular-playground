import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class Tooltip {
  elRef = inject(ElementRef);
  @HostListener('mouseenter') onMouseEnter() {
    this.elRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = null;
  }
}

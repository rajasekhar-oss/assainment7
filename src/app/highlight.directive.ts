import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') colors:string="black";

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.colors;
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = "";
  }

}

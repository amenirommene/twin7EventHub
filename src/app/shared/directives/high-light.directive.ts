import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

constructor(private el: ElementRef, private renderer: Renderer2) { }
 @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');  // Ajoute la classe 'highlight'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');  // Retire la classe 'highlight'
  }

}

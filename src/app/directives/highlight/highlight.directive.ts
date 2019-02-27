import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*private eltRef: ElementRef;

  constructor(eltRef: ElementRef) {
    this.eltRef = eltRef;
  }*/

  @Input('appHighlight') bgColor: string;

  @Input() color: string;

  constructor(private eltRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.highlight(this.bgColor || 'orange', this.color);
  }

  @HostListener('mouseout') onMouseOut() {
    this.highlight('initial', 'initial');
  }

  private highlight(bgColor: string, color?: string): void {
    this.eltRef.nativeElement.style.backgroundColor = bgColor;
    this.eltRef.nativeElement.style.color = color;
  }

}

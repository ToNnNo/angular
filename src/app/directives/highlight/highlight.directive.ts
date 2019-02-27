import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*private eltRef: ElementRef;

  constructor(eltRef: ElementRef) {
    this.eltRef = eltRef;
  }*/

  constructor(private eltRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.highlight('orange');
  }

  @HostListener('mouseout') onMouseOut() {
    this.highlight('initial');
  }

  private highlight(bgColor: string): void {
    this.eltRef.nativeElement.style.backgroundColor = bgColor;
  }

}

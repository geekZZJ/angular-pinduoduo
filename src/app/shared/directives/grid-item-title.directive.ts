import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective {
  @HostBinding('style.font-size') @Input() appGridItemTitleFont = '0.5rem';
  @HostBinding('style.grid-area') area = 'title';

  // constructor(private elr: ElementRef, private rd2: Renderer2) {
  //   this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  // }
}

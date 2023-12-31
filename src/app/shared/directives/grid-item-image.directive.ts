import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImageSize = '2rem';
  @Input() fitMode = 'cover';

  constructor(private elr: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
  }

  ngOnInit(): void {
    this.rd2.setStyle(
      this.elr.nativeElement,
      'width',
      this.appGridItemImageSize
    );
    this.rd2.setStyle(
      this.elr.nativeElement,
      'height',
      this.appGridItemImageSize
    );
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode);
  }

  @HostListener('click', ['$event.target'])
  handleClick(ev: any) {
    console.log('ev', ev);
  }
}

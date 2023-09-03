import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  // @ViewChildren('img') imgs: QueryList<ElementRef>;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = 'auto';
  @Input() intervalTime = 2;

  constructor(private rd2: Renderer2) {}
  ngAfterViewInit(): void {
    let i = 0;
    setInterval(() => {
      this.rd2.setProperty(
        this.imageSlider.nativeElement,
        'scrollLeft',
        ((++i % this.sliders.length) *
          this.imageSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalTime * 1000);
  }

  ngOnInit() {}
}

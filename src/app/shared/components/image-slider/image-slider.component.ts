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
  OnDestroy,
  ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  // @ViewChildren('img') imgs: QueryList<ElementRef>;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = 'auto';
  @Input() intervalTime = 2;
  selectIndex = 0;
  intervalId: any;

  constructor(private rd2: Renderer2) {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imageSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectIndex) *
          this.imageSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalTime * 1000);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(event: any) {
    const ratio =
      event.target.scrollLeft /
      (event.target.scrollWidth / this.sliders.length);
    this.selectIndex = Math.round(ratio);
  }
}

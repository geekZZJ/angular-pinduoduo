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
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';

  constructor(private rd2: Renderer2) {}
  ngAfterViewInit(): void {
    // this.imgs.forEach((item) => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px');
    // });
  }

  ngOnInit() {
    // console.log('1111', this.imageSlider);
  }
}

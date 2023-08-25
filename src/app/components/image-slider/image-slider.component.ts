import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
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

  constructor() {}
  ngAfterViewInit(): void {
    console.log('222', this.imgs);
  }

  ngOnInit() {
    console.log('1111', this.imageSlider);
  }
}

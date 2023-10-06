import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent {
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${
      this.displayCols * 0.4
    }rem) / ${this.displayCols}))`;
  }

  constructor() {}

  handleScroll(event: any) {
    this.sliderMargin = `0 ${
      (100 * event.target.scrollLeft) / event.target.scrollWidth
    }%`;
  }
}

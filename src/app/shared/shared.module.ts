import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  HorizontalGridComponent,
  ImageSliderComponent,
  ScrollTabComponent,
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
} from './directives';

@NgModule({
  declarations: [
    ScrollTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
  ],
})
export class SharedModule {}

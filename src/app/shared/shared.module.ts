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
import { AgoPipe } from './pipes';

@NgModule({
  declarations: [
    ScrollTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  HorizontalGridComponent,
  ImageSliderComponent,
  ScrollTabComponent,
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
} from './components';
import {
  AvatarDirective,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective,
} from './directives';
import { AgoPipe } from './pipes';

@NgModule({
  declarations: [
    ScrollTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AvatarDirective,
    TagDirective,
    AgoPipe,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollTabComponent,
    ImageSliderComponent,
    CountDownComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
  ],
})
export class SharedModule {}

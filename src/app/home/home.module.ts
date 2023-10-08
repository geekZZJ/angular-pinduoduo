import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeAuxComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}

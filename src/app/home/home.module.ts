import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  ChildComponent,
  HomeAuxComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  ParentComponent,
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}

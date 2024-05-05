import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'my',
    loadChildren: () => import('./my').then((m) => m.MyModule),
  },
  {
    path: 'recommend',
    loadChildren: () => import('./recommend').then((m) => m.RecommendModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

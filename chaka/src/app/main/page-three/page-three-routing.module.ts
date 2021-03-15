import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PageThreeRoutingModule { }

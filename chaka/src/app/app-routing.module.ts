import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LandingComponent } from './main/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/landing' },
      { path: 'landing', component: LandingComponent },
    ],
  },
  {
    path: 'page-three',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./main/page-three/page-three.module').then(m => m.PageThreeModule)
  },
  {
    path: 'page-two',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./main/page-two/page-two.module').then(m => m.PageTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

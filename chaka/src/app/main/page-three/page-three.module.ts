import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeRoutingModule } from './page-three-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from 'src/app/bootstrap/bootstrap.module';
import { LandingComponent } from './landing/landing.component';

const PageThreeComponents = [
  LandingComponent,
];


@NgModule({
  imports: [
    CommonModule,
    PageThreeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule,
    NgbModule,
  ],
  declarations: PageThreeComponents,
  providers: PageThreeComponents,
  exports: PageThreeComponents
})
export class PageThreeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from 'src/app/bootstrap/bootstrap.module';
import { LandingComponent } from './landing/landing.component';
import { PageTwoRoutingModule } from './page-two-routing.module';

const PageTwoComponents = [
  LandingComponent,
];


@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule,
    NgbModule,
  ],
  declarations: PageTwoComponents,
  providers: PageTwoComponents,
  exports: PageTwoComponents
})
export class PageTwoModule { }

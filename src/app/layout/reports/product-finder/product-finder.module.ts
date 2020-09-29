import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFinderRoutingModule } from './product-finder.routing';
import { ProductFinderComponent } from './product-finder.component';


@NgModule({
  declarations: [ProductFinderComponent],
  imports: [
    CommonModule,
    ProductFinderRoutingModule
  ]
})
export class ProductFinderModule { }
